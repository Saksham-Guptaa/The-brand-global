import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";
import Footer from "../../Footer";

const Industries = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Industries</h1>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Industry Coverage</h2>
          <p className="text-gray-700 mb-4">
            The Business Gazette provides comprehensive coverage across a wide
            range of industries, offering in-depth analysis, trends, and
            insights to help professionals stay informed and make better
            decisions.
          </p>
          <p className="text-gray-700">
            Our team of specialized journalists and industry experts deliver
            timely, accurate, and relevant content tailored to each sector's
            unique challenges and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {industries.map((industry, index) => (
            <Link
              key={index}
              to={`/industries/${industry.slug}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl">{industry.icon}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{industry.name}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <span className="text-red-600 font-medium">
                  Explore {industry.name} →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Industry Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Industry Reports</h3>
              <p className="text-gray-700 mb-4">
                Access our comprehensive industry reports, featuring market
                analysis, competitive landscapes, and future projections.
              </p>
              <button className="text-red-600 font-medium">
                View Reports →
              </button>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Expert Webinars</h3>
              <p className="text-gray-700 mb-4">
                Join our industry-specific webinars featuring leading experts
                discussing current trends and future developments.
              </p>
              <button className="text-red-600 font-medium">
                Upcoming Webinars →
              </button>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Industry Events</h3>
              <p className="text-gray-700 mb-4">
                Stay updated on major conferences, trade shows, and networking
                events across all industries.
              </p>
              <button className="text-red-600 font-medium">
                Event Calendar →
              </button>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Custom Research</h3>
              <p className="text-gray-700 mb-4">
                Request tailored research and analysis specific to your industry
                needs and business challenges.
              </p>
              <button className="text-red-600 font-medium">Learn More →</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const industries = [
  {
    name: "Education",
    slug: "education",
    icon: "🎓",
    description:
      "Latest trends, technologies, and policies shaping the future of education and learning.",
  },
  {
    name: "Emerging Tech",
    slug: "emerging-tech",
    icon: "🚀",
    description:
      "Cutting-edge technologies like AI, blockchain, and quantum computing transforming industries.",
  },
  {
    name: "Entertainment",
    slug: "entertainment",
    icon: "🎬",
    description:
      "Insights into media, streaming, gaming, and content creation in the digital age.",
  },
  {
    name: "Finance",
    slug: "finance",
    icon: "💰",
    description:
      "Banking, investments, fintech innovations, and market analysis for financial professionals.",
  },
  {
    name: "IT",
    slug: "it",
    icon: "💻",
    description:
      "Information technology trends, cybersecurity, cloud computing, and digital transformation.",
  },
  {
    name: "Marketing",
    slug: "marketing",
    icon: "📊",
    description:
      "Digital marketing strategies, consumer insights, and branding in an evolving landscape.",
  },
];

export default Industries;
