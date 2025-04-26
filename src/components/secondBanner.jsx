import React from 'react'

function secondBanner() {
    return (
        <div>
            <section className="bg-white">
                <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                    <div className="mx-auto  text-center">
                        <h1 className="text-4xl font-bold text-gray-900 ">
                            Revolutionizing Digital Experiences
                            <br />
                            with
                            <strong style={{ color: '#F97218' }}> Smart Software </strong>
                        </h1>

                        <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                            I'm dedicated to building intelligent, user-focused software solutions that solve real-world problems and drive innovation. From mobile apps to enterprise systems, I create technology that empowers businesses and transforms everyday experiences. Let’s build a smarter, more connected future—one line of code at a time.
                        </p>
                        <div className="mt-4 flex justify-center gap-4 sm:mt-6 ">
                            <div className=" grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8  bg-blue-100 p-4 rounded-lg pl-20 pr-20">
                                <div className=" rounded">
                                    <p>Contact Me</p>
                                    <p>Discuss your needs.</p>
                                </div>
                                <div className=" rounded">
                                    <a
                                        className="inline-flex items-center gap-2 rounded-lg border border-blue-600 bg-blue-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
                                        href="/contact"
                                    >
                                        <span className="text-sm font-medium"> Get Started </span>

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default secondBanner
