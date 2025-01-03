import React from 'react'
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import ServicesEyes from './ServicesEyes';

function Ready() {


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
    <div data-scroll data-scroll-section data-scroll-speed = "0.0999" className='bg-[#CDEA68] rounded-3xl '>
        <ServicesEyes/>
      <div className='z-[999]  w-full rounded-2xl h-screen '>

        
        
                <div className='text-9xl uppercase font-bold text-center'>ready</div>
                <div className='text-9xl uppercase font-bold text-center'>To start</div>
                <div className='text-9xl uppercase font-bold text-center'>the project?</div>

                
      </div>
    </div>
  )
}

export default Ready
