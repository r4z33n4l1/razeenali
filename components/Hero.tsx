"use client";

import { ArrowDown, Terminal } from "lucide-react";
import { site } from "@/lib/data";

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-20 pb-16 sm:pt-28 sm:pb-24">
      <p className="text-sage text-sm font-medium tracking-wide uppercase mb-4">
        {site.location}
      </p>

      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-ink leading-[1.05]">
        {site.name}
      </h1>

      <p className="mt-4 text-xl sm:text-2xl text-sage font-medium">
        {site.tagline}
      </p>

      <p className="mt-6 max-w-2xl text-lg text-ink/70 leading-relaxed">
        {site.bio}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => scrollTo("projects")}
          className="btn-flat inline-flex items-center gap-2 bg-sage px-5 py-2.5 text-sm font-medium text-white hover:bg-sage-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
        >
          <ArrowDown className="h-4 w-4" aria-hidden />
          See my work
        </button>
        <button
          type="button"
          onClick={() => scrollTo("terminal")}
          className="btn-flat inline-flex items-center gap-2 bg-card px-5 py-2.5 text-sm font-medium text-ink hover:border-sage hover:text-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
        >
          <Terminal className="h-4 w-4" aria-hidden />
          Copy curl command
        </button>
      </div>
    </section>
  );
}