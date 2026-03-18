import React from 'react'
import { motion } from 'framer-motion'
import { fadeDown, zoomIn } from '../../variants'

export default function SecondBanner() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .sb-root {
          font-family: 'DM Sans', sans-serif;
          background: #06070f;
          position: relative;
          overflow: hidden;
        }

        /* Top divider line */
        .sb-root::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 80px;
          background: linear-gradient(to bottom, transparent, rgba(79,142,247,0.4));
        }

        /* Ambient glow */
        .sb-glow {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 700px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(79,142,247,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .sb-inner {
          position: relative;
          z-index: 2;
          max-width: 860px;
          margin: 0 auto;
          padding: 100px 32px 110px;
          text-align: center;
        }

        /* Eyebrow tag */
        .sb-eyebrow {
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

        .sb-eyebrow-line {
          width: 18px;
          height: 1px;
          background: #4f8ef7;
          opacity: 0.6;
        }

        /* Heading */
        .sb-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(32px, 5vw, 58px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: #f0f2ff;
          margin: 0 0 20px;
        }

        .sb-heading .grad {
          background: linear-gradient(135deg, #4f8ef7 0%, #38d9a9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Body text */
        .sb-body {
          font-size: clamp(15px, 1.8vw, 17px);
          font-weight: 300;
          line-height: 1.75;
          color: rgba(200,210,240,0.55);
          max-width: 600px;
          margin: 0 auto 52px;
        }

        /* CTA card */
        .sb-cta-card {
          display: inline-flex;
          align-items: center;
          gap: 32px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 28px 36px;
          backdrop-filter: blur(12px);
          flex-wrap: wrap;
          justify-content: center;
        }

        .sb-cta-text {
          text-align: left;
        }

        .sb-cta-title {
          font-family: 'Syne', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #f0f2ff;
          margin: 0 0 4px;
        }

        .sb-cta-sub {
          font-size: 14px;
          font-weight: 300;
          color: rgba(200,210,240,0.5);
          margin: 0;
        }

        /* Divider */
        .sb-divider {
          width: 1px;
          height: 48px;
          background: rgba(255,255,255,0.08);
        }

        @media (max-width: 540px) {
          .sb-divider { display: none; }
          .sb-cta-text { text-align: center; }
        }

        /* Button */
        .sb-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 30px;
          border-radius: 12px;
          background: linear-gradient(135deg, #4f8ef7, #6366f1);
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.3s ease;
          box-shadow: 0 4px 24px rgba(79,142,247,0.3);
          position: relative;
          overflow: hidden;
          letter-spacing: 0.01em;
        }

        .sb-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.12), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .sb-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(79,142,247,0.45);
        }

        .sb-btn:hover::after { opacity: 1; }

        .sb-btn-arrow {
          font-size: 16px;
          transition: transform 0.25s ease;
          display: inline-block;
        }

        .sb-btn:hover .sb-btn-arrow {
          transform: translateX(4px);
        }

        /* Bottom fade line */
        .sb-root::after {
          content: '';
          position: absolute;
          bottom: 0; left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 80px;
          background: linear-gradient(to top, transparent, rgba(79,142,247,0.4));
        }
      `}</style>

      <div className="sb-root">
        <div className="sb-glow" />

        <div className="sb-inner">
          {/* Eyebrow */}
          <motion.div
            variants={fadeDown(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <span className="sb-eyebrow">
              <span className="sb-eyebrow-line" />
              What I Do
              <span className="sb-eyebrow-line" />
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeDown(0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="sb-heading"
          >
            Revolutionizing Digital<br />
            Experiences with{' '}
            <span className="grad">Smart Software</span>
          </motion.h2>

          {/* Body */}
          <motion.p
            variants={zoomIn(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="sb-body"
          >
            I build intelligent, user-focused software solutions that solve real-world problems
            and drive innovation. From mobile apps to enterprise systems, I create technology
            that empowers businesses and transforms everyday experiences.
          </motion.p>

          {/* CTA Card */}
          <motion.div
            variants={zoomIn(0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div className="sb-cta-card">
              <div className="sb-cta-text">
                <p className="sb-cta-title">Let's work together</p>
                <p className="sb-cta-sub">Discuss your project needs.</p>
              </div>

              <div className="sb-divider" />

              <a href="/contact" className="sb-btn">
                Get Started
                <span className="sb-btn-arrow">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}