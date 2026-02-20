import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';

const Gallery = ({ menu, isOpen, setIsOpen, heroRef }) => {
    const modules = import.meta.glob("../assets/Projects/*", {
        eager: true,
        import: "default",
    });
    const links = Object.values(modules);

    useEffect(()=>{
        window.scrollTo(0, 0);
    })
    return (
        <>
            <Navbar menu={menu} isOpen={isOpen} setIsOpen={setIsOpen} className="lg:hidden" />
            <div className='min-h-screen lg:pt-[25vh] text-4xl px-8 py-4 relative'>
                <h2 className="text-lime-600 mb-2 text-3xl lg:text-5xl">
                    Our Projects
                </h2>
                <div className='flex flex-wrap gap-4'>
                    {links.map((link, index) => (
                        <div key={index} className="w-full lg:w-[19%] h-64 bg-gray-200 rounded-lg overflow-hidden">
                            <img src={link} alt={`Project ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Gallery
