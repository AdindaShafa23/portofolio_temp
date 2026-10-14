"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "AI for SDGs Indonesia",
    kind: "AI / Education Platform",
    description:
      "An open-source education platform about how AI can support the 17 Sustainable Development Goals in Indonesia, with an interactive dashboard, SDG explorer, quiz, learning modules, and AI news aggregation.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "RSS"],
    href: "https://github.com/AdindaShafa23/AI-for-SDGS_Pendidikan",
    theme: "sdg",
  },
  {
    number: "02",
    title: "StockEase",
    kind: "Frontend / Inventory",
    description:
      "A web-based inventory management system for SMEs covering products, stock, and inbound/outbound transactions, with protected routes, validation, charts, and persistent client-side state.",
    stack: ["React", "TypeScript", "Redux Toolkit", "Recharts", "Tailwind CSS"],
    href: "https://github.com/AdindaShafa23/StockEase-FP_FE",
    theme: "stock",
  },
  {
    number: "03",
    title: "MoodMate",
    kind: "Web Application",
    description:
      "A Next.js application developed with Prisma as its data layer. The repository represents hands-on work across modern React application structure and database-backed development.",
    stack: ["Next.js", "React", "Prisma", "TypeScript"],
    href: "https://github.com/AdindaShafa23/MoodMate",
    theme: "mood",
  },
  {
    number: "04",
    title: "MarioTetris",
    kind: "Game Development",
    description:
      "A C# game project where Mario moves through falling and stacked Tetris-style blocks, jumping through the level to reach the top.",
    stack: ["C#", "Game Development", "Gameplay Logic"],
    href: "https://github.com/AdindaShafa23/FP-PBO-MARIOTETRIS-KEL-MEOW",
    theme: "mario",
  },
  {
    number: "05",
    title: "Workout Stats",
    kind: "Personal Project",
    description:
      "A personal project centered on workout statistics and fitness data. Included here as a compact example of building software around a focused, practical use case.",
    stack: ["Web Development", "Data", "Product Thinking"],
    href: "https://github.com/AdindaShafa23/WORKOUT-STATS",
    theme: "workout",
  },
];

const experience = [
  {
    period: "FEB 2026 — JUN 2026",
    role: "AI Engineer Intern",
    org: "AI Talent Factory (AITF) Komdigi RI",
    detail:
      "Worked with Continual Pre-Training (CPT) and Supervised Fine-Tuning (SFT) methodologies and contributed to real-world AI challenges.",
  },
  {
    period: "MAR 2026 — PRESENT",
    role: "Quality Assurance Engineer (Freelance)",
    org: "Raih Asa",
    detail:
      "Designed and executed manual and automated test cases, tracked the bug lifecycle, and partnered with developers on product quality and release readiness.",
  },
  {
    period: "MAY 2025 — PRESENT",
    role: "Algorithms & Programming Lab Assistant",
    org: "Institut Teknologi Sepuluh Nopember",
    detail:
      "Facilitates practical sessions, supports programming fundamentals, contributes to curriculum activities, and monitors student performance.",
  },
  {
    period: "FEB 2026 — PRESENT",
    role: "Programming Division Coordinator",
    org: "ITS GEMASTIK 2026 Delegation",
    detail:
      "Coordinates competition frameworks and problem-set development while managing technical risks and resources for a national-level programming competition.",
  },
  {
    period: "JAN 2026 — PRESENT",
    role: "Head of Research & Technology",
    org: "HMTC ITS",
    detail:
      "Leads the department’s research and technology direction, oversees staff, manages budgets, and develops external partnerships.",
  },
];

const skills = [
  "C",
  "C++",
  "Java",
  "PHP",
  "Python",
  "MySQL",
  "Laravel",
  "Next.js",
  "React",
  "TypeScript",
  "Git",
  "UML",
  "Android Studio",
  "PKP OJS",
];

const navItems = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

function ProjectArt({ theme }: { theme: string }) {
  return (
    <div className={`project-art art-${theme}`} aria-hidden="true">
      {theme === "sdg" && (
        <>
          <span className="sdg-ring sdg-ring-a" />
          <span className="sdg-ring sdg-ring-b" />
          <span className="sdg-ring sdg-ring-c" />
          <span className="sdg-glow" />
        </>
      )}
      {theme === "stock" && (
        <div className="stock-bars">
          {[34, 54, 46, 82, 62, 94, 74].map((height) => (
            <span key={height} style={{ height: `${height}%` }} />
          ))}
        </div>
      )}
      {theme === "mood" && (
        <>
          <span className="mood-blob mood-one" />
          <span className="mood-blob mood-two" />
          <span className="mood-blob mood-three" />
        </>
      )}
      {theme === "mario" && (
        <div className="pixel-board">
          {Array.from({ length: 20 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
      )}
      {theme === "workout" && (
        <>
          <div className="chart-grid" />
          <svg className="workout-line" viewBox="0 0 400 190" role="presentation">
            <polyline points="10,156 80,132 140,150 205,90 266,110 330,46 392,62" />
          </svg>
          <div className="chart-dot dot-a" />
          <div className="chart-dot dot-b" />
          <div className="chart-dot dot-c" />
        </>
      )}
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.1, 0.3, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

    const cards = document.querySelectorAll<HTMLElement>(".project-card");
    const onPointerMove = (event: PointerEvent) => {
      const target = event.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--x", `${event.clientX - rect.left}px`);
      target.style.setProperty("--y", `${event.clientY - rect.top}px`);
    };

    cards.forEach((card) => card.addEventListener("pointermove", onPointerMove));

    return () => {
      observer.disconnect();
      revealObserver.disconnect();
      cards.forEach((card) => card.removeEventListener("pointermove", onPointerMove));
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="Adinda Shafa Najla home">
            Adinda Shafa Najla<span>.</span>
          </a>

          <nav className="nav desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
                aria-current={activeSection === item.id ? "true" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="header-cta" href="mailto:sndinda37@gmail.com">
              Let&apos;s talk <Arrow />
            </a>
            <button
              className={`menu-toggle ${menuOpen ? "open" : ""}`}
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>

        <div id="mobile-navigation" className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : ""}
              aria-current={activeSection === item.id ? "true" : undefined}
              onClick={closeMenu}
            >
              <span>0{navItems.findIndex((nav) => nav.id === item.id) + 1}</span>
              {item.label}
            </a>
          ))}
        </div>
      </header>

      <main id="main-content">
        <section id="top" className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy reveal in">
            <p className="eyebrow">SOFTWARE ENGINEERING · ITS · SURABAYA</p>
            <h1 id="hero-title">
              I build <span>useful</span> software at the intersection of code, AI, and people.
            </h1>
            <p className="hero-lede">
              I&apos;m Adinda Shafa Najla, a Software Engineering undergraduate at Institut Teknologi Sepuluh Nopember. My work spans software development, AI engineering, QA, academic technology, and team coordination.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore projects <Arrow /></a>
              <a className="button button-light" href="/Adinda-Shafa-Najla-CV.pdf" target="_blank" rel="noreferrer">View CV <span aria-hidden="true">↓</span></a>
            </div>
          </div>

          <div className="hero-aside reveal in" aria-label="Profile snapshot">
            <div className="profile-card">
              <div className="avatar-mark">AS</div>
              <div className="availability"><span /> Currently building, testing, teaching</div>
              <p className="card-kicker">CURRENTLY</p>
              <h2>Building, testing, teaching.</h2>
              <p>Software engineering student with hands-on experience across AI, QA, frontend systems, and academic support.</p>
              <div className="mini-links">
                <a href="https://github.com/AdindaShafa23" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
                <a href="https://www.linkedin.com/in/adinda-shafa-najla-163032289/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="ticker" aria-label="Profile highlights">
          <div><span>GPA</span><strong className="tabular">3.64</strong><small>/ 4.00</small></div>
          <div><span>GitHub</span><strong className="tabular">18</strong><small>public repositories</small></div>
          <div><span>Focus</span><strong>AI · Software · QA</strong><small>hands-on work</small></div>
          <div><span>Based in</span><strong>Surabaya</strong><small>Indonesia</small></div>
        </section>

        <section id="about" className="section-shell content-grid section-space reveal">
          <div className="section-label">01 / ABOUT</div>
          <div>
            <h2 className="display-title">Engineering with a systems mindset.</h2>
            <div className="split-copy">
              <p>
                My foundation is software engineering: programming, design, databases, and system development. Alongside coursework, I&apos;ve worked as an AI engineer intern, QA engineer, lab assistant, teaching assistant, and technology-focused student leader.
              </p>
              <p>
                I enjoy projects where technical decisions have visible consequences — a cleaner workflow, a more reliable release, a clearer learning experience, or a better product interaction.
              </p>
            </div>
          </div>
        </section>

        <section id="work" className="section-shell section-space work-section reveal">
          <div className="section-heading-row">
            <div>
              <div className="section-label">02 / SELECTED WORK</div>
              <h2 className="display-title">Things I&apos;ve built.</h2>
            </div>
            <a className="text-link" href="https://github.com/AdindaShafa23" target="_blank" rel="noreferrer">See GitHub <Arrow /></a>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.number} className="project-card reveal">
                <div className={`project-visual visual-${project.theme}`}>
                  <span className="project-number">{project.number}</span>
                  <span className="project-kind">{project.kind}</span>
                  <ProjectArt theme={project.theme} />
                </div>
                <div className="project-body">
                  <div className="project-title-row">
                    <h3>{project.title}</h3>
                    <a className="icon-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository`}><Arrow /></a>
                  </div>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section-shell section-space reveal">
          <div className="section-label">03 / EXPERIENCE</div>
          <div className="experience-layout">
            <div className="experience-intro">
              <h2 className="display-title">Learning by doing.</h2>
              <p className="section-intro">A mix of industry exposure, academic work, and student leadership has shaped how I approach software projects.</p>
            </div>
            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={`${item.role}-${item.period}`}>
                  <div className="timeline-period">{item.period}</div>
                  <div>
                    <h3>{item.role}</h3>
                    <p className="timeline-org">{item.org}</p>
                    <p>{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell section-space skills-section reveal">
          <div className="section-label">04 / TOOLKIT</div>
          <div>
            <h2 className="display-title">Technologies I work with.</h2>
            <div className="skills-cloud">
              {skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
            <p className="skills-note">Also experienced in critical thinking, decision making, team organization, communication, and time management.</p>
          </div>
        </section>
      </main>

      <section id="contact" className="contact-section">
        <div className="section-shell contact-inner reveal">
          <div>
            <div className="section-label inverse">05 / CONTACT</div>
            <h2>Have a project, research idea, or engineering problem?</h2>
          </div>
          <div className="contact-panel">
            <p>Let&apos;s start with a conversation.</p>
            <a className="contact-email" href="mailto:sndinda37@gmail.com">sndinda37@gmail.com <Arrow /></a>
            <div className="contact-links">
              <a href="https://github.com/AdindaShafa23" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/adinda-shafa-najla-163032289/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="/Adinda-Shafa-Najla-CV.pdf" target="_blank" rel="noreferrer">CV</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer section-shell">
        <span>© 2026 Adinda Shafa Najla</span>
        <span>Built with Next.js · Designed with intent</span>
      </footer>
    </>
  );
}
