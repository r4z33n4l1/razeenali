"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import { Section } from "./Section";

const statusLabel: Record<string, string> = {
  live: "Live",
  beta: "Beta",
  sunset: "Sunset",
  oss: "Open source",
};

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Deployed apps, shipped tools, things in motion."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: (i % 4) * 0.05 }}
            whileHover={{ y: -2 }}
            className="rounded-xl border border-ink/8 bg-white p-5 transition hover:border-sage/35 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
              {project.status ? (
                <span className="shrink-0 rounded-full bg-sage/15 px-2.5 py-0.5 text-xs font-medium text-sage-dark">
                  {statusLabel[project.status] ?? project.status}
                </span>
              ) : null}
            </div>
            <p className="mt-2 text-ink/70 leading-relaxed">
              {project.description}
            </p>
            {project.tech ? (
              <p className="mt-2 text-sm text-sage-dark/80">{project.tech}</p>
            ) : null}
            <div className="mt-4 flex flex-wrap gap-3">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-sage hover:text-sage-dark underline-offset-4 hover:underline"
                >
                  Live
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
              ) : null}
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/60 hover:text-ink underline-offset-4 hover:underline"
                >
                  GitHub
                  <Code2 className="h-3.5 w-3.5" aria-hidden />
                </a>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}