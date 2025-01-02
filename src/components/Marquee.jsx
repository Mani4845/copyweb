import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed = "-.001"  className='w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl overflow-hidden'>
      <div className="flex whitespace-nowrap">
        <motion.h1 
          initial={{ x: "0" }} 
          animate={{ x: "-100%" }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }} 
          className="text-[24vw] uppercase leading-none font-['Founders_Grotesk'] font-semibold pt-10 pr-20"
        >
          We are ochi
        </motion.h1>
        <motion.h1 
          initial={{ x: "0" }} 
          animate={{ x: "-100%" }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }} 
          className="text-[24vw] uppercase leading-none font-['Founders_Grotesk'] font-semibold pt-10 pr-20"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
