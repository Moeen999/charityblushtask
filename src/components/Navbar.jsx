import { Link, NavLink, useLocation } from "react-router-dom";
import { HiOutlineUsers } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import { LuMenu } from "react-icons/lu";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      let scrolled = window.scrollY > 50;
      setScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 ${
        scrolled
          ? "bg-white shadow-lg py-5"
          : pathname === "/contact"
            ? "bg-linear-to-br from-[#723134]/60 to-[#5A2A2D]/50"
            : "bg-linear-to-br from-[#782B35] to-[#841F37]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between font-medium">
        <div className="flex shrink-0 items-center gap-1.5 lg:gap-2.5">
          <div className="bg-linear-to-r from-[#821435] to-[#B62F5E] p-2 rounded-lg">
            <HiOutlineUsers className="h-7 w-7 text-white" />
          </div>
          <span
            className={`text-xl font-bold transition-colors duration-300 ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            Qatar Charity
          </span>
        </div>

        <ul className="hidden ml-10 lg:flex items-baseline space-x-6">
          <NavLink
            to="/"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
              scrolled
                ? "text-gray-800 hover:text-gray-600"
                : "text-white hover:text-gray-200"
            }`}
          >
            <p>Home</p>
          </NavLink>

          <NavLink
            to="/campaign"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
              scrolled
                ? "text-gray-800 hover:text-gray-600"
                : "text-white hover:text-gray-200"
            }`}
          >
            <p>Campaigns</p>
          </NavLink>

          <NavLink
            to="/about"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
              scrolled
                ? "text-gray-800 hover:text-gray-600"
                : "text-white hover:text-gray-200"
            }`}
          >
            <p>About</p>
          </NavLink>

          <NavLink
            to="/donor"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
              scrolled
                ? "text-gray-800 hover:text-gray-600"
                : "text-white hover:text-gray-200"
            }`}
          >
            <p>Donor</p>
          </NavLink>

          <NavLink
            to="/contact"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
              scrolled
                ? "text-gray-800 hover:text-gray-600"
                : "text-white hover:text-gray-200"
            }`}
          >
            <p>Contact</p>
          </NavLink>
        </ul>

        <div className="lg:flex items-center space-x-4">
          <Link
            to="/login"
            className={`hidden lg:block px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
              scrolled
                ? "text-gray-800 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            Login
          </Link>
          <div className="flex items-center">
            <Link
              to="/contact"
              className="lg:mr-4 px-3 py-1.5 lg:py-2 bg-linear-to-r from-[#821435] to-[#B62F5E] text-white text-sm font-medium rounded-md shadow-md"
            >
              Donate Now
            </Link>
            {visible ? (
              <button
                onClick={() => setVisible(false)}
                className={`lg:hidden cursor-pointer inline-flex items-center justify-center p-2 rounded-md focus:outline-none`}
              >
                <HiXMark
                  className={`h-6 w-6 block ${scrolled ? "text-gray-700" : "text-white"}`}
                />
              </button>
            ) : (
              <button
                onClick={() => setVisible(true)}
                className="lg:hidden cursor-pointer inline-flex items-center justify-center p-2 rounded-md focus:outline-none text-white"
              >
                <LuMenu
                  className={`h-6 w-6 block ${scrolled ? "text-gray-700" : "text-white"}`}
                />
              </button>
            )}
          </div>

          <Link
            to="/dashboard"
            className="hidden lg:block px-4 py-2 bg-linear-to-r from-[#63cc56] to-[#9b254e] text-white text-sm font-medium rounded-md shadow-md hover:opacity-90 transition-opacity duration-300"
          >
            Dashboard
          </Link>

          <button className="hidden lg:block px-3 py-1 text-sm border rounded">
            AR
          </button>
        </div>
      </div>

      {/* TOPBAR */}
      <div
        className={`relative mt-8 px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 right-0 bottom-0 overflow-hidden transition-all ${visible ? "w-full" : "hidden"}`}
      >
        <div className="flex flex-col text-gray-600 z-20">
          <NavLink
            onClick={() => setVisible(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
            to="/campaign"
          >
            Campaigns
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
            to="/contact"
          >
            Donor
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
            to="/login"
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
