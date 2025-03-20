"use client";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Thumbs } from "swiper/modules";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

interface Slide {
  id: number;
  image: string;
  title: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1622674777904-386b3ef30c4a?q=80&w=2070&auto=format&fit=crop",
    title: "Malta AI and Blockchain Summit",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1563201515-adbe35c669c5?q=80&w=2074&auto=format&fit=crop",
    title: "Emerging Tech Panel Discussion",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1732755038319-15aaad987d57?w=500&auto=format&fit=crop",
    title: "Future of AI and Blockchain",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=2070&auto=format&fit=crop",
    title: "Innovations in FinTech",
  },
];

const Carousel: FC = () => {
  return (
    <div className="w-full mb-4 relative">
      {/* Enlarged Thumbnail Preview on Top Left */}
      <div className="absolute top-5 z-50 left-5 w-1/3 bg-black/30 p-4 rounded-lg hidden md:block">
        <Swiper
          modules={[Thumbs]}
          spaceBetween={10}
          slidesPerView={3}
          watchSlidesProgress
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="opacity-70 hover:opacity-100 transition-all"
            >
              <img
                src={slide.image}
                alt={`Thumbnail ${slide.id}`}
                className="w-full h-24 object-cover rounded-lg border-2 border-transparent hover:border-white transition-all"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="relative h-[40rem]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[40rem] overflow-hidden shadow-md">
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                <div className="flex space-x-2 mb-4">
                  <button className="bg-green-500 p-3 rounded-full">
                    <FaWhatsapp className="text-white text-xl" />
                  </button>
                  <button className="bg-blue-500 p-3 rounded-full">
                    <FaTelegramPlane className="text-white text-xl" />
                  </button>
                </div>
                <h2 className="text-6xl font-bold tracking-wider">
                  {slide.title}
                </h2>
                <div className="flex items-center mt-4 space-x-4 text-sm">
                  <span>Content Team</span>
                  <span>|</span>
                  <span>March 18, 2020</span>
                  <span>|</span>
                  <span># Emerging Tech # Press Release</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Enlarged Thumbnail Swiper at Bottom */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-2/3 hidden md:block">
        <Swiper
          modules={[Thumbs]}
          spaceBetween={10}
          slidesPerView={3}
          watchSlidesProgress
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="opacity-70 hover:opacity-100 transition-all"
            >
              <div className="relative">
                <img
                  src={slide.image}
                  alt={`Thumbnail ${slide.id}`}
                  className="w-full h-32 object-cover rounded-lg border-2 border-transparent hover:border-white transition-all"
                />
                <div className="absolute bottom-2 left-2 text-white text-lg font-bold">
                  {slide.title}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
