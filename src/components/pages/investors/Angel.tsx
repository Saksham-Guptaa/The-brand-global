import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";

const Angel = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Angel Investors</h1>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            What are Angel Investors?
          </h2>
          <p className="text-gray-700 mb-4">
            Angel investors are high-net-worth individuals who provide financial
            backing for startups or entrepreneurs, typically in exchange for
            ownership equity or convertible debt. They often invest in
            early-stage businesses, filling the gap between friends-and-family
            funding and venture capital.
          </p>
          <p className="text-gray-700">
            Beyond capital, angel investors frequently offer valuable
            mentorship, industry expertise, and professional connections that
            can be crucial for a startup's success and growth trajectory.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6">
                Angel Investment Process
              </h2>
              <div className="space-y-6">
                {angelProcess.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4">
                      <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      {index < angelProcess.length - 1 && (
                        <div className="w-0.5 h-16 bg-red-200 mx-auto my-2"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-6">
                Featured Angel Opportunities
              </h2>
              <div className="space-y-6">
                {angelOpportunities.map((opportunity, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-6 hover:border-red-300 transition-colors duration-300"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold">
                        {opportunity.name}
                      </h3>
                      <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                        {opportunity.industry}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      {opportunity.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-gray-500 text-sm">
                          Funding Sought
                        </span>
                        <p className="font-semibold">{opportunity.funding}</p>
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Location</span>
                        <p className="font-semibold">{opportunity.location}</p>
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Stage</span>
                        <p className="font-semibold">{opportunity.stage}</p>
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Traction</span>
                        <p className="font-semibold">{opportunity.traction}</p>
                      </div>
                    </div>
                    <button className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-300">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-xl font-semibold mb-4">
                Angel Investor Benefits
              </h2>
              <ul className="space-y-3">
                {angelBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-600 mr-3">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-xl font-semibold mb-4">
                Angel Investment Stats
              </h2>
              <div className="space-y-4">
                {angelStats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 border border-gray-200 rounded-lg"
                  >
                    <div className="text-2xl font-bold text-red-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-700 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-xl font-semibold mb-4">Angel Networks</h2>
              <div className="space-y-4">
                {angelNetworks.map((network, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-red-300 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                    <div>
                      <h3 className="font-semibold">{network.name}</h3>
                      <p className="text-gray-600 text-sm">{network.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Become an Angel Investor
            </h2>
            <p className="text-gray-700 mb-6">
              Interested in exploring angel investment opportunities? Join our
              network to access curated startup deals, connect with fellow
              investors, and receive guidance on building your investment
              portfolio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors duration-300">
                Join Angel Network
              </button>
              <button className="border border-red-600 text-red-600 px-6 py-3 rounded-md hover:bg-red-50 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const angelProcess = [
  {
    title: "Deal Sourcing",
    description:
      "Finding promising startups through networks, pitch events, incubators, and online platforms.",
  },
  {
    title: "Initial Screening",
    description:
      "Evaluating business models, market potential, team capabilities, and competitive advantages.",
  },
  {
    title: "Due Diligence",
    description:
      "In-depth analysis of financials, technology, intellectual property, and growth projections.",
  },
  {
    title: "Negotiation",
    description:
      "Discussing investment terms, valuation, equity stake, and investor rights with founders.",
  },
  {
    title: "Investment",
    description:
      "Finalizing agreements, transferring funds, and formalizing the investment relationship.",
  },
  {
    title: "Post-Investment Support",
    description:
      "Providing mentorship, connections, and strategic guidance to help the startup grow.",
  },
];

const angelOpportunities = [
  {
    name: "EcoPackage",
    industry: "Sustainability",
    description:
      "Innovative biodegradable packaging solutions for e-commerce and food delivery businesses.",
    funding: "$500K",
    location: "Boston, MA",
    stage: "Seed",
    traction: "10 pilot customers",
  },
  {
    name: "MedConnect",
    industry: "HealthTech",
    description:
      "Telemedicine platform connecting patients with specialists for second opinions and consultations.",
    funding: "$750K",
    location: "Austin, TX",
    stage: "Pre-seed",
    traction: "5,000 monthly users",
  },
];

const angelBenefits = [
  "Potential for high returns on successful investments",
  "Portfolio diversification beyond traditional assets",
  "Supporting innovation and entrepreneurship",
  "Mentoring opportunities with promising founders",
  "Networking with other investors and business leaders",
  "Early access to groundbreaking products and services",
  "Possible tax incentives for startup investments",
];

const angelStats = [
  {
    value: "$25B+",
    label: "Annual Angel Investment in US",
  },
  {
    value: "20-25%",
    label: "Average Target ROI",
  },
  {
    value: "5-7 years",
    label: "Typical Investment Horizon",
  },
];

const angelNetworks = [
  {
    name: "Tech Angels Network",
    focus: "Software & Technology",
  },
  {
    name: "Healthcare Investors Alliance",
    focus: "Healthcare & Biotech",
  },
  {
    name: "Green Future Angels",
    focus: "Sustainability & CleanTech",
  },
  {
    name: "Women's Investment Collective",
    focus: "Female-Founded Startups",
  },
];

export default Angel;
