import React, { useState, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import im1 from './waving.jfif'
import './App.css'

/* Sand particle background removed per user request */

function RippleButton({ children, className = '', onClick, as = 'button', href, ...props }) {
  const ref = useRef(null)
  const Tag = as
  const click = e => {
    const el = ref.current
    if (!el) return
    const circle = document.createElement('span')
    circle.className = 'ripple'
    const rect = el.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    circle.style.width = circle.style.height = size + 'px'
    circle.style.left = e.clientX - rect.left - size / 2 + 'px'
    circle.style.top = e.clientY - rect.top - size / 2 + 'px'
    el.appendChild(circle)
    setTimeout(() => circle.remove(), 600)
    if (onClick) onClick(e)
  }

  // Render a button or anchor depending on `as`
  return (
    <Tag
      ref={ref}
      className={`btn ${className}`}
      onClick={click}
      {...(Tag === 'a' ? { href } : {})}
      {...props}
    >
      {children}
    </Tag>
  )
}

function HeaderNav({ onNav }) {
  return (
    <header className="site-header">
      <div className="brand">Will D.</div>
      <nav className="nav">
        <RippleButton className="nav-btn" onClick={() => onNav('projects')}>Projects</RippleButton>
        <RippleButton className="nav-btn" onClick={() => onNav('experience')}>Experience</RippleButton>
        <RippleButton className="nav-btn" onClick={() => onNav('contact')}>Contact</RippleButton>
        <a className="buy-coffee" href="https://buymeacoffee.com/dellingerwf" target="_blank" rel="noopener noreferrer">☕️ Buy me a coffee</a>
      </nav>
    </header>
  )
}

function Hero({ onNav }) {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <img className="hero-photo" src={im1} alt="Will waving" />
        <div className="hero-copy">
          <h1>Will Dellinger</h1>
          <p className="lead">Low-level systems, delightful web experiences, and an aspiring mobile app developer. Previously at FSI.</p>
          <div className="hero-ctas">
            <RippleButton className="primary" onClick={() => onNav('projects')}>See Projects</RippleButton>
            <RippleButton className="outline" onClick={() => onNav('contact')}>Hire Me</RippleButton>
          </div>
          <div className="tech-badges" aria-hidden>
            <span>Rust</span>
            <span>React</span>
            <span>C/C++</span>
            <span>Flutter</span>
            <span>Node</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-bio card">
            <h2>About Me</h2>
            <p>Hi — I’m Will. I build low-level systems and delightful user experiences. I enjoy audio DSP, embedded programming, and crafting responsive, animated frontends. I also love composing music and experimenting with realtime visuals.</p>
            <p>I worked at FSI building internal dashboards and tools that improved performance and developer workflows. I’m currently exploring mobile app development with Flutter and focusing on offline-first, performant apps.</p>
            <p>I am a 3rd-year student majoring in Computer Science at Florida Atlantic University.</p>
            <p className="muted">Looking for a role that blends systems thinking with product-minded engineering.</p>
          </div>
          <div className="about-skills card">
            <h3>Skills & Interests</h3>
            <ul>
              <li>Systems: C, C++, Rust</li>
              <li>Frontend: React, WebGL, CSS</li>
              <li>Mobile: Flutter (aspiring)</li>
              <li>Tools: Git, CI, observability</li>
            </ul>
            {/* Buy me a coffee removed from Skills */}
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects({ featured = true }) {
  const projectList = [
    { id: 1, title: 'Embedded Audio Engine', tag: 'low-level', desc: 'A lightweight audio engine in C optimized for low-latency DSP. (WIP)', link: 'https://github.com/Willd231/audio-eng' },
    { id: 2, title: 'Realtime Visualizer', tag: 'frontend', desc: 'WebGL-based audio visualizer with custom shaders. (WIP)', link: '' },
    { id: 3, title: 'FSI (Florida Space Institute) Work', tag: 'work', desc: 'Tools & pipelines developed during work at FSI. (See repo)', link: 'https://github.com/Willd231/FSI' },
    { id: 4, title: 'Mobile Gamified TODO', tag: 'mobile', desc: 'Cross-platform prototype in Flutter with offline sync and gamified UX. (WIP)', link: '' }
  ]

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projectList.map(p => (
            <article key={p.id} className={`card project-card ${p.tag}`}>
              <h3>{p.title}</h3>
                <p className="muted">{p.tag.toUpperCase()}</p>
                <p>{p.desc}</p>
                <div className="card-actions">
                  {p.link ? (
                    <a className="link" href={p.link} target="_blank" rel="noopener noreferrer">Source</a>
                  ) : (
                    <Link to="/projects" className="link">Details</Link>
                  )}
                </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="exp-grid">
          <div className="card exp-card">
            <h3>FSI</h3>
            <p className="muted">Undergraduate Research Assistant — Jan 2024 – Present</p>
            <p>Florida Space Institute, UCF — Orlando, FL</p>
            <ul>
              <li>Accelerated FFT processing of 32-bit radio data by 2.5s per file using CUDA, boosting throughput by 30%.</li>
              <li>Engineered C++ and Python signal-processing pipelines to filter, sort, and export .LACSPC/.LCCSPC files for downstream analysis.</li>
              <li>Optimized Matplotlib/Numpy scripts by rewriting critical loops in C++, reducing plot generation time by up to 1–3s.</li>
            </ul>
            <p className="muted">Repo: <a href="https://github.com/Willd231/FSI" target="_blank" rel="noopener noreferrer">github.com/Willd231/FSI</a></p>
          </div>

          <div className="card exp-card">
            <h3>Independent Projects</h3>
            <p className="muted">Low-level & Systems</p>
            <p>Audio DSP projects, embedded prototypes, and systems-level tooling built in C/C++ and Rust.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function MobileShowcase() {
  return (
    <section className="mobile" id="mobile">
      <div className="container">
        <h2>Aspiring Mobile App Developer</h2>
        <p>Building cross-platform prototypes with Flutter. Focused on UX, offline-first sync, and performant animations.</p>
        <div className="mock-phones">
          <div className="phone mock-1">App preview</div>
          <div className="phone mock-2">App preview</div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const name = encodeURIComponent(form.name.value || '')
    const email = encodeURIComponent(form.email.value || '')
    const message = encodeURIComponent(form.message.value || '')
    const subject = encodeURIComponent(`Portfolio contact from ${name || email}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    // open default mail client
    window.location.href = `mailto:dellinger.w3@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="container contact-inner">
        <h2>Contact</h2>
        {sent ? (
          <div className="card">Thanks — I’ll get back to you soon.</div>
        ) : (
          <form className="card contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input required name="name" />
            </label>
            <label>
              Email
              <input required name="email" type="email" />
            </label>
            <label>
              Message
              <textarea required name="message" rows={5} />
            </label>
            <div className="form-actions">
              <button className="btn primary" type="submit">Send Message</button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

function ProjectsPage() {
  return (
    <main>
      <Projects featured={false} />
    </main>
  )
}

export default function App() {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const handleNav = id => scrollTo(id)

  return (
    <Router>
      <div className="app-root">
        <HeaderNav onNav={handleNav} />
        <Routes>
          <Route path="/" element={<>
            <Hero onNav={handleNav} />
            <About />
            <Projects />
            <Experience />
            <MobileShowcase />
            <Contact />
            <footer className="site-footer">© 2025 William Dellinger</footer>
          </>} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  )
}
