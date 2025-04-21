import React from 'react'

function secondBanner() {
    return (
        <div>
            <section className="bg-white lg:grid lg:h-screen lg:place-content-center m-0" >
                <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                    <div className="mx-auto  text-center">
                        <h1 className="text-4xl font-bold text-gray-900 ">
                        Revolutionizing Digital Experiences 
                        <br />
                        with 
                            <strong className="text-indigo-600"> Smart Software </strong>
                        </h1>

                        <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                        I'm dedicated to building intelligent, user-focused software solutions that solve real-world problems and drive innovation. From mobile apps to enterprise systems, I create technology that empowers businesses and transforms everyday experiences. Let’s build a smarter, more connected future—one line of code at a time.
                        </p>

                        <div className="mt-4 flex justify-center gap-4 sm:mt-6">
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

export default secondBanner
