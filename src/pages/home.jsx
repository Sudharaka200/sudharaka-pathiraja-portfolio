import React from 'react'
import Navbar from '../components/navbar'
import HomeBanner from '../components/homeBanner'
import SecondBanner from '../components/secondBanner'
import AboutMe from '../components/aboutMe'

export default function home() {
  return (
    <>
      <Navbar />
      <HomeBanner />
      <SecondBanner />
      <AboutMe />
    </>
  )
}
