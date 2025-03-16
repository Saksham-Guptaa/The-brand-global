import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";

const WhoWeAre = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Who We Are</h1>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            The Business Gazette was founded in 2015 by a group of business
            journalists and industry experts who recognized the need for a
            comprehensive, reliable source of business news and insights in the
            digital age.
          </p>
          <p className="text-gray-700 mb-4">
            What began as a small digital publication has evolved into a
            multi-platform media company serving millions of readers worldwide.
            Through economic ups and downs, technological revolutions, and
            global challenges, we've remained committed to our core mission:
            delivering accurate, insightful, and actionable business information
            to our audience.
          </p>
          <p className="text-gray-700">
            Today, The Business Gazette stands as a trusted voice in business
            media, known for our in-depth analysis, exclusive interviews with
            industry leaders, and commitment to journalistic integrity.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            At The Business Gazette, our mission is to inform, inspire, and
            empower our audience with high-quality, relevant content that helps
            them navigate the complex business landscape and make better
            decisions.
          </p>
          <p className="text-gray-700">
            We strive to be the most trusted source of business information,
            providing our readers with the knowledge and insights they need to
            succeed in an ever-changing global economy.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-red-600">
                Accuracy & Integrity
              </h3>
              <p className="text-gray-700">
                We are committed to the highest standards of journalistic
                integrity, ensuring that all our content is accurate,
                well-researched, and free from bias.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-red-600">
                Innovation
              </h3>
              <p className="text-gray-700">
                We embrace new technologies and formats to deliver our content
                in ways that best serve our audience's evolving needs and
                preferences.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-red-600">
                Inclusivity
              </h3>
              <p className="text-gray-700">
                We believe in representing diverse perspectives and voices from
                across the business world, ensuring our content is relevant to
                professionals from all backgrounds.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-red-600">
                Impact
              </h3>
              <p className="text-gray-700">
                We measure our success by the value we provide to our readers
                and the positive impact our content has on their professional
                lives and businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WhoWeAre;
