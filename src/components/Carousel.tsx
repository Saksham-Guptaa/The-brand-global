"use client";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Slide {
  id: number;
  image: string;
  title: string;
  description?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1622674777904-386b3ef30c4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Malta AI and Blockchain Summit",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1563201515-adbe35c669c5?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Emerging Tech Panel Discussion",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1732755038319-15aaad987d57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDk3fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
    title: "Future of AI and Blockchain",
  },
];

const Carousel: FC = () => {
  return (
    <div className="w-full mb-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="relative h-[40rem]"
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
      >
        {slides.map((slide: Slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[40rem] overflow-hidden shadow-md">
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
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
    </div>
  );
};

export default Carousel;
