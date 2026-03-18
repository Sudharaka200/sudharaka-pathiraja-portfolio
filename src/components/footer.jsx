import React from 'react'
import FooterLogo from '../images/Logo-main 2.png'

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sudharaka-pathiraja-10646820b/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Sudharaka200',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://web.facebook.com/sudha.raka.75/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/__su.zx/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
]

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '/contact' },
  { label: 'Get Started', href: '/contact' },
]

const services = [
  'Custom Software Development',
  'Mobile & Web App Development',
  'System Integration & API Development',
  'AI & Machine Learning Solutions',
  'Database Design & Management',
  'UI/UX Focused Solutions',
]

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .ft-root {
          font-family: 'DM Sans', sans-serif;
          background: #04050c;
          border-top: 1px solid rgba(255,255,255,0.05);
          position: relative;
          overflow: hidden;
        }

        /* Top glow line */
        .ft-root::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(79,142,247,0.3), rgba(56,217,169,0.2), transparent);
        }

        .ft-inner {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 72px 32px 0;
        }

        /* Main grid */
        .ft-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
        }

        @media (min-width: 640px) {
          .ft-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (min-width: 1024px) {
          .ft-grid { grid-template-columns: 2fr 1fr 1.4fr; gap: 64px; }
        }

        /* Brand col */
        .ft-logo {
          height: 36px;
          width: auto;
          margin-bottom: 20px;
          filter: brightness(0) invert(1);
          opacity: 0.9;
        }

        .ft-tagline {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.75;
          color: rgba(200,210,240,0.45);
          max-width: 340px;
          margin-bottom: 28px;
        }

        /* Socials */
        .ft-socials {
          display: flex;
          gap: 10px;
        }

        .ft-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px; height: 38px;
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          color: rgba(200,210,240,0.5);
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .ft-social-link:hover {
          background: rgba(79,142,247,0.1);
          border-color: rgba(79,142,247,0.28);
          color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 4px 16px rgba(79,142,247,0.2);
        }

        /* Column headers */
        .ft-col-title {
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(200,210,240,0.9);
          margin-bottom: 20px;
        }

        /* Links */
        .ft-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ft-link {
          font-size: 13.5px;
          font-weight: 300;
          color: rgba(200,210,240,0.45);
          text-decoration: none;
          transition: color 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .ft-link::before {
          content: '';
          display: inline-block;
          width: 0;
          height: 1px;
          background: #4f8ef7;
          transition: width 0.25s ease;
          flex-shrink: 0;
        }

        .ft-link:hover {
          color: rgba(200,210,240,0.9);
        }

        .ft-link:hover::before { width: 12px; }

        /* Divider */
        .ft-divider {
          margin-top: 64px;
          border: none;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        /* Bottom bar */
        .ft-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 32px;
          max-width: 1200px;
          margin: 0 auto;
          flex-wrap: wrap;
          gap: 12px;
        }

        .ft-copy {
          font-size: 12.5px;
          color: rgba(200,210,240,0.3);
          font-weight: 300;
        }

        .ft-copy strong {
          color: rgba(200,210,240,0.5);
          font-weight: 500;
        }

        .ft-made {
          font-size: 12px;
          color: rgba(200,210,240,0.2);
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .ft-heart {
          color: #f87171;
          font-size: 13px;
          animation: ft-beat 2s ease-in-out infinite;
        }

        @keyframes ft-beat {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.25); }
        }
      `}</style>

      <footer className="ft-root">
        <div className="ft-inner">
          <div className="ft-grid">

            {/* Brand */}
            <div>
              <img src={FooterLogo} alt="Sudharaka" className="ft-logo" />
              <p className="ft-tagline">
                Have a project in mind or an opportunity to discuss? I'd love to connect — whether it's mobile development, enterprise solutions, or software architecture.
              </p>
              <div className="ft-socials">
                {socialLinks.map((s) => (
                  <a key={s.name} href={s.href} className="ft-social-link" target="_blank" rel="noreferrer" title={s.name}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <p className="ft-col-title">Quick Links</p>
              <div className="ft-links">
                {quickLinks.map((l) => (
                  <a key={l.label} href={l.href} className="ft-link">{l.label}</a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <p className="ft-col-title">Services</p>
              <div className="ft-links">
                {services.map((s) => (
                  <a key={s} href="#whatIDo" className="ft-link">{s}</a>
                ))}
              </div>
            </div>

          </div>

          <hr className="ft-divider" />
        </div>

        {/* Bottom bar */}
        <div className="ft-bottom">
          <p className="ft-copy">
            © 2025 <strong>Sudharaka Pathiraja</strong>. All rights reserved.
          </p>
          <p className="ft-made">
            Built with <span className="ft-heart">♥</span> in Sri Lanka
          </p>
        </div>
      </footer>
    </>
  )
}