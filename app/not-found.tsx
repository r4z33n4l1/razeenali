import Link from "next/link";

export default function NotFound() {
  return <main className="site-shell"><section className="hero-section"><p className="eyebrow">404</p><h1>That page is not here.</h1><p className="lede">Try the home page instead.</p><p className="inline-links"><Link href="/">Return home</Link></p></section></main>;
}
