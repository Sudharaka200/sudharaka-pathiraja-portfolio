import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeDown, zoomIn, flipInX } from '../../variants'



const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sudharaka-pathiraja-10646820b/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Sudharaka200',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://web.facebook.com/sudha.raka.75/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/__su.zx/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
]

export default function HomeBanner() {
  const canvasRef = useRef(null)

  // Subtle particle/dot grid background effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const dots = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      dots.forEach((d) => {
        d.x += d.dx
        d.y += d.dy
        if (d.x < 0 || d.x > canvas.width) d.dx *= -1
        if (d.y < 0 || d.y > canvas.height) d.dy *= -1
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(147, 197, 253, ${d.opacity})`
        ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&family=Cabinet+Grotesk:wght@300;400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        :root {
          --bg-deep: #06070f;
          --bg-mid: #0c0e1a;
          --accent-blue: #4f8ef7;
          --accent-cyan: #38d9a9;
          --accent-warm: #f97316;
          --text-primary: #f0f2ff;
          --text-muted: rgba(200, 210, 240, 0.55);
          --border-subtle: rgba(255, 255, 255, 0.06);
        }

        .hero-section {
          font-family: 'DM Sans', sans-serif;
          position: relative;
          min-height: 100svh;
          display: flex;
          align-items: center;
          background: var(--bg-deep);
          overflow: hidden;
        }

        /* Ambient glow blobs */
        .hero-blob-1 {
          position: absolute;
          top: -120px;
          right: -80px;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(79, 142, 247, 0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-blob-2 {
          position: absolute;
          bottom: -80px;
          left: -100px;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(56, 217, 169, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        /* Horizontal rule accent */
        .hero-line {
          width: 48px;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-blue), var(--accent-cyan));
          border-radius: 2px;
          margin-bottom: 24px;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 120px 32px 80px;
          width: 100%;
        }

        /* Tag pill */
        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(79, 142, 247, 0.1);
          border: 1px solid rgba(79, 142, 247, 0.2);
          border-radius: 100px;
          padding: 6px 16px 6px 10px;
          margin-bottom: 28px;
        }

        .hero-tag-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 8px var(--accent-cyan);
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .hero-tag-text {
          font-size: 12px;
          font-weight: 500;
          color: var(--accent-blue);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* Main heading */
        .hero-greeting {
          font-family: 'DM Sans', sans-serif;
          font-size: 17px;
          font-weight: 400;
          color: var(--text-muted);
          margin: 0 0 12px;
          letter-spacing: 0.02em;
        }

        .hero-name {
          font-family: 'Syne', sans-serif;
          font-size: clamp(42px, 7vw, 88px);
          font-weight: 800;
          line-height: 1.0;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          margin: 0 0 4px;
        }

        .hero-name .highlight {
          background: linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-cyan) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-role {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(16px, 2.5vw, 22px);
          font-weight: 300;
          color: var(--text-muted);
          margin: 16px 0 40px;
          max-width: 440px;
          line-height: 1.5;
        }

        .hero-role strong {
          color: rgba(200, 210, 240, 0.9);
          font-weight: 500;
        }

        /* CTA Buttons */
        .hero-btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 52px;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--accent-blue), #6366f1);
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 24px rgba(79, 142, 247, 0.3);
          letter-spacing: 0.01em;
          position: relative;
          overflow: hidden;
        }

        .btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.12), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(79, 142, 247, 0.45);
        }

        .btn-primary:hover::after { opacity: 1; }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 12px;
          background: transparent;
          color: var(--text-primary);
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          cursor: pointer;
          border: 1px solid var(--border-subtle);
          transition: all 0.3s ease;
          letter-spacing: 0.01em;
          background: rgba(255,255,255,0.03);
        }

        .btn-secondary:hover {
          border-color: rgba(79, 142, 247, 0.4);
          background: rgba(79, 142, 247, 0.07);
          transform: translateY(-2px);
        }

        .btn-icon {
          display: inline-flex;
          align-items: center;
          font-size: 16px;
          transition: transform 0.25s ease;
        }

        .btn-primary:hover .btn-icon,
        .btn-secondary:hover .btn-icon {
          transform: translateX(3px);
        }

        /* Social links */
        .hero-socials-label {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 14px;
          font-weight: 500;
        }

        .hero-socials {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border-subtle);
          color: rgba(200,210,240,0.6);
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .social-link:hover {
          background: rgba(79, 142, 247, 0.12);
          border-color: rgba(79, 142, 247, 0.3);
          color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 4px 16px rgba(79, 142, 247, 0.2);
        }

        /* Decorative right side element */
        .hero-deco {
          position: absolute;
          right: 48px;
          top: 50%;
          transform: translateY(-50%);
          display: none;
          flex-direction: column;
          gap: 12px;
          align-items: flex-end;
          z-index: 2;
        }

        @media (min-width: 1100px) {
          .hero-deco { display: flex; }
        }

        .deco-card {
          background: rgba(12, 14, 26, 0.85);
          border: 1px solid var(--border-subtle);
          border-radius: 14px;
          padding: 16px 20px;
          backdrop-filter: blur(12px);
          min-width: 180px;
        }

        .deco-card-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-bottom: 6px;
        }

        .deco-card-value {
          font-family: 'Syne', sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1;
        }

        .deco-card-value span {
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .deco-skills {
          background: rgba(12, 14, 26, 0.85);
          border: 1px solid var(--border-subtle);
          border-radius: 14px;
          padding: 16px 20px;
          backdrop-filter: blur(12px);
        }

        .deco-skills-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-bottom: 10px;
        }

        .deco-skill-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          max-width: 200px;
        }

        .skill-pill {
          font-size: 11px;
          font-weight: 500;
          padding: 4px 10px;
          border-radius: 100px;
          background: rgba(79, 142, 247, 0.1);
          border: 1px solid rgba(79, 142, 247, 0.2);
          color: var(--accent-blue);
        }

        /* Scrolldown hint */
        .scroll-hint {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          z-index: 2;
          opacity: 0.4;
        }

        .scroll-hint-text {
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .scroll-hint-arrow {
          width: 1px;
          height: 32px;
          background: linear-gradient(to bottom, rgba(79,142,247,0.8), transparent);
          animation: scroll-anim 2s ease-in-out infinite;
        }

        @keyframes scroll-anim {
          0%, 100% { transform: scaleY(1); opacity: 0.4; }
          50% { transform: scaleY(0.6); opacity: 0.8; }
        }
      `}</style>

      <section className="hero-section" id="home">
        {/* Background elements */}
        <div className="hero-blob-1" />
        <div className="hero-blob-2" />
        <canvas ref={canvasRef} className="hero-canvas" />

        {/* Main content */}
        <div className="hero-content">
          {/* Tag */}
          <motion.div
            variants={fadeDown(0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="hero-tag"
          >
            <span className="hero-tag-dot" />
            <span className="hero-tag-text">Available for work</span>
          </motion.div>

          {/* Heading */}
          <motion.p
            variants={fadeDown(0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="hero-greeting"
          >
            Hello there, I'm
          </motion.p>

          <motion.h1
            variants={fadeDown(0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="hero-name"
          >
            Sudharaka<br />
            <span className="highlight">Pathiraja</span>
          </motion.h1>

          <motion.p
            variants={zoomIn(0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="hero-role"
          >
            <strong>Associate Software Engineer</strong> crafting clean, high-performance digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={zoomIn(0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="hero-btns"
          >
            <a href="#about" className="btn-primary">
              About Me
              <span className="btn-icon">→</span>
            </a>
            <a href="/contact" className="btn-secondary">
              Contact Me
              <span className="btn-icon">→</span>
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={flipInX(0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <p className="hero-socials-label">Find me on</p>
            <div className="hero-socials">
              {socialLinks.map((s) => (
                <a key={s.name} href={s.href} className="social-link" target="_blank" rel="noreferrer" title={s.name}>
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decorative stat cards (desktop only) */}
        <div className="hero-deco">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: false }}
            className="deco-card"
          >
            <div className="deco-card-label">Projects Built</div>
            <div className="deco-card-value"><span>20+</span></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            viewport={{ once: false }}
            className="deco-skills"
          >
            <div className="deco-skills-label">Tech Stack</div>
            <div className="deco-skill-pills">
              {['React', 'Node.js', 'TypeScript', 'Java', 'Spring', 'MySQL'].map((s) => (
                <span key={s} className="skill-pill">{s}</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div className="scroll-hint">
          <span className="scroll-hint-text">Scroll</span>
          <div className="scroll-hint-arrow" />
        </div>
      </section>
    </>
  )
}