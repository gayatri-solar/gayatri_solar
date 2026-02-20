import Form from './Form'
import { MdCall } from "react-icons/md";
import { HiOfficeBuilding } from "react-icons/hi";
import { MdLocalPostOffice } from "react-icons/md";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import SEO from "../components/SEO";
const Contact = ({ setShowpopup }) => {
  const dets = [{
    icon: <MdCall className='m-4 text-lime-600' />,
    title: 'phone number',
    info: <>+91-9075321764 <br />+91-9764004271</>,
    onclick: () => {
      window.location.href = 'tel:+919075321764';
    }
  }, {
    icon: <MdLocalPostOffice className='m-4 text-lime-600 ' />,
    title: 'Email address',
    info: <><span className='hidden uppercase lg:inline'>GayatriSolarNsk@gmail.com</span><span className='lg:hidden uppercase'>GayatriSolarNsk <br />@gmail.com</span></>,
    onclick: () => {
      window.location.href = 'mailto:GayatriSolarNsk@gmail.com';
    }
  }, {
    icon: <HiMiniBuildingOffice className='m-4 text-lime-600' />,
    title: 'Office address',
    info: <span>2, vaibhav apartment, near swami samarth kendra, rajiv nagar, nashik-422009</span>
  }, {
    icon: <HiOfficeBuilding className='m-4 text-lime-600' />,
    title: 'Office 2 address',
    info: <>shop no.2,vishnu suman building, vishnu nagar, chaugoan road, satana-423301</>,
  }]
  return (
    <div className='bg-white p-8 '>
      <h1 className="text-lime-600 mb-5 lg:text-5xl text-3xl">Contact Now</h1>
      <SEO title="Gayatri Solar" description="Reach out to Gayatri Solar Nashik for all your solar energy needs. Contact us via phone, email, or visit our office for expert assistance and inquiries." />
      <div id='contact' className="lg:flex lg:flex-row" >
        <div >
          <div className=' grid grid-cols-2 gap-1 lg:gap-4 lg:pr-8 lg:h-full '>
            {dets.map((det, index) => (
              <div onClick={det.onclick} className='p-2 lg:h-full rounded bg-lime-50/20 flex flex-col justify-center items-center shadow-xl shadow-lime-950/25 hover:scale-[102%] duration-300 text-center' key={index}>
                <h2 className='lg:text-6xl text-3xl'>{det.icon}</h2>
                <h3 className='capitalize text-[4.5vw] lg:text-2xl py-2 font-semibold'>{det.title}</h3>
                <p className='text-center text-[3.5vw] lg:text-lg capitalize'>{det.info}</p>
              </div>
            ))}

          </div>
        </div>
        <Form setShowpopup={setShowpopup} className="my-8 lg:my-0" />
      </div>
    </div>
  )
}

export default Contact