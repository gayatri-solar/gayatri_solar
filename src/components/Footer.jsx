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
        <div className='bg-blue-400 text-white py-8 text-center'>
            <div className='flex-col flex items-start justify-center lg:flex-row-reverse'>
                <div className='flex flex-col lg:flex-row text-white'>
                    <div className="flex">
                        <div onClick={() => {
                        window.location.href = "tel:+919075321764";
                    }} className=" text-sm lg:text-lg mb-2 ml-8 cursor-pointer flex items-center gap-2 uppercase">
                        <MdCallEnd className='text-white' />
                        +91-9075321764
                    </div>
                    <div onClick={() => {
                        window.location.href = "tel:+919764004271";
                    }} className="text-sm lg:text-lg mb-2 ml-8 cursor-pointer flex items-center gap-2 uppercase">
                        <MdCallEnd className='text-white' />
                        +91-9764004271
                    </div>
                    </div>
                </div>
                <h1 onClick={() => {
                    window.location.href = "mailto:gayatrienergynsk@gmail.com";
                }} className="mb-2 lg:text-lg ml-8 cursor-pointer flex items-center gap-2 uppercase" >
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
            <div className=' flex flex-col justify-center items-center text-white text-center lg:pt-0 pt-4'>
                <h3 className="hidden lg:block">Copyright © 2026 Gayatri Solar. All Rights Reserved.</h3>
                <h3 className=" lg:hidden ">Copyright © 2026 Gayatri Solar. <br /> All Rights Reserved.</h3>
                    <h3> 
                        <a href="https://api.whatsapp.com/send/?phone=917448046577&text&type=phone_number&app_absent=0">Code by Mayur Kumawat.</a>
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

