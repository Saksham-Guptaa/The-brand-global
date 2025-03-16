import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const AdvertiseWithUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Advertise With Us
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Why Advertise with The Business Gazette?
          </h2>
          <p className="text-gray-700 mb-4">
            The Business Gazette offers targeted advertising solutions that
            connect your brand with our engaged audience of business
            professionals, entrepreneurs, investors, and decision-makers across
            industries.
          </p>
          <p className="text-gray-700">
            Our multi-platform approach ensures your message reaches the right
            audience through our website, mobile app, newsletters, social media
            channels, and events, delivering measurable results and maximum
            impact for your marketing investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {audienceStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 text-center"
            >
              <div className="text-4xl font-bold text-red-600 mb-2">
                {stat.value}
              </div>
              <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Advertising Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adOptions.map((option, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:border-red-300 transition-colors duration-300"
              >
                <div className="h-12 mb-4 flex items-center">
                  <span className="text-3xl text-red-600">{option.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <button className="text-red-600 font-medium">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Audience Demographics
            </h2>
            <div className="space-y-6">
              {demographics.map((demo, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <h3 className="font-semibold">{demo.category}</h3>
                    <span className="text-gray-500">{demo.primary}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-red-600 h-2.5 rounded-full"
                      style={{ width: demo.percentage }}
                    ></div>
                  </div>
                  <div className="flex text-sm text-gray-500 mt-1 space-x-4">
                    {demo.breakdown.map((item, idx) => (
                      <span key={idx}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">Success Stories</h2>
            <div className="space-y-6">
              {successStories.map((story, index) => (
                <div
                  key={index}
                  className="pb-6 border-b border-gray-200 last:border-0"
                >
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg mr-4 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {story.company}
                      </h3>
                      <p className="text-gray-700 mb-2">{story.testimonial}</p>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-500 mr-3">
                          {story.name}, {story.position}
                        </span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-yellow-400">
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Advertising Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {adPackages.map((pkg, index) => (
              <div
                key={index}
                className={`border rounded-lg p-6 ${pkg.featured ? "border-red-300 ring-2 ring-red-100" : "border-gray-200"} hover:shadow-lg transition-shadow duration-300`}
              >
                {pkg.featured && (
                  <div className="bg-red-600 text-white text-xs font-bold uppercase py-1 px-2 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold mb-4">
                  {pkg.price}{" "}
                  <span className="text-gray-500 text-base font-normal">
                    /month
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2 px-4 rounded-md ${pkg.featured ? "bg-red-600 text-white hover:bg-red-700" : "border border-red-600 text-red-600 hover:bg-red-50"} transition-colors duration-300`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Contact Our Advertising Team
            </h2>
            <p className="text-gray-700 mb-6 text-center">
              Ready to promote your brand with The Business Gazette? Fill out
              the form below, and our advertising team will contact you to
              discuss your marketing goals and create a customized solution.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="company">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="budget">
                  Advertising Budget
                </label>
                <select
                  id="budget"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select your budget range</option>
                  <option value="under5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="over50k">Over $50,000</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Tell us about your advertising goals"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors duration-300"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const audienceStats = [
  {
    value: "2.5M+",
    label: "Monthly Visitors",
    description: "Unique visitors to our website and mobile app each month",
  },
  {
    value: "500K+",
    label: "Newsletter Subscribers",
    description:
      "Engaged professionals receiving our daily and weekly newsletters",
  },
  {
    value: "85%",
    label: "Decision Makers",
    description:
      "Percentage of our audience with purchasing authority in their organizations",
  },
];

const adOptions = [
  {
    icon: "🖥️",
    title: "Display Advertising",
    description:
      "Premium banner placements across our website and mobile app with targeting options.",
  },
  {
    icon: "📧",
    title: "Newsletter Sponsorship",
    description:
      "Sponsored content and ads in our highly-read daily and weekly industry newsletters.",
  },
  {
    icon: "✍️",
    title: "Sponsored Content",
    description:
      "Native articles and thought leadership pieces written by our editorial team.",
  },
  {
    icon: "🎙️",
    title: "Podcast Sponsorship",
    description:
      "Audio ads and sponsorship mentions in our business and industry podcasts.",
  },
  {
    icon: "📱",
    title: "Social Media Campaigns",
    description:
      "Sponsored posts and campaigns across our social media channels.",
  },
  {
    icon: "🎬",
    title: "Video Advertising",
    description:
      "Pre-roll, mid-roll, and sponsored video content opportunities.",
  },
];

const demographics = [
  {
    category: "Job Level",
    primary: "C-Suite & Executives",
    percentage: "65%",
    breakdown: [
      "C-Suite: 35%",
      "Directors: 30%",
      "Managers: 25%",
      "Other: 10%",
    ],
  },
  {
    category: "Industry",
    primary: "Technology & Finance",
    percentage: "70%",
    breakdown: ["Tech: 40%", "Finance: 30%", "Healthcare: 15%", "Other: 15%"],
  },
  {
    category: "Company Size",
    primary: "Mid to Large Enterprises",
    percentage: "75%",
    breakdown: ["Enterprise: 45%", "Mid-size: 30%", "Small: 25%"],
  },
  {
    category: "Geography",
    primary: "North America & Europe",
    percentage: "80%",
    breakdown: ["North America: 55%", "Europe: 25%", "Asia: 15%", "Other: 5%"],
  },
];

const successStories = [
  {
    company: "TechSolutions Inc.",
    testimonial:
      "Our sponsored content campaign with The Business Gazette generated over 200 qualified leads and significantly increased our brand awareness among enterprise decision-makers.",
    name: "Sarah Johnson",
    position: "CMO",
  },
  {
    company: "Global Finance Partners",
    testimonial:
      "The targeted display advertising campaign exceeded our expectations, delivering a 320% ROI and connecting us with key financial industry professionals.",
    name: "Michael Chen",
    position: "Marketing Director",
  },
];

const adPackages = [
  {
    name: "Starter",
    price: "$2,500",
    description: "Essential visibility for small to medium businesses",
    features: [
      "Standard display ads",
      "1 newsletter mention",
      "Social media promotion",
      "Performance reporting",
    ],
    featured: false,
  },
  {
    name: "Professional",
    price: "$5,000",
    description: "Comprehensive solution for growing companies",
    features: [
      "Premium display ads",
      "2 sponsored articles",
      "Weekly newsletter placement",
      "Social media campaign",
      "Detailed analytics dashboard",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$10,000",
    description: "Maximum impact for established brands",
    features: [
      "Homepage takeover",
      "4 sponsored articles",
      "Podcast sponsorship",
      "Video content integration",
      "Custom audience targeting",
      "Dedicated account manager",
    ],
    featured: false,
  },
];

export default AdvertiseWithUs;
