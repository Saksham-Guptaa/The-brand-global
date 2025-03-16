import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";

const VentureCapitals = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Venture Capitals
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">About Venture Capital</h2>
          <p className="text-gray-700 mb-4">
            Venture capital (VC) is a form of private equity financing provided
            by firms or funds to startups, early-stage, and emerging companies
            that have been deemed to have high growth potential or have
            demonstrated high growth.
          </p>
          <p className="text-gray-700">
            VC firms typically invest in companies that have progressed beyond
            the seed stage and are looking to scale their operations, expand
            into new markets, or develop new products. These investments are
            characterized by higher amounts of capital compared to angel
            investments and often come with more structured terms and
            expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Featured VC Firms</h2>
              <div className="space-y-6">
                {vcFirms.map((firm, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-6 hover:border-red-300 transition-colors duration-300"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold">{firm.name}</h3>
                      <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                        {firm.type}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">{firm.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-gray-500 text-sm">
                          Investment Focus
                        </span>
                        <p className="font-semibold">{firm.focus}</p>
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Fund Size</span>
                        <p className="font-semibold">{firm.fundSize}</p>
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">
                          Investment Range
                        </span>
                        <p className="font-semibold">{firm.investmentRange}</p>
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">
                          Notable Investments
                        </span>
                        <p className="font-semibold">
                          {firm.notableInvestments}
                        </p>
                      </div>
                    </div>
                    <button className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-300">
                      View Profile
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-6">
                VC-Backed Companies
              </h2>
              <div className="space-y-6">
                {vcBackedCompanies.map((company, index) => (
                  <div
                    key={index}
                    className="flex border border-gray-200 rounded-lg p-4 hover:border-red-300 transition-colors duration-300"
                  >
                    <div className="w-16 h-16 bg-gray-200 rounded-lg mr-4 flex-shrink-0"></div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-lg font-semibold">
                          {company.name}
                        </h3>
                        <span className="text-sm text-gray-500">
                          {company.founded}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm mb-2">
                        {company.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">
                          <span className="text-gray-500">Total Funding:</span>{" "}
                          <span className="font-semibold">
                            {company.funding}
                          </span>
                        </span>
                        <button className="text-red-600 text-sm font-medium">
                          Read Success Story
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-xl font-semibold mb-4">
                VC Investment Stages
              </h2>
              <div className="space-y-4">
                {vcStages.map((stage, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <h3 className="font-semibold text-lg mb-2">{stage.name}</h3>
                    <p className="text-gray-700 text-sm mb-2">
                      {stage.description}
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Typical Range:</span>
                      <span className="font-semibold">{stage.range}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-xl font-semibold mb-4">VC Industry Trends</h2>
              <div className="space-y-4">
                {vcTrends.map((trend, index) => (
                  <div
                    key={index}
                    className="pb-4 border-b border-gray-200 last:border-0"
                  >
                    <h3 className="font-semibold mb-2">{trend.title}</h3>
                    <p className="text-gray-700 text-sm">{trend.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-xl font-semibold mb-4">VC Resources</h2>
              <ul className="space-y-3">
                {vcResources.map((resource, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-600 mr-3">•</span>
                    <div>
                      <h3 className="font-semibold">{resource.title}</h3>
                      <p className="text-gray-700 text-sm">
                        {resource.description}
                      </p>
                      <button className="text-red-600 text-sm font-medium mt-1">
                        {resource.action}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">Connect with VCs</h2>
            <p className="text-gray-700 mb-6">
              Looking to connect with venture capital firms for your growing
              business? Submit your company profile to our database to get
              noticed by our network of VC partners.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors duration-300">
                Submit Company Profile
              </button>
              <button className="border border-red-600 text-red-600 px-6 py-3 rounded-md hover:bg-red-50 transition-colors duration-300">
                Schedule VC Office Hours
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const vcFirms = [
  {
    name: "Horizon Ventures",
    type: "Early Stage",
    description:
      "Horizon Ventures focuses on early-stage technology companies with disruptive potential across multiple sectors.",
    focus: "Technology, SaaS, AI",
    fundSize: "$250M",
    investmentRange: "$2-10M",
    notableInvestments: "TechSolutions, AI Innovations",
  },
  {
    name: "Growth Capital Partners",
    type: "Growth Stage",
    description:
      "Growth Capital Partners invests in established companies with proven business models looking to scale operations and expand market reach.",
    focus: "Healthcare, FinTech, Enterprise Software",
    fundSize: "$500M",
    investmentRange: "$10-30M",
    notableInvestments: "HealthConnect, PaymentEase",
  },
];

const vcBackedCompanies = [
  {
    name: "CloudScale Technologies",
    founded: "2018",
    description:
      "Cloud infrastructure optimization platform that helps enterprises reduce costs and improve performance.",
    funding: "$45M",
  },
  {
    name: "GreenEnergy Solutions",
    founded: "2019",
    description:
      "Renewable energy technology company developing innovative solar storage solutions for residential and commercial use.",
    funding: "$32M",
  },
  {
    name: "MedTech Innovations",
    founded: "2017",
    description:
      "Healthcare technology platform that streamlines patient care coordination and improves clinical outcomes.",
    funding: "$78M",
  },
];

const vcStages = [
  {
    name: "Series A",
    description:
      "First significant round of venture funding after seed stage, typically for companies with established product-market fit.",
    range: "$2-15M",
  },
  {
    name: "Series B",
    description:
      "Funding for companies that have developed successful products and need capital to scale operations and expand market reach.",
    range: "$10-30M",
  },
  {
    name: "Series C and Beyond",
    description:
      "Later-stage funding for established companies looking to significantly expand, develop new products, or prepare for acquisition/IPO.",
    range: "$30-100M+",
  },
];

const vcTrends = [
  {
    title: "ESG-Focused Investing",
    description:
      "Growing emphasis on environmental, social, and governance factors in venture capital investment decisions.",
  },
  {
    title: "AI and Deep Tech",
    description:
      "Increased investment in artificial intelligence, machine learning, and other deep technology sectors.",
  },
  {
    title: "Remote Due Diligence",
    description:
      "Shift toward virtual meetings and digital tools for evaluating potential investments.",
  },
  {
    title: "Sector-Specific Funds",
    description:
      "Rise of specialized VC funds focusing on specific industries like climate tech, digital health, and cybersecurity.",
  },
];

const vcResources = [
  {
    title: "VC Funding Report 2024",
    description:
      "Comprehensive analysis of venture capital trends, investment volumes, and sector performance.",
    action: "Download Report →",
  },
  {
    title: "Pitch Deck Templates",
    description:
      "Professional templates and guidelines for creating effective investor presentations.",
    action: "Access Templates →",
  },
  {
    title: "VC Term Sheet Guide",
    description:
      "Detailed explanation of common venture capital term sheet provisions and negotiation strategies.",
    action: "Read Guide →",
  },
];

export default VentureCapitals;
