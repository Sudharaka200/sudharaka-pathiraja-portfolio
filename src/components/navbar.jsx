'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../images/Sudharaka-logo.png'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        .nav-root * {
          font-family: 'DM Sans', sans-serif;
          box-sizing: border-box;
        }

        .nav-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          padding: 20px 24px;
          transition: padding 0.4s ease;
        }

        .nav-wrapper.scrolled {
          padding: 12px 24px;
        }

        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(8, 8, 12, 0.72);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 14px 28px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 0.5px rgba(255,255,255,0.04) inset;
          transition: all 0.4s ease;
        }

        .nav-wrapper.scrolled .nav-inner {
          border-radius: 12px;
          padding: 10px 24px;
          background: rgba(8, 8, 12, 0.88);
        }

        /* Logo */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex: 1;
        }

        .nav-logo img {
          height: 32px;
          width: auto;
          filter: brightness(0) invert(1);
        }

        .logo-name {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 16px;
          color: #fff;
          letter-spacing: -0.3px;
        }

        /* Desktop nav links */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          position: relative;
          text-decoration: none;
          font-size: 13.5px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.6);
          padding: 8px 16px;
          border-radius: 8px;
          transition: color 0.25s ease, background 0.25s ease;
          letter-spacing: 0.01em;
        }

        .nav-link:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.07);
        }

        /* CTA Button */
        .nav-cta {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex: 1;
        }

        .cta-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          border-radius: 10px;
          text-decoration: none;
          font-size: 13.5px;
          font-weight: 600;
          letter-spacing: 0.01em;
          color: #0a0a0f;
          background: #fff;
          border: none;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 2px 16px rgba(255, 255, 255, 0.15);
        }

        .cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(120, 120, 255, 0.15), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .cta-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 24px rgba(255, 255, 255, 0.25);
        }

        .cta-btn:hover::before {
          opacity: 1;
        }

        .cta-arrow {
          font-size: 16px;
          transition: transform 0.25s ease;
          display: inline-block;
        }

        .cta-btn:hover .cta-arrow {
          transform: translateX(3px);
        }

        /* Mobile toggle */
        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.8);
          cursor: pointer;
          padding: 4px;
          border-radius: 8px;
          transition: background 0.2s;
        }

        .mobile-toggle:hover {
          background: rgba(255, 255, 255, 0.08);
        }

        /* Divider dot */
        .nav-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          margin: 0 4px;
        }

        /* Mobile Panel */
        .mobile-panel {
          background: rgba(8, 8, 12, 0.96);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-left: 1px solid rgba(255,255,255,0.07);
          padding: 24px;
        }

        .mobile-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 32px;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .mobile-nav-link {
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.65);
          padding: 13px 16px;
          border-radius: 10px;
          transition: color 0.2s ease, background 0.2s ease;
          border: 1px solid transparent;
        }

        .mobile-nav-link:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255,255,255,0.07);
        }

        .mobile-cta {
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.07);
        }

        .mobile-cta-btn {
          display: block;
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          text-align: center;
          font-size: 14px;
          font-weight: 600;
          color: #0a0a0f;
          background: #fff;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .mobile-cta-btn:hover {
          opacity: 0.9;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .nav-links, .nav-cta {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>

      <div className="nav-root">
        <header className={`nav-wrapper ${scrolled ? 'scrolled' : ''}`}>
          <div className="nav-inner">
            {/* Logo */}
            <a href="/" className="nav-logo">
              <img src={Logo} alt="Sudharaka" />
            </a>

            {/* Desktop Nav */}
            <nav>
              <ul className="nav-links">
                {navigation.map((item, i) => (
                  <li key={item.name} style={{ display: 'flex', alignItems: 'center' }}>
                    {i !== 0 && <span className="nav-dot" />}
                    {item.href.startsWith('#') ? (
                      <a href={item.href} className="nav-link">{item.name}</a>
                    ) : (
                      <Link to={item.href} className="nav-link">{item.name}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA */}
            <div className="nav-cta">
              <a href="/contact" className="cta-btn">
                Get Started
                <span className="cta-arrow">→</span>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon style={{ width: 22, height: 22 }} />
            </button>
          </div>
        </header>

        {/* Mobile Dialog */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 49 }} />
          <DialogPanel
            className="mobile-panel"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              zIndex: 50,
              width: '100%',
              maxWidth: '320px',
              overflowY: 'auto',
            }}
          >
            <div className="mobile-header">
              <a href="/" className="nav-logo" style={{ flex: 'unset' }}>
                <img src={Logo} alt="Sudharaka" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: 'rgba(255,255,255,0.8)',
                  padding: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <XMarkIcon style={{ width: 18, height: 18 }} />
              </button>
            </div>

            <div className="mobile-nav-links">
              {navigation.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="mobile-nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>

            <div className="mobile-cta">
              <a href="/contact" className="mobile-cta-btn">
                Get Started →
              </a>
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    </>
  )
}