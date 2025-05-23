import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import MailImg from '../images/Email.png'
import CallImg from '../images/Call.png'
import LinkedinImg from '../images/LinkedIn.png'
import GithubImg from '../images/GitHub.png'
import From from '../components/form'
import { motion } from 'framer-motion';
import {fadeIn, fadeDown, zoomIn, flipInX, fadeInLeft, fadeInRight} from '../../variants' 


function Contact() {
  return (
    <div>
      <Navbar />

      <section>
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="text-center mt-10 lg:mt-0">
            <motion.h1 
              variants={fadeDown(0.5)} 
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            className="text-4xl font-bold text-gray-900">
              Connect with
              <strong style={{ color: '#F97218' }}> Me</strong>
            </motion.h1>

            <div className="bg-black rounded-2xl p-10 mt-10 lg:mt-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-12 pl-20 pr-20">
              {/* Left: Email and Telephone */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 ">
                  <motion.div
                    variants={zoomIn(0.2)} 
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }} 
                  className=''>
                    <img src={MailImg} alt="" />
                    <p className="text-white text-sm font-semibold text-left">Email</p>
                    <p className="text-white text-sm">sudharakapathiraja200@gmail.com</p>
                  </motion.div>
                </div>

                <div className="flex items-center gap-4">

                  <motion.div
                    variants={zoomIn(0.2)} 
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                  >
                    <img src={CallImg} alt="" />
                    <p className="text-white text-sm font-semibold text-left">Telephone</p>
                    <p className="text-white text-sm">+94 71 985 9294</p>
                  </motion.div>
                </div>
              </div>

              {/* Center: LinkedIn */}
              <div className="flex flex-col items-center gap-4">
                <motion.img 
                    variants={flipInX(0.4)} 
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                src={LinkedinImg} alt="" />
                <motion.p 
                    variants={zoomIn(0.2)} 
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                className="text-white font-semibold">Connect on LinkedIn</motion.p>
                <a href="www.linkedin.com/in/sudharaka-pathiraja-10646820b">
                  <motion.button 
                    variants={zoomIn(0.2)} 
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                  className="bg-white text-black text-xs px-4 py-1 rounded-full hover:bg-gray-200">
                  Connect @Sudharaka Pathiraja
                </motion.button>
                </a>
              </div>

              {/* Right: GitHub */}
              <div className="flex flex-col items-center gap-4">
                <motion.img 
                    variants={flipInX(0.4)} 
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                src={GithubImg} alt="" />
                <motion.p 
                    variants={zoomIn(0.2)} 
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                className="text-white font-semibold">Follow on GitHub</motion.p>
                <a href="https://github.com/Sudharaka200">
                  <motion.button 
                    variants={zoomIn(0.2)} 
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                  className="bg-white text-black text-xs px-4 py-1 rounded-full hover:bg-gray-200">
                  Follow @sudharaka200
                </motion.button>
                </a>
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
