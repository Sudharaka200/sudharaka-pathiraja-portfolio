import React from 'react';
import { motion } from 'framer-motion';
import { fadeDown, fadeInUp } from '../../variants'

const timelineData = [
    {
        title: 'Undergraduate | BSc (Hons) in Computing (Software Engineering Pathway)',
        date: '2023 - 2027',
        description: 'National Institute of Business Management',
        isActive: true,
    },
    {
        title: 'Completed Certificate in Fullstack Development',
        date: '2022-2023',
        description: 'SOV Education',
        isActive: true,
    },
    {
        title: 'GCE A/L (Commerce stream)',
        date: '2020',
        description: 'Saranath College - Kuliyapitiya',
        isActive: true,
    },
    {
        title: 'GCE O/L',
        date: '2017',
        description: 'Saranath College - Kuliyapitiya',
        isActive: true,
    },
];

const EducationTimeline = () => {
    return (
        <div>
            <div className='text-center'>
                <motion.h1
                    variants={fadeDown(0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-4xl font-bold text-gray-900 sm:text-5xl mt-10 lg:mt-0">
                    Education
                </motion.h1>
            </div>
            <div className="container mx-auto px-4 py-10">
                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                    {timelineData.map((step, index) => (
                        <motion.div
                        variants={fadeInUp(0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                            key={index}
                            className={`relative flex items-center justify-between md:justify-normal md:even:flex-row-reverse group`}
                        >
                            {/* Timeline Dot */}
                            <div
                                className={`flex items-center justify-center w-10 h-10 rounded-full border border-white text-white-500 shadow shrink-0
                                ${step.isActive ? 'bg-blue-600 text-white' : ''}
                                md:order-1`}
                            >
                                {step.title === 'Delivered' ? (
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                                        <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
                                    </svg>
                                ) : (
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                        <path
                                            fillRule="nonzero"
                                            d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                                        />
                                    </svg>
                                )}
                            </div>

                            {/* Timeline Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <div className="text-xl font-semibold mb-2 text-blue-600">{step.title}</div>
                                </div>
                                <div className="text-gray-700">{step.description}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EducationTimeline;
