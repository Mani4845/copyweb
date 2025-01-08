import React from "react";
import { useEffect } from "react";
import { FaLightbulb, FaClipboardList, FaCogs, FaTruck } from "react-icons/fa";
import backgroundImage from "../../assets/1.jpg"
import Navbar from "../Navbar";
import Testimonials from "./Testimonials";
import LocomotiveScroll from 'locomotive-scroll'; 
import OurServices from "../Services/OurServices";

const OurProcess = () => {
  const processSteps = [
    {
      id: 1,
      icon: <FaLightbulb />,
      title: "Ideas",
      description: "We take ideas, pick the essences, and furnish them professionally.",
    },
    {
      id: 2,
      icon: <FaClipboardList />,
      title: "Planning",
      description: "Make strategic consultant diversity, choose appropriate technology and platforms.",
    },
    {
      id: 3,
      icon: <FaCogs />,
      title: "Execution",
      description: "Our development team puts the right elements together and executes them.",
    },
    {
      id: 4,
      icon: <FaTruck />,
      title: "Delivery",
      description: "We try to deliver on time and provide post-delivery support to fix errors.",
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
    <>
    <div>
       
        <Navbar/>
    <section
     data-scroll data-scroll-section data-scroll-speed = "-0.4"  className="relative bg-cover bg-center bg-no-repeat py-16 px-8 w-full min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-white text-3xl font-bold mb-4">Our Process</h2>
        <p className="text-white text-lg mb-12">
          Our process is as simple as a cup of tea. Our team makes the process very simple and smooth
          to deliver on time.
        </p>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200 text-green-500 hover:bg-green-500 hover:text-white text-3xl">
                {step.icon}
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              {/* Description */}
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Testimonials/>
    <OurServices/>
    </div>
    </>
  );
};

export default OurProcess;
