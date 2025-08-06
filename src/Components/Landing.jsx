import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
function Landing() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.5" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-52 px-20'>
        {["WE CREATE" , "EYE OPENING" , "PRESENTATIONS"].map((item , index) =>{
            return (
                <div className='masker'>
                    <div className='w-fit flex'>
                        {index === 1 && (
                        <motion.div 
                        initial={{width:0}} 
                        animate={{width:"9vw"}} 
                        transition={{ease:[0.76,0,0.24,1],duration:1}} 
                        className='w-[9vw] h-[5.5vw] rounded-md'><img className='rounded-md' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg " alt="" /></motion.div>)}
                        <h1 className='text-[7.5vw] leading-[6vw] tracking-tighter font-semibold font-["Founders_Grotesk"]'>{item}</h1>
                    </div>
                    
                </div>
            ) ;
        })}
        
        
      </div>
      <div className='border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20'>
        {["For public and private companies" , "From the first pitch to IPO"].map((item , index) =>(
            <p className='text-md font-light tracking-tight leading-none'>{item}</p>
        ) )}
        <div className='start flex items-center gap-5'>
            <div className='px-5 py-2 border-[2px] border-zinc-500 font-light text-sm capitalize rounded-full'>
                START THE PROJECT</div>
                <div className='w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full'>
                    <GoArrowUpRight/>
                </div>
            
        </div>
      </div>
    </div>
  )
}

export default Landing
