import { ThemeToggle } from "@/components/ThemeToggle";
import { projects, site, socialLinks } from "@/lib/data";

const statusLabels = { live: "Live", maintained: "Maintained", archived: "Archived" } as const;

export default function Home() {
  return <main className="site-shell">
    <header className="site-header"><a className="wordmark" href="#top" aria-label="Razeen Ali home">Razeen Ali</a><nav aria-label="Primary navigation" className="nav-links"><a href="#work">Work</a><a href="https://razeenali.app">Apps</a><a href="#about">About</a><a href="#contact">Contact</a></nav><ThemeToggle /></header>
    <section id="top" className="hero-section" aria-labelledby="home-title"><p className="eyebrow">{site.location}</p><h1 id="home-title">{site.positioning}</h1><p className="lede">{site.introduction}</p><p className="inline-links"><a href="#work">Selected work</a><a href="#contact">Get in touch</a></p></section>
    <section id="work" className="content-section" aria-labelledby="work-title"><div className="section-heading"><p className="eyebrow">Selected work</p><h2 id="work-title">Published apps, made for everyday use.</h2></div><div className="work-list">{projects.map((project) => <article className="work-item" key={project.slug}><div><p className="item-number">0{project.order}</p><h3>{project.name}</h3><p>{project.description}</p></div><div className="project-meta"><span>{statusLabels[project.status]}</span><span>{project.technologies.join(" · ")}</span><a href={project.productionUrl} target="_blank" rel="noreferrer">View on App Store <span aria-hidden="true">↗</span></a></div></article>)}</div><p className="section-footnote"><a href="https://razeenali.app">Explore all published apps</a></p></section>
    <section id="about" className="content-section split-section" aria-labelledby="about-title"><p className="eyebrow">About</p><div><h2 id="about-title">I care about useful software and the details that make it feel considered.</h2><p>My work moves between mobile apps and web products. The common thread is a clear task, an honest interface, and the patience to remove what does not help.</p></div></section>
    <section id="contact" className="content-section split-section" aria-labelledby="contact-title"><p className="eyebrow">Contact</p><div><h2 id="contact-title">Find me elsewhere.</h2><ul className="contact-list">{socialLinks.map((link) => <li key={link.label}><a href={link.href} target="_blank" rel="noreferrer">{link.label} <span aria-hidden="true">↗</span></a></li>)}</ul></div></section>
    <footer className="site-footer">© {new Date().getFullYear()} Razeen Ali</footer>
  </main>;
}
