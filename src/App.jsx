import Aboutus from './components/Aboutus'
import { useEffect, useRef, useState } from 'react'
import './App.css'

import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

import Hero from './components/Hero'
import Services from './components/Services'
import Wp from './components/Wp'
import FloatingMenu from "./components/FlotingMenu";
import Footer from './components/Footer'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Partners from './components/Partners'
import Calculator from './components/Calculator'
import SubmitPopup from './components/SubmitPopup'
import Navbar from './components/Navbar'
import CallPopup from './components/CallPopup'
import Corsor from './components/Corsor'
import Gallery from './pages/Gallery'
import { useLocation } from "react-router-dom";

function App() {
  const menu = [
    { name: "Home", path: "/#home" },
    { name: "About", path: "/#about" },
    { name: "Services", path: "/#services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Projects", path: "/#projects" },
    { name: "Calculator", path: "/#calculator" },
    { name: "Contact", path: "/#contact" },
  ];
  const heroRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showpopup, setShowpopup] = useState(false);
  const [showcallpopup, setShowcallpopup] = useState(false);

  function ScrollToHash() {
    const { hash, pathname } = useLocation();

    useEffect(() => {
      if (hash && pathname === "/") {
        const el = document.getElementById(hash.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [hash, pathname]);

    return null;
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowMenu(!entry.isIntersecting);
      },
      {
        threshold: 0.25,
      }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowcallpopup(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowcallpopup(true)
    }, 30000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Corsor />
      <Navbar menu={menu} isOpen={isOpen} setIsOpen={setIsOpen} className={"hidden z-50 w-full fixed lg:block"} />
      <ScrollToHash />
      <Routes>
        <Route path='/' element={
          <div className='overflow-x-hidden scroll-smooth cursor-default select-none'>
            <FloatingMenu show={showMenu} isOpen={isOpen} setIsOpen={setIsOpen} />
            <Hero menu={menu} heroRef={heroRef} isOpen={isOpen} setIsOpen={setIsOpen} />
            <Aboutus />
            <Partners />
            <Services />
            <Projects />
            <Calculator />
            <Partners />
            <Contact setShowpopup={setShowpopup} />

          </div>
        } />
        <Route path='/gallery' element={<Gallery heroRef={heroRef} menu={menu} isOpen={isOpen} setIsOpen={setIsOpen} />} />
      </Routes>
      <Footer />
      {showpopup && <SubmitPopup setShowpopup={setShowpopup} />}
      {showcallpopup && <CallPopup setShowcallpopup={setShowcallpopup} setShowpopup={setShowpopup} />}
      {!isOpen && <Wp />}
    </>

  )
}

export default App
