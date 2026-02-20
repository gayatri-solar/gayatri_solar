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
    <h2 className="text-lime-600 mb-2 lg:mb-4 text-3xl lg:text-5xl">
        Our Projects
    </h2>

    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-5 gap-4">
        {links.map((link, index) => (
            <div
                key={index}
                className="mb-4 break-inside-avoid overflow-hidden rounded-lg"
            >
                <img
                    src={link}
                    alt={`Project ${index + 1}`}
                    className="w-full rounded-lg hover:scale-105 transition duration-300"
                />
            </div>
        ))}
    </div>
</div>
        </>
    )
}

export default Gallery
