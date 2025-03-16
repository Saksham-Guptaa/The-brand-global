import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Podcasts = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Podcasts</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {podcastData.map((podcast, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 100 20 10 10 0 000-20zM8 14.5v-9l6 4.5-6 4.5z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{podcast.title}</h3>
                <p className="text-gray-600 mb-3">{podcast.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Episode {podcast.episode}
                  </span>
                  <span className="text-sm text-gray-500">
                    {podcast.duration}
                  </span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                    <div>
                      <p className="font-medium">{podcast.host}</p>
                      <p className="text-sm text-gray-500">{podcast.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors duration-300">
            Load More Episodes
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const podcastData = [
  {
    title: "The Business Growth Show",
    description:
      "Strategies for scaling your business in today's competitive market.",
    episode: "42",
    duration: "45 min",
    host: "Sarah Johnson",
    date: "May 18, 2024",
  },
  {
    title: "Tech Innovators",
    description:
      "Conversations with the founders and leaders behind today's most innovative tech companies.",
    episode: "28",
    duration: "52 min",
    host: "Michael Chen",
    date: "May 11, 2024",
  },
  {
    title: "Future Finance",
    description:
      "Exploring emerging trends in fintech, cryptocurrency, and traditional banking.",
    episode: "15",
    duration: "38 min",
    host: "David Williams",
    date: "May 4, 2024",
  },
  {
    title: "Marketing Masterminds",
    description:
      "Deep dives into successful marketing campaigns and strategies from industry experts.",
    episode: "63",
    duration: "41 min",
    host: "Emma Rodriguez",
    date: "April 27, 2024",
  },
  {
    title: "Leadership Insights",
    description:
      "Leadership lessons and management strategies from top executives across industries.",
    episode: "37",
    duration: "49 min",
    host: "Robert Thompson",
    date: "April 20, 2024",
  },
  {
    title: "Startup Stories",
    description:
      "Behind-the-scenes looks at the journeys of successful startups and their founders.",
    episode: "21",
    duration: "55 min",
    host: "Jessica Lee",
    date: "April 13, 2024",
  },
];

export default Podcasts;
