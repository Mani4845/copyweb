import React from 'react'
import Navbar from '../Navbar'
import OurServices from './OurServices'
import Marquee from '../Marquee'
import ServicesMarquee from './ServicesMarquee'


function Services() {
  return (
    <div className='w-full min-h-screen bg-[#F1F1F1]'>
        <Navbar/>
      <div className="py-5  m-20">
    <h1 className=" text-4xl md:text-7xl lg:text-[7rem] w-1/2 font-['Founders_Grotesk'] ">Services</h1>

    
  
</div>
<div className="w-full border-2 -mt-7  bg-[#666666]" >
</div>

<div className='text -mt-12 px-5 md:px-14 py-24 font-["Founders_Grotesk"] text-3xl md:text-5xl'>
        <p className='text-zinc-950'>
          Ochi is a strategic presentation agency for 
          <span className="underline"> forward-thinking <br /></span>  
          <span className="underline"> businesses </span> that need to raise funds, sell-<br /> 
          prod­ucts, ex­plain <span className="underline"> com­plex ideas,</span> and <span className="underline"> hire </span> great peo-­<br />
          ple.
        </p>
        
      </div>
      <div className='w-full border-2 -mt-12  bg-[#666666] '>

        </div>

        <div className="flex flex-col lg:flex-row w-full h-[80vh] p-4 lg:px-7 lg:py-7 space-y-8 lg:space-y-0 lg:space-x-8 border-b border-gray-300">
      
    {/* <!-- Left Section --> */}
    <div className="w-full lg:w-3/6 font-['Neue Montreal'] ">
    
    
        <h2 className="text-lg lg:text-xl">We do this by following</h2>
        <p className="font-medium mt-2 lg:mt-3 text-base lg:text-lg">simple approach:</p>
        <h1 className="text-3xl lg:text-5xl mt-56">Holistic process</h1>

    </div>

    {/* <!-- Middle Section --> */}
    <div className="w-full lg:w-96 font-['Neue Montreal']">
        <h2 className="underline text-lg lg:text-xl">Goal defines it all</h2>
        <p className="font-light mt-3 lg:mt-5 text-sm lg:text-base">What do you want to achieve? Understanding the purpose of your presentation allows us to tailor it to ensure it hits the mark and drives results.</p>
        <div className="mt-6 lg:mt-8">
            <h2 className="underline text-lg lg:text-xl">Goal defines it all</h2>
            <p className="font-light mt-2 lg:mt-3 text-sm lg:text-base">What do you want to achieve? Understanding the purpose of your presentation allows us to tailor it to ensure it hits the mark and drives results.</p>
        </div>
    </div>

    {/* <!-- Right Section --> */}
    <div className="w-full lg:w-72">
        <h1 className="underline   text-lg lg:text-lg">Context makes a difference</h1>
        <p className=" font-light mt-3 lg:mt-5 text-sm lg:text-base">When do you present? Online or live? At a sales meeting, at a conference, or just sending a cold email? We knit the context together to decide the style of the presentation.</p>
    </div>

    

    

</div>



       
<OurServices/>

<ServicesMarquee/>


      


    </div>
  )
} 

export default Services
