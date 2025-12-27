import React from 'react'
import Navbar from './Navbar'
import HeroLeft from './HeroLeft'
import Smenu from './Smenu'
import bg from '../assets/bg/lg-bg.jpg'
import SEO from './SEO'

const Hero = ({ menu, heroRef, isOpen, setIsOpen }) => {

  return (
    <div
      id="Home"
      ref={heroRef}
      className="hero-bg relative  h-screen bg-cover bg-right"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1705579606211-88640600fcdd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29sYXIlMjBwYW5lbCUyMHdvcmtlcnxlbnwwfDF8MHx8fDI%3D")`
      }}
    >
      <SEO title="Gaytri Solar" description="Welcome to Gaytri Solar, your trusted partner in solar energy solutions." />
      <div
        className="hidden lg:block absolute inset-0 bg-cover bg-top-right"
        style={{
          backgroundImage: `url(${bg})`
        }}
      ></div>

      <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/20 lg:bg-black/50 text-white">
        <Navbar menu={menu} isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="flex flex-col lg:flex-row items-center justify-center px-8">
          <HeroLeft />
        </div>

        <Smenu menu={menu} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  )
}

export default Hero
