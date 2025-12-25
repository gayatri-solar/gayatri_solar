import React from 'react'
import { HiMail } from "react-icons/hi";
import { MdCallEnd } from "react-icons/md";

import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaYoutube,
} from "react-icons/fa";

const Footer = () => {
    const socials = [
        { name: "facebook", Icon: FaFacebookF, color : "#1877F2" },
        { name: "instagram", Icon: FaInstagram, color : "#E4405F" },
        { name: "whatsapp", Icon: FaWhatsapp, color : "#25D366" },
        { name: "youtube", Icon: FaYoutube, color : "#FF0000" },
    ];
    return (
        <div className='bg-lime-600 text-white py-10'>
            <div className='lg:flex lg:items-center lg:justify-center lg:flex-row-reverse'>
                <div className='flex text-white'>
                    <div onClick={() => {
                        window.location.href = "tel:+919075321764";
                    }} className=" text-lg mb-2 ml-8 cursor-pointer flex items-center gap-2 uppercase">
                        <MdCallEnd className='text-white' />
                        +91-9075321764
                    </div>
                    <div onClick={() => {
                        window.location.href = "tel:+919764004271";
                    }} className="text-lg mb-2 ml-8 cursor-pointer flex items-center gap-2 uppercase">
                        <MdCallEnd className='text-white' />
                        +91-9764004271
                    </div>
                </div>
                <h1 onClick={() => {
                    window.location.href = "mailto:gayatrienergynsk@gmail.com";
                }} className=" text-xl mb-2 ml-8 cursor-pointer flex items-center gap-2 uppercase" >
                    <HiMail className='text-white' />
                    gayatrienergynsk@gmail.com </h1>
            </div>
            <div className='flex justify-around py-2 lg:hidden'>
                {socials.map(({ name, Icon, color }) => (
                    <div
                        key={name}
                        className="p-1 text-3xl rounded-sm cursor-pointer transition bg-gray-200"
                    >
                        <Icon color={color}  />
                    </div>
                ))}
            </div>
            <div className=' flex flex-col justify-center items-center text-white'>
                <h3>Copyright © 2026 Gayatri Solar. All Rights Reserved.</h3>
                    <h3> 
                        <a href="https://api.whatsapp.com/send/?phone=917448046577&text&type=phone_number&app_absent=0">Designed by Mayur Kumawat.</a>
                    </h3>
            </div>
            <div className='hidden lg:flex gap-5 pr-5 lg:justify-end lg:pt-2'>
                {socials.map(({ name, Icon, color }) => (
                    <div
                        key={name}
                        className="p-1 text-3xl rounded-sm cursor-pointer transition bg-gray-200 hover:scale-[105%] duration-300"
                    >
                        <Icon color={color} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Footer