import {useEffect } from "react";
import Button1 from "./Button1";
import { TbMenuDeep } from "react-icons/tb";
import Smenu from "./Smenu";
import logo from "../assets/logo.png";
import logosm from "../assets/fevicon.png";
import { IoLocationSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";


const Navbar = ({ menu, isOpen, setIsOpen }) => {


  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return (
    <>
      <div className="bg-lime-50 lg:bg-white flex justify-between items-center text-black px-2 py-3 lg:py-0 lg:px-8 font-bold relative">
        <div className="flex justify-center items-center">
          <img className="hidden lg:block w-48 lg:w-72" src={logo} alt="Gayatri Solar Logo" />
          <img className="w-12 lg:hidden" src={logosm} alt="Gayatri Solar Logo" />
        </div>
        <ul className="hidden lg:flex gap-8 text-base font-semibold px-12">
          {menu.map((item) => (
            <li
              key={item}
              onClick={() => handleScroll(item)}
              className="cursor-pointer text-lime-900 hover:text-lime-600"
            >
              {item}
            </li>
          ))}

        </ul>
        <div className="cursor-pointer text-lime-900">
          <div className=" hover:text-lime-600 flex items-center gap-1 text-lg">
            <MdLocalPhone className="inline" 
            onClick={() => {
            window.location.href = "tel:+919075321764";
          }}/>
            <p>+91-9075321764</p>
          </div>
          <div className=" hover:text-lime-600 flex items-center gap-1 text-sm">
            <IoLocationSharp className="inline" />
            <p>Nashik, Maharashtra.</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Button1 onClick={() => {
            window.location.href = "tel:+919075321764";
          }} text={"Call Now"} />
          <div onClick={() => setIsOpen(true)} className="lg:hidden px-2 text-4xl ml-2 -mr-2">
            <TbMenuDeep color="#192e03" />
          </div>
        </div>
      </div>
      <Smenu menu={menu} isOpen={isOpen} setIsOpen={setIsOpen} />

    </>
  );
};

export default Navbar;
