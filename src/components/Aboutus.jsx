import imgs from '../assets/about/img1.jpg';
import SEO from './SEO';
const Aboutus = () => {
  return (
    <div id="About" className=' bg-white lg:-mb-24 h-screen p-8 items-center justify-center' >
      <SEO title="Gaytri Solar" description="Learn more about Gaytri Solar's commitment to sustainable solar energy solutions for a greener future." />
      <h1 className="text-lime-600 lg:mt-14 mb-5 lg:text-5xl text-3xl">About Us</h1>
      <div className="lg:flex">
        <div style={{backgroundImage:`url(${imgs})`}} className="hover:scale-[1.015] duration-300 lg:w-screen lg:h-[50vh] h-[50vh] rounded bg-cover bg-center flex items-center justify-center shadow-2xl shadow-lime-950 md:bg-top md:h-[70vh] ">
      </div>
      <div className="flex items-center lg:items-start  justify-center lg:p-8">
        <p className="text-lime-900 lg:mt-0 mt-12 lg:text-xl text-lg ">Gayatri Solar is committed to building a sustainable future through smart and reliable solar energy solutions. With a strong focus on innovation, quality, and environmental responsibility, we provide customized solar installations for industrial, residential, and rural sectors. Our mission is to help communities and businesses transition to clean, renewable energy while creating long-term value for a greener tomorrow.</p>
      </div>
      </div>
    </div>
  )
}

export default Aboutus