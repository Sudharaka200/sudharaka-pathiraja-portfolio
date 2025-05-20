import React from 'react'
import AboutImg from '../images/Group 1000006193.png'

function AboutMe() {
    return (
        <div >
            <section className="bg-white pb-20" id='about'>
                <div className="mx-auto w-screen max-w-screen-xl px-4 sm:px-6 grid md:grid-cols-[20%_80%] md:items-center md:gap-4 lg:px-8 ">
                    <img src={AboutImg} alt="About Me" className="w-100 h-auto" />

                    <div className="">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mt-10 lg:mt-0">
                            About Me
                        </h1>
                        <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                        <strong style={{ color: '#F97218', fontSize:'25px'}}> Hi, </strong>I'm Sudharaka Pathiraja, a Software Engineering undergraduate pursuing a BSc (Hons) in Software Engineering at NIBM. I am passionate about developing
                         innovative software solutions and continuously enhancing my technical expertise. I specialize in full-stack development, database management, and cloud 
                         technologies, with proficiency in Java, Python, JavaScript, C#, and PHP. I have experience working with frameworks and libraries such as React.js, 
                         AngularJS, Vue.js, Spring Boot, .NET, Tailwind CSS, Bootstrap, and jQuery. Additionally, I am skilled in database technologies like MySQL, Oracle, MongoDB,
                          and Firebase. I am also exploring Linux, Docker, Azure, AWS, Kubernetes, and CI/CD tools to expand my knowledge in DevOps and cloud computing. My goal is
                           to become a highly skilled software engineer, constantly learning and contributing to impactful projects in the tech industry.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMe
