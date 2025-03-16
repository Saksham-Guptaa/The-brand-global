import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";
import Footer from "../../Footer";

const ChannelPartners = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center mb-8">
          <Link
            to="/associates"
            className="text-red-600 hover:text-red-700 mr-4"
          >
            ← Associates
          </Link>
          <h1 className="text-4xl font-bold">Channel Partners</h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Content Distribution Partnership
          </h2>
          <p className="text-gray-700 mb-4">
            Our Channel Partner program connects The Business Gazette with media
            platforms, industry publications, and content aggregators to expand
            our reach and deliver valuable business insights to a broader
            audience.
          </p>
          <p className="text-gray-700">
            Through strategic content syndication, co-creation, and
            cross-promotion, we build mutually beneficial relationships that
            enhance value for our partners and their audiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">
              Benefits for Channel Partners
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-red-600 mr-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">
                  Access to premium business content across multiple industries
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-red-600 mr-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">
                  Co-branded content opportunities tailored to your audience
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-red-600 mr-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">
                  Enhanced visibility through cross-promotion across our
                  platforms
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-red-600 mr-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">
                  Access to our network of industry experts and thought leaders
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Partnership Types</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-red-600 mr-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <span className="text-gray-700">
                  Content Syndication: Share our articles, videos, and podcasts
                  on your platform
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-red-600 mr-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <span className="text-gray-700">
                  Co-Creation: Collaborate on original content that serves both
                  our audiences
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-red-600 mr-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <span className="text-gray-700">
                  Event Partnerships: Joint webinars, conferences, and
                  networking events
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-red-600 mr-3 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <span className="text-gray-700">
                  Distribution Channels: Extend your reach through our
                  established networks
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Featured Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPartners.map((partner, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:border-red-300 transition-colors duration-300"
              >
                <div className="h-16 w-16 bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                <p className="text-gray-600 mb-4">{partner.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{partner.type}</span>
                  <span>{partner.since}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Become a Channel Partner
            </h2>
            <p className="text-gray-700 mb-6">
              Interested in exploring partnership opportunities with The
              Business Gazette? We're always looking to collaborate with
              organizations that share our commitment to delivering valuable
              business insights.
            </p>
            <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors duration-300">
              Apply for Partnership
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const featuredPartners = [
  {
    name: "Global Business Network",
    description:
      "International business news platform featuring content from leading publications worldwide.",
    type: "Content Syndication",
    since: "Partner since 2019",
  },
  {
    name: "Tech Industry Today",
    description:
      "Technology-focused media platform covering innovation, startups, and digital transformation.",
    type: "Co-Creation Partner",
    since: "Partner since 2020",
  },
  {
    name: "Finance Insights Platform",
    description:
      "Financial news and analysis portal serving investment professionals and financial advisors.",
    type: "Distribution Channel",
    since: "Partner since 2021",
  },
];

export default ChannelPartners;
