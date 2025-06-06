import React from 'react'
import Navbar from '../components/navbar'
import HomeBanner from '../components/homeBanner'
import SecondBanner from '../components/secondBanner'
import AboutMe from '../components/aboutMe'
import WhatiDo from '../components/whatDo'
import Technologies from '../components/technologies'
import Projects from '../components/projects'
import ThirdBanner from '../components/thirdBanner'
import Footer from '../components/footer'
import Education from '../components/education'


export default function home() {
  return (
    <>
      <Navbar />
      <HomeBanner />
      <SecondBanner />
      <AboutMe />
      <Education />
      <WhatiDo />
      <Technologies />
      <Projects />
      <ThirdBanner />
      <Footer />
    </>
  )
}
