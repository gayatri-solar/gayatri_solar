import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SEO from "./SEO";

const Projects = () => {
  const modules = import.meta.glob("../assets/Projects/*", {
    eager: true,
    import: "default",
  });
  const links = Object.values(modules);

  return (
    <>
      <section
        id="Projects"
        className="bg-white p-8"
      >
        <SEO title="Gayatri Solar" description="Explore Gayatri Solar Nashik's diverse portfolio of solar projects, showcasing our expertise in residential, commercial, industrial, and agricultural solar installations. Discover how we deliver sustainable energy solutions tailored to various needs." />
        <h2 className="text-lime-600 mb-5 text-3xl lg:text-5xl">
          Our Projects
        </h2>
        <p className="text-lime-900 lg:mt-0 mt-12 lg:text-xl text-lg">
          Our Projects section highlights a diverse range of successfully
          completed solar installations across residential, commercial,
          industrial, and agricultural sectors. Each project reflects our
          commitment to quality engineering, reliable performance, and customer
          satisfaction. We carefully design, install, and optimize every system
          to meet specific energy requirements, ensuring long-term savings,
          sustainability, and dependable power solutions tailored to real-world
          needs.
        </p>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper rounded my-8"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {links.map((link, index) => (
            <SwiperSlide key={index}>
              <div className="lg:h-96 shadow-sm h-86 w-full overflow-hidden rounded ">
                <img
                  src={link}
                  alt={`Project ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Projects;
