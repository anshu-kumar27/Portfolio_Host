import React from 'react'
import Navbar from './componenets/navbar/Navbar'
import HeroSection from './componenets/hero/HeroSection'
import Project from './componenets/projects/Project'
import About from './componenets/about/About'

function MainFile() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <div className="w-[85%] h-[2px] mx-auto my-6 bg-base-content/20"></div>
        <About/>
        <div className="w-[85%] h-[2px] mx-auto my-6 bg-base-content/20"></div>
        <Project/>
    </div>
  )
}

export default MainFile