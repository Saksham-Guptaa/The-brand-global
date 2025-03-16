"use client";
import React, { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/tbg_logo.png";

interface RecentPost {
  title: string;
  date: string;
  image?: string;
}

interface MenuItem {
  title: string;
  options: string[];
}

const Header: FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState<boolean>(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const leftSidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { duration: 0.5 } },
  };

  const rightSidebarVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.5 } },
  };

  const recentPosts: RecentPost[] = [
    { title: "The Davos Agenda", date: "January 25, 2021", image: "davos.jpg" },
    { title: "Meet black bbw lesbians near you", date: "November 09, 2024" },
    {
      title:
        "Explore the best possible adult swinger sites and discover your match",
      date: "November 09, 2024",
    },
    { title: "Why date older women?", date: "November 09, 2024" },
    {
      title: "How to get going with men seeking men sites?",
      date: "November 03, 2024",
    },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
  };

  const dropdownVariants1 = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 0.3 },
    },
  };

  const menuItems: MenuItem[] = [
    {
      title: "Industries",
      options: [
        "Education",
        "Emerging Tech",
        "Entertainment",
        "Finance",
        "IT",
        "Marketing",
      ],
    },
    {
      title: "Associates",
      options: ["Channel Partners", "Event Partners", "Community Partners"],
    },
    { title: "Magazine", options: ["Brand India Magzine"] },
    { title: "Investors", options: ["Angel", "Venture Capitals"] },
  ];

  const searchVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="bg-black z-10 relative flex px-16 justify-around text-lg h-32 md:h-20 font-semibold text-white items-center">
      <img src={logo} alt="logo" width="100" height="100" />

      <button
        onClick={() => setIsLeftSidebarOpen(true)}
        className="text-white text-xl hover:text-red-500 cursor-pointer"
      >
        ☰
      </button>

      <AnimatePresence>
        {isLeftSidebarOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={leftSidebarVariants}
            className="fixed top-0 left-0 w-1/5 h-full bg-black text-white p-5 shadow-lg z-50 space-y-10"
          >
            <div className="flex justify-start">
              <button
                className="text-white text-2xl cursor-pointer"
                onClick={() => setIsLeftSidebarOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="mt-5 flex items-center">
              <input
                type="text"
                placeholder="Search Country"
                className="flex-grow p-2 text-black outline-none rounded"
              />
              <button className="absolute right-4 p-2 bg-red-500 rounded text-white">
                🔍
              </button>
            </div>

            <ul className="mt-5 space-y-4">
              <li className="flex items-center">
                <span className="mr-2">📹</span>
                VIDEO
              </li>
              <li className="flex items-center">
                <span className="mr-2">🎧</span>
                PODCASTS
              </li>
              <li
                className="flex flex-col items-start cursor-pointer"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="flex items-center">
                  <span className="mr-2">👥</span>
                  About Us
                </div>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.ul
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants1}
                      className="ml-6 mt-2 space-y-2"
                    >
                      {[
                        "Who We Are",
                        "Our Team",
                        "Our Culture",
                        "Contact Us",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          variants={itemVariants}
                          className="hover:text-red-500"
                        >
                          - {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <ul className="flex space-x-10">
        {menuItems.map((menu, index) => (
          <li
            key={index}
            className="relative flex items-center hover:text-red-500 cursor-pointer"
            onMouseEnter={() => setOpenDropdown(index)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            {menu.title}
            <AnimatePresence>
              {openDropdown === index && (
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="absolute top-full mt-2 w-52 border-t-4 border-red-600 bg-white shadow-lg overflow-hidden"
                >
                  {menu.options.map((option, idx) => (
                    <motion.li
                      key={idx}
                      variants={dropdownVariants}
                      className="px-4 py-2 border-b-[0.5px] border-gray-200 hover:bg-gray-100 transition cursor-pointer text-black"
                    >
                      {option}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        ))}

        <li className="hover:text-red-500 cursor-pointer">Advertise With Us</li>
      </ul>

      <div className="flex space-x-5 items-center">
        <div
          className="flex cursor-pointer items-center"
          onClick={() => setShowSearch(!showSearch)}
        >
          <span className="text-xl mr-1">🔍</span>
          <span>Search</span>
        </div>

        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={searchVariants}
              className="absolute top-16 right-32 p-2 bg-white mt-2 max-w-md flex items-center"
            >
              <input
                type="text"
                placeholder="Search"
                className="flex-grow p-2 outline-none border border-r-0 text-black border-gray-300"
              />
              <button className="p-3 px-6 bg-red-500 text-white">🔍</button>
            </motion.div>
          )}
        </AnimatePresence>

        <button className="text-white text-xl cursor-pointer hover:text-red-500">
          👤
        </button>
        <button
          className="text-white text-xl cursor-pointer hover:text-red-500"
          onClick={() => setIsRightSidebarOpen(true)}
        >
          ☰
        </button>

        <AnimatePresence>
          {isRightSidebarOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={rightSidebarVariants}
              className="fixed top-0 right-0 w-80 h-full bg-white p-5 shadow-lg z-50"
            >
              <div className="flex justify-end">
                <button
                  className="text-black text-2xl cursor-pointer"
                  onClick={() => setIsRightSidebarOpen(false)}
                >
                  ✕
                </button>
              </div>

              <h2 className="text-xl font-bold text-black mt-4 mb-2 border-b pb-2">
                Recent Post
              </h2>
              <div className="flex flex-col space-y-4 mt-4 h-[80vh] overflow-y-scroll">
                {recentPosts.map((post, index) => (
                  <div key={index} className="flex space-x-3 items-start">
                    <div className="w-16 h-16 bg-gray-200 flex-shrink-0">
                      {post.image ? (
                        <div className="w-full h-full bg-gray-300" />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-gray-400"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm4.24-9.14l1.42-1.42a6 6 0 00-8.48 0l1.42 1.42a4 4 0 015.64 0zM12 8a4 4 0 000 8 4 4 0 000-8zm2 4a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-sm font-semibold">{post.title}</h3>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
