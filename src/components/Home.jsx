import React, { useState } from 'react';

import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';


const Home = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (

        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <h2 className="text-5xl md:text-7xl font-bold text-[#ffffff]">
                    Hi,
                </h2>
                <h2 className='text-5xl sm:text-7xl font-bold mt-2 text-[#ffffff]'>
                    I am <span className='text-[#38B6FF] '>Ailton Ferraz</span>
                </h2>


                <h2 className='text-2xl sm:text-3xl font-bold text-[#b4bacd]'>
                   Full-stack developer
                </h2>


                <div className='py-10'>
                    <button className='text-white group border-2 px-6 py-4 my-2 flex items-center hover:bg-[#38B6FF] hover:border-[#00a6ff]'>
                        <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                           View Work
                        </Link>
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3 ' />
                        </span>
                    </button>
                </div>
          
            </div>

        </div>
    )
}

export default Home;