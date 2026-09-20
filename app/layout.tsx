import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://razeenali.com"),
  title: { default: "Razeen Ali — building Harnesses for agents and systems that help you", template: "%s — Razeen Ali" },
  description: "building Harnesses for agents and systems that help you.",
  authors: [{ name: "Razeen Ali" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Razeen Ali — building Harnesses for agents and systems that help you",
    description: "building Harnesses for agents and systems that help you.",
    url: "/",
    siteName: "Razeen Ali",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Razeen Ali — building Harnesses for agents and systems that help you",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
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
