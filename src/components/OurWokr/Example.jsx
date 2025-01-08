import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Example = () => {
  useEffect(() => {
    // Static component ke liye ScrollTrigger setup
    gsap.to(".static-section", {
      scrollTrigger: {
        trigger: ".static-section",
        start: "top top", // Jab static section viewport ke top par ho
        end: "bottom top", // Jab static section ka bottom viewport ke top tak aaye
        scrub: true, // Smooth scrolling effect
        pin: true, // Static banata hai section ko
      },
    });

    // Animate hone wale component ke liye
    gsap.fromTo(
      ".animated-section",
      { y: "100%" }, // Start position neeche
      {
        y: "0%", // End position static section ke upar
        scrollTrigger: {
          trigger: ".animated-section",
          start: "top bottom", // Jab animated section viewport ke neeche ho
          end: "top top", // Jab viewport ke top tak aaye
          scrub: true, // Smooth animation
        },
      }
    );
  }, []);

  return (
    <div className="scroll-container">
      <div className="static-section h-screen bg-blue-500 flex items-center justify-center text-white text-4xl">
        Static Component
      </div>
      <div className="animated-section h-screen bg-green-500 flex items-center justify-center text-white text-4xl">
        Animated Component
      </div>
    </div>
  );
};

export default Example;
