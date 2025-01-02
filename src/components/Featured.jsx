import { motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
    const cards = [useAnimation(), useAnimation()];

    const handleHoverStart = (index) => {
        cards[index].start({ y: "0" });
    };

    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" });
    };

    return (
        <>
            <div className='w-full h-screen my-20'>
                <h1 className='text-5xl font-[Founders_Grotesk] uppercase px-11'>Featured projects</h1>
                <div className='w-full border-t-2 border-zinc-800 my-12'>
                    <div className='m-auto px-10 py-10 flex gap-6'>
                        <motion.div
                            onHoverStart={() => handleHoverStart(0)}
                            onHoverEnd={() => handleHoverEnd(0)}
                            className='w-1/2 h-[70vh] rounded-3xl relative overflow-hidden'
                        >
                            <h1 className='absolute flex text-7xl leading-none tracking-tighter left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                {"FYDE".split("").map((item, index) => (
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[0]}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                        className='inline-block'
                                        key={index}
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </h1>
                            <div className='w-full h-full'>
                                <img className='h-full w-full object-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                            </div>
                        </motion.div>

                        <motion.div
                            onHoverStart={() => handleHoverStart(1)}
                            onHoverEnd={() => handleHoverEnd(1)}
                            className='w-1/2 h-[70vh] rounded-3xl relative overflow-hidden'
                        >
                            <h1 className='absolute flex text-7xl leading-none tracking-tighter right-1/2 top-1/2 transform translate-x-1/2 -translate-y-1/2'>
                                {"VIZE".split("").map((item, index) => (
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[1]}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                        className='inline-block'
                                        key={index}
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </h1>
                            <div className='w-full h-full'>
                                <img className='h-full w-full object-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Featured;