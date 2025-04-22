import React from 'react'
import Navbar from '../components/navbar'
import HomeBanner from '../components/homeBanner'
import SecondBanner from '../components/secondBanner'
import AboutMe from '../components/aboutMe'
import WhatiDo from '../components/whatDo'


export default function home() {
  return (
    <>
      <Navbar />
      <HomeBanner />
      <SecondBanner />
      <AboutMe />
      <WhatiDo />
    </>
  )
}
