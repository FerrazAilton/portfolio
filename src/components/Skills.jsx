import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'

import JavaScript from '../assets/javascript.png'
import ReactPng from '../assets/react.png'
import Java from '../assets/java.png'
import JavaSpring from '../assets/ss.png'
import Postgre from '../assets/Postgresql.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
          
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#38B6FF]'>
                    Skills
                </p>
                <p className='py-4'>// These are the tecnologies I've worked with</p>
            </div>
            
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p  className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                    <p  className='my-4'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                    <p  className='my-4'>JavaScript</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactPng} alt="HTML icon" />
                    <p  className='my-4'>React</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Java} alt="HTML icon" />
                    <p  className='my-4'>Java</p>
                </div>
                
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaSpring} alt="HTML icon" />
                    <p  className='my-4'>Spring</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Postgre} alt="HTML icon" />
                    <p  className='my-4'>PostgreSQL</p>
                </div>

            </div>


        </div>
    </div>
  )
}

export default Skills