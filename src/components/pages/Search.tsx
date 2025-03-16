import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Mock search results for demonstration
  const mockResults = [
    {
      type: "article",
      title: "The Future of AI in Business",
      excerpt:
        "Exploring how artificial intelligence is transforming business operations and decision-making processes.",
      date: "May 15, 2024",
      author: "Sarah Johnson",
    },
    {
      type: "article",
      title: "Sustainable Tech Solutions",
      excerpt:
        "Innovative technologies that are helping businesses reduce their environmental impact.",
      date: "May 10, 2024",
      author: "Michael Chen",
    },
    {
      type: "podcast",
      title: "The Business Growth Show: Episode 42",
      excerpt:
        "Strategies for scaling your business in today's competitive market.",
      date: "May 18, 2024",
      duration: "45 min",
    },
    {
      type: "video",
      title: "Blockchain Revolution in Finance",
      excerpt:
        "How blockchain technology is disrupting traditional financial systems and creating new opportunities.",
      date: "May 5, 2024",
      duration: "15:20",
    },
    {
      type: "article",
      title: "Digital Marketing Trends 2024",
      excerpt:
        "The latest strategies and technologies reshaping the digital marketing landscape.",
      date: "April 15, 2024",
      author: "Emma Rodriguez",
    },
  ];

  // Filter results based on active filter
  const filteredResults =
    activeFilter === "all"
      ? mockResults
      : mockResults.filter((result) => result.type === activeFilter);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-center">
            Search Results
          </h1>
          <p className="text-gray-600 text-center mb-8">
            {filteredResults.length} results for "{query}"
          </p>

          <div className="bg-white rounded-lg shadow-md p-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {["all", "article", "video", "podcast"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-md ${activeFilter === filter ? "bg-red-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {filteredResults.map((result, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-semibold">{result.title}</h2>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full capitalize">
                    {result.type}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{result.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <div>
                    {result.type === "article" && (
                      <span>
                        By {result.author} • {result.date}
                      </span>
                    )}
                    {(result.type === "video" || result.type === "podcast") && (
                      <span>
                        {result.date} • {result.duration}
                      </span>
                    )}
                  </div>
                  <button className="text-red-600 font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredResults.length === 0 && (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h2 className="text-xl font-semibold mb-2">No results found</h2>
              <p className="text-gray-700">
                We couldn't find any matches for "{query}". Please try another
                search term or browse our categories.
              </p>
            </div>
          )}

          <div className="mt-8 flex justify-center">
            <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors duration-300">
              Load More Results
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
