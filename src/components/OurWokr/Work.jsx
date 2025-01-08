import React from 'react'
import { useEffect } from 'react';
import Navbar from '../Navbar'

import WorkEyes from './WorkEyes'
import LocomotiveScroll from 'locomotive-scroll'; 
import EyeOpeningDesign from './EyeOpeningDesign';
import Cards from './Cards';


function Work() {

   useEffect(() => {
              // Initialize Locomotive Scroll if it's used
              const scroll = new LocomotiveScroll({
                el: document.querySelector('[data-scroll-section]'),
                smooth: true,
              });
          
              // Cleanup on component unmount
              return () => {
                scroll.destroy();
              };
            }, []);

  





  return (
    <div>
        <div className='bg-[#CDEA68] w-full min-h-screen'>
          <div className=''>

        <Navbar/>
          </div>
        <div className=" ">
    <h1 className="fixed mt-20 static-section text-4xl md:text-7xl uppercase tracking-tighter py-3  m-16  lg:text-[7rem] w-1/2 font-black font-bold ">work</h1>



   
   <div className='w-full flex justify-center  '>

   
    <div className=" static-section relative w-full min-h-screen">
  {/* <!-- First div --> */}


  <div className='mt-32'>

  
   
  <div data-scroll data-scroll-section data-scroll-speed = " -0.3"  className="  ml-40 mr-40 rounded-3xl mt-[440px] absolute inset-0 bg-[#c4dd6b] z-10  text-white  ">
   
  </div>  
   <div data-scroll data-scroll-section data-scroll-speed = " -0.2" className="  ml-24 mr-24 rounded-3xl mt-[490px] absolute inset-0 bg-[#b8ce69] z-10  text-white  ">
     
  </div>


   <div className='mt-96'>

  <div data-scroll data-scroll-section data-scroll-speed = " -0.1"  className="animated-section   mt-[550px] absolute inset-0 bg-white z-10  rounded-3xl  w-full h-[150vh] text-white  ">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
    
    <EyeOpeningDesign/>
   
  </div> 
   </div>

  </div> 

  {/* <!-- Second div --> */}
  <div className="fixed inset-0 mt-36 flex items-center justify-center text-white">
  <WorkEyes/>
  </div>
</div>
   </div>

  
    





    
  
</div>
    </div>

   



    </div>
  )
}

export default Work
 