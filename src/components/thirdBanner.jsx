import React from 'react'

function thirdBanner() {
    return (
        <div>
            <section className="bg-white py-20" >
                <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                    <div className="mx-auto  text-center">
                        <h1 className="text-4xl font-bold text-gray-900 ">
                            Let’s build the future of
                            <br />
                            <strong className="text-indigo-600">Software </strong>
                            software
                        </h1>
                        <br />
                        <a
                                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                                href="#"
                            >
                                Get Started
                            </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default thirdBanner
