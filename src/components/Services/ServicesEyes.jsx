import React, { useEffect, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll'; 
  

function ServicesEyes() {
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
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotation(angle-180);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return ( 
    <div data-scroll data-scroll-section data-scroll-speed = "-0.4" className=''>
      <div  className=' '>
        <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
          <div className='w-[15vw] h-[15vw] flex justify-center items-center bg-red-100 rounded-full'>
            <div className='relative h-2/3 w-2/3 flex bg-black rounded-full'>
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                }}
                className='absolute line w-full h-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'
              >
                <div className='h-5 w-5 bg-red-100 rounded-full'></div>
              </div>
            </div>
          </div>
          <div className='w-[15vw] h-[15vw] bg-red-100 rounded-full flex justify-center items-center'>
            <div className='relative h-2/3 w-2/3 flex justify-center items-center bg-black rounded-full'>
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                }}
                className='absolute line w-full h-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'
              >
                <div className='h-5 w-5 bg-red-100 rounded-full'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesEyes;