import { BsFillSendFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaHeading } from "react-icons/fa";
import { contactInfo, supportInfo } from "../constants/content";
import { FaQuestionCircle } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <>
      <div className="text-center mb-16 ">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 font-serif ">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto ">
          We'd love to hear from you. Reach out to us with any questions or
          inquiries.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl sm:h-[115vh] ">
          <div className="bg-linear-to-r from-[#8A1538] to-[#6A0F2A] py-6 px-8">
            <h2 className="text-white text-2xl font-semibold flex items-center gap-2">
              <BsFillSendFill className="text-white" />
              Send us a Message
            </h2>
            <p className="text-[#F9D5E5] mt-1">We'll respond as soon as possible</p>
          </div>

          <form className="p-8 space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Your Full Name"
                required
                className="w-full border border-gray-200 rounded-lg pl-10 p-3.5 focus:outline-none focus:ring-2 focus:ring-[#8A1538]/30 transition-all duration-300"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MdEmail className="text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="Your Email Address"
                required
                className="w-full border border-gray-200 rounded-lg pl-10 p-3.5 focus:outline-none focus:ring-2 focus:ring-[#8A1538]/30 transition-all duration-300"
              />
            </div>
            <select className="w-full border border-gray-200 rounded-lg p-3.5 focus:outline-none focus:ring-2 focus:ring-[#8A1538]/30 transition-all duration-300 bg-white appearance-none">
              {[
                "Choose a Topic",
                "Donation Support",
                "Receipts",
                "Campaign Info",
                "General Inquiry",
              ].map((val, index) => {
                return (
                  <option value={val} key={index}>
                    {val}
                  </option>
                );
              })}
            </select>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaHeading className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-200 rounded-lg pl-10 p-3.5 focus:outline-none focus:ring-2 focus:ring-[#8A1538]/30 transition-all duration-300"
                required
              />
            </div>
            <textarea
              className="w-full border border-gray-200 rounded-lg p-3.5 focus:outline-none focus:ring-2 focus:ring-[#8A1538]/30 transition-all duration-300"
              rows={5}
              required
              placeholder="Your Message"
            ></textarea>
            <button className="w-full bg-[#8A1538] hover:bg-[#6A0F2A] text-white py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium">
              <BsFillSendFill className="text-white" />
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200 flex items-center gap-2">
              <MdLocationOn className="text-[#8A1538]" />
              Contact Information
            </h2>
            <ul className="space-y-6 text-gray-700">
              {contactInfo.map((info, index) => {
                const { title, icon: Icon, titleInfo, availability } = info;
                return (
                  <li key={index} className="flex items-start gap-4">
                    <div className="bg-[#F9D5E5] p-3 rounded-full flex items-center justify-center mt-1">
                      <Icon className="text-[#8A1538] text-lg" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{title}</h3>
                      <p className="text-gray-600">{titleInfo}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {availability}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200 flex items-center gap-2">
              <FaQuestionCircle className="text-[#8A1538]" />
              Quick Support
            </h2>
            <ul className="space-y-4">
              {supportInfo.map((info, index) => {
                const { title, icon: Icon, description } = info;
                return (
                  <li
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-all duration-300 group"
                  >
                    <div className="bg-[#F9D5E5] p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-[#8A1538] text-lg" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{title}</h3>
                      <p className="text-sm text-gray-600">{description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
