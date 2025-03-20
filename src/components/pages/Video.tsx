import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

const Video = () => {
  const [thumbnails, setThumbnails] = useState({});

  // Function to extract video ID from YouTube URL
  const getYouTubeVideoId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Generate thumbnail URLs for all videos on component mount
  useEffect(() => {
    const thumbs = {};
    videoData.forEach((video) => {
      const videoId = getYouTubeVideoId(video.url);
      if (videoId) {
        // Use YouTube's thumbnail API
        thumbs[videoId] = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
      }
    });
    setThumbnails(thumbs);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Videos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoData.map((video, index) => {
            const videoId = getYouTubeVideoId(video.url);
            return (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <a href={video.url} target="_blank" rel="noopener noreferrer">
                  <div className="relative pb-[56.25%] bg-gray-200">
                    {videoId && thumbnails[videoId] ? (
                      <img
                        src={thumbnails[videoId]}
                        alt={video.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          className="w-16 h-16 text-red-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm-2 14.5v-9l6 4.5-6 4.5z" />
                        </svg>
                      </div>
                    )}
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-opacity">
                      <svg
                        className="w-16 h-16 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm-2 14.5v-9l6 4.5-6 4.5z" />
                      </svg>
                    </div>
                  </div>
                </a>
                <div className="p-4">
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-600 transition-colors"
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      {video.title}
                    </h3>
                  </a>
                  <p className="text-gray-600 mb-3">{video.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{video.date}</span>
                    <span className="text-sm text-gray-500">
                      {video.duration}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
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
    url: "https://www.youtube.com/watch?v=9pBgorcA2D0&list=PL5Umls-dwGWgCnqJ068_x54FqiNYXPNMN",
    description:
      "Exploring how artificial intelligence is transforming business operations and decision-making processes.",
    date: "May 15, 2024",
    duration: "12:45",
  },
  {
    title: "Sustainable Tech Solutions",
    url: "https://www.youtube.com/watch?v=t4dgIJ0G83A&list=PL5Umls-dwGWhPgqDzk-QwX4p92OfLjXSD",
    description:
      "Innovative technologies that are helping businesses reduce their environmental impact.",
    date: "May 10, 2024",
    duration: "08:32",
  },
  {
    title: "Blockchain Revolution in Finance",
    url: "https://www.youtube.com/watch?v=vP7lbW6R4fA&list=PL5Umls-dwGWhPgqDzk-QwX4p92OfLjXSD&index=2",
    description:
      "How blockchain technology is disrupting traditional financial systems and creating new opportunities.",
    date: "May 5, 2024",
    duration: "15:20",
  },
  {
    title: "Remote Work Technologies",
    url: "https://www.youtube.com/watch?v=aBBfrivkevk&list=PL5Umls-dwGWhPgqDzk-QwX4p92OfLjXSD&index=3&pp=iAQB",
    description:
      "The tools and platforms enabling effective remote work and distributed team collaboration.",
    date: "April 28, 2024",
    duration: "10:15",
  },
  {
    title: "Cybersecurity Best Practices",
    url: "https://www.youtube.com/watch?v=2T8ny_bR_hs&list=PL5Umls-dwGWhPgqDzk-QwX4p92OfLjXSD&index=4",
    description:
      "Essential strategies for protecting your business from evolving cyber threats.",
    date: "April 22, 2024",
    duration: "14:08",
  },
  {
    title: "Digital Marketing Trends 2024",
    url: "https://www.youtube.com/watch?v=GYSf_HOCh-0&list=PL5Umls-dwGWhPgqDzk-QwX4p92OfLjXSD&index=5",
    description:
      "The latest strategies and technologies reshaping the digital marketing landscape.",
    date: "April 15, 2024",
    duration: "11:30",
  },
  {
    title: "Digital Marketing Trends 2024",
    url: "https://www.youtube.com/watch?v=U_PNkJ-dsj0&list=PL5Umls-dwGWhPgqDzk-QwX4p92OfLjXSD&index=6",
    description:
      "The latest strategies and technologies reshaping the digital marketing landscape.",
    date: "April 15, 2024",
    duration: "11:30",
  },
  {
    title: "Digital Marketing Trends 2024",
    url: "https://www.youtube.com/watch?v=wcrB3a4TGjM&list=PL5Umls-dwGWhPgqDzk-QwX4p92OfLjXSD&index=9&pp=iAQB",
    description:
      "The latest strategies and technologies reshaping the digital marketing landscape.",
    date: "April 15, 2024",
    duration: "11:30",
  },
  {
    title: "Digital Marketing Trends 2024",
    url: "https://www.youtube.com/watch?v=kYqTVUAHsto&list=PL5Umls-dwGWhPgqDzk-QwX4p92OfLjXSD&index=7",
    description:
      "The latest strategies and technologies reshaping the digital marketing landscape.",
    date: "April 15, 2024",
    duration: "11:30",
  },
];

export default Video;
