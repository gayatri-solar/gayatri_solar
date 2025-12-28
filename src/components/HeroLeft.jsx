import React from 'react'
import Button1 from './Button1'
import Button2 from './Button2'

const HeroLeft = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='flex justify-center lg:justify-center items-start lg:items-center mt-16 lg:-mt-16 flex-col w-full lg:min-h-screen min-h-[70vh] pr-2 '>
        <h3 className='text-lime-600 uppercase text-lg lg:text-2xl font-semibold'>welcome to Gayatri Solar</h3>
        <h2 className='text-3xl lg:text-7xl font-bold livvic'>Lighting Lives with</h2>
        <h2 className='text-3xl lg:mt-2 lg:text-7xl text-nowrap font-bold text-lime-600'>Smart Solar Solutions</h2>
        <p className=' lg:text-xl text-lg py-3 lg:w-[70%] lg:text-center capitalize text-white'>Gayatri Solar offers advanced solar energy solutions for residential, industrial, and rural projects. We focus on efficient, eco-friendly systems that reduce energy costs and promote a cleaner, sustainable future.</p>
        <div className='flex gap-6 lg:mt-3'>
            <Button1 text="Our Services" onClick={() => handleScroll('Services')} />
            <Button1 text="Contact Us" onClick={() => handleScroll('Contact')} />
        </div>
    </div>
    
  )
}

export default HeroLeft