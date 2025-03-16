import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";

const OurCulture = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Our Culture</h1>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">What Defines Us</h2>
            <p className="text-gray-700 mb-4">
              At The Business Gazette, our culture is the foundation of
              everything we do. We've built an environment that fosters
              creativity, collaboration, and continuous growth—enabling us to
              deliver exceptional content and experiences to our audience.
            </p>
            <p className="text-gray-700">
              Our team members come from diverse backgrounds and bring unique
              perspectives, but we're united by our shared passion for business
              journalism and our commitment to our core values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">
                Innovation
              </h3>
              <p className="text-gray-700">
                We embrace change and continuously seek new ways to improve our
                content, platforms, and processes. We encourage experimentation
                and view challenges as opportunities to innovate.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-8 h-8 text-red-600"
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
              <h3 className="text-xl font-semibold mb-3 text-center">
                Collaboration
              </h3>
              <p className="text-gray-700">
                We believe that the best work happens when diverse minds come
                together. Our teams work across disciplines, sharing knowledge
                and perspectives to create exceptional results.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">
                Integrity
              </h3>
              <p className="text-gray-700">
                We hold ourselves to the highest ethical standards in all that
                we do. We're committed to honesty, transparency, and fairness in
                our journalism, our business practices, and our workplace
                interactions.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">
                Excellence
              </h3>
              <p className="text-gray-700">
                We strive for excellence in everything we do. We set high
                standards for our work and continuously seek to improve,
                ensuring we deliver the best possible value to our audience.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Life at The Business Gazette
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-600">
                  Continuous Learning
                </h3>
                <p className="text-gray-700 mb-4">
                  We invest in our team's growth through professional
                  development opportunities, mentorship programs, and regular
                  knowledge-sharing sessions.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-red-600">
                  Work-Life Balance
                </h3>
                <p className="text-gray-700">
                  We believe in the importance of balance and offer flexible
                  work arrangements that allow our team members to do their best
                  work while maintaining personal well-being.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-600">
                  Inclusive Environment
                </h3>
                <p className="text-gray-700 mb-4">
                  We're committed to creating a workplace where everyone feels
                  welcome, respected, and valued. We celebrate diversity and
                  actively work to ensure all voices are heard.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-red-600">
                  Social Responsibility
                </h3>
                <p className="text-gray-700">
                  We believe in giving back to our communities through volunteer
                  initiatives, charitable partnerships, and environmentally
                  sustainable practices.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Our Workspace
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="h-48 bg-gray-200 rounded-lg"></div>
              <div className="h-48 bg-gray-200 rounded-lg"></div>
              <div className="h-48 bg-gray-200 rounded-lg"></div>
            </div>
            <p className="text-gray-700 text-center">
              Our modern offices are designed to foster collaboration,
              creativity, and productivity, with spaces for focused work, team
              collaboration, and relaxation.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurCulture;
