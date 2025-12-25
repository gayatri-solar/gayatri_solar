import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const Wp = () => {

  return (
    <div onClick={() => window.open('https://wa.me/919075321764', '_blank')} className='wtsapp flex items-center justify-center text-4xl left-10 bottom-10 cursor-pointer'>
        <FaWhatsapp />
    </div>
  )
}

export default Wp