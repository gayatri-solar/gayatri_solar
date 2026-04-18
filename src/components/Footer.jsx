import { HiMail } from "react-icons/hi";
import { MdCallEnd, MdLocationCity } from "react-icons/md";

import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = ({ menu }) => {
    const socials = [
        { name: "facebook", Icon: FaFacebookF, color: "#1877F2", link: "https://www.facebook.com/profile.php?id=61585281819822&sk=about_details" },
        { name: "instagram", Icon: FaInstagram, color: "#E4405F", link: "https://www.instagram.com/gayatrienergynsk/" },
        { name: "whatsapp", Icon: FaWhatsapp, color: "#25D366", link: 'https://wa.me/919075321764' },
        { name: "youtube", Icon: FaYoutube, color: "#FF0000", link: "https://www.youtube.com/@solarenergynsk" },
    ];
    return (<>
        <div className='bg-(--ft-black) text-white py-8 '>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-0">
                <div className="p-8 w-full">
                    <div>
                        <h1 className="text-(--bg) hover:text-(--primary-color) transition-colors duration-300 text-4xl lg:text-5xl font-semibold letter-spacing leading-tight relative mb-5">
                            Gaytri Solar
                            <span className="text-lg text-zinc-400 absolute left-0 -bottom-6 font-medium">
                                Energy
                            </span>
                        </h1>
                    </div>
                    <p className="text-(--gray-2) mt-8">
                        We are committed to providing our customers with the best solar energy solutions, ensuring a sustainable future for all. Our team of experts is dedicated to delivering high-quality products and exceptional service, making the transition to solar energy seamless and efficient.
                    </p>
                </div>
                <div className="p-8 w-full">
                    <h2 className="text-(--primary-color) text-2xl font-semibold mb-4">Contact</h2>
                    <div className="flex items-center gap-4 mb-2">
                        <HiMail className="text-(--primary-color) text-2xl" />
                        <a href="mailto:Gayatrienergynsk@gmail.com" className="text-(--gray-2) uppercase hover:text-(--primary-color)">
                            Gayatrienergynsk@gmail.com
                        </a>
                    </div>

                    <div className="flex gap-4 mb-2 w-full">
                        <MdLocationCity className="text-(--primary-color) text-2xl" />
                        <a href="https://maps.app.goo.gl/2e4cigGiGZEDdXDJ6" target="_blank" rel="noopener noreferrer" className="text-(--gray-2) text-wrap uppercase hover:text-(--primary-color) w-full">
                            Vaibhav Appt, 2, 09, near Swami Samrth kendra, Rajiv Nagar, Nashik, Maharashtra 422009
                        </a>
                    </div>

                    <div className="flex items-center gap-4 mb-2">
                        <MdCallEnd className="text-(--primary-color) text-2xl" />
                        <a href="tel:+919075321764" className="text-(--gray-2) uppercase hover:text-(--primary-color)">
                            +91 90753 21764
                        </a>
                    </div>
                    <div className="flex items-center gap-4 mb-2">
                        <MdCallEnd className="text-(--primary-color) text-2xl" />
                        <a href="tel:+919764004271" className="text-(--gray-2) uppercase hover:text-(--primary-color)">
                            +91 97640 04271
                        </a>
                    </div>

                </div>
                <div className="p-8 w-full">
                    <h2 className="text-(--primary-color) text-2xl font-semibold mb-4">Quick Links</h2>
                    <div>
                        {menu.map((item) => (
                            <Link key={item.name} to={item.path} className="block text-(--gray-2) uppercase hover:text-(--primary-color) mb-2">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex justify-around py-2  lg:hidden'>
                {socials.map(({ name, Icon, color, link }) => (
                    <div
                        key={name} onClick={() => (window.open(link, '_blank'))}
                        className="p-1 text-3xl rounded-sm cursor-pointer transition bg-white/90 hover:scale-[105%] duration-300"
                    >
                        <Icon color={color} />
                    </div>
                ))}
            </div>

            <div className='hidden lg:flex gap-5 pr-5 lg:justify-end lg:pt-2'>
                {socials.map(({ name, Icon, color, link }) => (
                    <div
                        key={name} onClick={() => (window.open(link, '_blank'))}
                        className="p-1 text-2xl rounded-sm cursor-pointer transition bg-white/90 hover:scale-[105%] duration-300"
                    >
                        <Icon color={color} />
                    </div>
                ))}
            </div>
        </div>
        <div className=' flex flex-col justify-center items-center bg-(--fts-black) py-4 text-white text-center pt-4'>
            <h3 className="hidden text-(--gray-2) lg:block">Copyright © 2026 <span className="text-white">Gayatri Solar</span>. All Rights Reserved.</h3>
            <h3 className=" lg:hidden text-(--gray-2)  ">© 2026 <span className="text-white font-semibold">Gayatri Solar</span> <br /> All Rights Reserved.</h3>
            <h3>
                <a className="text-(--primary-color)" onClick={() => window.open("https://mayurkumawat.me", "_blank")}>Code by <span className="cursor-pointer underline font-semibold"> Mayur Kumawat.</span></a>
            </h3>
        </div>

    </>
    )
}

export default Footer

