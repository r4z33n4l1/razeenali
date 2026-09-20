"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main className="site-shell"><section className="hero-section"><p className="eyebrow">Something went wrong</p><h1>Let&apos;s try that again.</h1><p className="inline-links"><button className="theme-toggle" type="button" onClick={reset}>Try again</button></p></section></main>;
}
