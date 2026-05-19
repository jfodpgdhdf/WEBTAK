import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://ai.webtak.de";
const TITLE = "Webtak AI — AI consulting & marketing";
const DESCRIPTION =
  "We help ambitious teams design, build, and operate AI systems that move real metrics — not slideware.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Webtak AI",
  },
  description: DESCRIPTION,
  applicationName: "Webtak AI",
  authors: [{ name: "Webtak AI" }],
  keywords: [
    "AI consulting",
    "AI agents",
    "AI marketing",
    "AI automation",
    "LLM integration",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Webtak AI",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Webtak AI — AI consulting & marketing",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fafafa",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
