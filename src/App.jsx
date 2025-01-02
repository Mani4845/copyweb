
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
import Smallcard from './components/Smallcard'
import Secondabout from './components/Secondabout'


import LocomotiveScroll from 'locomotive-scroll';




function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
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

    </>
  )
}

export default App