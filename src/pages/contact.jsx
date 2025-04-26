import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import MailImg from '../images/Email.png'
import CallImg from '../images/Call.png'
import LinkedinImg from '../images/LinkedIn.png'
import GithubImg from '../images/GitHub.png'
import From from '../components/form'


function Contact() {
  return (
    <div>
      <Navbar />

      <section>
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">
              Connect with
              <strong style={{ color: '#F97218' }}> Me</strong>
            </h1>

            <div className="bg-black rounded-2xl p-10 mt-16 flex flex-col md:flex-row justify-between items-center md:items-start gap-12 pl-20 pr-20">
              {/* Left: Email and Telephone */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">

                  <div>
                    <img src={MailImg} alt="" />
                    <p className="text-white text-sm font-semibold text-left">Email</p>
                    <p className="text-white text-sm">sudharakapathiraja200@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">

                  <div>
                    <img src={CallImg} alt="" />
                    <p className="text-white text-sm font-semibold text-left">Telephone</p>
                    <p className="text-white text-sm">+94 71 985 9294</p>
                  </div>
                </div>
              </div>

              {/* Center: LinkedIn */}
              <div className="flex flex-col items-center gap-4">
                <img src={LinkedinImg} alt="" />
                <p className="text-white font-semibold">Connect on LinkedIn</p>
                <button className="bg-white text-black text-xs px-4 py-1 rounded-full hover:bg-gray-200">
                  Connect @Sudharaka Pathiraja
                </button>
              </div>

              {/* Right: GitHub */}
              <div className="flex flex-col items-center gap-4">
                <img src={GithubImg} alt="" />
                <p className="text-white font-semibold">Follow on GitHub</p>
                <button className="bg-white text-black text-xs px-4 py-1 rounded-full hover:bg-gray-200">
                  Follow @sudharaka200
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
      <From />

      <Footer />
    </div>
  )
}

export default Contact
