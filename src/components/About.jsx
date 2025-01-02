import React from 'react';

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed= "-.2" className='masker w-full min-h-screen bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
      <div className='text px-5 md:px-14 py-24 font-["Founders_Grotesk"] text-3xl md:text-5xl'>
        <p className='text-zinc-950'>
          Ochi is a strategic presentation agency for 
          <span className="underline"> forward-thinking <br /></span>  
          <span className="underline"> businesses </span> that need to raise funds, sell-<br /> 
          prod­ucts, ex­plain <span className="underline"> com­plex ideas,</span> and <span className="underline"> hire </span> great peo-­<br />
          ple.
        </p>
      </div>

      <div className='portion border-t-2 border-b-2 border-[#b4c281] w-full h-auto py-8'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-zinc-950 font-[Founders_Grotesk] text-lg">
          <div className="mx-5 my-5 text-center md:text-left">
            <h2 className="font-bold">What you can expect:</h2>
          </div>
          <div className="mx-5 my-5">
            <p>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
            <br />
            <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
          </div>
          <div className="mx-5 my-5">
            <h3 className="font-bold">S:</h3>
            <ul className="list-disc list-inside">
              <li><a href="#home" className="text-blue-600 hover:underline">Home</a></li>
              <li><a href="#about" className="text-blue-600 hover:underline">About</a></li>
              <li><a href="#services" className="text-blue-600 hover:underline">Services</a></li>
              <li><a href="#contact" className="text-blue-600 hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between'>
        <div className='px-5 md:px-12 py-10'>
          <h1 className='text-zinc-950 uppercase text-3xl md:text-4xl'>Our approach:</h1>
          <button className='flex gap-2 items-center px-4 md:px-7 py-3 bg-zinc-950 text-white rounded-full mt-5'>
            READ MORE
            <div className='h-2 w-2 bg-white rounded-full'></div>
          </button>
        </div>
        <div className='bg-[#e0fa82] h-[75vh] w-full md:w-[90vh] mx-5 md:mx-16 mt-8 rounded-2xl flex items-center justify-center'>
          <img className="max-w-full h-auto my-5" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
        </div>
      </div>
    </div>
  );
}

export default About;