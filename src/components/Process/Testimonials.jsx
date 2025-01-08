import React from "react";
import { FaLightbulb, FaClipboardList, FaCogs } from "react-icons/fa";
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from "react"; 

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      icon: <FaLightbulb />,
      quote:
        "Thanks to Bloomrix, you have delivered exactly what I was looking for. Really did a fabulous job.",
      name: "Mian Faisal Mahmood",
      company: "Mian Autos",
    },
    {
      id: 2,
      icon: <FaClipboardList />,
      quote:
        "Thanks to you guys for your hard work and personal affiliation. I got extensive business enquiries.",
      name: "Hammad Malik",
      company: "Blue Ocean Residency",
    },
    {
      id: 3,
      icon: <FaCogs />,
      quote:
        "A good kick start with a corporate website design from Bloomrix has made my business stand alone.",
      name: "Yasir Liaqat",
      company: "Print Village",
    },
  ];

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
    <section
    data-scroll data-scroll-section data-scroll-speed = "-0.1" className="relative bg-cover bg-center bg-no-repeat py-16 min-h-screen px-8 w-full "
      style={{
        backgroundImage: `url()`, // Add a valid image URL here if needed
      }}
    >
      {/* Background Overlay */}
      <div  className="absolute inset-0 bg-[#CDEA68] rounded-3xl"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center text-white">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-2">Actions speak</h2>
        <h3 className="text-pink-500 text-4xl font-bold mb-6">
          louder than words
        </h3>
        <p className="text-lg mb-12">Some of our key facts and testimonials</p>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white text-black rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
            >
              <div
                className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200 text-green-500 hover:bg-green-500 hover:text-white text-3xl"
              >
                {testimonial.icon}
              </div>
              <p className="mb-4">{testimonial.quote}</p>
              <h4 className="font-bold">{testimonial.company}</h4>
              <p>{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
