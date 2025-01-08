import React from 'react'
import { motion } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useState } from 'react';
import backgroundImage from "../../assets/3.jpg"
import backgroundImage1 from "../../assets/4.jpg"

function InsightsMarquee() {

    const [heights, setHeights] = useState([ '40vh', '40vh', '40vh', '40vh' ]);
        const [paragraphs, setParagraphs] = useState([ '', '', '', '' ]);
    
        const randomParagraphs = [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
        ];
    
        // Function to handle button click for each card (by index)
        const handleButtonClick = (index) => {
            const newHeights = [...heights];
            const newParagraphs = [...paragraphs];
    
            if (newHeights[index] === '40vh') {
                newHeights[index] = '72vh'; // Increase height for the clicked card
                const randomIndex = Math.floor(Math.random() * randomParagraphs.length);
                newParagraphs[index] = randomParagraphs[randomIndex]; // Set random paragraph
            } else {
                newHeights[index] = '40vh'; // Reset height
                newParagraphs[index] = ''; // Clear paragraph
            }
    
            setHeights(newHeights);
            setParagraphs(newParagraphs);
        };
    
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
      <div 
    data-scroll 
    data-scroll-section 
    data-scroll-speed="-0.1" 
    className='w-full py-20 bg-[#167266] rounded-tl-3xl rounded-tr-3xl overflow-hidden mt-80'
>
    <div className="flex whitespace-nowrap border-b border-t border-gray-100">
        <motion.h1 
            initial={{ x: "0" }} 
            animate={{ x: "-100%" }} 
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }} 
            className="text-[24vw] uppercase leading-none font-['Founders_Grotesk'] font-semibold text-white pt-10 pr-20"
        >
            instagram
        </motion.h1>
        <motion.h1 
            initial={{ x: "0" }} 
            animate={{ x: "-100%" }} 
            transition={{ repeat: Infinity, ease: "linear", duration: 10 }} 
            className="text-[24vw] uppercase leading-none font-['Founders_Grotesk'] font-semibold text-white pt-10 pr-20 "
        >
            instagram
        </motion.h1>
    </div>

    <div className="flex h-[110vh]">
    <div className="w-1/2">
        <h3 className="mt-4 p-4 uppercase text-white text-xl">What you can expect</h3>
    </div>

    <div className="w-1/2 flex gap-6 ">
        <div 
            className="w-full h-72" // Set width to 100% of the parent container
            style={{
                backgroundImage: `url(${backgroundImage})`,
                height: heights[0],  // Adjust the height dynamically based on the card's state
                backgroundSize: 'contain',  // Use contain to avoid cutting off the image
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '100px'   // Prevent tiling if the image is smaller
            }}
        >
        </div>

        <div className="w-full mr-10  ">  {/* Set width to 100% for consistency */}
            <div 
                className="w-full h-72  "  // Set width to 100% of the parent container
                style={{
                    backgroundImage: `url(${backgroundImage1})`,
                    height: heights[0],  // Adjust the height dynamically based on the card's state
                    backgroundSize: 'contain',  // Use contain to avoid cutting off the image
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat', 
                    borderRadius: '100px' // Prevent tiling if the image is smaller
                }}
            >
            </div>
        </div>
    </div>
</div>

</div>

    </div>
  )
}

export default InsightsMarquee
