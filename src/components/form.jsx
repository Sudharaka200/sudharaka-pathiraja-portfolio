import React from 'react';
// If you're using an icon and UI library, import like this (example):
// import { ChevronDownIcon } from '@heroicons/react/20/solid';
// import { Switch } from '@headlessui/react';

function Form() {
    return (
        <div>
            <form action="#" method="POST" className="mx-auto w-screen max-w-screen-xl px-4 py-16 ">       
                <h1 className='text-4xl font-bold text-gray-900 '>Send Message</h1>     
                <br />    
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    {/* First Name */}
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900">
                            First name & Last Name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="first-name"
                                name="first-name"
                                type="text"
                                autoComplete="given-name"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-indigo-600"
                            />
                        </div>
                    </div>

                    {/* Last Name */}
                    <div>
                        <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="last-name"
                                name="last-name"
                                type="text"
                                autoComplete="family-name"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-indigo-600"
                            />
                        </div>
                    </div>

                    {/* Company */}
                    <div className="sm:col-span-2">
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-900">
                            Subject
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="company"
                                name="company"
                                type="text"
                                autoComplete="organization"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-indigo-600"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-indigo-600"
                                defaultValue=""
                            />
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="mt-10">
                    <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-lg border border-blue-600 bg-blue-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
                    >
                        Let's talk
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;
