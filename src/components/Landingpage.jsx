import React from 'react';
import { MdArrowOutward } from "react-icons/md";

function Landingpage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed= ".1"   className='w-full h-screen bg-zinc-900 pt-2'> 
      <div className='my-20 md:my-40 font-semibold'>
        <div className='textstructure mt-20 px-5 md:px-10 lg:px-20'>  {/* Responsive padding */}

          {["we create", "eye-opening", "presentations"].map((item, index) => (
            <div key={index} className={`text-5xl md:text-6xl lg:text-7xl uppercase font-['Founders_Grotesk'] tracking-tighter`}>
              {item}
            </div>
          ))}

          <div className='py-16 md:py-32'>
            <div className='flex flex-col md:flex-row md:gap-40 lg:gap-50  items-center border-t-2  border-zinc-800 px-5 md:px-10 lg:px-20 py-1 md:py-1 lg:py-3'>
              {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                <p key={index} className='text-sm md:text-base font-light tracking-tighter text-center md:text-left'>
                  {item}
                </p> 
              ))} 
              <div className='start flex items-center justify-center md:justify-start gap-2 mt-4 md:mt-0'>
                <div className="uppercase font-light border-2 border-zinc-800 rounded-full px-4 py-2"> 
                  <span className='tracking-tighter'>start the project</span>
                </div>
                <div className='w-7 h-7 border-[2px] border-zinc-700 rounded-full flex items-center justify-center'>
                  <MdArrowOutward className='mx-1 my-1' />
                </div>
              </div>   
            </div>
          </div>

        </div>
      </div>
    </div> 
  );
}

export default Landingpage;