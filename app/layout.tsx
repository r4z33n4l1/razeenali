import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Razeen Ali – Full-Stack Engineer | AI-Native Apps & Web SaaS",
  description:
    "Full-stack engineer shipping AI-native mobile apps and web SaaS. React Native, Expo, AI agents. Toronto.",
  authors: [{ name: "Razeen Ali" }],
  openGraph: {
    title: "Razeen Ali – Full-Stack Engineer",
    description:
      "AI-native mobile apps, web SaaS, and tools that actually ship.",
    url: "https://razeenali.com",
    siteName: "Razeen Ali",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@razeenali_",
    creator: "@razeenali_",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${jetbrains.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}