import { workAreas } from "@/lib/data";
import { Section } from "./Section";

export function WhatIBuild() {
  return (
    <Section title="What I build" subtitle="Mostly software.">
      <ul className="grid gap-3 sm:grid-cols-2">
        {workAreas.map((area) => (
          <li key={area} className="card-flat px-5 py-4">
            <span className="text-ink/80">{area}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}