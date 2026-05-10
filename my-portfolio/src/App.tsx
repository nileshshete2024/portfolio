import { useState, useEffect, useRef, type ReactNode, type Ref } from "react";


const DATA = {
  name: "Nilesh Shete",
  title: "Frontend Developer",
  email: "nileshshete2024@gmail.com",
  phone: "+91 9130362410",
  location: "Pune, India",
  linkedin: "https://linkedin.com/in/nileshshete",
  about: "Frontend / React Developer with 4 years of experience building scalable fintech web applications and dashboards. Strong expertise in React.js, Next.js, TypeScript, Redux Toolkit, REST APIs, and performance optimization.",
  stats: [
    { value: "4+", label: "Years Experience" },
    { value: "10+", label: "Projects Delivered" },
    { value: "40%", label: "Faster UI" },
    { value: "50%", label: "Deploy Time Cut" },
  ],
  experience: [
    {
      company: "Easebuzz Pvt Ltd",
      role: "Software Engineer",
      period: "April 2022 – Jan 2026",
      location: "Pune",
      color: "#00D4AA",
      highlights: [
        "Led and mentored a team of 2 frontend developers, handling task allocation, code reviews, and timely delivery.",
        "Spearheaded a frontend React-Redux migration, improving UI performance by 25%, resulting in a 40% faster user interface.",
        "Enhanced CI/CD pipelines with Jenkins & GitHub Actions, reducing deployment time by 50%.",
        "Optimized API calls & database queries, leading to a 20% improvement in load time.",
        "Implemented API security best practices, ensuring secure transactions and data integrity.",
        "Worked in an Agile/Scrum environment, collaborating with cross-functional teams for feature releases.",
      ],
      metrics: [
        { value: "40%", label: "Faster UI", color: "#38BDF8" },
        { value: "50%", label: "Less Deploy Time", color: "#818CF8" },
        { value: "25%", label: "Perf Boost", color: "#34D399" },
        { value: "20%", label: "Load Reduction", color: "#F59E0B" },
      ],
    },
  ],
  skills: [
    { name: "Languages", color: "#38BDF8", items: ["JavaScript ES6+", "TypeScript", "HTML5", "CSS3", "Python (Basic)"] },
    { name: "Frontend", color: "#818CF8", items: ["React.js", "Next.js", "Redux Toolkit", "React Router", "TailwindCSS", "Material UI", "Ant Design", "Vite"] },
    { name: "APIs & Integration", color: "#34D399", items: ["REST APIs", "Axios", "Fetch", "Webhooks", "JSON Schema"] },
    { name: "Testing & Quality", color: "#F59E0B", items: ["React Testing Library", "ESLint", "Unit Testing", "Accessibility"] },
    { name: "DevOps & Tools", color: "#EC4899", items: ["Git", "GitHub Actions", "Jenkins", "Docker", "Bitbucket", "CI/CD", "Agile/Scrum"], span2: true },
  ],
  projects: [
    { icon: "📱", num: "01", title: "UDS Partner Agent PWA", desc: "Mobile-first Progressive Web App for Easebuzz field agents to streamline merchant onboarding with KYC workflows and real-time updates.", color: "#38BDF8", colorRgb: "56,189,248", highlights: ["KYC workflow automation", "Real-time data sync", "Offline support"], tech: ["React", "PWA", "TypeScript"] },
    { icon: "🤖", num: "02", title: "GenAI – Easebuzz ERA", desc: "AI-powered dynamic form generation integrated with Easebuzz Rapid Assist, enabling prompt-driven workflows for custom forms.", color: "#818CF8", colorRgb: "129,140,248", highlights: ["AI form generation", "Dynamic workflows", "Schema integration"], tech: ["React", "AI/ML", "Redux"] },
    { icon: "🏦", num: "03", title: "Bandhan Bank Integration", desc: "Customer-facing frontend of Bandhan Bank's payment integration with seamless Java backend service connectivity.", color: "#34D399", colorRgb: "52,211,153", highlights: ["Payment gateway", "Backend integration", "Security protocols"], tech: ["React", "REST APIs", "Redux"] },
    { icon: "🎓", num: "04", title: "Edu-revamp Project", desc: "Migration of a fee collection system from Angular to React with performance optimization and a custom drag-and-drop form builder.", color: "#F59E0B", colorRgb: "245,158,11", highlights: ["Angular to React migration", "Form builder", "Performance boost"], tech: ["React", "Drag & Drop", "TypeScript"] },
  ],
  certifications: [
    { name: "React - The Complete Guide", issuer: "Udemy", year: "2022" },
    { name: "JavaScript Algorithms and Data Structures", issuer: "FreeCodeCamp", year: "2023" },
    { name: "TypeScript Fundamentals", issuer: "Udemy", year: "2023" },
    { name: "React Essential Training", issuer: "LinkedIn", year: "2026" },
    { name: "The Complete React 19 Developer Course (incl. Next.js 16)", issuer: "Udemy", year: "2026" },
  ],
  education: [
    { degree: "Master of Computer Applications (MCA)", institution: "Pirens Institute of Business Management and Administration", year: "2022", icon: "🎓", latest: true },
    { degree: "Bachelor of Computer Applications (BCA)", institution: "Rajarshi Shahu Mahavidyalaya, Deolali Pravara", year: "2020", icon: "📚", latest: false },
  ],
  miniCards: [
    { icon: "⚛️", title: "React Expert", desc: "Advanced patterns, custom hooks, performance optimization, and Redux state management." },
    { icon: "🏗️", title: "Architecture", desc: "Component-driven, scalable frontend systems and clean code principles." },
    { icon: "🚀", title: "Performance", desc: "Lazy loading, code splitting, API optimization — delivered measurable speed wins." },
    { icon: "🔄", title: "CI/CD", desc: "Jenkins, GitHub Actions pipelines that cut deployment time by 50%." },
    { icon: "🤖", title: "GenAI", desc: "AI-powered form generation, prompt-driven workflows, JSON schema integration." },
    { icon: "📱", title: "PWA", desc: "Offline-ready progressive web apps with installable, app-like experiences." },
  ],
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{background:#080B14;color:#F0F4FF;font-family:'DM Sans',sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}
  ::selection{background:rgba(56,189,248,.18);color:#38BDF8}
  ::-webkit-scrollbar{width:5px}
  ::-webkit-scrollbar-track{background:#080B14}
  ::-webkit-scrollbar-thumb{background:#38BDF8;border-radius:99px}
  .grad{background:linear-gradient(135deg,#38BDF8 0%,#818CF8 50%,#34D399 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
  @keyframes blobf{0%,100%{transform:translate(0,0)}50%{transform:translate(35px,-45px)}}
  @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.45;transform:scale(1.2)}}
  @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
  @keyframes spinR{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}
  @keyframes flt{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
  @keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}

  /* Mobile Responsiveness */
  @media(max-width:768px){
    nav .nav-desktop{display:none!important}
    nav .burger-btn{display:flex!important}
    #hero .hero-grid{grid-template-columns:1fr!important;text-align:center}
    #hero .stat-grid{grid-template-columns:repeat(2,1fr)!important}
    #about .about-grid{grid-template-columns:1fr!important;gap:2rem!important}
    #about .mini-cards{grid-template-columns:1fr!important}
    #projects .projects-grid{grid-template-columns:1fr!important}
    #skills .skills-grid{grid-template-columns:1fr!important}
    #skills .certs-grid{grid-template-columns:1fr!important}
    #education .edu-grid{grid-template-columns:1fr!important}
    #contact .contact-grid{grid-template-columns:1fr!important}
    footer .footer-flex{flex-direction:column!important;text-align:center!important;gap:1.5rem!important}
    .avatar-orb{display:none!important}
    .hero-buttons{flex-direction:column!important;width:100%!important}
    .social-icons{justify-content:center!important}
  }
  @media(max-width:480px){
    nav{padding:0.5rem 1rem!important}
    #hero{min-height:auto!important;padding:80px 0 40px!important}
    #hero .hero-content{padding:0 1rem!important}
    section{padding:60px 0!important}
    .card-padding{padding:1.5rem!important}
    .section-title{font-size:2rem!important}
    .hero-title{font-size:2.5rem!important}
    .hero-subtitle{font-size:1.2rem!important}
    footer .footer-flex{text-align:left!important}
  }
`;

function useInView(threshold = 0.15): [Ref<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function FadeUp({ children, delay = 0, style = {} }: { children: ReactNode; delay?: number; style?: React.CSSProperties }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref as Ref<HTMLDivElement>} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(28px)", transition: `opacity .65s ease ${delay}s, transform .65s ease ${delay}s`, ...style }}>
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#38BDF8", marginBottom: 10 }}>
      <span style={{ display: "block", width: 22, height: 1, background: "#38BDF8" }} />
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.85rem,3.5vw,2.5rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }} className="section-title">{children}</h2>;
}

function Card({ children, style = {}, hover = true }: { children: ReactNode; style?: React.CSSProperties; hover?: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => hover && setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? "#131929" : "#0D1220",
        border: `1px solid ${hov ? "rgba(56,189,248,.32)" : "rgba(255,255,255,.07)"}`,
        borderRadius: 16,
        transition: "all .3s ease",
        transform: hov ? "translateY(-3px)" : "none",
        ...style,
      }} className="card-padding">
      {children}
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = ["About", "Experience", "Projects", "Skills", "Contact"];
  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: scrolled ? "0.8rem 2rem" : "1.25rem 2rem", background: scrolled ? "rgba(8,11,20,.9)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? "1px solid rgba(255,255,255,.05)" : "none", transition: "all .3s" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#hero" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#F0F4FF", textDecoration: "none" }}>
            <span style={{ color: "#38BDF8" }}>&lt;</span>NS<span style={{ color: "#38BDF8" }}>/&gt;</span>
          </a>
          <ul style={{ display: "flex", alignItems: "center", gap: "1.75rem", listStyle: "none" }} className="nav-desktop">
            {links.map(l => (
              <li key={l}><a href={`#${l.toLowerCase()}`} style={{ color: "#8892AA", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>{l}</a></li>
            ))}
            <li>
              <a href="https://linkedin.com/in/nileshshete" target="_blank" rel="noreferrer" style={{ padding: "8px 18px", background: "#38BDF8", color: "#050810", borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: "none" }}>LinkedIn</a>
            </li>
          </ul>
          <button onClick={() => setOpen(!open)} style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 4 }} className="burger-btn">
            {[0,1,2].map(i => <span key={i} style={{ display: "block", width: 24, height: 2, background: "#F0F4FF", borderRadius: 2, transition: "all .3s", transform: open && i===0 ? "rotate(45deg)" : open && i===1 ? "scaleX(0)" : open && i===2 ? "rotate(-45deg)" : "none", }} />)}
          </button>
        </div>
      </nav>
      {open && (
        <div style={{ position: "fixed", top: 0, right: 0, height: "100vh", width: 280, background: "rgba(13,18,32,.98)", backdropFilter: "blur(30px)", zIndex: 99, display: "flex", flexDirection: "column", gap: "1.5rem", padding: "100px 1.5rem", animation: "fadeUp .3s" }}>
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} style={{ color: "#8892AA", textDecoration: "none", fontSize: 17, fontWeight: 500 }}>{l}</a>)}
          <a href="https://linkedin.com/in/nileshshete" target="_blank" rel="noreferrer" style={{ padding: "10px 20px", background: "#38BDF8", color: "#050810", borderRadius: 9, fontSize: 14, fontWeight: 600, textDecoration: "none", textAlign: "center" }}>LinkedIn</a>
        </div>
      )}
      <style>{`
        @media(max-width:768px){.nav-desktop{display:none!important}.burger-btn{display:flex!important}}
      `}</style>
    </>
  );
}

function Hero() {
  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 100, paddingBottom: 60, position: "relative", zIndex: 1 }} className="section">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", width: "100%" }} className="hero-content">
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "3rem", alignItems: "center", marginBottom: 64 }} className="hero-grid">
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(52,211,153,.09)", border: "1px solid rgba(52,211,153,.25)", borderRadius: 999, padding: "6px 16px", marginBottom: "1.5rem" }}>
              <span style={{ width: 7, height: 7, background: "#34D399", borderRadius: "50%", animation: "pulse 2s infinite" }} />
              Available for opportunities
            </div>
            <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2.4rem,5.5vw,3.8rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "0.4rem", animation: "fadeUp .6s .2s both" }} className="hero-title">
              Hi, I'm <span className="grad">Nilesh Shete</span>
            </h1>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.1rem,2.5vw,1.5rem)", fontWeight: 700, color: "#8892AA", marginBottom: "1.25rem", animation: "fadeUp .6s .3s both" }} className="hero-subtitle">Frontend Developer</h2>
            <p style={{ color: "#8892AA", fontSize: "1rem", lineHeight: 1.8, maxWidth: 480, marginBottom: "1.5rem", animation: "fadeUp .6s .35s both" }}>
              Building scalable fintech web apps with React.js, Next.js & TypeScript. 4 years of turning complex requirements into fast, beautiful UIs.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: "2rem", animation: "fadeUp .6s .4s both" }}>
              {["React.js","Next.js","TypeScript","Redux","TailwindCSS"].map((t: string) => (
                <span key={t} style={{ padding: "5px 12px", background: "rgba(129,140,248,.09)", border: "1px solid rgba(129,140,248,.22)", borderRadius: 6, fontSize: 12, color: "#818CF8", fontWeight: 500 }}>
                  {t}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1.75rem", animation: "fadeUp .6s .45s both" }} className="hero-buttons">
              <a href="#projects" style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "13px 26px", background: "#38BDF8", color: "#050810", fontSize: 14.5, fontWeight: 700, borderRadius: 10, textDecoration: "none", transition: "all .3s" }}>
                View My Work <span>→</span>
              </a>
              <a href="https://linkedin.com/in/nileshshete" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "12px 25px", background: "transparent", border: "1px solid #38BDF8", color: "#38BDF8", fontSize: 14, fontWeight: 600, borderRadius: 10, textDecoration: "none" }}>
                LinkedIn ↗
              </a>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", animation: "fadeUp .6s .55s both" }} className="social-icons">
              {[
                { href: `mailto:${DATA.email}`, icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
                { href: `tel:${DATA.phone}`, icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg> },
                { href: DATA.linkedin, icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg> },
              ].map(({ href, icon }, i) => (
                <SocialIcon key={i} href={href}>{icon}</SocialIcon>
              ))}
            </div>
          </div>

          <AvatarOrb />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.5rem", padding: "2rem", background: "#0D1220", border: "1px solid rgba(255,255,255,.07)", borderRadius: 16, animation: "fadeUp .6s .6s both" }} className="stat-grid">
          {DATA.stats.map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <span className="grad" style={{ display: "block", fontFamily: "'Syne',sans-serif", fontSize: "2.2rem", fontWeight: 800, lineHeight: 1 }}>{s.value}</span>
              <span style={{ fontSize: 12, color: "#3A4455", marginTop: 4, display: "block" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:900px){#hero .hero-grid{grid-template-columns:1fr!important;text-align:center}}
        @media(max-width:768px){#hero .stat-grid{grid-template-columns:repeat(2,1fr)!important}}
      `}</style>
    </section>
  );
}

function SocialIcon({ href, children }: { href: string; children: ReactNode }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target="_blank" rel="noreferrer" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${hov ? "#38BDF8" : "rgba(255,255,255,.1)"}`, borderRadius: 10, color: hov ? "#38BDF8" : "#8892AA", transition: "all .3s", textDecoration: "none" }}>
      {children}
    </a>
  );
}

function AvatarOrb() {
  return (
    <div style={{ position: "relative", width: 240, height: 240, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }} className="avatar-orb">
      <div style={{ position: "absolute", width: 195, height: 195, borderRadius: "50%", border: "1px dashed rgba(56,189,248,.15)", animation: "spin 16s linear infinite" }} />
      <div style={{ position: "absolute", width: 238, height: 238, borderRadius: "50%", border: "1px dashed rgba(129,140,248,.1)", animation: "spinR 22s linear infinite" }} />
      <div style={{ width: 140, height: 140, background: "rgba(56,189,248,.09)", border: "2px solid rgba(56,189,248,.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: "3rem", animation: "flt 3s ease-in-out infinite" }}>👨‍💻</span>
      </div>
      {[
        { text: "⚡ 40% faster UI", top: 5, right: -30, delay: 0 },
        { text: "🚀 4+ Years", bottom: 50, right: -45, delay: 1.2 },
        { text: "✅ React.js", bottom: 5, left: -10, delay: 2.5 },
      ].map((b, i) => (
        <div key={i} style={{ position: "absolute", background: "#0D1220", border: "1px solid rgba(255,255,255,.09)", borderRadius: 9, padding: "6px 12px", fontSize: 11, fontWeight: 500, whiteSpace: "nowrap", ...(b.top !== undefined && { top: b.top }), ...(b.bottom !== undefined && { bottom: b.bottom }), ...(b.right !== undefined && { right: b.right }), ...(b.left !== undefined && { left: b.left }), animation: `flt 3s ease-in-out infinite` }}>
          {b.text}
        </div>
      ))}
    </div>
  );
}

function About() {
  return (
    <section id="about" style={{ padding: "100px 0", position: "relative", zIndex: 1 }} className="section">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
        <FadeUp>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }} className="about-grid">
            <div>
              <SectionLabel>About Me</SectionLabel>
              <SectionTitle>Crafting Digital<br />Experiences</SectionTitle>
              <p style={{ color: "#8892AA", fontSize: 15.5, lineHeight: 1.8, marginBottom: "1rem" }}>{DATA.about}</p>
              <p style={{ color: "#8892AA", fontSize: 15.5, lineHeight: 1.8 }}>I thrive at the intersection of design and engineering — turning complex business requirements into clean, intuitive interfaces that users love.</p>
              <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { icon: "📍", label: "Location", value: DATA.location },
                  { icon: "📧", label: "Email", value: DATA.email },
                  { icon: "📞", label: "Phone", value: DATA.phone },
                ].map(item => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ width: 36, height: 36, background: "rgba(56,189,248,.08)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>
                      {item.icon}
                    </div>
                    <div>
                      <span style={{ display: "block", fontSize: 11, color: "#3A4455", textTransform: "uppercase", letterSpacing: "0.1em" }}>{item.label}</span>
                      <span style={{ fontSize: 14, color: "#F0F4FF", fontWeight: 500 }}>{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
                <a href={DATA.linkedin} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "11px 23px", background: "transparent", color: "#F0F4FF", border: "1px solid #38BDF8", borderRadius: 10, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
                  View LinkedIn ↗
                </a>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="mini-cards">
              {DATA.miniCards.map(c => (
                <Card key={c.title} style={{ padding: "1.25rem" }}>
                  <span style={{ fontSize: "1.5rem", display: "block", marginBottom: "0.75rem" }}>{c.icon}</span>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 14, fontWeight: 700, marginBottom: "0.4rem" }}>{c.title}</div>
                  <p style={{ fontSize: 12.5, color: "#8892AA", lineHeight: 1.6 }}>{c.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const exp = DATA.experience[0];
  return (
    <section id="experience" style={{ padding: "100px 0", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
        <FadeUp>
          <SectionLabel>Experience</SectionLabel>
          <SectionTitle>Where I've Worked</SectionTitle>
          <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "2rem", marginTop: "2.5rem", alignItems: "start" }}>
            <div>
              <div style={{ background: "rgba(56,189,248,.06)", border: "1px solid #38BDF8", borderRadius: 12, padding: "1rem 1.25rem", cursor: "pointer" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#F0F4FF", marginBottom: 4 }}>{exp.company}</div>
                <div style={{ fontSize: 11, color: "#3A4455" }}>{exp.period}</div>
              </div>
            </div>
            <Card style={{ padding: "2.5rem" }} hover={false}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
                <div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>{exp.role}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: 14, color: "#8892AA", flexWrap: "wrap" }}>
                    <span style={{ color: exp.color, fontWeight: 600 }}>{exp.company}</span>
                    <span style={{ opacity: 0.3 }}>·</span><span>{exp.location}</span>
                    <span style={{ opacity: 0.3 }}>·</span><span>{exp.period}</span>
                  </div>
                </div>
                <span style={{ padding: "5px 12px", background: "rgba(52,211,153,.08)", border: "1px solid rgba(52,211,153,.2)", borderRadius: 999, fontSize: 12, color: "#34D399" }}>Full-time</span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
                {exp.highlights.map((h: string, i: number) => (
                  <li key={i} style={{ display: "flex", gap: "0.75rem", fontSize: 15, color: "#8892AA", lineHeight: 1.7 }}>
                    <span style={{ color: exp.color, flexShrink: 0, marginTop: 4, fontSize: 14 }}>▹</span>{h}
                  </li>
                ))}
              </ul>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,.07)" }}>
                {exp.metrics.map((m: any) => (
                  <div key={m.label} style={{ textAlign: "center" }}>
                    <span style={{ display: "block", fontFamily: "'Syne',sans-serif", fontSize: "1.75rem", fontWeight: 800, color: m.color, lineHeight: 1 }}>{m.value}</span>
                    <span style={{ fontSize: 11, color: "#3A4455", marginTop: 4, display: "block" }}>{m.label}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 0", position: "relative", zIndex: 1 }} className="section">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
        <FadeUp>
          <SectionLabel>Projects</SectionLabel>
          <SectionTitle>Things I've Built</SectionTitle>
          <p style={{ color: "#8892AA", maxWidth: 580, marginBottom: "3rem", fontSize: 15.5 }}>A curated selection of projects from my 4 years at Easebuzz — fintech dashboards, PWAs, GenAI integrations, and full-stack systems.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1.5rem" }} className="projects-grid">
            {DATA.projects.map((p, i) => <ProjectCard key={i} project={p} />)}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

interface ProjectType {
  icon: string;
  num: string;
  title: string;
  desc: string;
  color: string;
  colorRgb: string;
  highlights: string[];
  tech: string[];
}

function ProjectCard({ project: p }: { project: ProjectType }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ position: "relative", overflow: "hidden", background: hov ? "#131929" : "#0D1220", border: `1px solid ${hov ? (p.color) + "55" : "rgba(255,255,255,.07)"}`, borderRadius: 16, padding: "2rem", cursor: "pointer", transition: "all .3s", display: "flex", flexDirection: "column" }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: p.color, opacity: hov ? 1 : 0, transition: "opacity .3s" }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span style={{ fontSize: "2rem" }}>{p.icon}</span>
        <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.25rem", fontWeight: 800, color: "#3A4455", opacity: 0.4 }}>{p.num}</span>
      </div>
      <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.2rem", fontWeight: 700, lineHeight: 1.3 }}>{p.title}</div>
      <p style={{ fontSize: 14, color: "#8892AA", lineHeight: 1.75 }}>{p.desc}</p>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6, fontSize: 13, color: "#8892AA" }}>
        {p.highlights.map((h: string, i: number) => (
          <li key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", lineHeight: 1.5 }}>
            <span style={{ color: p.color, flexShrink: 0, fontSize: 11, marginTop: 2 }}>✓</span>{h}
          </li>
        ))}
      </ul>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
        {p.tech.map((t: string) => (
          <span key={t} style={{ padding: "4px 11px", background: `rgba(${p.colorRgb},.08)`, border: `1px solid rgba(${p.colorRgb},.28)`, borderRadius: 999, fontSize: 12, color: p.color, fontWeight: 500 }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" style={{ padding: "100px 0", position: "relative", zIndex: 1 }} className="section">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
        <FadeUp>
          <SectionLabel>Skills</SectionLabel>
          <SectionTitle>Tech Stack</SectionTitle>
          <p style={{ color: "#8892AA", maxWidth: 540, marginBottom: "3rem", fontSize: 15.5 }}>Technologies and tools I work with daily to build production-ready frontend applications.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.25rem" }} className="skills-grid">
            {DATA.skills.map(cat => (
              <Card key={cat.name} style={{ padding: "1.5rem", gridColumn: (cat as any).span2 ? "span 2" : "span 1" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: "1rem" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: cat.color, flexShrink: 0 }} />
                  <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#8892AA" }}>{cat.name}</div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {cat.items.map((item: string) => (
                    <span key={item} style={{ padding: "5px 11px", background: `${cat.color}0D`, border: `1px solid ${cat.color}28`, borderRadius: 6, fontSize: 12.5, fontWeight: 500, color: "#F0F4FF" }}>
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div style={{ marginTop: "4rem" }}>
            <SectionLabel>Certifications</SectionLabel>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1rem", marginTop: "1.5rem" }} className="certs-grid">
              {DATA.certifications.map((cert, i) => (
                <Card key={i} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", padding: "1.25rem" }}>
                  <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>🎓</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#F0F4FF", lineHeight: 1.4, marginBottom: 4 }}>{cert.name}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 12, color: "#38BDF8", fontWeight: 500 }}>{cert.issuer}</span>
                      <span style={{ fontSize: 11, color: "#3A4455", padding: "2px 8px", background: "rgba(255,255,255,.04)", borderRadius: 4 }}>{cert.year}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" style={{ padding: "100px 0", position: "relative", zIndex: 1 }} className="section">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
        <FadeUp>
          <SectionLabel>Education</SectionLabel>
          <SectionTitle>Academic Background</SectionTitle>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1.5rem", marginTop: "3rem" }} className="edu-grid">
            {DATA.education.map((edu, i) => (
              <Card key={i} style={{ position: "relative", padding: "2rem" }}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "3rem", fontWeight: 800, color: "#F0F4FF", opacity: 0.07, position: "absolute", top: "1.5rem", right: "1.5rem", lineHeight: 1 }}>
                  {edu.icon}
                </div>
                <span style={{ fontSize: "2rem", display: "block", marginBottom: "1rem" }}>{edu.icon}</span>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", lineHeight: 1.4 }}>{edu.degree}</div>
                <div style={{ fontSize: 14, color: "#8892AA", lineHeight: 1.5 }}>{edu.institution}</div>
                {edu.latest && <div style={{ display: "inline-block", marginTop: "1rem", padding: "4px 12px", background: "rgba(56,189,248,.08)", border: "1px solid rgba(56,189,248,.22)", borderRadius: 999, fontSize: 11, color: "#38BDF8", fontWeight: 600 }}>Latest</div>}
              </Card>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ padding: "100px 0", position: "relative", zIndex: 1 }} className="section">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
        <FadeUp>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="contact-grid">
            <div>
              <SectionLabel>Contact</SectionLabel>
              <SectionTitle>Let's Build<br />Something Together</SectionTitle>
              <p style={{ color: "#8892AA", fontSize: 15.5, lineHeight: 1.8, marginBottom: "2.5rem" }}>I'm currently open to new opportunities. Whether you have a project in mind, want to discuss potential collaborations, or just want to chat — I'd love to hear from you!</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { href: `mailto:${DATA.email}`, label: "Email", value: DATA.email, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
                  { href: DATA.linkedin, label: "LinkedIn", value: "linkedin.com/in/nileshshete", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg> },
                  { href: `tel:${DATA.phone}`, label: "Phone", value: DATA.phone, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg> },
                ].map(item => <ContactLink key={item.label} {...item} />)}
              </div>
            </div>
            <Card style={{ padding: "2.5rem", background: "linear-gradient(135deg,rgba(56,189,248,.05),rgba(129,140,248,.05))", borderColor: "rgba(56,189,248,.15)" }} hover={false}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Ready to work together?</div>
              <p style={{ color: "#8892AA", fontSize: 14.5, lineHeight: 1.75, marginBottom: "2rem" }}>I'm available for full-time roles, freelance projects, and consulting. Let's discuss how I can contribute to your next project.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <a href={`mailto:${DATA.email}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px 0", background: "#38BDF8", color: "#050810", fontWeight: 700, borderRadius: 10, textDecoration: "none", fontSize: 14, transition: "all .3s" }}>
                  Send me an email →
                </a>
                <a href={DATA.linkedin} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "12px 0", background: "transparent", border: "1px solid #38BDF8", color: "#38BDF8", fontWeight: 600, borderRadius: 10, textDecoration: "none", fontSize: 14 }}>
                  Connect on LinkedIn
                </a>
              </div>
            </Card>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function ContactLink({ href, label, value, icon }: { href: string; label: string; value: string; icon: ReactNode }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target="_blank" rel="noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.25rem", background: "#0D1220", border: `1px solid ${hov ? "#38BDF8" : "rgba(255,255,255,.07)"}`, borderRadius: 12, transition: "all .3s", textDecoration: "none" }}>
      <div style={{ width: 44, height: 44, background: "rgba(56,189,248,.08)", border: "1px solid rgba(56,189,248,.15)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "#38BDF8", flexShrink: 0 }}>
        {icon}
      </div>
      <div>
        <span style={{ display: "block", fontSize: 11, color: "#3A4455", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 2 }}>{label}</span>
        <span style={{ fontSize: 14, color: "#F0F4FF", fontWeight: 500 }}>{value}</span>
      </div>
    </a>
  );
}

function Footer() {
  return (
    <footer style={{ padding: "2.5rem 0", borderTop: "1px solid rgba(255,255,255,.07)", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }} className="footer-flex">
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.1rem", fontWeight: 800 }}>
            <span style={{ color: "#38BDF8" }}>&lt;</span>NS<span style={{ color: "#38BDF8" }}>/&gt;</span>
          </span>
          <span style={{ fontSize: 13, color: "#3A4455" }}>Frontend Developer · React.js Expert · Pune, India</span>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 13, color: "#3A4455" }}>Designed & built by <span style={{ color: "#38BDF8" }}>Nilesh Shete</span></div>
          <div style={{ fontSize: 12, color: "#3A4455", opacity: 0.5, marginTop: 3 }}>© {new Date().getFullYear()} All rights reserved</div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <style>{css}</style>
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", width: 700, height: 700, background: "#0EA5E9", borderRadius: "50%", filter: "blur(120px)", top: -250, right: -200, opacity: 0.07, animation: "blobf 9s infinite" }} />
        <div style={{ position: "absolute", width: 600, height: 600, background: "#818CF8", borderRadius: "50%", filter: "blur(120px)", bottom: 100, left: -200, opacity: 0.07, animation: "blobf 12s infinite reverse" }} />
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* <ExperienceSection /> */}
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
