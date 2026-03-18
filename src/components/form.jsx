import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Form = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm('service_qzc1roh', 'template_iw08hcn', form.current, 'mvMyI_PEVTbNx53yW')
      .then(
        (result) => {
          console.log('Email sent:', result.text)
          toast.success('Message sent successfully!')
          e.target.reset()
        },
        (error) => {
          console.error('Error:', error.text)
          toast.error('Failed to send message.')
        }
      )
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700&family=DM+Sans:wght@300;400;500&display=swap');

        .fm-root {
          font-family: 'DM Sans', sans-serif;
          width: 100%;
        }

        .fm-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        @media (min-width: 640px) {
          .fm-grid { grid-template-columns: 1fr 1fr; }
        }

        .fm-col-2 {
          grid-column: 1 / -1;
        }

        /* Label */
        .fm-label {
          display: block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(200,210,240,0.5);
          margin-bottom: 9px;
        }

        /* Input / Textarea */
        .fm-input,
        .fm-textarea {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 12px;
          padding: 13px 18px;
          font-size: 14px;
          font-weight: 400;
          font-family: 'DM Sans', sans-serif;
          color: #f0f2ff;
          outline: none;
          transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
          box-sizing: border-box;
        }

        .fm-input::placeholder,
        .fm-textarea::placeholder {
          color: rgba(200,210,240,0.2);
        }

        .fm-input:focus,
        .fm-textarea:focus {
          border-color: rgba(79,142,247,0.5);
          background: rgba(79,142,247,0.05);
          box-shadow: 0 0 0 3px rgba(79,142,247,0.08);
        }

        .fm-textarea {
          resize: vertical;
          min-height: 130px;
          line-height: 1.65;
        }

        /* Submit button */
        .fm-submit {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          border-radius: 12px;
          background: linear-gradient(135deg, #4f8ef7, #6366f1);
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          font-family: 'DM Sans', sans-serif;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 24px rgba(79,142,247,0.28);
          letter-spacing: 0.01em;
          position: relative;
          overflow: hidden;
          margin-top: 8px;
        }

        .fm-submit::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.12), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .fm-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 36px rgba(79,142,247,0.45);
        }

        .fm-submit:hover::after { opacity: 1; }

        .fm-submit:active { transform: translateY(0); }

        .fm-arrow {
          font-size: 16px;
          transition: transform 0.25s ease;
          display: inline-block;
        }

        .fm-submit:hover .fm-arrow { transform: translateX(4px); }

        /* Toast overrides for dark theme */
        .Toastify__toast {
          font-family: 'DM Sans', sans-serif !important;
          font-size: 13.5px !important;
          border-radius: 12px !important;
          background: rgba(12,14,26,0.97) !important;
          border: 1px solid rgba(255,255,255,0.08) !important;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4) !important;
          backdrop-filter: blur(12px) !important;
        }

        .Toastify__toast--success {
          border-color: rgba(56,217,169,0.25) !important;
        }

        .Toastify__toast--error {
          border-color: rgba(248,113,113,0.25) !important;
        }

        .Toastify__toast-body {
          color: rgba(200,210,240,0.9) !important;
        }

        .Toastify__progress-bar--success {
          background: linear-gradient(90deg, #38d9a9, #4f8ef7) !important;
        }

        .Toastify__progress-bar--error {
          background: #f87171 !important;
        }

        .Toastify__close-button {
          color: rgba(200,210,240,0.4) !important;
        }
      `}</style>

      <form ref={form} onSubmit={sendEmail} className="fm-root">
        <div className="fm-grid">

          {/* Name */}
          <div>
            <label htmlFor="name" className="fm-label">Full Name</label>
            <input
              id="name"
              name="from_name"
              type="text"
              required
              placeholder="John Doe"
              className="fm-input"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="fm-label">Email Address</label>
            <input
              id="email"
              name="from_email"
              type="email"
              required
              placeholder="you@example.com"
              className="fm-input"
            />
          </div>

          {/* Subject */}
          <div className="fm-col-2">
            <label htmlFor="subject" className="fm-label">Subject</label>
            <input
              id="subject"
              name="from_subject"
              type="text"
              required
              placeholder="What's this about?"
              className="fm-input"
            />
          </div>

          {/* Message */}
          <div className="fm-col-2">
            <label htmlFor="message" className="fm-label">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Tell me about your project or idea..."
              className="fm-textarea"
            />
          </div>

        </div>

        <button type="submit" className="fm-submit">
          Send Message
          <span className="fm-arrow">→</span>
        </button>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default Form