import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Video = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Videos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoData.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative pb-[56.25%] bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm-2 14.5v-9l6 4.5-6 4.5z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                <p className="text-gray-600 mb-3">{video.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{video.date}</span>
                  <span className="text-sm text-gray-500">
                    {video.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors duration-300">
            Load More Videos
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const videoData = [
  {
    title: "The Future of AI in Business",
    description:
      "Exploring how artificial intelligence is transforming business operations and decision-making processes.",
    date: "May 15, 2024",
    duration: "12:45",
  },
  {
    title: "Sustainable Tech Solutions",
    description:
      "Innovative technologies that are helping businesses reduce their environmental impact.",
    date: "May 10, 2024",
    duration: "08:32",
  },
  {
    title: "Blockchain Revolution in Finance",
    description:
      "How blockchain technology is disrupting traditional financial systems and creating new opportunities.",
    date: "May 5, 2024",
    duration: "15:20",
  },
  {
    title: "Remote Work Technologies",
    description:
      "The tools and platforms enabling effective remote work and distributed team collaboration.",
    date: "April 28, 2024",
    duration: "10:15",
  },
  {
    title: "Cybersecurity Best Practices",
    description:
      "Essential strategies for protecting your business from evolving cyber threats.",
    date: "April 22, 2024",
    duration: "14:08",
  },
  {
    title: "Digital Marketing Trends 2024",
    description:
      "The latest strategies and technologies reshaping the digital marketing landscape.",
    date: "April 15, 2024",
    duration: "11:30",
  },
];

export default Video;
