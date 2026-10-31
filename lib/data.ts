export const site = {
  name: "Razeen Ali",
  canonicalUrl: "https://razeenali.com",
  positioning: "building harnesses for agents and systems that help you · MTS at 8090 · Toronto, Canada",
} as const;

export type WorkItem = {
  name: string;
  description: string;
  href: string;
  label: "App Store" | "Open" | "Open source";
};

export const workItems = [
  { name: "Ritual", description: "Movement log for Pilates, Lagree, yoga, and studio workouts.", href: "https://apps.apple.com/us/app/ritual-by-caristudios/id6757550661", label: "App Store" },
  { name: "Software Factory", description: "AI-native software-development control plane.", href: "https://www.8090.ai/software-factory", label: "Open" },
  { name: "Wrench", description: "Business software for HVAC shops.", href: "https://www.trywrench.com", label: "Open" },
  { name: "FileZap", description: "Private browser-based file compression.", href: "https://filezap.razeenali.app", label: "Open" },
  { name: "PDF Chapter Splitter", description: "Extract PDF chapters in the browser.", href: "https://pdfsplitter.razeenali.app", label: "Open" },
  { name: "QR Maker", description: "Custom QR code generation with exports.", href: "https://qrmaker.razeenali.app", label: "Open" },
  { name: "Schedulr", description: "Open-source scheduling project.", href: "https://github.com/r4z33n4l1/schedulr_v2", label: "Open source" },
  { name: "Appointify", description: "Open-source appointment scheduling app.", href: "https://github.com/r4z33n4l1/Appointify", label: "Open source" },
] as const satisfies readonly WorkItem[];

export type Experience = { company: string; role: string; dates: string; summary: string };

export const experience = [
  { company: "8090", role: "MTS", dates: "May 2026–present", summary: "Platform and security for Software Factory." },
  { company: "Borderpass", role: "Software Developer (PEY Intern)", dates: "Sep 2024–Aug 2025", summary: "Built client-view impersonation, AI support deflection (60%+), and referral tooling (250+ users)." },
  { company: "Ramuri Inc.", role: "Software Developer", dates: "Jun–Sep 2022", summary: "Chrome extension and Django REST API for ethical clothing ratings." },
] as const satisfies readonly Experience[];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/r4z33n4l1" },
  { label: "LinkedIn", href: "https://ca.linkedin.com/in/razeenali" },
  { label: "X", href: "https://x.com/razeenali01" },
] as const;
