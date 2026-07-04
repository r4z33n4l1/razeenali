"use client";

import { motion } from "framer-motion";
import { ArrowDown, Terminal } from "lucide-react";
import { site } from "@/lib/data";

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-20 pb-16 sm:pt-28 sm:pb-24">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sage text-sm font-medium tracking-wide uppercase mb-4"
      >
        {site.location}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-ink leading-[1.05]"
      >
        {site.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 text-xl sm:text-2xl text-sage font-medium"
      >
        {site.tagline}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-6 max-w-2xl text-lg text-ink/70 leading-relaxed"
      >
        {site.bio}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 flex flex-wrap gap-3"
      >
        <button
          type="button"
          onClick={() => scrollTo("projects")}
          className="inline-flex items-center gap-2 rounded-full bg-sage px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sage-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
        >
          <ArrowDown className="h-4 w-4" aria-hidden />
          See my work
        </button>
        <button
          type="button"
          onClick={() => scrollTo("terminal")}
          className="inline-flex items-center gap-2 rounded-full border border-sage/40 px-5 py-2.5 text-sm font-medium text-ink transition hover:border-sage hover:text-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
        >
          <Terminal className="h-4 w-4" aria-hidden />
          Copy curl command
        </button>
      </motion.div>
    </section>
  );
}