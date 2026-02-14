import { Link, NavLink } from "react-router-dom";
import { HiOutlineUsers } from "react-icons/hi";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
        scrolled ? "bg-white shadow-lg py-5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between font-medium">
        <div className="flex items-center gap-2.5">
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

        <div className="hidden lg:flex items-center space-x-4">
          <Link
            to="/login"
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
              scrolled
                ? "text-gray-800 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            Login
          </Link>

          <button className="px-4 py-2 bg-gradient-to-r from-[#821435] to-[#B62F5E] text-white text-sm font-medium rounded-md shadow-md hover:opacity-90 transition-opacity duration-300 cursor-pointer">
            Donate Now
          </button>

          <Link
            to="/dashboard"
            className="px-4 py-2 bg-gradient-to-r from-[#63cc56] to-[#9b254e] text-white text-sm font-medium rounded-md shadow-md hover:opacity-90 transition-opacity duration-300"
          >
            Dashboard
          </Link>

          <button className="px-3 py-1 text-sm border rounded">AR</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
