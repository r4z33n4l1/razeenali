import { ThemeToggle } from "@/components/ThemeToggle";
import { experience, site, socialLinks, workItems } from "@/lib/data";

export default function Home() {
  return (
    <main className="site-shell" id="top">
      <header className="compact-header">
        <div>
          <a className="wordmark" href="#top" aria-label="Razeen Ali home">Razeen Ali</a>
          <p className="positioning">{site.positioning}</p>
        </div>
        <div className="header-actions">
          <nav aria-label="Primary navigation" className="nav-links">
            <a href="#work">Selected work</a>
            <a href="https://razeenali.app">Apps</a>
            <a href="#contact">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <div className="index-sections">
        <section className="index-section" id="work" aria-labelledby="work-title">
          <p className="section-label">Work</p>
          <h1 id="work-title">Selected work</h1>
          <ul className="index-list">
            {workItems.map((item) => (
              <li key={item.name}>
                <strong>{item.name}</strong>
                <span>{item.description}</span>
                <a href={item.href} target="_blank" rel="noreferrer">{item.label} <span aria-hidden="true">↗</span></a>
              </li>
            ))}
          </ul>
          <p className="directory-link"><a href="https://razeenali.app">All published apps →</a></p>
        </section>

        <section className="index-section" id="experience" aria-labelledby="experience-title">
          <p className="section-label">Experience</p>
          <h2 id="experience-title">Experience</h2>
          <ul className="experience-list">
            {experience.map((item) => (
              <li key={item.company}>
                <strong>{item.company} · {item.role} · {item.dates}</strong>
                <span>{item.summary}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="index-section" id="about" aria-labelledby="about-title">
          <p className="section-label">About</p>
          <h2 id="about-title">About</h2>
          <p className="section-copy">I build agent harnesses, mobile apps, and web tools. I focus on clear workflows and useful automation.</p>
        </section>

        <section className="index-section" id="contact" aria-labelledby="contact-title">
          <p className="section-label">Contact</p>
          <h2 id="contact-title">Contact</h2>
          <ul className="contact-list">
            {socialLinks.map((link) => <li key={link.label}><a href={link.href} target="_blank" rel="noreferrer">{link.label} <span aria-hidden="true">↗</span></a></li>)}
          </ul>
        </section>
      </div>
      <footer className="site-footer">© {new Date().getFullYear()} Razeen Ali</footer>
    </main>
  );
}
