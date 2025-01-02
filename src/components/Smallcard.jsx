import { motion } from "framer-motion";
import React from "react";

function Featured() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed= ".-1" className="w-full h-[120vh] my-20">
            <h1 className="text-5xl font-bold uppercase text-center mb-10">Featured Projects</h1>
            <div className="flex justify-center gap-6">
                {["Card 1", "Card 2", "Card 3"].map((title, index) => (
                    <motion.div
                        key={index}
                        className="w-1/3 h-[60vh] rounded-3xl relative overflow-hidden shadow-lg transition-transform duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img
                            className="w-full h-full object-cover"
                            src={`https://picsum.photos/seed/${index}/400/300`} // Placeholder images
                            alt={title}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-3xl">
                            {title}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Featured;