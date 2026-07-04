import { CurlTerminal } from "@/components/CurlTerminal";
import { Elsewhere } from "@/components/Elsewhere";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { WhatIBuild } from "@/components/WhatIBuild";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 sm:px-8">
      <Hero />
      <WhatIBuild />
      <Projects />
      <CurlTerminal />
      <Elsewhere />
      <Footer />
    </main>
  );
}