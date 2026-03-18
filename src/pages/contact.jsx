import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import From from '../components/form'
import { motion } from 'framer-motion'
import { fadeDown, zoomIn, flipInX } from '../../variants'

const CV_pdf_url = 'https://drive.google.com/uc?export=download&id=10cM7mdzrGCGBjPQeSVsJBHn_Amye-9bb'

const contactCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email',
    value: 'sudharakapathiraja200@gmail.com',
    href: 'mailto:sudharakapathiraja200@gmail.com',
    action: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Phone',
    value: '+94 71 985 9294',
    href: 'tel:+94719859294',
    action: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'Sudharaka Pathiraja',
    href: 'https://www.linkedin.com/in/sudharaka-pathiraja-10646820b',
    action: 'Connect',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
    label: 'GitHub',
    value: '@Sudharaka200',
    href: 'https://github.com/Sudharaka200',
    action: 'Follow',
  },
]

export default function Contact() {
  const downloadCV = () => {
    const a = document.createElement('a')
    a.href = CV_pdf_url
    a.setAttribute('download', 'Sudharaka_CV.pdf')
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .ct-page {
          font-family: 'DM Sans', sans-serif;
          background: #06070f;
          min-height: 100svh;
        }

        .ct-section {
          position: relative;
          overflow: hidden;
          padding: 120px 24px 100px;
        }

        /* Ambient glow */
        .ct-glow {
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(79,142,247,0.08) 0%, transparent 65%);
          pointer-events: none;
        }

        .ct-glow-br {
          position: absolute;
          bottom: -100px; right: -100px;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(56,217,169,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .ct-inner {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Header */
        .ct-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .ct-eyebrow {
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

        .ct-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #38d9a9;
          box-shadow: 0 0 8px #38d9a9;
          animation: ct-pulse 2s ease-in-out infinite;
        }

        @keyframes ct-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.75); }
        }

        .ct-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(36px, 5.5vw, 64px);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.05;
          color: #f0f2ff;
          margin: 0 0 16px;
        }

        .ct-heading .grad {
          background: linear-gradient(135deg, #4f8ef7 0%, #38d9a9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ct-sub {
          font-size: 16px;
          font-weight: 300;
          color: rgba(200,210,240,0.5);
          max-width: 460px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Cards grid */
        .ct-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }

        @media (min-width: 768px) {
          .ct-cards { grid-template-columns: repeat(4, 1fr); }
        }

        @media (max-width: 480px) {
          .ct-cards { grid-template-columns: 1fr; }
        }

        .ct-card {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 24px 22px;
          border-radius: 18px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .ct-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(79,142,247,0.4), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .ct-card:hover {
          border-color: rgba(79,142,247,0.22);
          background: rgba(79,142,247,0.05);
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.3);
        }

        .ct-card:hover::before { opacity: 1; }

        .ct-card-icon {
          width: 44px; height: 44px;
          border-radius: 12px;
          background: rgba(79,142,247,0.1);
          border: 1px solid rgba(79,142,247,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4f8ef7;
          transition: background 0.3s ease;
        }

        .ct-card:hover .ct-card-icon {
          background: rgba(79,142,247,0.18);
        }

        .ct-card-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(200,210,240,0.35);
        }

        .ct-card-value {
          font-size: 13.5px;
          font-weight: 500;
          color: rgba(200,210,240,0.8);
          line-height: 1.4;
          word-break: break-word;
        }

        .ct-card-action {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          font-weight: 600;
          color: #4f8ef7;
          margin-top: 4px;
          transition: gap 0.2s ease;
        }

        .ct-card:hover .ct-card-action { gap: 8px; }

        /* CV download strip */
        .ct-cv-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 28px;
          border-radius: 16px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          margin-bottom: 64px;
          flex-wrap: wrap;
        }

        .ct-cv-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .ct-cv-title {
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #f0f2ff;
        }

        .ct-cv-sub {
          font-size: 13px;
          font-weight: 300;
          color: rgba(200,210,240,0.4);
        }

        .ct-cv-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 22px;
          border-radius: 10px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(200,210,240,0.8);
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.25s ease;
          font-family: 'DM Sans', sans-serif;
          white-space: nowrap;
        }

        .ct-cv-btn:hover {
          background: rgba(79,142,247,0.1);
          border-color: rgba(79,142,247,0.3);
          color: #fff;
          transform: translateY(-2px);
        }

        /* Form wrapper */
        .ct-form-wrap {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 24px;
          padding: 48px;
          position: relative;
          overflow: hidden;
        }

        .ct-form-wrap::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(79,142,247,0.3), rgba(56,217,169,0.2), transparent);
        }

        .ct-form-title {
          font-family: 'Syne', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #f0f2ff;
          margin-bottom: 6px;
        }

        .ct-form-sub {
          font-size: 14px;
          font-weight: 300;
          color: rgba(200,210,240,0.4);
          margin-bottom: 32px;
        }

        @media (max-width: 640px) {
          .ct-form-wrap { padding: 28px 20px; }
        }
      `}</style>

      <div className="ct-page">
        <Navbar />

        <section className="ct-section">
          <div className="ct-glow" />
          <div className="ct-glow-br" />

          <div className="ct-inner">
            {/* Header */}
            <motion.div
              variants={fadeDown(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="ct-header"
            >
              <span className="ct-eyebrow">
                <span className="ct-dot" />
                Get In Touch
              </span>
              <h1 className="ct-heading">
                Connect with{' '}
                <span className="grad">Me</span>
              </h1>
              <p className="ct-sub">
                Open to opportunities, collaborations, and interesting conversations. Let's build something great.
              </p>
            </motion.div>

            {/* Contact cards */}
            <motion.div
              variants={zoomIn(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="ct-cards"
            >
              {contactCards.map((card, i) => (
                <motion.a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                  variants={flipInX(0.1 + i * 0.08)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.3 }}
                  className="ct-card"
                >
                  <div className="ct-card-icon">{card.icon}</div>
                  <div>
                    <div className="ct-card-label">{card.label}</div>
                    <div className="ct-card-value">{card.value}</div>
                  </div>
                  {card.action && (
                    <div className="ct-card-action">
                      {card.action} →
                    </div>
                  )}
                </motion.a>
              ))}
            </motion.div>

            {/* CV download strip */}
            <motion.div
              variants={zoomIn(0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="ct-cv-strip"
            >
              <div className="ct-cv-text">
                <span className="ct-cv-title">Download my CV</span>
                <span className="ct-cv-sub">Get a full overview of my experience and skills</span>
              </div>
              <button onClick={downloadCV} className="ct-cv-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download CV
              </button>
            </motion.div>

            {/* Contact form */}
            <motion.div
              variants={fadeDown(0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="ct-form-wrap"
            >
              <p className="ct-form-title">Send a Message</p>
              <p className="ct-form-sub">Fill out the form below and I'll get back to you as soon as possible.</p>
              <From />
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}