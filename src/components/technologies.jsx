import React from 'react'
import Java from '../images/🦆 icon _file type java_.png'
import Python from '../images/🦆 icon _file type python_.png'
import JS from '../images/🦆 icon _file type js official_.png'
import ReactJs from '../images/🦆 icon _file type reactjs_.png'
import Tailwind from '../images/🦆 icon _file type tailwind_.png'
import SpringBoot from '../images/spring-boot-logo-removebg-preview 1.png'
import Laravel from '../images/laravel-icon-249x256-kqpwzrwi 1.png'
import MySql from '../images/Vector.png'
import FireBase from '../images/🦆 icon _file type firebase_.png'
import { motion } from 'framer-motion'
import { fadeDown } from '../../variants'

const techs = [
  { src: Java,       alt: 'Java',        label: 'Java' },
  { src: Python,     alt: 'Python',      label: 'Python' },
  { src: JS,         alt: 'JavaScript',  label: 'JavaScript' },
  { src: ReactJs,    alt: 'React',       label: 'React.js' },
  { src: Tailwind,   alt: 'Tailwind CSS',label: 'Tailwind CSS' },
  { src: SpringBoot, alt: 'Spring Boot', label: 'Spring Boot' },
  { src: Laravel,    alt: 'Laravel',     label: 'Laravel' },
  { src: MySql,      alt: 'MySQL',       label: 'MySQL' },
  { src: FireBase,   alt: 'Firebase',    label: 'Firebase' },
]

export default function Technologies() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .tech-root {
          font-family: 'DM Sans', sans-serif;
          background: #0a0b14;
          position: relative;
          overflow: hidden;
          padding: 100px 24px 110px;
        }

        /* Subtle grid texture */
        .tech-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(79,142,247,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,142,247,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        /* Ambient center glow */
        .tech-glow {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 600px; height: 300px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(79,142,247,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .tech-inner {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Header */
        .tech-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .tech-eyebrow {
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

        .tech-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(34px, 4.5vw, 54px);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #f0f2ff;
          margin: 0;
          line-height: 1.05;
        }

        .tech-heading .grad {
          background: linear-gradient(135deg, #4f8ef7 0%, #38d9a9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Grid */
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 16px;
          justify-items: center;
        }

        @media (min-width: 768px) {
          .tech-grid {
            grid-template-columns: repeat(5, 1fr);
          }
        }

        /* Card */
        .tech-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
          width: 100%;
          padding: 28px 16px 22px;
          border-radius: 18px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          cursor: default;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .tech-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(79,142,247,0.4), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .tech-card:hover {
          background: rgba(79,142,247,0.06);
          border-color: rgba(79,142,247,0.22);
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(79,142,247,0.1);
        }

        .tech-card:hover::before { opacity: 1; }

        .tech-icon-wrap {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: rgba(255,255,255,0.05);
          transition: background 0.3s ease;
        }

        .tech-card:hover .tech-icon-wrap {
          background: rgba(79,142,247,0.1);
        }

        .tech-icon {
          width: 36px;
          height: 36px;
          object-fit: contain;
          filter: brightness(0.9) saturate(1.1);
          transition: filter 0.3s ease, transform 0.3s ease;
        }

        .tech-card:hover .tech-icon {
          filter: brightness(1.1) saturate(1.3);
          transform: scale(1.08);
        }

        .tech-label {
          font-size: 12.5px;
          font-weight: 500;
          color: rgba(200,210,240,0.5);
          letter-spacing: 0.02em;
          transition: color 0.3s ease;
          text-align: center;
        }

        .tech-card:hover .tech-label {
          color: rgba(200,210,240,0.9);
        }

        /* Marquee hint on small screens */
        @media (max-width: 480px) {
          .tech-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>

      <section className="tech-root">
        <div className="tech-glow" />

        <div className="tech-inner">
          {/* Header */}
          <motion.div
            variants={fadeDown(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="tech-header"
          >
            <span className="tech-eyebrow">My Toolkit</span>
            <h2 className="tech-heading">
              Technologies &{' '}
              <span className="grad">Stack</span>
            </h2>
          </motion.div>

          {/* Cards */}
          <div className="tech-grid">
            {techs.map((tech, i) => (
              <motion.div
                key={tech.alt}
                variants={fadeDown(0.1 + i * 0.06)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="tech-card"
              >
                <div className="tech-icon-wrap">
                  <img
                    src={tech.src}
                    alt={tech.alt}
                    className="tech-icon"
                  />
                </div>
                <span className="tech-label">{tech.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}