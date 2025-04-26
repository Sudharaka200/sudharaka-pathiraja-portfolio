import React from 'react'
import BannerImg from '../images/Group 1000006192.png'

function homeBanner() {
    return (
        <>
            <section className="bg-white lg:grid lg:h-screen lg:place-content-center relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${BannerImg})` }}>
                <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                    <div className="max-w-prose text-left ">
                        <p className="text-orange-500 text-sm mb-2">HELLO</p>
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                            I’m Sudharaka Pathiraja
                        </h1>

                        <p className="text-blue-600 text-lg font-semibold mb-8">Undergraduate Software Engineer</p>

                        <div className="mt-4 flex gap-4 sm:mt-6">
                            <a
                                className="inline-flex items-center gap-2 rounded-lg bg-black border border-blue-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
                                href="#"
                            >
                                About Me
                            </a>

                            <a
                                className="inline-flex items-center gap-2 rounded-lg border border-blue-600 bg-blue-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
                                href="/contact"
                            >
                                Get Started
                            </a>
                        </div>
                        <br />
                        <div class="flex gap-4 hover:cursor-pointer">
                            <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
                            <img src="https://www.svgrepo.com/show/94698/github.svg" class="" width="30" height="30" alt="gt" />
                            <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                            <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default homeBanner
