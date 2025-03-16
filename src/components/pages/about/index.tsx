import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";
import Footer from "../../Footer";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2010, The Business Gazette has grown from a small
              digital publication to a comprehensive business media platform
              serving millions of readers worldwide.
            </p>
            <p className="text-gray-700 mb-4">
              Our mission is to provide insightful, accurate, and timely
              business news and analysis to help professionals, entrepreneurs,
              and decision-makers navigate the complex world of business and
              stay ahead of industry trends.
            </p>
            <Link
              to="/about/who-we-are"
              className="text-red-600 font-medium hover:text-red-700 transition-colors duration-300"
            >
              Learn More About Us →
            </Link>
          </div>

          <div className="h-auto bg-gray-200 rounded-lg"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {aboutSections.map((section, index) => (
            <Link
              key={index}
              to={section.link}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl">{section.icon}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <span className="text-red-600 font-medium">Learn More →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
            <p className="text-gray-700 mb-6">
              The Business Gazette has established itself as a trusted source of
              business information, reaching millions of readers and influencing
              business decisions across industries.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {impactStats.map((stat, index) => (
                <div key={index} className="p-4">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-6">
              Have questions, feedback, or want to learn more about The Business
              Gazette? We'd love to hear from you.
            </p>
            <Link
              to="/about/contact-us"
              className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors duration-300 inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const aboutSections = [
  {
    title: "Who We Are",
    description:
      "Learn about our mission, values, and the story behind The Business Gazette.",
    icon: "🏢",
    link: "/about/who-we-are",
  },
  {
    title: "Our Team",
    description:
      "Meet the talented journalists, editors, and business professionals behind our content.",
    icon: "👥",
    link: "/about/our-team",
  },
  {
    title: "Our Culture",
    description:
      "Discover what makes The Business Gazette a unique place to work and grow professionally.",
    icon: "🌱",
    link: "/about/our-culture",
  },
];

const impactStats = [
  {
    value: "5M+",
    label: "Monthly Readers",
  },
  {
    value: "150+",
    label: "Countries Reached",
  },
  {
    value: "10K+",
    label: "Articles Published",
  },
  {
    value: "50+",
    label: "Industry Awards",
  },
];

export default About;
