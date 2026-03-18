import React from 'react'
import AboutImg from '../images/Group 1000006193.png'
import { motion } from 'framer-motion'
import { fadeDown, zoomIn, flipInX } from '../../variants'

const skills = [
  { label: 'Languages', items: ['Java', 'Python', 'JavaScript', 'C#', 'PHP'] },
  { label: 'Frameworks', items: ['React.js', 'Spring Boot', 'Vue.js', 'AngularJS', '.NET'] },
  { label: 'Databases', items: ['MySQL', 'MongoDB', 'Firebase', 'Oracle'] },
  { label: 'DevOps & Cloud', items: ['Docker', 'AWS', 'Azure', 'Kubernetes', 'CI/CD'] },
]

export default function AboutMe() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .ab-root {
          font-family: 'DM Sans', sans-serif;
          background: #06070f;
          position: relative;
          overflow: hidden;
        }

        /* Ambient glow top-right */
        .ab-glow {
          position: absolute;
          top: -100px; right: -100px;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(56,217,169,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .ab-inner {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 32px 110px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        @media (max-width: 900px) {
          .ab-inner {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 80px 24px 90px;
          }
          .ab-img-col { order: -1; }
        }

        /* --- Left: image column --- */
        .ab-img-col {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .ab-img-frame {
          position: relative;
          display: inline-block;
        }

        /* Decorative corner brackets */
        .ab-img-frame::before,
        .ab-img-frame::after {
          content: '';
          position: absolute;
          width: 32px; height: 32px;
          border-color: #4f8ef7;
          border-style: solid;
          z-index: 3;
        }

        .ab-img-frame::before {
          top: -8px; left: -8px;
          border-width: 2px 0 0 2px;
        }

        .ab-img-frame::after {
          bottom: -8px; right: -8px;
          border-width: 0 2px 2px 0;
        }

        .ab-img {
          width: 100%;
          max-width: 380px;
          height: auto;
          border-radius: 20px;
          display: block;
          position: relative;
          z-index: 2;
          filter: brightness(0.95) contrast(1.05);
        }

        /* Teal accent blob behind image */
        .ab-img-blob {
          position: absolute;
          inset: -16px;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(79,142,247,0.12), rgba(56,217,169,0.08));
          z-index: 1;
          filter: blur(2px);
        }

        /* Experience badge */
        .ab-badge {
          position: absolute;
          bottom: -16px;
          right: -16px;
          background: rgba(12,14,26,0.92);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 14px 18px;
          backdrop-filter: blur(12px);
          z-index: 4;
          text-align: center;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        }

        .ab-badge-num {
          font-family: 'Syne', sans-serif;
          font-size: 28px;
          font-weight: 800;
          line-height: 1;
          background: linear-gradient(135deg, #4f8ef7, #38d9a9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ab-badge-label {
          font-size: 11px;
          color: rgba(200,210,240,0.5);
          margin-top: 3px;
          letter-spacing: 0.05em;
        }

        /* --- Right: text column --- */
        .ab-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(79,142,247,0.08);
          border: 1px solid rgba(79,142,247,0.18);
          border-radius: 100px;
          padding: 5px 14px;
          margin-bottom: 20px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #4f8ef7;
        }

        .ab-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(34px, 4vw, 52px);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #f0f2ff;
          line-height: 1.05;
          margin: 0 0 20px;
        }

        .ab-heading .grad {
          background: linear-gradient(135deg, #4f8ef7 0%, #38d9a9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ab-body {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(200,210,240,0.6);
          margin: 0 0 36px;
        }

        .ab-body strong {
          color: rgba(200,210,240,0.9);
          font-weight: 500;
        }

        /* Skill groups */
        .ab-skills {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 40px;
        }

        .ab-skill-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .ab-skill-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(200,210,240,0.35);
          min-width: 90px;
          padding-top: 5px;
        }

        .ab-skill-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .ab-pill {
          font-size: 12px;
          font-weight: 500;
          padding: 4px 12px;
          border-radius: 100px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(200,210,240,0.75);
          transition: all 0.2s ease;
        }

        .ab-pill:hover {
          background: rgba(79,142,247,0.1);
          border-color: rgba(79,142,247,0.25);
          color: #4f8ef7;
        }

        /* CTA row */
        .ab-cta {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .ab-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 13px 26px;
          border-radius: 11px;
          background: linear-gradient(135deg, #4f8ef7, #6366f1);
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 24px rgba(79,142,247,0.28);
          letter-spacing: 0.01em;
        }

        .ab-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(79,142,247,0.45);
        }

        .ab-btn-arrow {
          font-size: 15px;
          transition: transform 0.25s ease;
          display: inline-block;
        }

        .ab-btn:hover .ab-btn-arrow { transform: translateX(4px); }

        .ab-edu {
          font-size: 13px;
          color: rgba(200,210,240,0.4);
          font-weight: 300;
        }

        .ab-edu strong {
          color: rgba(200,210,240,0.7);
          font-weight: 500;
        }
      `}</style>

      <section className="ab-root" id="about">
        <div className="ab-glow" />

        <div className="ab-inner">
          {/* Left — Image */}
          <motion.div
            variants={flipInX(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="ab-img-col"
          >
            <div className="ab-img-frame">
              <div className="ab-img-blob" />
              <img src={AboutImg} alt="Sudharaka Pathiraja" className="ab-img" />
              <div className="ab-badge">
                <div className="ab-badge-num">2+</div>
                <div className="ab-badge-label">Years Exp.</div>
              </div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <div>
            <motion.div
              variants={fadeDown(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
            >
              <span className="ab-eyebrow">Who I Am</span>
            </motion.div>

            <motion.h2
              variants={fadeDown(0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="ab-heading"
            >
              Crafting software<br />
              that <span className="grad">matters</span>
            </motion.h2>

            <motion.p
              variants={zoomIn(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="ab-body"
            >
              I'm <strong>Sudharaka Pathiraja</strong>, an Associate Software Engineer pursuing a
              BSc (Hons) in Software Engineering at NIBM. I specialize in <strong>full-stack
              development</strong>, database management, and cloud technologies — passionate about
              building innovative solutions that solve real-world problems and drive meaningful impact.
            </motion.p>

            {/* Skills grid */}
            <motion.div
              variants={zoomIn(0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="ab-skills"
            >
              {skills.map((group) => (
                <div key={group.label} className="ab-skill-row">
                  <span className="ab-skill-label">{group.label}</span>
                  <div className="ab-skill-pills">
                    {group.items.map((item) => (
                      <span key={item} className="ab-pill">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={zoomIn(0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="ab-cta"
            >
              <a href="/contact" className="ab-btn">
                Get In Touch
                <span className="ab-btn-arrow">→</span>
              </a>
              <p className="ab-edu">
                <strong>BSc (Hons) Software Engineering</strong><br />
                NIBM · Ongoing
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}