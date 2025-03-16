import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";

const BrandIndiaMagazine = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Brand India Magazine
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                About the Magazine
              </h2>
              <p className="text-gray-700 mb-4">
                Brand India Magazine is The Business Gazette's flagship print
                and digital publication dedicated to showcasing India's economic
                growth, business innovations, and cultural influence on the
                global stage.
              </p>
              <p className="text-gray-700 mb-4">
                Published quarterly, each issue features in-depth articles,
                interviews with industry leaders, analysis of market trends, and
                spotlights on emerging sectors that are shaping India's economic
                landscape.
              </p>
              <p className="text-gray-700">
                Our mission is to highlight India's business achievements,
                promote cross-border collaborations, and provide valuable
                insights for both Indian companies looking to expand globally
                and international businesses seeking opportunities in the Indian
                market.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-6">Featured Content</h2>
              <div className="space-y-6">
                {featuredContent.map((item, index) => (
                  <div
                    key={index}
                    className="pb-6 border-b border-gray-200 last:border-0"
                  >
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-700 mb-3">{item.description}</p>
                    <button className="text-red-600 font-medium">
                      Read More →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-xl font-semibold mb-4">Current Issue</h2>
              <div className="h-80 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-lg font-semibold mb-2">Q2 2024 Edition</h3>
              <p className="text-gray-700 mb-4">
                India's Tech Revolution: How Startups are Reshaping the Economy
              </p>
              <div className="flex space-x-3">
                <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-300 text-sm">
                  Read Online
                </button>
                <button className="border border-red-600 text-red-600 px-4 py-2 rounded-md hover:bg-red-50 transition-colors duration-300 text-sm">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-xl font-semibold mb-4">Previous Issues</h2>
              <div className="space-y-4">
                {previousIssues.map((issue, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-20 h-28 bg-gray-200 flex-shrink-0 mr-4"></div>
                    <div>
                      <h3 className="font-semibold">{issue.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{issue.date}</p>
                      <button className="text-red-600 text-sm font-medium">
                        View Issue
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Subscribe to Brand India Magazine
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subscriptionPlans.map((plan, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 text-center hover:border-red-300 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-red-600 mb-2">
                  {plan.price}
                </div>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <ul className="text-gray-700 mb-6 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <span className="text-green-500 mr-2">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-300">
                  Subscribe Now
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Contribute to Brand India Magazine
            </h2>
            <p className="text-gray-700 mb-6">
              Are you an expert in Indian business, economy, or culture? We
              welcome contributions from thought leaders, industry experts, and
              researchers.
            </p>
            <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors duration-300">
              Submission Guidelines
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const featuredContent = [
  {
    title: "The Rise of India's Unicorn Startups",
    description:
      "Exploring the factors behind India's booming startup ecosystem and the rapid growth of billion-dollar companies across sectors.",
  },
  {
    title: "Make in India: Manufacturing Renaissance",
    description:
      "How government initiatives and global supply chain shifts are transforming India into a manufacturing powerhouse.",
  },
  {
    title: "Digital India: The Fintech Revolution",
    description:
      "India's innovative financial technology solutions are changing how millions access banking and financial services.",
  },
];

const previousIssues = [
  {
    title: "India's Green Energy Future",
    date: "Q1 2024",
  },
  {
    title: "India's Global IT Leadership",
    date: "Q4 2023",
  },
  {
    title: "India's Pharmaceutical Industry",
    date: "Q3 2023",
  },
];

const subscriptionPlans = [
  {
    name: "Digital",
    price: "$29/year",
    description: "Access to digital editions",
    features: [
      "Quarterly digital issues",
      "Exclusive online content",
      "Digital archive access",
      "Mobile app access",
    ],
  },
  {
    name: "Print",
    price: "$49/year",
    description: "Physical magazine delivery",
    features: [
      "Quarterly print issues",
      "Special print supplements",
      "Free shipping worldwide",
      "Collector's editions",
    ],
  },
  {
    name: "Premium",
    price: "$69/year",
    description: "Complete access package",
    features: [
      "Both print and digital",
      "Exclusive webinars",
      "Industry reports",
      "Early access to events",
    ],
  },
];

export default BrandIndiaMagazine;
