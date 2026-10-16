import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VenTek | AI & Tech Agency — Systems That Run Themselves",
  description:
    "VenTek helps businesses connect, adapt, and grow with AI, custom web development, automations, and management systems. Stop doing manual busywork and put your growth on autopilot.",
  keywords: [
    "AI Agency",
    "Tech Agency",
    "Business Automation",
    "Agentic AI",
    "Custom Management Systems",
    "Web Development",
    "Data Pipelines",
    "VenTek",
  ],
  authors: [{ name: "VenTek Team" }],
  openGraph: {
    title: "VenTek | AI & Tech Agency — Systems That Run Themselves",
    description:
      "We don't just build systems, we build systems that work themselves for you while you just focus on growing the business.",
    type: "website",
    locale: "en_US",
    siteName: "VenTek",
  },
  twitter: {
    card: "summary_large_image",
    title: "VenTek — AI & Tech Agency",
    description:
      "Websites, Automations, Agentic Interfaces, and Full-Stack Systems built to scale your business.",
  },
};

export const viewport: Viewport = {
  themeColor: "#060608",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
