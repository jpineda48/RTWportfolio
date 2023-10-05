import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#fbf7f5] text-black'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
            <p className=''>Hello, my name is </p>
            <h1 className='text-4xl sm:text-7xl font-bold '>Jacqueline Pineda</h1>
            <h2 className='text-4xl sm:tect-7xl font-bold py-3'>I am a <span className='text-red-500'>Full Stack Developer</span></h2>
            <div className='py-4 max-w-[700]'>
                <button className='text-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#c9df8a] hover:border-[#c9df8a] hover:text-white'>View Work 
                <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-2'/>  </span>
                </button>
            </div>
        </div>
      
    </div>
  )
}

export default Home
