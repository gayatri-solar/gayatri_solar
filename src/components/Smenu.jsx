import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { MdCallEnd } from "react-icons/md";


const Smenu = ({ menu, isOpen, setIsOpen }) => {

  const socials = [
          { name: "facebook", Icon: FaFacebookF, color : "#1877F2" },
          { name: "instagram", Icon: FaInstagram, color : "#E4405F" },
          { name: "whatsapp", Icon: FaWhatsapp, color : "#25D366" },
          { name: "youtube", Icon: FaYoutube, color : "#FF0000" },
      ];

  const handleclose = () => {
    setIsOpen(false);
  }
  const handleopen = () => {
    setIsOpen(true);
  }
  return (
    <>
      <div onClick={handleclose} className={` ${isOpen ? "block" : "hidden"} fixed top-0 left-0 w-full h-screen bg-lime-950/5 z-5 `}>

      </div>

      <div className={` ${isOpen ? "" : "border-lime-500 border-l-2"} lg:w-1/4 md:w-[70%] fixed top-0 w-full ${isOpen ? "right-0 " : "-right-full"} z-10 bg-[linear-gradient(rgba(0,0,0,0.5),rgba(190,242,100,0.05)),url('https://images.pexels.com/photos/8853509/pexels-photo-8853509.jpeg?cs=srgb&dl=pexels-cristian-rojas-8853509.jpg&fm=jpg')] bg-cover bg-center duration-800 transition-all h-screen`}>
        <div className="flex justify-between p-8 ">
          <h1 className="text-4xl cursor-pointer font-semibold text-lime-500">Gayatri Solar</h1>
          <div onClick={handleclose} className="flex justify-center items-center text-3xl">
            <AiOutlineClose />
          </div>
        </div>
        <div className="flex flex-col justify-between h-[88vh] ">
          <ul>
            {menu.map((item, idx) => (
              <li key={idx} onClick={() => setIsOpen(false)} className="mx-8 my-6 text-3xl lg:text-2xl active:scale-105 lg:active:scale-100 text-"><a href={`#${item}`}>{item}</a></li>
            ))}
          </ul>
          <div>
            <div onClick={() => {
              window.location.href = "tel:+919075321764";
            }} className="text-white text-xl mb-2 ml-8 cursor-pointer flex items-center gap-2 uppercase">
              <MdCallEnd color="#89ea5f" />
              +91-9075321764
            </div>
            <div onClick={() => {
              window.location.href = "tel:+919764004271";
            }} className=" text-white text-xl mb-4 ml-8 cursor-pointer flex items-center gap-2 uppercase">
              <MdCallEnd color="#89ea5f" />
              +91-9764004271
            </div>

            <div className="flex gap-5 ml-8 mb-20">
              {socials.map(({ name, Icon, color }) => (
                <div
                  key={name}
                  className="p-1 text-3xl lg:text-2xl rounded-sm cursor-pointer transition bg-gray-200"
                >
                  <Icon color={color} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Smenu