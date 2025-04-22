import React from 'react'
import DoImg from '../images/image 19.png'

function whatDo() {
    return (
        <div>
            {/* First Section */}
            <section className="bg-white py-20">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl text-center mb-12">
                    What I Do
                </h1>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        <div className="rounded text-center">
                            <h2 className="text-xl font-semibold mb-2">Custom Software Development</h2>
                            <img src={DoImg} alt="Custom Software" className="mx-auto mb-4" />
                            <p className="text-gray-700">
                                Design and build scalable applications tailored to business needs — from enterprise systems to mobile and web apps.
                            </p>
                        </div>
                        <div className="rounded text-center">
                            <h2 className="text-xl font-semibold mb-2">Custom Software Development</h2>
                            <img src={DoImg} alt="Custom Software" className="mx-auto mb-4" />
                            <p className="text-gray-700">
                                Design and build scalable applications tailored to business needs — from enterprise systems to mobile and web apps.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Second Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        <div className="rounded text-center">
                            <h2 className="text-xl font-semibold mb-2">Custom Software Development</h2>
                            <img src={DoImg} alt="Custom Software" className="mx-auto mb-4" />
                            <p className="text-gray-700">
                                Design and build scalable applications tailored to business needs — from enterprise systems to mobile and web apps.
                            </p>
                        </div>
                        <div className="rounded text-center">
                            <h2 className="text-xl font-semibold mb-2">Custom Software Development</h2>
                            <img src={DoImg} alt="Custom Software" className="mx-auto mb-4" />
                            <p className="text-gray-700">
                                Design and build scalable applications tailored to business needs — from enterprise systems to mobile and web apps.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Thrid Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        <div className="rounded text-center">
                            <h2 className="text-xl font-semibold mb-2">Custom Software Development</h2>
                            <img src={DoImg} alt="Custom Software" className="mx-auto mb-4" />
                            <p className="text-gray-700">
                                Design and build scalable applications tailored to business needs — from enterprise systems to mobile and web apps.
                            </p>
                        </div>
                        <div className="rounded text-center">
                            <h2 className="text-xl font-semibold mb-2">Custom Software Development</h2>
                            <img src={DoImg} alt="Custom Software" className="mx-auto mb-4" />
                            <p className="text-gray-700">
                                Design and build scalable applications tailored to business needs — from enterprise systems to mobile and web apps.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default whatDo
