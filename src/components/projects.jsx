import React from 'react'
import Project1 from '../images/project1.png'
import Projrct2 from '../images/project2.png'
import Project3 from '../images/project3.png'
import { motion } from 'framer-motion';
import { fadeDown } from '../../variants' 

function projects() {
    return (
        <div>
            <section id='projects'>
                <motion.h1 
                    variants={fadeDown(0.2)} 
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                className="text-4xl font-bold text-gray-900 sm:text-5xl text-center mt-12">
                    Projects
                </motion.h1>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">

                    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <li>
                            <a href="https://github.com/Sudharaka200/Apple-verse-app" className="group block overflow-hidden">
                                <img
                                    src={Project1}
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                />

                                <div className="relative bg-white pt-3">
                                    <motion.p 
                                        variants={fadeDown(0.2)} 
                                        initial="hidden"
                                        whileInView={"show"}
                                        viewport={{ once: false, amount: 0.7 }}
                                    className="mt-2">
                                        <span className="tracking-wider text-gray-900 group-hover:underline group-hover:underline-offset-4"> AppleVerse E-Commerce Platform</span>
                                    </motion.p>
                                    <motion.h3 
                                        variants={fadeDown(0.2)} 
                                        initial="hidden"
                                        whileInView={"show"}
                                        viewport={{ once: false, amount: 0.7 }}
                                    className="text-xs text-gray-700">
                                        Designed and developed a microservices-based e-commerce web application, including user, product, cart, order and admin services. User service handles user authentication. Product service handles product catalog, including adding, updating and retrieving product details. Cart service allows users to add update and remove products before checkout. Order service manages the order process and admin service manages products and orders.
                                    </motion.h3>

                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="https://github.com/Sudharaka200/wheel-deal-mobile-app" className="group block overflow-hidden">
                                <img
                                    src={Projrct2}
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                />

                                <div className="relative bg-white pt-3">
                                    <motion.p 
                                        variants={fadeDown(0.2)} 
                                        initial="hidden"
                                        whileInView={"show"}
                                        viewport={{ once: false, amount: 0.7 }}
                                    className="mt-2">
                                        <span className="tracking-wider text-gray-900 group-hover:underline group-hover:underline-offset-4">Wheeldeal Mobile Application </span>
                                    </motion.p>
                                    <motion.h3 
                                        variants={fadeDown(0.2)} 
                                        initial="hidden"
                                        whileInView={"show"}
                                        viewport={{ once: false, amount: 0.7 }}
                                    className="text-xs text-gray-700">
                                        The Wheeldeal is a mobile application developed for a vehicle
                                        advertisement posting platform that allows users to post, update and delete
                                        vehicle ads with location-based features. It is built using the Firebase
                                        database for real-time data management, authentication and Google Map
                                        for location tagging.

                                    </motion.h3>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="https://github.com/Sudharaka200/shop.co-clothing-website" className="group block overflow-hidden">
                                <img
                                    src={Project3}
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                />

                                <div className="relative bg-white pt-3">
                                <motion.p 
                                    variants={fadeDown(0.2)} 
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: false, amount: 0.7 }}
                                className="mt-2">
                                        <span className="tracking-wider text-gray-900 group-hover:underline group-hover:underline-offset-4">Shop.Co E-Commerce Platform</span>
                                    </motion.p>
                                    <motion.h3 
                                        variants={fadeDown(0.2)} 
                                        initial="hidden"
                                        whileInView={"show"}
                                        viewport={{ once: false, amount: 0.7 }}
                                    className="text-xs text-gray-700">
                                    An e-commerce clothing shop is built using HTML, CSS, and JavaScript for structure, styling, and interactivity. PHP handles server-side logic, while MySQL stores user, product, and order data. Users can register, browse clothes, add items to a cart, and place orders. Admins manage products and view orders through a secure backend.
                                    </motion.h3>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

        </div>
    )
}

export default projects
