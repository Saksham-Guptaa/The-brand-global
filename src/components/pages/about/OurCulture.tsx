import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import { motion } from "framer-motion";

const values = [
  {
    title: "Innovation",
    description:
      "We embrace change and continuously seek new ways to improve our content, platforms, and processes. Challenges are opportunities to innovate.",
    icon: "/icons/innovation.svg",
  },
  {
    title: "Collaboration",
    description:
      "We believe the best work happens when diverse minds come together. Our teams share knowledge to create exceptional results.",
    icon: "/icons/collaboration.svg",
  },
  {
    title: "Integrity",
    description:
      "We hold ourselves to the highest ethical standards. Honesty, transparency, and fairness guide our journalism and workplace interactions.",
    icon: "/icons/integrity.svg",
  },
  {
    title: "Excellence",
    description:
      "We set high standards for our work, continuously improving to deliver the best value to our audience.",
    icon: "/icons/excellence.svg",
  },
];

const OurCulture = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="container mx-auto px-6 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8 text-gray-900"
        >
          Our Culture
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-8"
        >
          At The Business Gazette, our culture fosters creativity,
          collaboration, and continuous growth. We are a diverse team united by
          our passion for business journalism and commitment to excellence.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            >
              <img
                src={value.icon}
                alt={value.title}
                width={64}
                height={64}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mt-12">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Life at The Business Gazette
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                Continuous Learning
              </h3>
              <p className="text-gray-700 mb-4">
                We invest in our team's growth through mentorship and
                development programs.
              </p>
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                Work-Life Balance
              </h3>
              <p className="text-gray-700">
                We provide flexible work arrangements for a balanced and
                fulfilling career.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                Inclusive Environment
              </h3>
              <p className="text-gray-700 mb-4">
                We celebrate diversity and foster a welcoming workplace for all.
              </p>
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                Social Responsibility
              </h3>
              <p className="text-gray-700">
                We engage in sustainable practices and give back to our
                communities.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-6">Our Workspace</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img
              src="/images/office1.jpg"
              alt="Office 1"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <img
              src="/images/office2.jpg"
              alt="Office 2"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <img
              src="/images/office3.jpg"
              alt="Office 3"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
          <p className="text-gray-700 mt-4">
            Our office fosters collaboration, creativity, and productivity.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurCulture;
