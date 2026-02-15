import { Link } from "react-router-dom";
import GetinTouch from "../components/GetinTouch";
import Location from "../components/Location";

const Contact = () => {
  return (
    <>
      <section
        className="relative min-h-screen w-full flex items-center justify-center text-center text-white px-6 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-br from-[#723134]/60 to-[#5A2A2D]/50"></div>
        <div className="absolute inset-0"></div>
        <div className="relative z-10 max-w-4xl px-4">
          <div className="absolute -top-10 -left-10 w-28 h-28 border-4 border-[#F2EDE9]/10 rounded-full"></div>
          <div className="absolute -bottom-8 -right-8 w-20 h-20 border-4 border-[#F2EDE9]/10 rounded-full"></div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight font-['Playfair_Display',serif] [text-shadow:0px_4px_12px_rgba(0,0,0,0.3)]">
            We'd love to <span className="text-[#F2EDE9]">hear from you</span>
          </h1>
          <div className="w-24 h-1 bg-linear-to-r from-[#543D2E] to-[#8A1538] mx-auto my-8 rounded-full"></div>
          <p className="mt-6 text-xl md:text-2xl text-[#F2EDE9] leading-relaxed max-w-2xl mx-auto">
            Whether it's about donations, receipts, or support — our team is
            here to help you.
            <span className="font-semibold text-[#F2B8C6] bg-linear-to-r from-[#8A1538]/30 to-[#8A1538]/10 px-2 py-1 rounded-md">
              We reply within 24 hours
            </span>
            .
          </p>
          <div className="mt-12 flex flex-row justify-center gap-6 items-center">
            <Link to="/campaign">
              <button className="relative bg-linear-to-r from-[#543D2E] to-[#8A1538] text-white px-7 py-4 sm:px-10 sm:py-4 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-[#8A1538] to-[#543D2E] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <span className="relative z-10 whitespace-nowrap">
                  View Campaigns
                </span>
              </button>
            </Link>
            <button className="relative border-2 border-[#F2EDE9] text-white px-7 py-4 sm:px-10 sm:py-4 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <span className="relative z-10 whitespace-nowrap">
                Get Started
              </span>
            </button>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2"></div>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <div className="max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <GetinTouch />
      </div>

      {/* LOCATION */}
      <section className="py-16 bg-linear-to-br from-gray-50 to-gray-50 px-4 sm:px-8 lg:px-16">
        <Location />
      </section>
    </>
  );
};

export default Contact;
