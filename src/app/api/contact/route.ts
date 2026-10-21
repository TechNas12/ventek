import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

interface LeadData {
  id: string;
  timestamp: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  needs: string[];
  details?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, needs, details } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const leadId = `lead_${Date.now()}`;
    const timestamp = new Date().toISOString();

    const lead: LeadData = {
      id: leadId,
      timestamp,
      name,
      email,
      phone: phone || "Not provided",
      company: company || "Not provided",
      needs: Array.isArray(needs) ? needs : [],
      details: details || "No extra details provided",
    };

    // =========================================================================
    // 1. DATABASE / LOCAL STORAGE (Permanent persistence in data/leads.json)
    // =========================================================================
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      const filePath = path.join(dataDir, "leads.json");
      let leads: LeadData[] = [];
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        leads = JSON.parse(fileContent || "[]");
      }

      leads.unshift(lead); // newest first
      fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), "utf-8");
    } catch (dbError) {
      console.error("[VenTek Lead Store] Error saving to leads.json:", dbError);
    }

    // =========================================================================
    // 2. GOOGLE SHEETS / WEBHOOK SYNC
    // =========================================================================
    const googleSheetWebhook = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (googleSheetWebhook) {
      try {
        await fetch(googleSheetWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(lead),
        });
      } catch (sheetError) {
        console.error("[VenTek Sheet Sync] Webhook dispatch error:", sheetError);
      }
    }

    // =========================================================================
    // 3. INSTANT EMAIL ALERT (Nodemailer to dahotresanket12@gmail.com)
    // =========================================================================
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const targetEmail = process.env.NOTIFICATION_EMAIL || "dahotresanket12@gmail.com";

    if (emailUser && emailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: emailUser,
            pass: emailPass,
          },
        });

        const htmlContent = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0f172a; color: #f8fafc; border-radius: 12px; border: 1px solid #0284c7;">
            <div style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 15px; margin-bottom: 20px;">
              <h2 style="color: #38bdf8; margin: 0 0 5px 0;">⚡ New VenTek Client Lead Received</h2>
              <p style="color: #94a3b8; font-size: 13px; margin: 0;">Captured on ${new Date().toLocaleString()}</p>
            </div>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
              <tr>
                <td style="padding: 8px 0; color: #94a3b8; width: 140px; font-weight: 600;">Name:</td>
                <td style="padding: 8px 0; color: #ffffff; font-weight: 700; font-size: 16px;">${lead.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #94a3b8; font-weight: 600;">Email:</td>
                <td style="padding: 8px 0; color: #38bdf8;"><a href="mailto:${lead.email}" style="color: #38bdf8;">${lead.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #94a3b8; font-weight: 600;">Phone / WhatsApp:</td>
                <td style="padding: 8px 0; color: #ffffff;">${lead.phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #94a3b8; font-weight: 600;">Company:</td>
                <td style="padding: 8px 0; color: #ffffff;">${lead.company}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #94a3b8; font-weight: 600;">Selected Needs:</td>
                <td style="padding: 8px 0; color: #6ee7b7; font-weight: 600;">${lead.needs.join(", ") || "General Inquiry"}</td>
              </tr>
            </table>

            <div style="background-color: #1e293b; padding: 15px; border-radius: 8px; border-left: 3px solid #38bdf8; margin-bottom: 25px;">
              <div style="color: #94a3b8; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 6px;">Client Bottleneck / Project Scope:</div>
              <p style="color: #f1f5f9; font-size: 14px; line-height: 1.5; margin: 0;">${lead.details}</p>
            </div>

            <div style="text-align: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
              <a href="https://wa.me/${(lead.phone || "").replace(/[^0-9]/g, "")}" style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; font-weight: 700; font-size: 14px; padding: 10px 20px; border-radius: 8px; margin-right: 10px;">Reply on WhatsApp</a>
              <a href="mailto:${lead.email}" style="display: inline-block; background-color: #0284c7; color: #ffffff; text-decoration: none; font-weight: 700; font-size: 14px; padding: 10px 20px; border-radius: 8px;">Reply via Email</a>
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"VenTek AI System" <${emailUser}>`,
          to: targetEmail,
          subject: `⚡ New VenTek Lead: ${lead.name} (${lead.company})`,
          html: htmlContent,
        });
      } catch (mailError) {
        console.error("[VenTek Email Service] Error dispatching email:", mailError);
      }
    } else {
      console.log(
        "[VenTek Lead Alert] Email credentials not configured in .env.local. Saved to data/leads.json."
      );
    }

    return NextResponse.json({
      success: true,
      leadId: lead.id,
      lead,
    });
  } catch (error) {
    console.error("[VenTek API Contact Error]:", error);
    return NextResponse.json(
      { error: "Failed to process lead inquiry." },
      { status: 500 }
    );
  }
}
