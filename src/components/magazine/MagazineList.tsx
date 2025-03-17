import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../Header";
import Footer from "../Footer";
import MagazineCard from "./MagazineCard";
import PDFViewer from "./PDFViewer";

export interface Magazine {
  id: string;
  title: string;
  coverImage: string;
  pdfUrl: string;
  description: string;
  date: string;
}

const MagazineList: React.FC = () => {
  const [selectedMagazine, setSelectedMagazine] = useState<Magazine | null>(
    null
  );

  // Sample magazine data - replace with your actual data
  const magazines: Magazine[] = [
    {
      id: "1",
      title: "Brand India: Tech Innovation 2024",
      coverImage:
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
      pdfUrl: "https://online.fliphtml5.com/iifgq/ronz/", // Replace with your Cloudinary PDF URL
      description:
        "Exploring the cutting-edge innovations driving India's tech revolution and the entrepreneurs behind them.",
      date: "June 2024",
    },
    {
      id: "2",
      title: "Brand India: Sustainable Business",
      coverImage:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
      pdfUrl: "https://online.fliphtml5.com/iifgq/yhih/", // Replace with your Cloudinary PDF URL
      description:
        "How Indian businesses are leading the way in sustainable practices and green initiatives across industries.",
      date: "May 2024",
    },
  ];

  const openMagazine = (magazine: Magazine) => {
    setSelectedMagazine(magazine);
  };

  const closeMagazine = () => {
    setSelectedMagazine(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Brand India Magazine
        </h1>

        {/* Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {magazines.map((magazine, index) => (
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

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">
              About Brand India Magazine
            </h2>
            <p className="text-gray-700 mb-6">
              Brand India Magazine is The Brand Global's flagship print and
              digital publication dedicated to showcasing India's economic
              growth, business innovations, and cultural influence on the global
              stage. Published quarterly, each issue features in-depth articles,
              interviews with industry leaders, analysis of market trends, and
              spotlights on emerging sectors that are shaping India's economic
              landscape.
            </p>
            <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors duration-300">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      <Footer />

      {/* Magazine Viewer Modal */}
      {selectedMagazine && (
        <PDFViewer magazine={selectedMagazine} onClose={closeMagazine} />
      )}
    </div>
  );
};

export default MagazineList;
