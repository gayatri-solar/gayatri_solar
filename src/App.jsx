import Aboutus from './components/Aboutus'
import { useEffect, useRef, useState } from 'react'
import './App.css'
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

function App() {
  const menu = ["Home", "About", "Services", "Projects", "Calculator", "Contact"];
  const heroRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showpopup, setShowpopup] = useState(false);
  const [showcallpopup, setShowcallpopup] = useState(false);
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
    <div className='overflow-x-hidden scroll-smooth'>
      <Navbar menu={menu} isOpen={isOpen} setIsOpen={setIsOpen} className={"hidden z-50 w-full fixed lg:block"} />
      <Hero menu={menu} heroRef={heroRef} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Aboutus />
      <Partners />
      <Services />
      {isOpen ? "" : <Wp />}
      <FloatingMenu show={showMenu} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Projects />
      <Calculator />
      <Partners />
      <Contact setShowpopup={setShowpopup} />
      {showpopup && <SubmitPopup setShowpopup={setShowpopup} />}
      {showcallpopup && <CallPopup setShowcallpopup={setShowcallpopup} setShowpopup={setShowpopup} />}
      <Footer />
    </div>

  )
}

export default App
