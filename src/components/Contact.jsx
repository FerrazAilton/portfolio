import React from 'react'
import { HiArrowCircleUp } from 'react-icons/hi'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/c83cfcc5-b0b7-4aee-9140-a7cf761c7830" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#38B6FF] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email </p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#38B6FF] hover:border-[#38B6FF] px-4 py-3 my-8 mx-auto flex items-center'>To send
               <span>
                  <HiArrowCircleUp className='ml-3 ' />
               </span>
            </button>
            
        </form>
    </div>
  )
}

export default Contact