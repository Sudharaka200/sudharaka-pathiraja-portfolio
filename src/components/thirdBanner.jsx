import React from 'react'
import { motion } from 'framer-motion'
import { fadeDown, zoomIn } from '../../variants'

export default function ThirdBanner() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .tb-root {
          font-family: 'DM Sans', sans-serif;
          background: #06070f;
          position: relative;
          overflow: hidden;
          padding: 120px 24px 130px;
        }

        /* Noise grain overlay */
        .tb-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.4;
        }

        /* Large radial glow */
        .tb-glow-center {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 800px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(79,142,247,0.09) 0%, transparent 65%);
          pointer-events: none;
        }

        /* Corner accent lines */
        .tb-corner {
          position: absolute;
          width: 80px; height: 80px;
          pointer-events: none;
          opacity: 0.25;
        }

        .tb-corner-tl {
          top: 40px; left: 40px;
          border-top: 1px solid #4f8ef7;
          border-left: 1px solid #4f8ef7;
        }

        .tb-corner-br {
          bottom: 40px; right: 40px;
          border-bottom: 1px solid #38d9a9;
          border-right: 1px solid #38d9a9;
        }

        .tb-inner {
          position: relative;
          z-index: 2;
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
        }

        /* Eyebrow */
        .tb-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(79,142,247,0.08);
          border: 1px solid rgba(79,142,247,0.18);
          border-radius: 100px;
          padding: 5px 14px;
          margin-bottom: 28px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #4f8ef7;
        }

        .tb-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #38d9a9;
          box-shadow: 0 0 8px #38d9a9;
          animation: tb-pulse 2s ease-in-out infinite;
        }

        @keyframes tb-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.75); }
        }

        /* Heading */
        .tb-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(36px, 6vw, 72px);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.0;
          color: #f0f2ff;
          margin: 0 0 24px;
        }

        .tb-heading .grad {
          background: linear-gradient(135deg, #4f8ef7 0%, #38d9a9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Subtext */
        .tb-sub {
          font-size: clamp(15px, 2vw, 18px);
          font-weight: 300;
          line-height: 1.7;
          color: rgba(200,210,240,0.5);
          margin: 0 auto 48px;
          max-width: 480px;
        }

        /* Button group */
        .tb-btns {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .tb-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 32px;
          border-radius: 13px;
          background: linear-gradient(135deg, #4f8ef7, #6366f1);
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 28px rgba(79,142,247,0.32);
          letter-spacing: 0.01em;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .tb-btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.14), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .tb-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 40px rgba(79,142,247,0.5);
        }

        .tb-btn-primary:hover::after { opacity: 1; }

        .tb-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 28px;
          border-radius: 13px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.09);
          color: rgba(200,210,240,0.65);
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.01em;
          font-family: 'DM Sans', sans-serif;
        }

        .tb-btn-ghost:hover {
          border-color: rgba(79,142,247,0.4);
          background: rgba(79,142,247,0.07);
          color: #fff;
          transform: translateY(-2px);
        }

        .tb-arrow {
          font-size: 17px;
          transition: transform 0.25s ease;
          display: inline-block;
        }

        .tb-btn-primary:hover .tb-arrow,
        .tb-btn-ghost:hover .tb-arrow { transform: translateX(4px); }

        /* Divider strip at top */
        .tb-divider {
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 1px; height: 80px;
          background: linear-gradient(to bottom, rgba(79,142,247,0.4), transparent);
        }
      `}</style>

      <section className="tb-root">
        <div className="tb-divider" />
        <div className="tb-glow-center" />
        <div className="tb-corner tb-corner-tl" />
        <div className="tb-corner tb-corner-br" />

        <div className="tb-inner">
          {/* Eyebrow */}
          <motion.div
            variants={fadeDown(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <span className="tb-eyebrow">
              <span className="tb-dot" />
              Open to Opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeDown(0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="tb-heading"
          >
            Let's build the<br />
            future of{' '}
            <span className="grad">Software</span>
          </motion.h2>

          {/* Sub */}
          <motion.p
            variants={zoomIn(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="tb-sub"
          >
            Have a project in mind or an opportunity to discuss?
            I'd love to connect and explore how we can create something great together.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={zoomIn(0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="tb-btns"
          >
            <a href="/contact" className="tb-btn-primary">
              Get Started
              <span className="tb-arrow">→</span>
            </a>
            <a href="#projects" className="tb-btn-ghost">
              View My Work
              <span className="tb-arrow">→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}