import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";
import Footer from "../../Footer";

const Associates = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Associates</h1>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Partnership Opportunities
          </h2>
          <p className="text-gray-700 mb-4">
            The Business Gazette collaborates with a diverse network of partners
            to deliver exceptional value to our audience and create mutually
            beneficial relationships that drive growth and innovation.
          </p>
          <p className="text-gray-700">
            Whether you're interested in content collaboration, event
            sponsorship, or strategic alliances, we offer various partnership
            models tailored to your organization's goals and our shared
            audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-red-50 flex items-center justify-center">
              <svg
                className="w-24 h-24 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Channel Partners</h3>
              <p className="text-gray-600 mb-4">
                Join our network of content distribution partners to expand your
                reach and deliver valuable insights to your audience.
              </p>
              <Link
                to="/associates/channel-partners"
                className="text-red-600 font-medium"
              >
                Learn More →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-red-50 flex items-center justify-center">
              <svg
                className="w-24 h-24 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Event Partners</h3>
              <p className="text-gray-600 mb-4">
                Collaborate on industry conferences, webinars, and networking
                events to create impactful experiences for professionals.
              </p>
              <Link
                to="/associates/event-partners"
                className="text-red-600 font-medium"
              >
                Learn More →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-red-50 flex items-center justify-center">
              <svg
                className="w-24 h-24 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Community Partners</h3>
              <p className="text-gray-600 mb-4">
                Join forces with industry associations, educational
                institutions, and community organizations to drive positive
                impact.
              </p>
              <Link
                to="/associates/community-partners"
                className="text-red-600 font-medium"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Featured Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:border-red-300 transition-colors duration-300"
              >
                <div className="w-full h-16 bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400 font-medium">
                    Partner Logo
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">Become a Partner</h2>
            <p className="text-gray-700 mb-6">
              Interested in exploring partnership opportunities with The
              Business Gazette? We're always looking for innovative
              organizations to collaborate with.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors duration-300">
                Partnership Inquiry
              </button>
              <button className="border border-red-600 text-red-600 px-6 py-3 rounded-md hover:bg-red-50 transition-colors duration-300">
                Download Partnership Guide
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Associates;
