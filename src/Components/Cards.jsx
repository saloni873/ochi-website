import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
        <div className='cardcontainer w-1/2 h-[50vh]'>
            <div className='card relative rounded-xl w-full h-full  bg-[#004D43] flex items-center justify-center'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2024-2025</button>
            </div>
        </div>
        <div className='cardcontainer flex w-1/2 gap-5 h-[50vh]'>
            <div className='card relative rounded-xl w-1/2 h-full  bg-[#192826] flex items-center justify-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 uppercase'>Rating 5.0 on Clutch</button>
            </div>
            <div className='card relative rounded-xl w-1/2 h-full  bg-[#192826] flex items-center justify-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 uppercase'>Business Bootcamp Alumni</button>
            </div>
            </div>
    </div>
  )
}

export default Cards

