import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const siteTitle = "Razeen Ali — building harnesses for agents and systems that help you";
const siteDescription =
  "Razeen Ali is a Member of Technical Staff at 8090 in Toronto, building harnesses for agents, systems, mobile apps, and web tools.";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://razeenali.com"),
  title: { default: siteTitle, template: "%s — Razeen Ali" },
  description: siteDescription,
  authors: [{ name: "Razeen Ali" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Razeen Ali",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
