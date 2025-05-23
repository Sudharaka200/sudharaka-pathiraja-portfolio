import React from 'react'
import Java from '../images/🦆 icon _file type java_.png'
import Python from '../images/🦆 icon _file type python_.png'
import JS from '../images/🦆 icon _file type js official_.png'
import ReactJs from '../images/🦆 icon _file type reactjs_.png'
import Tailwind from '../images/🦆 icon _file type tailwind_.png'
import SpringBoot from '../images/spring-boot-logo-removebg-preview 1.png'
import Laravel from '../images/laravel-icon-249x256-kqpwzrwi 1.png'
import MySql from '../images/Vector.png'
import FireBase from '../images/🦆 icon _file type firebase_.png'
import { motion } from 'framer-motion';
import { fadeDown } from '../../variants' 

function technologies() {
  return (
    <div>
      <section className="bg-gray-100 py-20 ">
            <div className="container mx-auto text-center">
                <motion.h2 
                    variants={fadeDown(0.4)} 
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                className="text-4xl font-bold text-gray-900 sm:text-5xl text-center mb-12">Technologies</motion.h2>
                <div className="flex flex-wrap justify-center gap-10">
                    <img src={Java} alt="Java"  className='w-100 h-100'/>
                    <img src={Python} alt="Python" className='w-100 h-100' />
                    <img src={JS} alt="JavaScript"  className='w-100 h-100'/>
                    <img src={ReactJs} alt="React"  className='w-100 h-100'/>
                    <img src={Tailwind} alt="Tailwind CSS"  className='w-auto h-auto'/>
                    <img src={SpringBoot} alt="Spring Boot"  className='w-100 h-100'/>
                    <img src={Laravel} alt="Laravel"  className='w-100 h-100'/>
                    <img src={MySql} alt="MySQL"  className='w-100 h-100'/>
                    <img src={FireBase} alt="Firebase"  className='w-100 h-100'/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default technologies
