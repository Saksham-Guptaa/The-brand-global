import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";
import Footer from "../../Footer";

const Investors = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Investors</h1>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Investment Opportunities
          </h2>
          <p className="text-gray-700 mb-4">
            The Business Gazette provides comprehensive coverage of investment
            opportunities across various sectors, connecting investors with
            promising ventures and offering insights to inform investment
            decisions.
          </p>
          <p className="text-gray-700">
            Whether you're an angel investor looking for early-stage startups or
            a venture capital firm seeking growth-stage companies, our platform
            offers valuable resources, analysis, and connections to help you
            navigate the investment landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Link
            to="/investors/angel"
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-64 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl">👼</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Angel Investors</h3>
              <p className="text-gray-600 mb-4">
                Connect with early-stage startups seeking seed funding and
                mentorship from experienced individual investors.
              </p>
              <span className="text-red-600 font-medium">Learn More →</span>
            </div>
          </Link>

          <Link
            to="/investors/venture-capitals"
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-64 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl">🏢</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Venture Capitals</h3>
              <p className="text-gray-600 mb-4">
                Explore opportunities with growth-stage companies seeking
                significant investment to scale operations and expand markets.
              </p>
              <span className="text-red-600 font-medium">Learn More →</span>
            </div>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Featured Investment Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredOpportunities.map((opportunity, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:border-red-300 transition-colors duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{opportunity.name}</h3>
                  <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                    {opportunity.stage}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{opportunity.description}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>Sector: {opportunity.sector}</span>
                  <span>Funding: {opportunity.funding}</span>
                </div>
                <button className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-300">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">
              Investment Resources
            </h2>
            <ul className="space-y-4">
              {investmentResources.map((resource, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-600 mr-3 text-xl">•</span>
                  <div>
                    <h3 className="font-semibold text-lg">{resource.title}</h3>
                    <p className="text-gray-700">{resource.description}</p>
                    <button className="text-red-600 font-medium mt-2">
                      {resource.action}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">
              Upcoming Investment Events
            </h2>
            <div className="space-y-6">
              {investmentEvents.map((event, index) => (
                <div
                  key={index}
                  className="pb-6 border-b border-gray-200 last:border-0"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{event.title}</h3>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                      {event.date}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-2">{event.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-4">{event.location}</span>
                    <span>{event.format}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Join Our Investor Network
            </h2>
            <p className="text-gray-700 mb-6">
              Get exclusive access to investment opportunities, industry
              reports, and networking events by joining our investor community.
            </p>
            <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors duration-300">
              Register as an Investor
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const featuredOpportunities = [
  {
    name: "GreenTech Solutions",
    stage: "Series A",
    description:
      "Sustainable energy storage technology with patented battery design for renewable energy systems.",
    sector: "CleanTech",
    funding: "$5-8M",
  },
  {
    name: "HealthAI",
    stage: "Seed",
    description:
      "AI-powered diagnostic platform for early disease detection using machine learning algorithms.",
    sector: "HealthTech",
    funding: "$1-2M",
  },
  {
    name: "FinEdge",
    stage: "Series B",
    description:
      "Blockchain-based cross-border payment solution for businesses with integrated compliance features.",
    sector: "FinTech",
    funding: "$15-20M",
  },
];

const investmentResources = [
  {
    title: "Due Diligence Toolkit",
    description:
      "Comprehensive resources to help investors evaluate potential investment opportunities thoroughly.",
    action: "Download Toolkit →",
  },
  {
    title: "Market Reports",
    description:
      "In-depth analysis of market trends, sector performance, and investment outlooks across industries.",
    action: "View Reports →",
  },
  {
    title: "Investor Education",
    description:
      "Webinars, courses, and resources designed to help investors make informed investment decisions.",
    action: "Explore Resources →",
  },
];

const investmentEvents = [
  {
    title: "Startup Pitch Day",
    date: "June 15, 2024",
    description:
      "10 pre-screened startups pitch their business ideas to a panel of investors and receive feedback.",
    location: "New York, NY",
    format: "In-person & Virtual",
  },
  {
    title: "VC Roundtable: Future of FinTech",
    date: "July 8, 2024",
    description:
      "Leading venture capitalists discuss emerging trends and investment opportunities in financial technology.",
    location: "San Francisco, CA",
    format: "In-person",
  },
  {
    title: "Angel Investor Workshop",
    date: "July 22, 2024",
    description:
      "Practical session for new angel investors on portfolio strategy, term sheets, and due diligence.",
    location: "Online",
    format: "Virtual",
  },
];

export default Investors;
