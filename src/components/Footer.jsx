import { HiOutlineUsers } from "react-icons/hi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-linear-to-b from-gray-900 to-gray-800 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-linear-to-r from-[#821435] to-[#B62F5E] p-2 rounded-lg">
                <HiOutlineUsers className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Qatar Charity</h3>
            </div>

            <p className="text-white/70 leading-relaxed max-w-sm">
              Connecting generosity with need through transparency and
              technology. Making charitable giving more impactful in Qatar and
              beyond.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/70 flex flex-col">
              <Link
                className="text-gray-300 hover:text-white transition-colors duration-300"
                to="/"
              >
                Home
              </Link>
              <Link
                className="text-gray-300 hover:text-white transition-colors duration-300"
                to="/about"
              >
                About Us
              </Link>
              <Link
                className="text-gray-300 hover:text-white transition-colors duration-300"
                to="/campaigns"
              >
                Our Campaigns
              </Link>
              <Link
                className="text-gray-300 hover:text-white transition-colors duration-300"
                to="/donor"
              >
                Donor
              </Link>
              <Link
                className="text-gray-300 hover:text-white transition-colors duration-300"
                to="/contact"
              >
                Contact
              </Link>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-4 text-white/70 flex flex-col">
              <Link
                to="#"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                FAQ
              </Link>
              <Link
                to="#"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Blog & News
              </Link>
              <Link
                to="#"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Documentation
              </Link>
              <Link
                to="#"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Support Center
              </Link>
              <Link
                to="#"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Community
              </Link>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-white/70">
              <li>Doha, Qatar</li>
              <li>West Bay, Diplomatic Area</li>
              <li>+974 4494 4444</li>
              <li>info@qcharity.org</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 " />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-14">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Stay Updated with Our Initiatives
            </h3>
            <p className="text-white/70 max-w-md">
              Subscribe to our newsletter to receive updates on our campaigns,
              impact stories, and ways to help.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="grow px-5 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B62F5E] focus:border-transparent"
            />
            <button className="px-6 py-3 bg-linear-to-r from-[#821435] to-[#B62F5E] text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity duration-300">
              Subscribe
            </button>
          </div>
        </div>

        <div className=" py-8 flex flex-col md:flex-row items-center justify-between text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} Qatar Charity Platform. All rights
            reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              to="#"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              to="#"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
