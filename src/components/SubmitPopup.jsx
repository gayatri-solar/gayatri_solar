import React from 'react'
import { CiMail } from "react-icons/ci";

const SubmitPopup = ({setShowpopup}) => {
    return (
        <div className='fixed top-0 left-0 w-full h-screen bg-black/40 flex items-center justify-center z-50'>
            <div className='bg-white rounded-lg p-6 lg:w-1/3 w-full mx-8 lg:mx-0 flex flex-col items-center text-center'>
                <CiMail className='text-7xl text-lime-600 border-3 rounded-full p-2' />
                <h2 className='text-2xl font-semibold mt-4 capitalize'>Thank you for contacting Gayatri Solar.</h2>
                <p className='text-center mt-2 '>Our solar expert team will get in touch with you within 24 hours to understand your requirements and provide the best solar solution for your needs.</p>
                <div className='flex justify-center mt-6 gap-4'>
                    <button onClick={() => {
                        window.location.href = "tel:+919075321764";
                    }} className='bg-lime-600 w-38 text-white px-6 py-2 rounded-md hover:bg-lime-700 transition duration-300'>
                        Call Now
                    </button>
                    <button onClick={() => { setShowpopup(false) }} className='bg-lime-600 w-38 text-white px-6 py-2 rounded-md hover:bg-lime-700 transition duration-300'>
                        Back to Home
                    </button>

                </div>
            </div>
        </div>
    )
}

export default SubmitPopup