import React from 'react'
import { motion } from 'framer-motion'
import { fadeDown, zoomIn } from '../../variants'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8l3 3-3 3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 14h4" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Custom Software Development',
    description: 'Design and build scalable applications tailored to business needs — from enterprise systems to mobile and web apps.',
    accent: '#4f8ef7',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Mobile & Web App Development',
    description: 'Craft seamless, responsive, and intuitive applications using technologies like React and Spring Boot.',
    accent: '#38d9a9',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'System Integration & API Development',
    description: 'Develop and integrate RESTful APIs that connect services, systems, and platforms for cohesive digital experiences.',
    accent: '#a78bfa',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/>
        <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/>
      </svg>
    ),
    title: 'AI & Machine Learning Solutions',
    description: 'Integrate AI features with machine learning for automation, predictive analytics, NLP, and personalized user experiences.',
    accent: '#f97316',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
      </svg>
    ),
    title: 'Database Design & Management',
    description: 'Optimize data storage, retrieval, and performance with Oracle SQL, MySQL, and Firebase-backed solutions.',
    accent: '#34d399',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <path d="M9 9h1v6H9zM14 9h1v6h-1z" fill="currentColor" stroke="none"/>
        <path d="M7 15h10" strokeLinecap="round"/>
      </svg>
    ),
    title: 'UI/UX Focused Solutions',
    description: 'Create user-friendly interfaces with clean, modern design using Tailwind CSS and React, focused on usability and performance.',
    accent: '#60a5fa',
  },
]

export default function WhatIDo() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .wd-root {
          font-family: 'DM Sans', sans-serif;
          background: #06070f;
          position: relative;
          overflow: hidden;
          padding: 100px 24px 110px;
        }

        /* Ambient glow top-right */
        .wd-glow-1 {
          position: absolute;
          top: -60px; right: -60px;
          width: 420px; height: 420px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .wd-glow-2 {
          position: absolute;
          bottom: -60px; left: -60px;
          width: 380px; height: 380px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(79,142,247,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .wd-inner {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Header */
        .wd-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .wd-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(79,142,247,0.08);
          border: 1px solid rgba(79,142,247,0.18);
          border-radius: 100px;
          padding: 5px 14px;
          margin-bottom: 18px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #4f8ef7;
        }

        .wd-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(34px, 4.5vw, 54px);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #f0f2ff;
          margin: 0;
          line-height: 1.05;
        }

        .wd-heading .grad {
          background: linear-gradient(135deg, #4f8ef7 0%, #38d9a9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Grid */
        .wd-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        @media (max-width: 1024px) {
          .wd-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .wd-grid { grid-template-columns: 1fr; }
        }

        /* Card */
        .wd-card {
          position: relative;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 28px 26px 30px;
          overflow: hidden;
          transition: all 0.35s ease;
          cursor: default;
        }

        .wd-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--accent, #4f8ef7), transparent);
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .wd-card:hover {
          border-color: rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.3);
        }

        .wd-card:hover::before { opacity: 1; }

        /* Icon box */
        .wd-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          background: var(--accent-bg, rgba(79,142,247,0.1));
          border: 1px solid var(--accent-border, rgba(79,142,247,0.2));
          color: var(--accent, #4f8ef7);
          transition: all 0.3s ease;
        }

        .wd-card:hover .wd-icon {
          transform: scale(1.08);
          box-shadow: 0 0 20px var(--accent-glow, rgba(79,142,247,0.2));
        }

        .wd-card-num {
          position: absolute;
          top: 22px;
          right: 22px;
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: rgba(255,255,255,0.06);
          letter-spacing: 0.05em;
        }

        .wd-card-title {
          font-family: 'Syne', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #f0f2ff;
          margin: 0 0 10px;
          line-height: 1.3;
        }

        .wd-card-desc {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.75;
          color: rgba(200,210,240,0.55);
          margin: 0;
        }

        /* Arrow hint on hover */
        .wd-card-arrow {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          font-weight: 500;
          margin-top: 16px;
          color: var(--accent, #4f8ef7);
          opacity: 0;
          transform: translateX(-6px);
          transition: all 0.3s ease;
        }

        .wd-card:hover .wd-card-arrow {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      <section className="wd-root" id="whatIDo">
        <div className="wd-glow-1" />
        <div className="wd-glow-2" />

        <div className="wd-inner">
          {/* Header */}
          <motion.div
            variants={fadeDown(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="wd-header"
          >
            <span className="wd-eyebrow">Services</span>
            <h2 className="wd-heading">
              What I{' '}
              <span className="grad">Do</span>
            </h2>
          </motion.div>

          {/* Cards grid */}
          <div className="wd-grid">
            {services.map((s, i) => (
              <motion.div
                key={i}
                variants={zoomIn(0.15 + i * 0.07)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="wd-card"
                style={{
                  '--accent': s.accent,
                  '--accent-bg': `${s.accent}14`,
                  '--accent-border': `${s.accent}28`,
                  '--accent-glow': `${s.accent}28`,
                }}
              >
                <span className="wd-card-num">0{i + 1}</span>

                <div className="wd-icon">{s.icon}</div>

                <h3 className="wd-card-title">{s.title}</h3>
                <p className="wd-card-desc">{s.description}</p>

                <div className="wd-card-arrow">
                  Learn more →
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}