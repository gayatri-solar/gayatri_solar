import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

const Partners = () => {
  const logos = [
    {
      src: "https://crystalpng.com/wp-content/uploads/2022/07/waaree-solar-logo.png",
      width: 160,
      height: 50,
      alt: "Waaree Solar",
    },
    {
      src: "https://www.pngall.com/wp-content/uploads/13/Adani-Green-Energy-PNG-Image.png",
      width: 170,
      height: 50,
      alt: "Adani Green",
    },
    {
      src: "https://i.postimg.cc/L4b8PfBM/tata-power-solar-solar-power-business-tata-power-bill-center-business-a1b494ccdae50015a65cb01086de7d.png",
      width: 180,
      height: 50,
      alt: "Tata Power Solar",
    },
    {
      src: "https://rayzonsolar.com/img/event-expo/rayzon-gt-logo.png",
      width: 180,
      height: 50,
      alt: "Rayzon Solar",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Vikram_Solar_logo.svg/250px-Vikram_Solar_logo.svg.png",
      width: 150,
      height: 50,
      alt: "Vikram Solar",
    },
    {
      src: "https://goldisolar.com/wp-content/uploads/2022/04/Goldi-Solar-Logo_original.svg",
      width: 140,
      height: 50,
      alt: "Goldi Solar",
    },
    {
      src: "https://www.loomsolar.com/cdn/shop/files/Loom_logo_f50a89a5-291b-4c15-9a87-303dc061554e_140x@2x.png?v=1752208604",
      width: 160,
      height: 50,
      alt: "Loom Solar",
    },
  ];

  return (
    <div className="bg-white px-8">
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView="auto"
        spaceBetween={0}
        loop={true}
        freeMode={{
          enabled: true,
          momentum: false,
        }}
        speed={2500}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        

        className="brands h-40"
      >

        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <div
              className="h-32 max-w-64 flex items-center justify-center mx-6 hover:scale-105 transition-transform duration-300"
              style={{ width: logo.width }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Partners;
