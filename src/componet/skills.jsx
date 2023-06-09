import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JAVASCRIPT from '../assets/javascript.png'
import REACTING from '../assets/react.png'
import NODE from '../assets/node.png'
import FIREBASE from '../assets/firebase.png'
import AWS from '../assets/aws 1.png'
import GITHUB from '../assets/github.png'
import TAILWIND from '../assets/tailwind.png'
import MONGO from '../assets/mongo.png'

const SKILLS = () => {
    return (
        <div name='skills' className=' bg-[#0a192f]  text-gray-300'>

            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                    <p className='py-4'>//These are the technologies i've worked with</p>
                </div>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="HTML ICNOS" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JAVASCRIPT} alt="HTML ICNOS" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={REACTING} alt="HTML ICNOS" />
                    <p className='my-4'>REACTING</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={NODE} alt="HTML ICNOS" />
                    <p className='my-4'>NODE</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={FIREBASE} alt="HTML ICNOS" />
                    <p className='my-4'>FIREBASE</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={AWS} alt="HTML ICNOS" />
                    <p className='my-4'>AWS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GITHUB} alt="HTML ICNOS" />
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={TAILWIND} alt="HTML ICNOS" />
                    <p className='my-4'>TAIL WIND</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={MONGO} alt="HTML ICNOS" />
                    <p className='my-4'>MONGO</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML ICNOS" />
                    <p className='my-4'>HTML</p>
                </div>
               

            </div>
        </div >
    )
}
export default SKILLS