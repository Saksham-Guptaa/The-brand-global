import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../../Header";
import Footer from "../../Footer";
import ArticleCard from "../../ArticleCard";

interface Industry {
  name: string;
  slug: string;
  icon: string;
  description: string;
  longDescription?: string;
}

const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [industry, setIndustry] = useState<Industry | null>(null);

  useEffect(() => {
    // Find the industry based on the slug
    const foundIndustry = industries.find((ind) => ind.slug === slug);
    if (foundIndustry) {
      setIndustry(foundIndustry);
    }
  }, [slug]);

  if (!industry) {
    return (
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Industry Not Found</h1>
          <p className="text-gray-700 mb-8">
            The industry you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/industries"
            className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors duration-300"
          >
            Back to Industries
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center mb-8">
          <Link
            to="/industries"
            className="text-red-600 hover:text-red-700 mr-4"
          >
            ← Industries
          </Link>
          <h1 className="text-4xl font-bold">{industry.name}</h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-4">{industry.icon}</span>
            <h2 className="text-2xl font-semibold">{industry.name} Industry</h2>
          </div>
          <p className="text-gray-700 mb-4">{industry.description}</p>
          <p className="text-gray-700">
            {industry.longDescription ||
              "Comprehensive coverage of the latest news, trends, and insights in the " +
                industry.name +
                " industry. Our expert journalists and analysts bring you in-depth reporting and analysis to help you stay ahead in this dynamic sector."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">
              Latest {industry.name} Articles
            </h2>
            <div className="space-y-6">
              {articles
                .filter((article) => article.industry === industry.slug)
                .map((article, index) => (
                  <ArticleCard
                    key={index}
                    title={article.title}
                    description={article.excerpt}
                    date={article.date}
                    author={article.author}
                    category={article.category}
                    imageUrl={article.imageUrl}
                    url={`/blog/${article.id}`}
                  />
                ))}
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">
                Industry Statistics
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Market Size</span>
                    <span className="text-gray-900 font-medium">
                      $1.2 Trillion
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-600 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Annual Growth</span>
                    <span className="text-gray-900 font-medium">7.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-600 h-2 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Employment</span>
                    <span className="text-gray-900 font-medium">
                      3.8 Million
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-600 h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Innovation Index</span>
                    <span className="text-gray-900 font-medium">8.2/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-600 h-2 rounded-full"
                      style={{ width: "82%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Key Players</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                  <span>Industry Leader Corp</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                  <span>Innovative Solutions Inc</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                  <span>Global Tech Enterprises</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                  <span>Future Systems Group</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                  <span>Strategic Partners Ltd</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Global {industry.name} Summit</h4>
                  <p className="text-gray-600 text-sm">
                    June 15-17, 2024 • New York, NY
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">
                    {industry.name} Innovation Conference
                  </h4>
                  <p className="text-gray-600 text-sm">
                    August 8-10, 2024 • San Francisco, CA
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">
                    Future of {industry.name} Expo
                  </h4>
                  <p className="text-gray-600 text-sm">
                    September 22-24, 2024 • London, UK
                  </p>
                </div>
              </div>
              <button className="mt-4 text-red-600 font-medium">
                View All Events →
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Industry Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">White Papers</h3>
              <p className="text-gray-700 mb-4">
                In-depth research and analysis on key topics and trends in the{" "}
                {industry.name} industry.
              </p>
              <button className="text-red-600 font-medium">Download →</button>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Webinars</h3>
              <p className="text-gray-700 mb-4">
                Expert-led online sessions covering the latest developments and
                best practices.
              </p>
              <button className="text-red-600 font-medium">Register →</button>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Case Studies</h3>
              <p className="text-gray-700 mb-4">
                Real-world examples of successful strategies and implementations
                in {industry.name}.
              </p>
              <button className="text-red-600 font-medium">Explore →</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const industries = [
  {
    name: "Education",
    slug: "education",
    icon: "🎓",
    description:
      "Latest trends, technologies, and policies shaping the future of education and learning.",
    longDescription:
      "The education sector is undergoing rapid transformation driven by technological innovation, changing workforce needs, and evolving pedagogical approaches. Our coverage spans K-12, higher education, corporate training, and lifelong learning, providing stakeholders with essential insights to navigate this dynamic landscape.",
  },
  {
    name: "Emerging Tech",
    slug: "emerging-tech",
    icon: "🚀",
    description:
      "Cutting-edge technologies like AI, blockchain, and quantum computing transforming industries.",
    longDescription:
      "Emerging technologies are reshaping business models and creating new possibilities across every sector. Our dedicated coverage tracks developments in artificial intelligence, blockchain, quantum computing, extended reality, and other breakthrough technologies that are defining the future of business and society.",
  },
  {
    name: "Entertainment",
    slug: "entertainment",
    icon: "🎬",
    description:
      "Insights into media, streaming, gaming, and content creation in the digital age.",
    longDescription:
      "The entertainment industry continues to evolve at a rapid pace, with streaming platforms, interactive media, and user-generated content transforming how content is created, distributed, and consumed. Our coverage provides insights into the business strategies, technological innovations, and consumer trends shaping this dynamic sector.",
  },
  {
    name: "Finance",
    slug: "finance",
    icon: "💰",
    description:
      "Banking, investments, fintech innovations, and market analysis for financial professionals.",
    longDescription:
      "The financial services sector is experiencing unprecedented change driven by technological innovation, regulatory evolution, and shifting consumer expectations. Our comprehensive coverage spans traditional banking, investment management, insurance, fintech disruption, and emerging financial models to help professionals navigate this complex landscape.",
  },
  {
    name: "IT",
    slug: "it",
    icon: "💻",
    description:
      "Information technology trends, cybersecurity, cloud computing, and digital transformation.",
    longDescription:
      "Information technology remains the backbone of modern business operations and innovation. Our IT coverage explores enterprise technology trends, cybersecurity challenges, cloud computing advancements, software development methodologies, and the strategic approaches organizations are taking to drive digital transformation.",
  },
  {
    name: "Marketing",
    slug: "marketing",
    icon: "📊",
    description:
      "Digital marketing strategies, consumer insights, and branding in an evolving landscape.",
    longDescription:
      "The marketing landscape continues to evolve with new digital channels, data-driven approaches, and changing consumer behaviors. Our coverage helps marketing professionals stay ahead with insights on digital marketing strategies, consumer psychology, brand building, marketing technology, and measurement methodologies that drive business growth.",
  },
];

const articles = [
  {
    id: "1",
    title: "The Rise of AI-Powered Educational Tools",
    excerpt:
      "How artificial intelligence is transforming the classroom experience and personalizing learning for students of all ages.",
    date: "May 15, 2024",
    author: "Sarah Johnson",
    category: "Technology",
    industry: "education",
    imageUrl:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80",
  },
  {
    id: "2",
    title: "Blockchain Applications Beyond Cryptocurrency",
    excerpt:
      "Exploring how blockchain technology is being implemented across industries for supply chain management, identity verification, and more.",
    date: "May 12, 2024",
    author: "Michael Chen",
    category: "Innovation",
    industry: "emerging-tech",
    imageUrl:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&q=80",
  },
  {
    id: "3",
    title: "Streaming Wars: The Battle for Viewer Attention",
    excerpt:
      "An analysis of the competitive landscape among major streaming platforms and their content strategies.",
    date: "May 10, 2024",
    author: "Jessica Lee",
    category: "Media",
    industry: "entertainment",
    imageUrl:
      "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&q=80",
  },
  {
    id: "4",
    title: "The Future of Decentralized Finance",
    excerpt:
      "How DeFi is challenging traditional banking systems and creating new opportunities for financial inclusion.",
    date: "May 8, 2024",
    author: "David Williams",
    category: "Finance",
    industry: "finance",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    id: "5",
    title: "Zero Trust Security: Protecting the Modern Enterprise",
    excerpt:
      "Why organizations are adopting zero trust architectures and how they're implementing this security approach.",
    date: "May 5, 2024",
    author: "Robert Thompson",
    category: "Cybersecurity",
    industry: "it",
    imageUrl:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
  },
  {
    id: "6",
    title: "The End of Third-Party Cookies: What Marketers Need to Know",
    excerpt:
      "Strategies for effective digital marketing in a privacy-focused world without third-party tracking.",
    date: "May 3, 2024",
    author: "Emma Rodriguez",
    category: "Digital Marketing",
    industry: "marketing",
    imageUrl:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70d?w=600&q=80",
  },
  {
    id: "7",
    title: "Higher Education's Digital Transformation",
    excerpt:
      "How universities are leveraging technology to enhance learning experiences and operational efficiency.",
    date: "April 30, 2024",
    author: "James Wilson",
    category: "Education",
    industry: "education",
    imageUrl:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
  },
  {
    id: "8",
    title: "Quantum Computing: From Theory to Commercial Applications",
    excerpt:
      "The current state of quantum computing and how businesses are preparing for its potential impact.",
    date: "April 28, 2024",
    author: "Sophia Chen",
    category: "Technology",
    industry: "emerging-tech",
    imageUrl:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80",
  },
];

export default IndustryDetail;
