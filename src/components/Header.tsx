"use client";
import React, { FC, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../../public/tbg_logo.png";
import { getCurrentUser } from "@/lib/auth";

interface RecentPost {
  title: string;
  date: string;
  image?: string;
}

interface MenuItem {
  title: string;
  options: { label: string; link: string }[];
}

const Header: FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState<boolean>(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      setIsLoading(true);
      const { user, error } = await getCurrentUser();
      if (user) {
        setCurrentUser(user);
      }
      setIsLoading(false);
    };

    fetchCurrentUser();
  }, []);

  const handleProfileClick = () => {
    if (currentUser) {
      // Redirect based on user role
      const role = currentUser.user_metadata?.role;
      if (role === "admin") {
        navigate("/admin");
      } else if (role === "editor") {
        navigate("/editor");
      } else if (role === "writer") {
        navigate("/writer");
      } else {
        navigate("/profile");
      }
    } else {
      // Redirect to signup if not logged in
      navigate("/signup");
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setShowSearch(false);
    }
  };

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
    { title: "Latest Tech Trends in 2024", date: "November 09, 2024" },
    {
      title: "How AI is Transforming Business Operations",
      date: "November 09, 2024",
    },
    { title: "The Future of Remote Work", date: "November 09, 2024" },
    {
      title: "Sustainable Business Practices for 2025",
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
        { label: "Education", link: "/industries/education" },
        { label: "Emerging Tech", link: "/industries/emerging-tech" },
        { label: "Entertainment", link: "/industries/entertainment" },
        { label: "Finance", link: "/industries/finance" },
        { label: "IT", link: "/industries/it" },
        { label: "Marketing", link: "/industries/marketing" },
      ],
    },
    {
      title: "Associates",
      options: [
        { label: "Channel Partners", link: "/associates/channel-partners" },
        { label: "Event Partners", link: "/associates/event-partners" },
        { label: "Community Partners", link: "/associates/community-partners" },
      ],
    },
    {
      title: "Magazine",
      options: [
        { label: "Brand India Magazine", link: "/magazine/brand-india" },
      ],
    },
    {
      title: "Investors",
      options: [
        { label: "Angel", link: "/investors/angel" },
        { label: "Venture Capitals", link: "/investors/venture-capitals" },
      ],
    },
  ];

  const searchVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  // Left sidebar items for both mobile and desktop
  const leftSidebarItems = [
    { icon: "📹", label: "VIDEO", link: "/video" },
    { icon: "🎧", label: "PODCASTS", link: "/podcasts" },
    {
      icon: "👥",
      label: "About Us",
      dropdown: [
        { label: "Who We Are", link: "/about/who-we-are" },
        { label: "Our Team", link: "/about/our-team" },
        { label: "Our Culture", link: "/about/our-culture" },
        { label: "Contact Us", link: "/about/contact-us" },
      ],
    },
  ];

  return (
    <div className="bg-black z-10 relative flex flex-col md:flex-row px-4 sm:px-8 md:px-12 lg:px-16 justify-between md:justify-around text-base sm:text-lg h-auto py-4 md:h-20 font-semibold text-white items-center">
      <div className="flex w-full md:w-auto justify-between items-center mb-4 md:mb-0">
        <img src={logo} alt="logo" className="w-20 h-auto md:w-24" />

        <div className="flex md:hidden space-x-4">
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="text-white text-xl hover:text-red-500 cursor-pointer"
          >
            🔍
          </button>
          <button
            onClick={() => setIsLeftSidebarOpen(true)}
            className="text-white text-xl hover:text-red-500 cursor-pointer"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Left Sidebar - Mobile */}
      <AnimatePresence>
        {isLeftSidebarOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={leftSidebarVariants}
            className="fixed top-0 left-0 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 h-full bg-black text-white p-5 shadow-lg z-50 space-y-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center">
              <img src={logo} alt="logo" className="w-20 h-auto" />
              <button
                className="text-white text-2xl cursor-pointer"
                onClick={() => setIsLeftSidebarOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="mt-5 flex items-center relative">
              <form onSubmit={handleSearchSubmit} className="w-full flex">
                <input
                  type="text"
                  placeholder="Search Blogs"
                  className="w-full p-2 text-black outline-none rounded-l"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="p-2 bg-red-500 rounded-r text-white"
                >
                  🔍
                </button>
              </form>
            </div>

            <ul className="mt-5 space-y-4">
              {leftSidebarItems.map((item, index) => (
                <li key={index} className="flex flex-col items-start">
                  {item.dropdown ? (
                    <div className="w-full">
                      <div
                        className="flex items-center w-full justify-between p-2 hover:bg-gray-800 rounded cursor-pointer"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        <div className="flex items-center">
                          <span className="mr-2">{item.icon}</span>
                          {item.label}
                        </div>
                        <span>{isDropdownOpen ? "▲" : "▼"}</span>
                      </div>
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.ul
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={dropdownVariants1}
                            className="ml-6 mt-2 space-y-2 w-full"
                          >
                            {item.dropdown.map((subItem, idx) => (
                              <motion.li
                                key={idx}
                                variants={itemVariants}
                                className="hover:text-red-500 p-1"
                                onClick={() => navigate(subItem.link)}
                              >
                                - {subItem.label}
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <div
                      className="flex items-center p-2 hover:bg-gray-800 rounded w-full cursor-pointer"
                      onClick={() => navigate(item.link)}
                    >
                      <span className="mr-2">{item.icon}</span>
                      {item.label}
                    </div>
                  )}
                </li>
              ))}

              {/* Mobile menu items */}
              {isMobile &&
                menuItems.map((menu, index) => (
                  <li
                    key={index}
                    className="flex flex-col p-2 hover:bg-gray-800 rounded"
                  >
                    <div
                      className="flex justify-between items-center w-full cursor-pointer"
                      onClick={() =>
                        setOpenDropdown(openDropdown === index ? null : index)
                      }
                    >
                      <span>{menu.title}</span>
                      <span>{openDropdown === index ? "▲" : "▼"}</span>
                    </div>

                    <AnimatePresence>
                      {openDropdown === index && (
                        <motion.ul
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={dropdownVariants1}
                          className="ml-6 mt-2 space-y-2 w-full"
                        >
                          {menu.options.map((option, idx) => (
                            <motion.li
                              key={idx}
                              variants={itemVariants}
                              className="hover:text-red-500 p-1 cursor-pointer"
                              onClick={() => navigate(option.link)}
                            >
                              - {option.label}
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ))}

              {isMobile && (
                <li
                  className="flex items-center p-2 hover:bg-gray-800 rounded cursor-pointer"
                  onClick={() => navigate("/advertise-with-us")}
                >
                  Advertise With Us
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop/Tablet Navigation */}
      <div className="hidden md:flex md:flex-row md:items-center md:space-x-6 lg:space-x-10">
        {/* Left sidebar items for desktop */}
        <ul className="flex space-x-4 lg:space-x-6">
          {leftSidebarItems.map((item, index) => (
            <li
              key={index}
              className="relative hover:text-red-500 cursor-pointer"
              onMouseEnter={
                item.dropdown ? () => setIsDropdownOpen(true) : undefined
              }
              onMouseLeave={
                item.dropdown ? () => setIsDropdownOpen(false) : undefined
              }
              onClick={item.link ? () => navigate(item.link) : undefined}
            >
              <div className="flex items-center">
                <span className="mr-1">{item.icon}</span>
                <span>{item.label}</span>
                {item.dropdown && (
                  <span className="ml-1">{isDropdownOpen ? "▲" : "▼"}</span>
                )}
              </div>

              {item.dropdown && isDropdownOpen && (
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="absolute top-full mt-2 w-52 border-t-4 border-red-600 bg-white shadow-lg overflow-hidden z-50"
                >
                  {item.dropdown.map((subItem, idx) => (
                    <motion.li
                      key={idx}
                      variants={dropdownVariants}
                      className="px-4 py-2 border-b-[0.5px] border-gray-200 hover:bg-gray-100 transition cursor-pointer text-black"
                      onClick={() => navigate(subItem.link)}
                    >
                      {subItem.label}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </li>
          ))}
        </ul>

        {/* Main menu items */}
        <ul className="hidden md:flex flex-wrap justify-center space-x-3 lg:space-x-6 xl:space-x-10">
          {menuItems.map((menu, index) => (
            <li
              key={index}
              className="relative flex items-center hover:text-red-500 cursor-pointer py-2"
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
                    className="absolute top-full mt-2 w-52 border-t-4 border-red-600 bg-white shadow-lg overflow-hidden z-50"
                  >
                    {menu.options.map((option, idx) => (
                      <motion.li
                        key={idx}
                        variants={dropdownVariants}
                        className="px-4 py-2 border-b-[0.5px] border-gray-200 hover:bg-gray-100 transition cursor-pointer text-black"
                        onClick={() => navigate(option.link)}
                      >
                        {option.label}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}

          <li
            className="hover:text-red-500 cursor-pointer py-2"
            onClick={() => navigate("/advertise-with-us")}
          >
            Advertise With Us
          </li>
        </ul>
      </div>

      {/* Desktop/Tablet Right Section */}
      <div className="hidden md:flex space-x-5 items-center">
        <div
          className="flex cursor-pointer items-center"
          onClick={() => setShowSearch(!showSearch)}
        >
          <span className="text-xl mr-1">🔍</span>
          <span className="hidden sm:inline">Search</span>
        </div>

        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={searchVariants}
              className="absolute top-16 right-4 sm:right-16 md:right-32 p-2 bg-white mt-2 w-full max-w-xs sm:max-w-md flex items-center z-50"
            >
              <form onSubmit={handleSearchSubmit} className="w-full flex">
                <input
                  type="text"
                  placeholder="Search Blogs"
                  className="flex-grow p-2 outline-none border border-r-0 text-black border-gray-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="p-2 sm:p-3 px-3 sm:px-6 bg-red-500 text-white"
                >
                  🔍
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          className="text-white text-xl cursor-pointer hover:text-red-500"
          onClick={handleProfileClick}
          title={currentUser ? "Go to Dashboard" : "Sign Up/Login"}
        >
          👤
        </button>
        <button
          className="text-white text-xl cursor-pointer hover:text-red-500"
          onClick={() => setIsRightSidebarOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Search Popup */}
      <AnimatePresence>
        {isMobile && showSearch && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={searchVariants}
            className="fixed top-16 left-0 right-0 p-4 bg-white z-50 mx-4 shadow-lg"
          >
            <form onSubmit={handleSearchSubmit} className="flex items-center">
              <input
                type="text"
                placeholder="Search Blogs"
                className="flex-grow p-2 outline-none border border-r-0 text-black border-gray-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="p-3 px-6 bg-red-500 text-white">
                🔍
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isRightSidebarOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={rightSidebarVariants}
            className="fixed top-0 right-0 w-full sm:w-80 h-full bg-white p-5 shadow-lg z-50"
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
                <div
                  key={index}
                  className="flex space-x-3 items-start cursor-pointer"
                >
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
                    <h3 className="text-sm font-semibold text-black">
                      {post.title}
                    </h3>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
