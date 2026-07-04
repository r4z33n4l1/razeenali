export const site = {
  name: "Razeen Ali",
  tagline: "ships things that work",
  bio: "Full-stack engineer. AI-native mobile apps, web SaaS, side projects at odd hours. MTS at 8090. Built stuff since 12 — robotics worlds, a few startups, thousands of users. Still going.",
  email: "contact@razeenali.com",
  location: "Toronto, ON",
  curlCommand: "curl -s https://razeenali.com/api/summary",
} as const;

export const workAreas = [
  "Mobile apps, Expo, React Native, App Store",
  "Web SaaS, Next.js, APIs, payments",
  "AI agents, developer tools, SDLC automation",
  "Regulated industries, audit trails, compliance",
  "Retention, subscriptions, partner onboarding",
  "WhatsApp automation, campaigns, analytics",
] as const;

export type Project = {
  name: string;
  description: string;
  tech?: string;
  liveUrl?: string;
  githubUrl?: string;
  status?: "live" | "beta" | "sunset" | "oss";
};

export const projects: Project[] = [
  {
    name: "8090 Software Factory",
    description: "AI-native SDLC, requirements, architecture, validated code",
    tech: "AI agents, documentation, enterprise",
    liveUrl: "https://8090.ai/software-factory",
  },
  {
    name: "Slate",
    description: "Modest fashion, AI recommendations, mobile-first",
    tech: "React Native, TypeScript, AI",
    liveUrl: "https://slatefashion.app",
  },
  {
    name: "Filezap",
    description: "File sharing, drag-and-drop, no signup",
    tech: "Next.js, Cloudflare R2",
    liveUrl: "https://filezap.dev",
  },
  {
    name: "Wrench",
    description: "HVAC automation, AI agents, service workflows",
    tech: "AI agents, field ops",
    liveUrl: "https://trywrench.com",
  },
  {
    name: "QR Maker",
    description: "QR generation, customization, instant download",
    tech: "React, free tool",
    liveUrl: "https://qrmaker.fyi",
  },
  {
    name: "PDF Chapter Splitter",
    description: "Client-side PDF split, AI-ready chunks",
    tech: "PDF.js, privacy-first",
    liveUrl: "https://pdfsplitter.filezap.dev/",
  },
  {
    name: "BanglaArt",
    description: "Bengali generative art, browser WebGL",
    tech: "Generative art",
    liveUrl: "https://www.banglaart.dev/",
  },
  {
    name: "FoodCheckr",
    description: "Barcode scan, nutrition analysis, health recs",
    tech: "React Native, nutrition API",
    status: "beta",
  },
  {
    name: "Ritual",
    description: "Habit tracking, routines, mobile",
    tech: "Expo, mobile",
    liveUrl: "https://ritual.caristudios.com",
  },
  {
    name: "Schedulr",
    description: "Study planning, greedy scheduling, 1k+ students",
    tech: "React, Django REST",
    githubUrl: "https://github.com/utmgdsc/schedulr",
    status: "oss",
  },
  {
    name: "Appointify",
    description: "Scheduling, 2k+ meetings, secure Django backend",
    tech: "Django, team of 4",
    liveUrl: "https://appointify-gilt.vercel.app",
    githubUrl: "https://github.com/r4z33n4l1/Appointify",
    status: "oss",
  },
  {
    name: "Hotspot",
    description: "Event discovery, gamification, local events",
    tech: "U of T School of Cities",
    githubUrl: "https://github.com/r4z33n4l1/hotspot",
    status: "oss",
  },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/r4z33n4l1", handle: "r4z33n4l1" },
  { label: "LinkedIn", href: "https://linkedin.com/in/razeenali", handle: "razeenali" },
  { label: "X", href: "https://twitter.com/razeenali_", handle: "@razeenali_" },
  { label: "Email", href: "mailto:contact@razeenali.com", handle: "contact@razeenali.com" },
  { label: "Links", href: "https://razeenlinks.vercel.app", handle: "all projects" },
] as const;

export const curlSummary = `razeen ali — full-stack engineer, toronto

> ships ai-native mobile apps + web saas
> day job: mts @ 8090 (software factory, regulated stuff)
> side quests: expo apps, ai agents, random tools

stack: react native, expo, next.js, typescript, python, aws
notable: first global robotics world champion (2020)
startups: tara social (1k), starcon (500), slate (beta)
live: filezap.dev, qrmaker.fyi, trywrench.com

contact: contact@razeenali.com`;