import React from 'react'
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll'; 


function OurServices() {

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
    <div data-scroll data-scroll-section data-scroll-speed = "-0.2" className=' mt-6'>
      <div  className='masker w-full min-h-screen bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
      <div className='text px-5 md:px-14 py-24 font-["Founders_Grotesk"] text-3xl md:text-5xl'>
        <p className='text-zinc-950'>
          Ochi is a strategic presentation agency for 
          <span className="underline"> forward-thinking <br /></span>  
          <span className="underline"> businesses </span> that need to raise funds, sell-<br /> 
          prod­ucts, ex­plain <span className="underline"> com­plex ideas,</span> and <span className="underline"> hire </span> great peo-­<br />
          ple.
        </p>
      </div>

      <div className='portion border-t-2 border-b-2 border-[#b4c281] w-full h-auto py-8'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-zinc-950 font-[Founders_Grotesk] text-lg">
          <div className="mx-5 my-5 text-center md:text-left">
            <h2 className="font-bold">What you can expect:</h2>
          </div>
          <div className="mx-5 my-5">
            <p>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
            <br />
            <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
          </div>
          <div className="mx-5 my-5">
            <h3 className="font-bold">S:</h3>
            <ul className="list-disc list-inside">
              <li><a href="#home" className="text-blue-600 hover:underline">Home</a></li>
              <li><a href="#about" className="text-blue-600 hover:underline">About</a></li>
              <li><a href="#services" className="text-blue-600 hover:underline">Services</a></li>
              <li><a href="#contact" className="text-blue-600 hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      
    </div>
    </div>
  )
}

export default OurServices
