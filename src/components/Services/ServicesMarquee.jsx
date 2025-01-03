import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
import Ready from './Ready';

function ServicesMarquee() {
    // Individual state for each card's height and paragraph content
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
                className='w-full py-20 bg-[#167266] rounded-tl-3xl rounded-tr-3xl overflow-hidden'
            >
                <div className="flex whitespace-nowrap border-b border-t border-gray-100">
                    <motion.h1 
                        initial={{ x: "0" }} 
                        animate={{ x: "-100%" }} 
                        transition={{ repeat: Infinity, ease: "linear", duration: 10 }} 
                        className="text-[24vw] uppercase leading-none font-['Founders_Grotesk'] font-semibold pt-10 pr-20"
                    >
                        why us others
                    </motion.h1>
                    <motion.h1 
                        initial={{ x: "0" }} 
                        animate={{ x: "-100%" }} 
                        transition={{ repeat: Infinity, ease: "linear", duration: 10 }} 
                        className="text-[24vw] uppercase leading-none font-['Founders_Grotesk'] font-semibold pt-10 pr-20 "
                    >
                        why us others
                    </motion.h1>
                </div>

                <div className="flex h-[110vh]">
                    <div className="w-1/2">
                        <h3 className='mt-4 p-4 uppercase text-white text-xl'>what you can expect</h3>
                    </div>

                    <div className="w-1/2 flex gap-6">
                        <div className="w-1/2">
                            {/* Card 1 */}
                            <div className='bg-[#146b5f] w-full mt-7 rounded-2xl' style={{ height: heights[0] }} >
                                <h1 className='text-5xl text-white mt-3 mx-2 p-6'>01</h1>
                                <div className='mt-36'>
                                    <button onClick={() => handleButtonClick(0)} className='text-white uppercase ml-3 underline relative'>
                                        Communication
                                        <span className="line"></span>
                                    </button>
                                </div>
                                <div className='flex justify-end -mt-5'>
                                    <button onClick={() => handleButtonClick(0)} className='text-white uppercase mr-4 underline relative'>
                                        Read
                                        <span className="line"></span>
                                    </button>
                                </div>

                                {paragraphs[0] && <p className='text-white mt-5 mx-2'>{paragraphs[0]}</p>}
                            </div>

                            {/* Card 2 */}
                            <div className='bg-[#146b5f] w-full mt-7 rounded-2xl' style={{ height: heights[1] }} >
                                <h1 className='text-5xl text-white mt-3 mx-2 p-6'>02</h1>
                                <div className='mt-36'>
                                    <button onClick={() => handleButtonClick(1)} className='text-white uppercase ml-3 underline relative'>
                                        Communication
                                        <span className="line"></span>
                                    </button>
                                </div>
                                <div className='flex justify-end -mt-5'>
                                    <button onClick={() => handleButtonClick(1)} className='text-white uppercase mr-4 underline relative'>
                                        Read
                                        <span className="line"></span>
                                    </button>
                                </div>

                                {paragraphs[1] && <p className='text-white mt-5 mx-2'>{paragraphs[1]}</p>}
                            </div>
                        </div>

                        <div className="w-1/2 mr-8">
                            {/* Card 3 */}
                            <div className='bg-[#146b5f] w-full mt-7 rounded-2xl' style={{ height: heights[2] }} >
                                <h1 className='text-5xl text-white mt-3 mx-2 p-6'>03</h1>
                                <div className='mt-36'>
                                    <button onClick={() => handleButtonClick(2)} className='text-white uppercase ml-3 underline relative'>
                                        Communication
                                        <span className="line"></span>
                                    </button>
                                </div>
                                <div className='flex justify-end -mt-5'>
                                    <button onClick={() => handleButtonClick(2)} className='text-white uppercase mr-4 underline relative'>
                                        Read
                                        <span className="line"></span>
                                    </button>
                                </div>

                                {paragraphs[2] && <p className='text-white mt-5 mx-2'>{paragraphs[2]}</p>}
                            </div>

                            {/* Card 4 */}
                            <div className='bg-[#146b5f] w-full mt-7 rounded-2xl' style={{ height: heights[3] }} >
                                <h1 className='text-5xl text-white mt-3 mx-2 p-6'>04</h1>
                                <div className='mt-36'>
                                    <button onClick={() => handleButtonClick(3)} className='text-white uppercase ml-3 underline relative'>
                                        Communication
                                        <span className="line"></span>
                                    </button>
                                </div>
                                <div className='flex justify-end -mt-5'>
                                    <button onClick={() => handleButtonClick(3)} className='text-white uppercase mr-4 underline relative'>
                                        Read
                                        <span className="line"></span>
                                    </button>
                                </div>

                                {paragraphs[3] && <p className='text-white mt-5 mx-2'>{paragraphs[3]}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <div className='z-[999] rounded-full'>

            <Ready/>
                </div>
        </div>
    );
}

export default ServicesMarquee;
