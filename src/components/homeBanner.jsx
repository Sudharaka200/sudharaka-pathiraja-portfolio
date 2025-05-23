import React from 'react'
import { motion } from 'framer-motion';
import { fadeDown, zoomIn, flipInX } from '../../variants' 

const CV_pdf_url = 'https://drive.google.com/uc?export=download&id=10cM7mdzrGCGBjPQeSVsJBHn_Amye-9bb';

function homeBanner() {
    const downloadFileUrl = (url) => {
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', 'Sudharaka_CV.pdf'); // Optional custom filename
        document.body.appendChild(aTag);
        aTag.click();
        document.body.removeChild(aTag);
    };
    return (
        <>
            <section className="bg-white lg:grid lg:h-screen lg:place-content-center relative bg-cover bg-center bg-no-repeat bg-mobile_img lg:bg-desktop-Img" id='home'>
                <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                    <div className="max-w-prose text-left">
                        <motion.p 
                            variants={fadeDown(0.5)} 
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                        className="sm:text-orange-500 text-gray-900 text-sm mt-20 lg:mt-0">HELLO</motion.p>
                        <motion.h1
                            variants={fadeDown(0.5)} 
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                        className="text-4xl font-bold sm:text-gray-900 sm:text-5xl text-orange-500">
                            I’m Sudharaka Pathiraja
                        </motion.h1>

                        <motion.p
                            variants={zoomIn(0.5)} 
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                        className="text-blue-600 text-lg font-semibold mb-8">Undergraduate Software Engineer</motion.p>

                        <div
                        className="mt-4 flex gap-4 sm:mt-6">
                            <motion.a
                                variants={zoomIn(0.5)} 
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                                className="inline-flex items-center gap-2 rounded-lg bg-black border border-blue-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
                                href="#about"
                            >
                                About Me
                            </motion.a>

                            <motion.a
                                variants={zoomIn(0.5)} 
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault(); // Prevent default link behavior
                                    downloadFileUrl(CV_pdf_url); // Trigger download
                                }}
                                className="inline-flex items-center gap-2 rounded-lg border border-blue-600 bg-blue-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
                            >
                                Download CV
                            </motion.a>
                        </div>
                        <br />
                        <div class="flex gap-4 hover:cursor-pointer">
                            <motion.a 
                                variants={flipInX(0.4)} 
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                            href="https://www.linkedin.com/in/sudharaka-pathiraja-10646820b/">
                                <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
                            </motion.a>
                            <motion.a 
                                variants={flipInX(0.4)} 
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                            href="https://github.com/Sudharaka200">
                                <img src="https://www.svgrepo.com/show/94698/github.svg" class="" width="30" height="30" alt="gt" />
                            </motion.a>
                            <motion.a 
                                variants={flipInX(0.4)} 
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                            href="https://web.facebook.com/sudha.raka.75/">
                                <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                            </motion.a>
                            <motion.a 
                                variants={flipInX(0.4)} 
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                            href="https://www.instagram.com/__su.zx/">
                                <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                            </motion.a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default homeBanner
