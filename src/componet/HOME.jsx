import React from 'react'
import {HiArrowRight} from 'react-icons/hi'

const HOME = () => {
  return (
    <div name='home' className=' w-full h-screen bg-[#0a192f]'>


{/* container */}
<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-pink-600'>Hi, my name is</p>
    <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Onyia Kelly </h1>
    <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>i'm a Front End Developer</h2>
    <p className='text-[#8892b0] py-4 max-w-[700px]'> i'm a Front End Developer specializing in building (and occasionally desiging)
        exceptional digital experinces. Currently ,i am fouced on buliding responsive web applications.</p>
<div>
    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'> view work 
    <span className='group-hover:rotate-90 duration-300'>
        <HiArrowRight className='ml-3' />
        </span>
    </button>
</div>
</div>
    </div>
  )
}

export default HOME