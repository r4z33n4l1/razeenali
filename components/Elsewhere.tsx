import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/lib/data";
import { Section } from "./Section";

export function Elsewhere() {
  return (
    <Section title="Elsewhere" subtitle="Usually building something.">
      <ul className="card-flat divide-y divide-ink/8 overflow-hidden">
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group flex items-center justify-between px-5 py-4 hover:bg-white/[0.04]"
            >
              <div>
                <span className="font-medium text-ink group-hover:text-sage">
                  {link.label}
                </span>
                <span className="block text-sm text-ink/50 mt-0.5">
                  {link.handle}
                </span>
              </div>
              <ArrowUpRight
                className="h-4 w-4 text-ink/30 group-hover:text-sage"
                aria-hidden
              />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}