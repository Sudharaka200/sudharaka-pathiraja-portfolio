import React from 'react'
import Project1 from '../images/project1.png'
import Project2 from '../images/project2.png'
import Project3 from '../images/project3.png'
import { motion } from 'framer-motion'
import { fadeDown } from '../../variants'

const projects = [
  {
    img: Project1,
    title: 'AppleVerse E-Commerce Platform',
    description:
      'Microservices-based e-commerce app with user auth, product catalog, cart, order management, and an admin service — all independently deployable.',
    tags: ['Microservices', 'Spring Boot', 'React', 'MySQL'],
    href: 'https://github.com/Sudharaka200/Apple-verse-app',
  },
  {
    img: Project2,
    title: 'Wheeldeal Mobile Application',
    description:
      'Vehicle ad platform with post, update and delete functionality, real-time Firebase backend, authentication, and Google Maps location tagging.',
    tags: ['Firebase', 'Google Maps', 'Mobile', 'Real-time'],
    href: 'https://github.com/Sudharaka200/wheel-deal-mobile-app',
  },
  {
    img: Project3,
    title: 'Shop.Co Clothing Platform',
    description:
      'Full-stack clothing store with user registration, product browsing, cart, and order flow. PHP backend with MySQL, secure admin panel.',
    tags: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
    href: 'https://github.com/Sudharaka200/shop.co-clothing-website',
  },
]

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
)

export default function Projects() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .proj-root {
          font-family: 'DM Sans', sans-serif;
          background: #06070f;
          position: relative;
          overflow: hidden;
          padding: 100px 24px 110px;
        }

        /* Ambient glow top-right */
        .proj-glow {
          position: absolute;
          top: -60px; right: -80px;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(56,217,169,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .proj-inner {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Header */
        .proj-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .proj-eyebrow {
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

        .proj-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(34px, 4.5vw, 54px);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #f0f2ff;
          margin: 0;
          line-height: 1.05;
        }

        .proj-heading .grad {
          background: linear-gradient(135deg, #4f8ef7 0%, #38d9a9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Grid */
        .proj-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @media (min-width: 640px) {
          .proj-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (min-width: 1024px) {
          .proj-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* Card */
        .proj-card {
          display: flex;
          flex-direction: column;
          border-radius: 20px;
          overflow: hidden;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          text-decoration: none;
          transition: all 0.35s ease;
          position: relative;
        }

        .proj-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(79,142,247,0.4), transparent);
          opacity: 0;
          transition: opacity 0.35s;
          z-index: 2;
        }

        .proj-card:hover {
          border-color: rgba(79,142,247,0.22);
          transform: translateY(-8px);
          box-shadow: 0 24px 56px rgba(0,0,0,0.45), 0 0 0 1px rgba(79,142,247,0.1);
        }

        .proj-card:hover::before { opacity: 1; }

        /* Image */
        .proj-img-wrap {
          position: relative;
          overflow: hidden;
          height: 220px;
        }

        .proj-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease, filter 0.35s ease;
          filter: brightness(0.85) saturate(0.9);
        }

        .proj-card:hover .proj-img {
          transform: scale(1.06);
          filter: brightness(1) saturate(1.1);
        }

        /* Image overlay gradient */
        .proj-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(6,7,15,0.7) 0%, transparent 50%);
          z-index: 1;
        }

        /* Arrow button on image hover */
        .proj-arrow-btn {
          position: absolute;
          top: 14px; right: 14px;
          width: 36px; height: 36px;
          border-radius: 10px;
          background: rgba(12,14,26,0.85);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(200,210,240,0.6);
          z-index: 2;
          opacity: 0;
          transform: translate(4px, -4px);
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }

        .proj-card:hover .proj-arrow-btn {
          opacity: 1;
          transform: translate(0, 0);
          color: #fff;
        }

        /* Body */
        .proj-body {
          padding: 22px 24px 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 10px;
        }

        .proj-title {
          font-family: 'Syne', sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: #f0f2ff;
          line-height: 1.3;
          transition: color 0.2s ease;
        }

        .proj-card:hover .proj-title { color: #fff; }

        .proj-desc {
          font-size: 13.5px;
          font-weight: 300;
          line-height: 1.7;
          color: rgba(200,210,240,0.5);
          flex: 1;
        }

        /* Tags */
        .proj-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 4px;
        }

        .proj-tag {
          font-size: 11px;
          font-weight: 500;
          padding: 3px 10px;
          border-radius: 100px;
          background: rgba(79,142,247,0.08);
          border: 1px solid rgba(79,142,247,0.16);
          color: rgba(79,142,247,0.85);
          letter-spacing: 0.02em;
        }

        /* Footer link */
        .proj-link-row {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12.5px;
          font-weight: 500;
          color: rgba(200,210,240,0.35);
          margin-top: 6px;
          transition: color 0.2s ease;
        }

        .proj-card:hover .proj-link-row { color: #4f8ef7; }

        /* CTA bottom */
        .proj-footer {
          text-align: center;
          margin-top: 56px;
        }

        .proj-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 13px 28px;
          border-radius: 12px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(200,210,240,0.7);
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
          font-family: 'DM Sans', sans-serif;
        }

        .proj-cta-btn:hover {
          border-color: rgba(79,142,247,0.4);
          background: rgba(79,142,247,0.07);
          color: #fff;
          transform: translateY(-2px);
        }

        .proj-cta-arrow {
          font-size: 16px;
          transition: transform 0.25s ease;
        }

        .proj-cta-btn:hover .proj-cta-arrow { transform: translateX(4px); }
      `}</style>

      <section className="proj-root" id="projects">
        <div className="proj-glow" />

        <div className="proj-inner">
          {/* Header */}
          <motion.div
            variants={fadeDown(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="proj-header"
          >
            <span className="proj-eyebrow">My Work</span>
            <h2 className="proj-heading">
              Featured{' '}
              <span className="grad">Projects</span>
            </h2>
          </motion.div>

          {/* Cards grid */}
          <div className="proj-grid">
            {projects.map((proj, i) => (
              <motion.a
                key={proj.title}
                href={proj.href}
                target="_blank"
                rel="noreferrer"
                variants={fadeDown(0.15 + i * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="proj-card"
              >
                {/* Image */}
                <div className="proj-img-wrap">
                  <img src={proj.img} alt={proj.title} className="proj-img" />
                  <div className="proj-img-overlay" />
                  <div className="proj-arrow-btn">
                    <ArrowIcon />
                  </div>
                </div>

                {/* Body */}
                <div className="proj-body">
                  <div className="proj-title">{proj.title}</div>
                  <p className="proj-desc">{proj.description}</p>
                  <div className="proj-tags">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="proj-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="proj-link-row">
                    <ArrowIcon />
                    View on GitHub
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={fadeDown(0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="proj-footer"
          >
            <a
              href="https://github.com/Sudharaka200"
              target="_blank"
              rel="noreferrer"
              className="proj-cta-btn"
            >
              View all projects on GitHub
              <span className="proj-cta-arrow">→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}