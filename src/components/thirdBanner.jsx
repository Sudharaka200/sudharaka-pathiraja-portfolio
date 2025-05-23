import React from 'react'
import { motion } from 'framer-motion';
import { fadeDown, zoomIn } from '../../variants' 

function thirdBanner() {
    return (
        <div>
            <section className="bg-white">
                <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                    <div className="mx-auto  text-center">
                        <motion.h1 
                            variants={fadeDown(0.2)} 
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                        className="text-4xl font-bold text-gray-900 ">
                            Let’s build the future of
                            <br />
                            <strong style={{ color: '#F97218'}}> Software </strong>
                        </motion.h1>
                        <br />
                        <motion.a
                            variants={zoomIn(0.2)} 
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                                className="inline-flex items-center gap-2 rounded-lg border border-blue-600 bg-blue-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
                                href="/contact"
                            >
                                Get Started
                            </motion.a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default thirdBanner
