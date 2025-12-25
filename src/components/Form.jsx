import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Form = ({ className, setShowpopup }) => {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        SolarType: '',
        message: '',
        bill: '',
        billurl: ''
    })

    const [file, setFile] = useState(null)
    const [uploading, setUploading] = useState(false)
    const [errors, setErrors] = useState({})

    const validate = () => {
        const newErrors = {}

        if (!form.name.trim()) newErrors.name = 'Name is required'

        if (!/^[6-9]\d{9}$/.test(form.phone))
            newErrors.phone = 'Enter valid 10 digit mobile number'

        if (!form.SolarType)
            newErrors.SolarType = 'Please select solar type'

        if (!form.bill || Number(form.bill) <= 0)
            newErrors.bill = 'Enter valid monthly bill amount'

        if (file && file.size > 4194304)
            newErrors.file = 'File size should be less than 4MB'

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
  if (!validate()) return

  const templateParams = {
    name: form.name,
    phone: form.phone,
    solar_type: form.SolarType,
    bill: form.bill,
    message: form.message || 'No message',
    billurl: form.billurl || 'No bill uploaded',
  }

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    setShowpopup(true)
    setFile(null)

    setForm({
      name: '',
      phone: '',
      SolarType: '',
      message: '',
      bill: '',
      billurl: '',
    })
    
  } catch (err) {
    alert('Failed to send email Call on +91-9075321765 or +91-9764004271')
    console.log(err)
  }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleFileChange = async (e) => {
        setUploading(true)
        let file = e.target.files[0]
        setFile(e.target.files[0])
        if (!file) {

            setForm({ ...form, billurl: '' })
            return
        }
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'form-bills');
        data.append('cloud_name', 'dl3imbwo4');
        const res = await fetch("https://api.cloudinary.com/v1_1/dl3imbwo4/image/upload", {
            method: "post",
            body: data
        })
        const url = await res.json();
        setForm({ ...form, billurl: url.url })
        setUploading(false)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={`${className} lg:h-fit flex flex-col bg-white/85 text-black p-6 rounded-lg shadow-2xl max-w-md w-full`}
        >
            <h3 className="text-lime-600">Contact Us</h3>
            <h2 className="text-3xl mb-4">Get a Free Quote</h2>

            {/* Name */}
            <div className="mb-3">
                <label className="block mb-1 font-semibold">Name</label>
                <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-lime-600 rounded "
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div className="mb-3">
                <label className="block mb-1 font-semibold">Phone</label>
                <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full p-2 border border-lime-600 rounded"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            {/* Solar Type */}
            <div className="mb-3">
                <label className="block mb-1 font-semibold">Solar Type</label>
                <select
                    name="SolarType"
                    value={form.SolarType}
                    onChange={handleChange}
                    className="w-full p-2 border border-lime-600 rounded"
                >
                    <option value="">Select Solar Type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                </select>
                {errors.SolarType && (
                    <p className="text-red-500 text-sm">{errors.SolarType}</p>
                )}
            </div>

            {/* Monthly Bill */}
            <div className="mb-3">
                <label className="block mb-1 font-semibold">Monthly Bill ₹</label>
                <input
                    name="bill"
                    value={form.bill}
                    onChange={handleChange}
                    className="w-full p-2 border border-lime-600 rounded"
                />
                {errors.bill && <p className="text-red-500 text-sm">{errors.bill}</p>}
            </div>

            {/* File */}
            <div className="mb-3">
                <label className="block mb-1 font-semibold">
                    Upload Bill (Optional)
                </label>
                <input
                    type="file"
                    accept=".pdf,image/*"
                    onChange={handleFileChange}
                    className="w-full p-2 border border-lime-600 rounded"
                />
                {errors.file && <p className="text-red-500 text-sm">{errors.file}</p>}
            </div>

            {/* Message */}
            <div className="mb-3">
                <label className="block mb-1 font-semibold">Message (Optional)</label>
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full h-20 p-2 border border-lime-600 rounded"
                />
            </div>

            <button disabled={uploading} className="w-full bg-lime-600 text-white p-2 rounded hover:bg-lime-800">
                {uploading ? 'Please Wait Bill Uploading...' : 'Submit'}
            </button>
        </form>
    )
}

export default Form
