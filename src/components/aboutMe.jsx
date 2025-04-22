import React from 'react'
import AboutImg from '../images/Group 1000006193.png'

function AboutMe() {
    return (
        <div>
            <section className="bg-white pt-4 pb-20">
                <div className="mx-auto w-screen max-w-screen-xl px-4 sm:px-6 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8">
                    <img src={AboutImg} alt="About Me" className="w-full h-auto" />

                    <div className="max-w-prose text-left">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                            About Me
                        </h1>

                        <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                            Hi, I'm Sudharaka Pathiraja, a Software Engineering undergraduate pursuing a BSc (Hons) in Software Engineering at NIBM...
                        </p>

                        <div className="mt-4 flex gap-4 sm:mt-6">
                            <a
                                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                                href="#"
                            >
                                Get Started
                            </a>
                            <a
                                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                                href="#"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMe
