"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  FaTelegramPlane,
  FaWhatsapp,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaGripfire } from "react-icons/fa";
import { BsFillLightningFill } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface Story {
  title: string;
  image: string;
}

const TopStories: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<
    "Latest" | "Trending" | "Featured"
  >("Latest");

  const storiesData: Record<string, Story[]> = {
    Latest: [
      {
        title: "Latest Story 1",
        image:
          "https://plus.unsplash.com/premium_photo-1661512000803-68be2ccf3673?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFN0YXJ0dXB8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Latest Story 2",
        image:
          "https://images.unsplash.com/photo-1734377957372-db8a4d696182?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Latest Story 3",
        image:
          "https://images.unsplash.com/photo-1737545468592-344b7ae99f6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Latest Story 4",
        image:
          "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE5ld3N8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Latest Story 5",
        image:
          "https://plus.unsplash.com/premium_photo-1734626854966-592fbd141316?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzd8fHxlbnwwfHx8fHw%3D",
      },
    ],
    Trending: [
      {
        title: "Trending Story 1",
        image:
          "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN0YXJ8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Trending Story 2",
        image:
          "https://plus.unsplash.com/premium_photo-1734626854966-592fbd141316?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzd8fHxlbnwwfHx8fHw%3D",
      },
      {
        title: "Trending Story 3",
        image:
          "https://plus.unsplash.com/premium_photo-1661512000803-68be2ccf3673?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFN0YXJ0dXB8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Trending Story 4",
        image:
          "https://images.unsplash.com/photo-1737376518702-3f4eb7876953?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Trending Story 5",
        image:
          "https://images.unsplash.com/photo-1737545468592-344b7ae99f6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    Featured: [
      {
        title: "Featured Story 1",
        image:
          "https://plus.unsplash.com/premium_photo-1661512000803-68be2ccf3673?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFN0YXJ0dXB8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Featured Story 2",
        image:
          "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN0YXJ8ZW58MHx8MHx8fDA%3D",
      },
      {
        title: "Featured Story 3",
        image:
          "https://images.unsplash.com/photo-1737376518702-3f4eb7876953?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Featured Story 4",
        image:
          "https://images.unsplash.com/photo-1734377957372-db8a4d696182?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Featured Story 5",
        image:
          "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE5ld3N8ZW58MHx8MHx8fDA%3D",
      },
    ],
  };

  const stories = storiesData[selectedTab];

  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-40 mt-10">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
        <h1 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-0">
          Top Stories
        </h1>
        <div className="flex items-center space-x-4">
          {["Latest", "Trending", "Featured"].map((tab) => {
            let icon;
            if (tab === "Latest") icon = <FaClock className="mr-2" />;
            if (tab === "Trending") icon = <FaGripfire className="mr-2" />;
            if (tab === "Featured")
              icon = <BsFillLightningFill className="mr-2" />;

            return (
              <button
                key={tab}
                onClick={() =>
                  setSelectedTab(tab as "Latest" | "Trending" | "Featured")
                }
                className={`flex items-center px-4 py-2 rounded-full transition ${
                  selectedTab === tab
                    ? "bg-red-600 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {icon}
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative">
        {/* Custom navigation buttons */}
        <div className="swiper-button-prev absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 text-gray-700 bg-white rounded-full shadow-md hover:bg-red-400 flex items-center justify-center">
          <FaChevronLeft size={24} />
        </div>
        <div className="swiper-button-next absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 text-gray-700 bg-white rounded-full shadow-md hover:bg-red-400 flex items-center justify-center">
          <FaChevronRight size={24} />
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {stories.map((story, index) => (
            <SwiperSlide key={index}>
              <div className="p-4">
                <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow relative">
                  <div className="absolute top-8 left-8 flex space-x-2 z-10">
                    <button className="bg-green-500 p-2 rounded-full">
                      <FaWhatsapp className="text-white text-xl" />
                    </button>
                    <button className="bg-blue-500 p-2 rounded-full">
                      <FaTelegramPlane className="text-white text-xl" />
                    </button>
                  </div>
                  <div className="relative h-48 sm:h-56 bg-gray-300 rounded-lg overflow-hidden">
                    <img
                      src={story.image}
                      alt="Story"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="mt-4 text-center font-semibold">
                    {story.title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopStories;
