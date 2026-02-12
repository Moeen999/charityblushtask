import { Link, NavLink } from "react-router-dom";
import { HiOutlineUsers } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between py-5 font-medium bg-transparent">
      <div className="flex items-center gap-2.5">
        <div className="bg-linear-to-r from-[#821435] to-[#B62F5E] p-2 rounded-lg">
        <HiOutlineUsers className="h-7 w-7 text-white"/>
        </div>
        <span className="text-xl font-bold text-white">Qatar Charity</span>
      </div>
      <ul className="hidden ml-10 lg:flex items-baseline space-x-6">
        <NavLink
          to="/"
          className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 text-white hover:text-gray-200"
        >
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/campaign"
          className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 text-white hover:text-gray-200"
        >
          <p>Campaigns</p>
        </NavLink>
        <NavLink
          to="/about"
          className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 text-white hover:text-gray-200"
        >
          <p>About</p>
        </NavLink>
         <NavLink
          to="/donor"
          className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 text-white hover:text-gray-200"
        >
          <p>Donor</p>
        </NavLink>
        <NavLink
          to="/contact"
          className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 text-white hover:text-gray-200"
        >
          <p>Contact</p>
        </NavLink>
      </ul>
      <div className="hidden lg:flex items-center space-x-4">
        <Link
          to="/login"
          className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 text-white hover:bg-white/10"
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
  );
};

export default Navbar;
