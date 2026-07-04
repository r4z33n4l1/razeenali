"use client";

import { motion } from "framer-motion";
import { workAreas } from "@/lib/data";
import { Section } from "./Section";

export function WhatIBuild() {
  return (
    <Section
      title="What I build"
      subtitle="Mostly software. Occasionally trouble."
    >
      <ul className="grid gap-3 sm:grid-cols-2">
        {workAreas.map((area, i) => (
          <motion.li
            key={area}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="group rounded-xl border border-ink/8 bg-white px-5 py-4 transition hover:border-sage/40 hover:shadow-sm"
          >
            <span className="text-ink/80 group-hover:text-ink transition-colors">
              {area}
            </span>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}