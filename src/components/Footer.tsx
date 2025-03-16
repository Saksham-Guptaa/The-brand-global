"use client";
import { useState, useEffect } from "react";
import { FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiHome, HiPhone, HiMail } from "react-icons/hi";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <h1 className="text-lg sm:text-xl font-bold mb-4">
              THE BRAND GLOBAL
            </h1>
            <p className="text-sm sm:text-base leading-relaxed max-w-sm">
              The Brand Global is a 360-degree hyperlocal media platform for publishing rightful information and globally disseminatable content in the interest of policy makers, start-ups, serial entrepreneurs, and MSMEs.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="flex items-center justify-center cursor-pointer text-xl bg-blue-600 h-10 w-10 sm:h-12 sm:w-12 rounded-full">
                <FaFacebookF />
              </a>
              <a href="#" className="flex items-center justify-center cursor-pointer text-xl bg-blue-400 h-10 w-10 sm:h-12 sm:w-12 rounded-full">
                <FaTwitter />
              </a>
              <a href="#" className="flex items-center justify-center cursor-pointer text-xl bg-red-600 h-10 w-10 sm:h-12 sm:w-12 rounded-full">
                <FaYoutube />
              </a>
              <a href="#" className="flex items-center justify-center cursor-pointer text-xl bg-blue-700 h-10 w-10 sm:h-12 sm:w-12 rounded-full">
                <FaLinkedinIn />
              </a>
              <a href="#" className="flex items-center justify-center cursor-pointer text-xl bg-gradient-to-bl from-indigo-800 via-pink-600 to-amber-500 h-10 w-10 sm:h-12 sm:w-12 rounded-full">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Enquiries Section */}
          <div>
            <h2 className="text-lg sm:text-xl mb-4 tracking-widest">COMMERCIAL ENQUIRIES</h2>
            <p className="text-sm sm:text-base text-gray-400">connect@thebrandglobal.com</p>

            <h2 className="text-lg sm:text-xl mt-6 mb-4 tracking-widest">EDITORIAL ENQUIRIES</h2>
            <p className="text-sm sm:text-base text-gray-400">editor@thebrandglobal.com</p>

            <h2 className="text-lg sm:text-xl mt-6 mb-4 tracking-widest">PARTNERSHIP ENQUIRIES</h2>
            <p className="text-sm sm:text-base text-gray-400">partner@thebrandglobal.com</p>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-lg sm:text-xl mb-4 tracking-widest">CONTACT US</h2>
            <p className="text-sm sm:text-base flex items-center gap-2">
              <HiHome className="text-lg sm:text-xl" /> 519, Udyog Vihar Phase V
              <br /> Sector 19, Gurugram, Haryana
            </p>
            <p className="text-sm sm:text-base flex items-center gap-2 mt-4">
              <HiPhone className="text-lg sm:text-xl" /> +91 9638413900 <br />
              Mon - Fri, 9 am - 6 pm (IST)
            </p>
            <p className="text-sm sm:text-base flex items-center gap-2 mt-4">
              <HiMail className="text-lg sm:text-xl" /> connect@thebrandglobal.com
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-600/30 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-400 text-center sm:text-left">© 2024 Thebrandglobal. All Rights Reserved</p>
          <div className="flex space-x-4 text-xs sm:text-sm text-gray-400 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white">Terms Of Use</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
            <a href="#" className="hover:text-white">SiteMap</a>
          </div>
        </div>
      </div>

      {/* Scroll To Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-red-600 h-12 w-12 text-white rounded-full shadow-lg hover:bg-red-800 flex items-center justify-center"
        >
          <MdOutlineKeyboardDoubleArrowUp className="text-2xl" />
        </button>
      )}
    </footer>
  );
};

export default Footer;