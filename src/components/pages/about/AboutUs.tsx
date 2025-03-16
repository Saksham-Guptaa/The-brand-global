import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";
import Footer from "../../Footer";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome to The Business Gazette
          </h2>
          <p className="text-gray-700 mb-4">
            The Business Gazette is a premier business media platform dedicated
            to bringing you the latest insights, trends, and stories from the
            world of business, technology, and innovation.
          </p>
          <p className="text-gray-700 mb-4">
            Founded in 2015, we've grown from a small digital publication to a
            comprehensive media platform serving millions of business
            professionals, entrepreneurs, and industry leaders worldwide.
          </p>
          <p className="text-gray-700">
            Our mission is to inform, inspire, and empower our audience with
            high-quality, relevant content that helps them navigate the complex
            business landscape and make better decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link
            to="/about/who-we-are"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">Who We Are</h3>
            <p className="text-gray-600 mb-4">
              Learn about our story, mission, and values that drive everything
              we do.
            </p>
            <span className="text-red-600 font-medium">Read More →</span>
          </Link>

          <Link
            to="/about/our-team"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">Our Team</h3>
            <p className="text-gray-600 mb-4">
              Meet the talented individuals behind The Business Gazette.
            </p>
            <span className="text-red-600 font-medium">Read More →</span>
          </Link>

          <Link
            to="/about/our-culture"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">Our Culture</h3>
            <p className="text-gray-600 mb-4">
              Discover the principles and environment that make our organization
              unique.
            </p>
            <span className="text-red-600 font-medium">Read More →</span>
          </Link>

          <Link
            to="/about/contact-us"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
            <p className="text-gray-600 mb-4">
              Get in touch with our team for inquiries, feedback, or
              collaboration opportunities.
            </p>
            <span className="text-red-600 font-medium">Read More →</span>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Our Reach</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">5M+</div>
              <div className="text-gray-600">Monthly Readers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">150+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">2M+</div>
              <div className="text-gray-600">Social Followers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">10K+</div>
              <div className="text-gray-600">Published Articles</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
