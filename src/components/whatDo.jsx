import React from 'react'
import { motion } from 'framer-motion';
import { fadeDown, zoomIn } from '../../variants' 

// import DoImg from '../images/image 19.png'

function whatDo() {
    return (
        <div>
            {/* First Section */}
            <section className="bg-white" id='whatIDo' >
                <motion.h1 
                    variants={fadeDown(0.2)} 
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                className="text-4xl font-bold text-gray-900 sm:text-5xl text-center mb-12">
                    What I Do
                </motion.h1>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-1 mb-1 lg:grid-cols-2 ">
                        <div className="bg-gradient-to-r from-white to-[#F3F6FA] py-10 pl-2 transform transition-transform duration-500 hover:scale-105">
                            <motion.h2 
                                variants={fadeDown(0.2)} 
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                            className="text-xl font-semibold mb-2 text-blue-600 ">Custom Software Development</motion.h2>
                            {/* <img src={DoImg} alt="Custom Software" className="mx-auto mb-4" /> */}
                            <motion.p 
                                variants={zoomIn(0.2)} 
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                            className="text-gray-700">
                            Design and build scalable applications tailored to business needs — from enterprise systems to mobile and web apps.
                            </motion.p>
                        </div>
                        <div className="bg-gradient-to-r from-[#F3F6FA] to-white py-10 pl-2 transform transition-transform duration-500 hover:scale-105">
                            <motion.h2
                                variants={fadeDown(0.2)} 
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                            className="text-xl font-semibold mb-2 text-blue-600">Mobile & Web App Development</motion.h2>
                            {/* <img src={DoImg} alt="Custom Software" className="mx-auto mb-4" /> */}
                            <motion.p 
                                variants={zoomIn(0.2)} 
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                            className="text-gray-700">
                            Craft seamless, responsive, and intuitive applications using technologies like React  and Spring Boot.
                            </motion.p>
                        </div>
                    </div>
                </div>
                
            </section>

            {/* Second Section */}
            <section className="bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-1 mb-1 lg:grid-cols-2">
                        <div className="bg-gradient-to-r from-white to-[#F3F6FA] py-10 pl-2 transform transition-transform duration-500 hover:scale-105">
                            <motion.h2
                                variants={fadeDown(0.2)} 
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                            className="text-xl font-semibold mb-2 text-blue-600">System Integration & API Development</motion.h2>
                            {/* <img src={DoImg} alt="Custom Software" className="mx-auto mb-4" /> */}
                            <motion.p 
                                variants={zoomIn(0.2)} 
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                            className="text-gray-700">
                            Develop and integrate RESTful APIs that connect services, systems, and platforms for cohesive digital experiences.
                            </motion.p>
                        </div>
                        <div className="bg-gradient-to-r from-[#F3F6FA] to-white py-10 pl-2 transform transition-transform duration-500 hover:scale-105">
                            <motion.h2 
                                variants={fadeDown(0.2)} 
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                            className="text-xl font-semibold mb-2 text-blue-600">AI & Machine Learning Solutions</motion.h2>
                            {/* <img src={DoImg} alt="Custom Software" className="mx-auto mb-4" /> */}
                            <motion.p 
                                variants={zoomIn(0.2)} 
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                            className="text-gray-700">
                            Integrate AI features into applications with machine learning for automation, predictive analytics, natural language processing, and personalized user experiences.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Thrid Section */}
            <section className="bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-1 mb-1 lg:grid-cols-2">
                        <div className="bg-gradient-to-r from-white to-[#F3F6FA] py-10 pl-2 transform transition-transform duration-500 hover:scale-105">
                            <motion.h2
                                variants={fadeDown(0.2)} 
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                            className="text-xl font-semibold mb-2 text-blue-600">Database Design & Management</motion.h2>
                            {/* <img src={DoImg} alt="Custom Software" className="mx-auto mb-4" /> */}
                            <motion.p 
                                variants={zoomIn(0.2)} 
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                            className="text-gray-700">
                                Optimize data storage, retrieval, and performance with Oracle SQL, MySQL, and Firebase-backed solutions.
                            </motion.p>
                        </div>
                        <div className="bg-gradient-to-r from-[#F3F6FA] to-white py-10 pl-2 transform transition-transform duration-500 hover:scale-105">
                            <motion.h2 
                                variants={fadeDown(0.2)} 
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                            className="text-xl font-semibold mb-2 text-blue-600">UI/UX Focused Solutions</motion.h2>
                            {/* <img src={DoImg} alt="Custom Software" className="mx-auto mb-4" /> */}
                            <motion.p 
                                variants={zoomIn(0.2)} 
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                            className="text-gray-700">
                            Create user-friendly interfaces with clean, modern design using Tailwind CSS and React, focused on usability and performance.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default whatDo
