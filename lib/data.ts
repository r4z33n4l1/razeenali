export const site = {
  name: "Razeen Ali",
  canonicalUrl: "https://razeenali.com",
  location: "Toronto, Canada",
  positioning: "Engineer and product builder.",
  introduction: "I build focused software for the web and iPhone—tools with a clear purpose and a calm interface.",
} as const;

export type ProjectStatus = "live" | "maintained" | "archived";
export type Project = { slug: string; name: string; description: string; status: ProjectStatus; productionUrl: string; repositoryUrl?: string; technologies: readonly string[]; featured: boolean; order: number; image: { alt: string; reference: "app-store" }; lastVerified: "2026-09-19"; };

export const projects = [
  { slug: "julie", name: "julie: cat translator", description: "An iPhone app that turns a cat photo into a playful translation.", status: "live", productionUrl: "https://apps.apple.com/us/app/julie-cat-translator/id6761346408", technologies: ["iPhone", "App Store"], featured: true, order: 1, image: { alt: "julie: cat translator on the App Store", reference: "app-store" }, lastVerified: "2026-09-19" },
  { slug: "nag", name: "Nag: constant reminder", description: "A repeating-reminder app that keeps notifying until a task is done.", status: "live", productionUrl: "https://apps.apple.com/us/app/nag-constant-reminder/id6760954480", technologies: ["iPhone", "iPad", "App Store"], featured: true, order: 2, image: { alt: "Nag: constant reminder on the App Store", reference: "app-store" }, lastVerified: "2026-09-19" },
  { slug: "slate", name: "Slate: The Modest Fashion Hub", description: "A shopping app for discovering modest outfits by style, occasion, and fit.", status: "live", productionUrl: "https://apps.apple.com/us/app/slate-the-modest-fashion-hub/id6752974390", technologies: ["iPhone", "App Store"], featured: true, order: 3, image: { alt: "Slate: The Modest Fashion Hub on the App Store", reference: "app-store" }, lastVerified: "2026-09-19" },
  { slug: "todowallpaper", name: "TodoWallpaper", description: "A private, offline to-do list that exports as a phone wallpaper.", status: "live", productionUrl: "https://apps.apple.com/us/app/todowallpaper/id6744670787", technologies: ["iPhone", "iPad", "App Store"], featured: true, order: 4, image: { alt: "TodoWallpaper on the App Store", reference: "app-store" }, lastVerified: "2026-09-19" },
] as const satisfies readonly Project[];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/r4z33n4l1" },
  { label: "LinkedIn", href: "https://ca.linkedin.com/in/razeenali" },
] as const;
