import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../Header";
import Footer from "../../Footer";
import MagazineCard from "./MagazineCard";
import MagazineViewer from "./MagazineViewer";

interface Magazine {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  date: string;
  pages: {
    image: string;
    content?: string;
  }[];
}

const BrandIndiaMagazine = () => {
  const [selectedMagazine, setSelectedMagazine] = useState<Magazine | null>(
    null,
  );

  // Sample magazine data
  const magazines: Magazine[] = [
    {
      id: "1",
      title: "Brand India: Tech Innovation 2024",
      coverImage:
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
      description:
        "Exploring the cutting-edge innovations driving India's tech revolution and the entrepreneurs behind them.",
      date: "June 2024",
      pages: [
        {
          image:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
          content:
            "<h2>The Rise of Indian Tech Startups</h2><p>India's startup ecosystem has witnessed unprecedented growth in recent years, with technology companies leading the charge. From fintech to healthtech, Indian entrepreneurs are solving complex problems with innovative solutions.</p>",
        },
        {
          image:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
          content:
            "<h2>AI Revolution in India</h2><p>Artificial Intelligence is transforming industries across India. From agriculture to healthcare, AI-powered solutions are improving efficiency and creating new opportunities for growth.</p>",
        },
        {
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
          content:
            "<h2>The Future of Work</h2><p>Remote work and digital transformation are reshaping how Indians work. Companies are adapting to new models of collaboration and productivity in the post-pandemic era.</p>",
        },
        {
          image:
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
          content:
            "<h2>Digital Infrastructure</h2><p>India's digital infrastructure is expanding rapidly, connecting millions of citizens to the internet and digital services for the first time.</p>",
        },
      ],
    },
    {
      id: "2",
      title: "Brand India: Sustainable Business",
      coverImage:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
      description:
        "How Indian businesses are leading the way in sustainable practices and green initiatives across industries.",
      date: "May 2024",
      pages: [
        {
          image:
            "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&q=80",
          content:
            "<h2>Green Manufacturing</h2><p>Indian manufacturers are adopting sustainable practices to reduce their environmental footprint while maintaining competitiveness in global markets.</p>",
        },
        {
          image:
            "https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=800&q=80",
          content:
            "<h2>Renewable Energy Boom</h2><p>India's renewable energy sector is experiencing rapid growth, with solar and wind power becoming increasingly affordable and accessible.</p>",
        },
        {
          image:
            "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?w=800&q=80",
          content:
            "<h2>Sustainable Fashion</h2><p>Indian fashion brands are embracing sustainable materials and ethical production methods, setting new standards for the industry.</p>",
        },
      ],
    },
    {
      id: "3",
      title: "Brand India: Global Leadership",
      coverImage:
        "https://images.unsplash.com/photo-1494059980473-813e73ee784b?w=800&q=80",
      description:
        "Highlighting Indian leaders making an impact on the global stage across business, politics, and culture.",
      date: "April 2024",
      pages: [
        {
          image:
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
          content:
            "<h2>CEOs Changing the World</h2><p>Indian-origin CEOs are leading some of the world's most influential companies, bringing unique perspectives and leadership styles to global business.</p>",
        },
        {
          image:
            "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
          content:
            "<h2>Diplomatic Influence</h2><p>India's growing diplomatic presence is reshaping international relations and global governance structures.</p>",
        },
      ],
    },
    {
      id: "4",
      title: "Brand India: Cultural Renaissance",
      coverImage:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
      description:
        "Exploring the revival and global influence of Indian arts, cinema, music, and cultural traditions.",
      date: "March 2024",
      pages: [
        {
          image:
            "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=800&q=80",
          content:
            "<h2>Indian Cinema Goes Global</h2><p>From Bollywood to regional cinema, Indian filmmakers are gaining international recognition and audiences.</p>",
        },
        {
          image:
            "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
          content:
            "<h2>Traditional Arts in Modern Times</h2><p>How traditional Indian art forms are being preserved and reimagined for contemporary audiences.</p>",
        },
      ],
    },
    {
      id: "5",
      title: "Brand India: Healthcare Innovation",
      coverImage:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      description:
        "The latest breakthroughs in Indian healthcare, from affordable medical devices to cutting-edge research.",
      date: "February 2024",
      pages: [
        {
          image:
            "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&q=80",
          content:
            "<h2>Affordable Healthcare Solutions</h2><p>Indian innovators are developing low-cost medical devices and technologies that are making healthcare more accessible.</p>",
        },
        {
          image:
            "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&q=80",
          content:
            "<h2>Telemedicine Revolution</h2><p>Digital health platforms are connecting patients in remote areas with quality healthcare services.</p>",
        },
      ],
    },
    {
      id: "6",
      title: "Brand India: Future of Education",
      coverImage:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      description:
        "How India is reimagining education for the 21st century through technology, policy, and innovative teaching methods.",
      date: "January 2024",
      pages: [
        {
          image:
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
          content:
            "<h2>EdTech Boom</h2><p>Indian educational technology companies are transforming how students learn, with personalized and accessible solutions.</p>",
        },
        {
          image:
            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
          content:
            "<h2>Skill Development</h2><p>New approaches to vocational training and skill development are preparing India's workforce for future opportunities.</p>",
        },
      ],
    },
  ];

  const openMagazine = (magazine: Magazine) => {
    setSelectedMagazine(magazine);
  };

  const closeMagazine = () => {
    setSelectedMagazine(null);
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

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Brand India Magazine
        </h1>

        {/* Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {magazines.slice(0, 3).map((magazine, index) => (
            <motion.div
              key={magazine.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <MagazineCard
                id={magazine.id}
                title={magazine.title}
                coverImage={magazine.coverImage}
                description={magazine.description}
                date={magazine.date}
                onClick={() => openMagazine(magazine)}
              />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                About the Magazine
              </h2>
              <p className="text-gray-700 mb-4">
                Brand India Magazine is The Business Gazette\'s flagship print
                and digital publication dedicated to showcasing India\'s
                economic growth, business innovations, and cultural influence on
                the global stage.
              </p>
              <p className="text-gray-700 mb-4">
                Published quarterly, each issue features in-depth articles,
                interviews with industry leaders, analysis of market trends, and
                spotlights on emerging sectors that are shaping India\'s
                economic landscape.
              </p>
              <p className="text-gray-700">
                Our mission is to highlight India\'s business achievements,
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
              <div
                className="h-80 bg-gray-200 rounded-lg mb-4 cursor-pointer"
                onClick={() => openMagazine(magazines[0])}
              >
                <img
                  src={magazines[0].coverImage}
                  alt={magazines[0].title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Q2 2024 Edition</h3>
              <p className="text-gray-700 mb-4">
                India\'s Tech Revolution: How Startups are Reshaping the Economy
              </p>
              <div className="flex space-x-3">
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-300 text-sm"
                  onClick={() => openMagazine(magazines[0])}
                >
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
                    <div
                      className="w-20 h-28 bg-gray-200 flex-shrink-0 mr-4 cursor-pointer"
                      onClick={() =>
                        openMagazine(magazines[index + 3] || magazines[0])
                      }
                    >
                      <img
                        src={
                          magazines[index + 3]?.coverImage ||
                          magazines[0].coverImage
                        }
                        alt={issue.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{issue.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{issue.date}</p>
                      <button
                        className="text-red-600 text-sm font-medium"
                        onClick={() =>
                          openMagazine(magazines[index + 3] || magazines[0])
                        }
                      >
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

      {/* More Magazines Section */}
      <div className="bg-gray-200 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            More Magazines
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {magazines.slice(3).map((magazine, index) => (
              <motion.div
                key={magazine.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <MagazineCard
                  id={magazine.id}
                  title={magazine.title}
                  coverImage={magazine.coverImage}
                  description={magazine.description}
                  date={magazine.date}
                  onClick={() => openMagazine(magazine)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />

      {/* Magazine Viewer Modal */}
      {selectedMagazine && (
        <MagazineViewer
          title={selectedMagazine.title}
          coverImage={selectedMagazine.coverImage}
          pages={selectedMagazine.pages}
          onClose={closeMagazine}
        />
      )}
    </div>
  );
};

export default BrandIndiaMagazine;
