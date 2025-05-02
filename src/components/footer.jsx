import React from 'react'
import FooterLogo from '../images/Logo-main 2.png'

function footer() {
    return (
        <div>

            <footer class="bg-blue-100/80 font-sans dark:bg-gray-900">
                <div class="container px-6 py-12 mx-auto">
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                        <div class="sm:col-span-2">
                            <img src={FooterLogo} alt="" />

                            <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                                <p className=' dark:text-white'>Have questions, feedback, or a project in mind? I’d love to hear from you! Whether you're looking for expert guidance in mobile app development, enterprise solutions, or software architecture, I'm here to help</p>
                            </div>
                            <br /><br />
                            <div class="flex gap-4 hover:cursor-pointer">
                                <a href="https://www.linkedin.com/in/sudharaka-pathiraja-10646820b/">
                                    <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
                                </a>
                                <a href="https://github.com/Sudharaka200">
                                    <img src="https://www.svgrepo.com/show/94698/github.svg" class="" width="30" height="30" alt="gt" />
                                </a>
                                <a href="https://web.facebook.com/sudha.raka.75/">
                                    <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                                </a>
                                <a href="https://www.instagram.com/__su.zx/">
                                    <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                                </a>
                            </div>
                        </div>

                        <div>
                            <p class="font-semibold text-gray-800 dark:text-white">Quick Link</p>

                            <div class="flex flex-col items-start mt-5 space-y-2">
                                <a href="#home">
                                    <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Home</p></a>
                                <a href="#about">
                                    <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">About</p></a>
                                <a href="#projects">
                                    <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Projects</p></a>
                                <a href="/contact">
                                    <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Contact</p></a>
                                <a href="/contact">
                                    <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Get Started</p></a>
                            </div>
                        </div>

                        <div>
                            <p class="font-semibold text-gray-800 dark:text-white">Services</p>

                            <div class="flex flex-col items-start mt-5 space-y-2">
                                <a href="#whatIDo">
                                    <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Custom Software Development</p>
                                </a>
                                <a href="#whatIDo">
                                    <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Mobile & Web App Development</p>
                                </a>
                                <a href="#whatIDo">
                                    <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">System Integration & API Development</p>
                                </a>
                                <a href="#whatIDo">
                                    <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">AI & Machine Learning Solutions</p>
                                </a>
                                <a href="#whatIDo">
                                    <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Database Design & Management</p>
                                </a>
                                <a href="#whatIDo">
                                    <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">UI/UX Focused Solutions</p>
                                </a>

                            </div>
                        </div>
                    </div>

                    <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

                    <div class="sm:flex sm:items-center sm:justify-between">
                        <div class="flex flex-1 gap-4 hover:cursor-pointer dark:text-white">
                        </div>
                    </div>
                    <p class="flex flex-1 gap-4 hover:cursor-pointer dark:text-white dark:text-white">© 2025 Sudharaka Pathiraja. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default footer
