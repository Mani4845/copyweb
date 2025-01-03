import React from 'react'
import Navbar from './Navbar'
import Landingpage from './Landingpage'
import Marquee from './Marquee'
import About from './About'
import Eyes from './Eyes'
import Featured from './Featured'
import Smallcard from './Smallcard'
import Secondabout from './Secondabout'

import LocomotiveScroll from 'locomotive-scroll';



function Home() {

    const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white font-['Neue Montreal']">

      <Navbar/>
      <Landingpage/>
        <Marquee/>
        <About/>
        <Eyes/>
        <Featured/>
        <Smallcard/>
        <Secondabout/>
    </div>
  )
}

export default Home
