import emailjs from '@emailjs/browser'
import React, { useState } from 'react'
import { IoClose } from "react-icons/io5"

const CallPopup = ({ setShowpopup, setShowcallpopup }) => {
    const [form, setForm] = useState({ name: '', phone: '' })
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)

    const validate = () => {
        const newErrors = {}

        if (!form.name.trim()) newErrors.name = 'Name is required'
        if (!/^[6-9]\d{9}$/.test(form.phone))
            newErrors.phone = 'Enter valid 10 digit mobile number'

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handelsubmit = async (e) => {
        e.preventDefault()
        if (!validate()) return

        try {
            setLoading(true)

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID2,
                {
                    name: form.name,
                    phone: form.phone,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )

            setForm({ name: '', phone: '' })
            setShowpopup(true)
            setShowcallpopup(false)

        } catch (err) {
            alert('Failed to send email. Call on +91-9075321764 or +91-9764004271')
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    const handleScroll = (id) => {
        setShowcallpopup(false)
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className='fixed top-0 left-0 w-full h-screen bg-black/40 flex items-center justify-center z-50 p-8'>
            <form
                onSubmit={handelsubmit}
                className='w-full lg:w-1/3 bg-white pt-8 p-6 rounded flex flex-col gap-2 relative'
            >
                <IoClose
                    onClick={() => setShowcallpopup(false)}
                    className='absolute top-3 text-3xl text-gray-600 right-3 lg:text-2xl cursor-pointer'
                />

                <h3 className=' text-[6vw] lg:text-2xl font-semibold'>
                    Looking for something specific? We’re just a call away.
                </h3>

                <div className='flex flex-col'>
                    <label>Name</label>
                    <input
                        placeholder='Sachin Suryawanshi'
                        className='h-10 pl-2 border border-lime-500 rounded focus:outline-none'
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    {errors.name && <span className='text-red-500 italic'>{errors.name}</span>}
                </div>

                <div className='flex flex-col'>
                    <label>Phone</label>
                    <input
                        placeholder='9075321764'
                        className='h-10 pl-2 border border-lime-500 rounded focus:outline-none'
                        type="tel"
                        maxLength="10"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                    <p className='mt-1 text-sm'>Share your number to get a call-back.</p>
                    {errors.phone && <span className='text-red-500 italic'>{errors.phone}</span>}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className='border border-lime-950 rounded bg-lime-500 py-1 mt-2 disabled:opacity-60'
                >
                    {loading ? 'Sending...' : 'Request Call'}
                </button>

                <p className='mt-2  text-nowrap text-[3.7vw] lg:text-base '>
                    <span className='font-semibold'>In a hurry?</span> Call us now&nbsp;
                    <a className='font-semibold underline' href="tel:+919075321764">
                        +91 9075321764
                    </a>
                </p>

                <p className=' text-nowrap text-[3.7vw] lg:text-base '>
                    Have a custom requirement?&nbsp;
                    <span
                        onClick={() => handleScroll("Contact")}
                        className='font-semibold cursor-pointer underline'
                    >
                        Write to us
                    </span>
                </p>
            </form>
        </div>
    )
}

export default CallPopup
