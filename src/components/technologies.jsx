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

function technologies() {
  return (
    <div>
      <section className="bg-gray-50 py-20 borde">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl text-center mb-12">Technologies</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    <img src={Java} alt="Java"  />
                    <img src={Python} alt="Python"  />
                    <img src={JS} alt="JavaScript"  />
                    <img src={ReactJs} alt="React"  />
                    <img src={Tailwind} alt="Tailwind CSS"  />
                    <img src={SpringBoot} alt="Spring Boot"  />
                    <img src={Laravel} alt="Laravel"  />
                    <img src={MySql} alt="MySQL"  />
                    <img src={FireBase} alt="Firebase"  />
                </div>
            </div>
        </section>
    </div>
  )
}

export default technologies
