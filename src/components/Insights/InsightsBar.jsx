import React from 'react'
import Navbar from '../Navbar'
import InsightsEyes from './InsightsEyes'
import InsightsMarquee from './InsightsMarquee'
import InsightService from './InsightService'

function insights() {
  return (
    <>
    <div>

    
    <div>
       <div className='w-full min-h-screen border-gray-300'>
        <Navbar/>
      <div className="py-5  m-20">
    <h1 className=" text-4xl md:text-7xl lg:text-[7rem] w-1/2 font-['Founders_Grotesk'] ">Insights</h1>

    
  
</div>
</div>


  

<div className=" -mt-96 flex flex-col lg:flex-row w-full h-[80vh] p-4 lg:px-7 lg:py-7 space-y-8 lg:space-y-0 lg:space-x-8  border-gray-300 min-h-screen border-t-2">
      
      {/* <!-- Left Section --> */}
      <div className="w-full lg:w-3/6 font-['Neue Montreal'] ">
      
      
          <h2 className="text-lg lg:text-xl">We do this by following</h2>
          <p className="font-medium mt-2 lg:mt-3 text-base lg:text-lg">simple approach:</p>
          <h1 className="text-3xl lg:text-5xl mt-80 border-b-2 ml-2 mr-80">Holistic process</h1>
  
      </div>
  
      {/* <!-- Middle Section --> */}
      <div className="w-full lg:w-96 font-['Neue Montreal']">
          <h2 className="underline text-lg lg:text-xl">Goal defines it all</h2>
          <p className="font-light mt-3 lg:mt-5 text-sm lg:text-base">
          In Ukrainian, ochi - means eyes. It's not just a beautiful word, but our philosophy. Almost everything that needs to be communicated is better shown than explained.</p>
          <div className="mt-6 lg:mt-8">
              <h2 className="underline text-lg lg:text-xl">Goal defines it all</h2>
              <p className="font-light mt-2 lg:mt-3 text-sm lg:text-base">We believe a great presentation evokes interest and drives business results far better than any saying can. Hence, we founded ochi to help you persuade colleagues and clients by creating eye-opening presentations..</p>
          </div>
      </div>
  
      {/* <!-- Right Section --> */}
      <div className="w-full lg:w-72">
          <h1 className="underline   text-lg lg:text-lg">Context makes a difference</h1>
          <p className=" font-light mt-3 lg:mt-5 text-sm lg:text-base">When do you present? Online or live? At a sales meeting, at a conference, or just sending a cold email? We knit the context together to decide the style of the presentation.</p>
      </div>
  

 
      
      
  
      
  
  </div>

  
  
  



    </div>

    <InsightsEyes />

    <InsightsMarquee/>

    <InsightService/>
    

        
    

    </div>
    </>


  )
}

export default insights
