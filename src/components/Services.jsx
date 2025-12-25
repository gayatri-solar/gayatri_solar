// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Services = () => {
  const services = [
    {
      photo: "https://dimansolar.com/public/uploads/product/product-88220220238.jpg",
      title: "Residential Solar",
      desc: "Advanced residential solar solutions designed to lower electricity bills, increase long-term savings, enhance energy independence, and provide reliable, eco-friendly power for modern homes."
    },
    {
      photo: "https://i0.wp.com/www.ecomena.org/wp-content/uploads/2018/01/solar-project-abu-dhabi.jpg",
      title: "Commercial Solar",
      desc: "Customized commercial solar systems helping businesses reduce operational costs, improve sustainability goals, boost energy efficiency, and achieve consistent power performance for long-term growth."
    },
    {
      photo: "https://www.shutterstock.com/shutterstock/videos/3541414831/thumb/1.jpg",
      title: "Industrial Solar",
      desc: "High-capacity industrial solar installations engineered to deliver maximum power output, reduce energy expenses, support sustainability initiatives, and ensure reliable performance for large-scale industrial operations."
    },
    {
      photo: "https://5.imimg.com/data5/SELLER/Default/2021/10/RB/OF/MS/138865819/agriculture-solar-water-pump-1000x1000.png",
      title: "Agreicultural Solar",
      desc: "Durable agricultural solar solutions designed to power irrigation systems, farm equipment, and remote operations, enhancing energy independence, reducing costs, and promoting sustainable farming practices."
    }
  ];

  return (
    <div id="Services" className="bg-white p-8 ">
      <h1 className="text-lime-600 mb-5 lg:text-5xl text-3xl">
        Our Services
      </h1>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        
      >
        {services.map((service, idx) => (
          <SwiperSlide key={idx}>
            <div className="p-2 rounded bg-white border border-lime-500/50 h-[65vh] lg:h-[83vh] ">
              
              <div
                className="h-[35vh] md:h-[40vh] rounded bg-cover bg-center"
                style={{ backgroundImage: `url(${service.photo})` }}
              />

              <div className="text-3xl">
                <h3 className="p-3">{service.title}</h3>
                <div className="p-3">
                  <p className="text-lime-950 leading-6 lg:text-xl text-lg">
                    {service.desc}
                  </p>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
