import React from 'react'
import BannerImg from '../images/Group 1000006192.png'

function homeBanner() {
    return (
        <>
            <section className="bg-white lg:grid lg:h-screen lg:place-content-center relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${BannerImg})` }}>
                <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                    <div className="max-w-prose text-left">
                        <p>HELLO</p>
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                            I’m Sudharaka Pathiraja
                        </h1>

                        <p>Undergraduate Software Engineer</p>

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

        </>
    )
}

export default homeBanner
