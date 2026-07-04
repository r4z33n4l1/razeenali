import { site } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-ink/8 py-10">
      <p className="text-sm text-ink/50">
        © {year} {site.name}. Built with Next.js. Deployed wherever Vercel points.
      </p>
    </footer>
  );
}