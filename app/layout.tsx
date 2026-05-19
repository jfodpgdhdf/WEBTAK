import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Webtak AI",
  description: "AI consulting and marketing.",
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
