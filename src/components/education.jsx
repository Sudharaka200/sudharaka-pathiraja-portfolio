import React from 'react'
import { motion } from 'framer-motion'
import { fadeDown, fadeInUp } from '../../variants'

const timelineData = [
  {
    title: 'BSc (Hons) in Computing',
    subtitle: 'Software Engineering Pathway',
    date: '2023 – 2027',
    institution: 'National Institute of Business Management',
    tag: 'Ongoing',
    tagColor: '#38d9a9',
  },
  {
    title: 'Certificate in Fullstack Development',
    subtitle: null,
    date: '2022 – 2023',
    institution: 'SOV Education',
    tag: 'Completed',
    tagColor: '#4f8ef7',
  },
  {
    title: 'GCE Advanced Level',
    subtitle: 'Commerce Stream',
    date: '2020',
    institution: 'Saranath College – Kuliyapitiya',
    tag: null,
    tagColor: null,
  },
  {
    title: 'GCE Ordinary Level',
    subtitle: null,
    date: '2017',
    institution: 'Saranath College – Kuliyapitiya',
    tag: null,
    tagColor: null,
  },
]

const GradCapIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
  </svg>
)

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default function EducationTimeline() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .edu-root {
          font-family: 'DM Sans', sans-serif;
          background: #06070f;
          position: relative;
          overflow: hidden;
          padding: 100px 24px 110px;
        }

        /* Ambient glow */
        .edu-glow {
          position: absolute;
          bottom: -80px; left: -80px;
          width: 480px; height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(79,142,247,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .edu-inner {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
        }

        /* Section header */
        .edu-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .edu-eyebrow {
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

        .edu-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(34px, 4.5vw, 54px);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #f0f2ff;
          margin: 0;
          line-height: 1.05;
        }

        .edu-heading .grad {
          background: linear-gradient(135deg, #4f8ef7 0%, #38d9a9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Timeline wrapper */
        .edu-timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* Vertical line */
        .edu-timeline::before {
          content: '';
          position: absolute;
          left: 19px;
          top: 20px;
          bottom: 20px;
          width: 1px;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(79,142,247,0.3) 15%,
            rgba(79,142,247,0.3) 85%,
            transparent
          );
        }

        @media (min-width: 640px) {
          .edu-timeline::before { left: 23px; }
        }

        /* Each row */
        .edu-item {
          display: flex;
          gap: 24px;
          align-items: flex-start;
          padding-bottom: 40px;
        }

        .edu-item:last-child { padding-bottom: 0; }

        /* Dot */
        .edu-dot {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(12,14,26,0.95);
          border: 1px solid rgba(79,142,247,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4f8ef7;
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
          box-shadow: 0 0 0 4px rgba(79,142,247,0.06);
        }

        .edu-item:hover .edu-dot {
          border-color: rgba(79,142,247,0.7);
          background: rgba(79,142,247,0.1);
          box-shadow: 0 0 0 6px rgba(79,142,247,0.08);
        }

        /* Card */
        .edu-card {
          flex: 1;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 22px 26px;
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .edu-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(79,142,247,0.25), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .edu-item:hover .edu-card {
          border-color: rgba(79,142,247,0.2);
          background: rgba(79,142,247,0.04);
        }

        .edu-item:hover .edu-card::before { opacity: 1; }

        .edu-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 8px;
          flex-wrap: wrap;
        }

        .edu-card-title {
          font-family: 'Syne', sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: #f0f2ff;
          line-height: 1.25;
        }

        .edu-card-subtitle {
          font-size: 13px;
          font-weight: 400;
          color: rgba(200,210,240,0.45);
          margin-top: 2px;
        }

        .edu-card-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
          flex-shrink: 0;
        }

        .edu-date {
          font-size: 12px;
          font-weight: 500;
          color: rgba(200,210,240,0.4);
          letter-spacing: 0.03em;
          white-space: nowrap;
        }

        .edu-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 100px;
          white-space: nowrap;
        }

        .edu-institution {
          font-size: 13.5px;
          font-weight: 400;
          color: rgba(200,210,240,0.55);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .edu-institution::before {
          content: '';
          display: inline-block;
          width: 14px;
          height: 1px;
          background: rgba(79,142,247,0.4);
          flex-shrink: 0;
        }
      `}</style>

      <section className="edu-root">
        <div className="edu-glow" />

        <div className="edu-inner">
          {/* Header */}
          <motion.div
            variants={fadeDown(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="edu-header"
          >
            <span className="edu-eyebrow">My Journey</span>
            <h2 className="edu-heading">
              Education &{' '}
              <span className="grad">Background</span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="edu-timeline">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp(0.2 + index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.4 }}
                className="edu-item"
              >
                {/* Dot */}
                <div className="edu-dot">
                  <GradCapIcon />
                </div>

                {/* Card */}
                <div className="edu-card">
                  <div className="edu-card-top">
                    <div>
                      <div className="edu-card-title">{item.title}</div>
                      {item.subtitle && (
                        <div className="edu-card-subtitle">{item.subtitle}</div>
                      )}
                    </div>
                    <div className="edu-card-right">
                      <span className="edu-date">{item.date}</span>
                      {item.tag && (
                        <span
                          className="edu-tag"
                          style={{
                            color: item.tagColor,
                            background: `${item.tagColor}14`,
                            border: `1px solid ${item.tagColor}33`,
                          }}
                        >
                          <CheckIcon />
                          {item.tag}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="edu-institution">{item.institution}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}