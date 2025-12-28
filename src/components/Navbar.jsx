import { useEffect } from "react";
import Button1 from "./Button1";
import { TbMenuDeep } from "react-icons/tb";
import Smenu from "./Smenu";
import logo from "../assets/logo.png";
import logosm from "../assets/android-chrome-512x512.png";
import { IoLocationSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";


const Navbar = ({ menu, isOpen, setIsOpen, className }) => {
  const socials = [
    { name: "facebook", Icon: FaFacebookF, color: "#1877F2" },
    { name: "instagram", Icon: FaInstagram, color: "#E4405F" },
    { name: "whatsapp", Icon: FaWhatsapp, color: "#25D366" },
    { name: "youtube", Icon: FaYoutube, color: "#FF0000" },
  ];

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
    <div className={`${className}`} >
      <div className="hidden lg:flex lg:items-center lg:justify-between bg-lime-600 text-white py-1 px-8">
        <div className="flex gap-4">
          <div className=" flex items-center gap-1 uppercase cursor-pointer">
            <HiMail className="inline mt-1"
              onClick={() => {
                window.location.href = "mailto:Gayatrienergynsk@gmail.com";
              }} />
            <p>Gayatrienergynsk@gmail.com</p>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <MdLocalPhone className="inline mt-1"
              onClick={() => {
                window.location.href = "tel:+919075321764";
              }} />
            <p>+91-9075321764</p>
          </div>
          <div className=" flex items-center gap-1 cursor-pointer">
            <IoLocationSharp className="inline mt-1" />
            <p>Nashik, Maharashtra</p>
          </div>
        </div>
        <div className="flex gap-5">
          {socials.map(({ name, Icon, color }) => (
            <div
              key={name}
              className="p-1 lg:text-xl rounded-sm cursor-pointer transition bg-white"
            >
              <Icon color={color} />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-lime-50 lg:bg-white flex justify-between items-center text-black px-2 py-3 lg:py-0 lg:px-8 font-bold relative">
        <div className="flex justify-center items-center cursor-pointer">
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
        <div className="cursor-pointer text-lime-900 text-nowrap lg:hidden">
          <div className=" hover:text-lime-600 flex items-center gap-1 text-[4vw] lg:text-lg">
            <MdLocalPhone className="inline"
              onClick={() => {
                window.location.href = "tel:+919075321764";
              }} />
            <p>+91-9075321764</p>
          </div>
          <div className=" hover:text-lime-600 flex items-center gap-1 text-[3.3vw] lg:text-[0.95rem]">
            <IoLocationSharp className="inline text-red-600 " />
            <p>Nashik, Maharashtra</p>
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

    </div>
  );
};

export default Navbar;
