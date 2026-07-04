import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/lib/data";
import { Section } from "./Section";

export function Elsewhere() {
  return (
    <Section title="Elsewhere" subtitle="Find me on the internet. I'm usually building.">
      <ul className="divide-y divide-ink/8 rounded-xl border border-ink/8 bg-white overflow-hidden">
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group flex items-center justify-between px-5 py-4 transition hover:bg-sage/5"
            >
              <div>
                <span className="font-medium text-ink group-hover:text-sage transition-colors">
                  {link.label}
                </span>
                <span className="block text-sm text-ink/50 mt-0.5">
                  {link.handle}
                </span>
              </div>
              <ArrowUpRight
                className="h-4 w-4 text-ink/30 group-hover:text-sage transition-colors"
                aria-hidden
              />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}