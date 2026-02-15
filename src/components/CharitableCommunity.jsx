import { IoMdCheckmarkCircle } from "react-icons/io";
import {
  IoShieldCheckmark,
  IoShieldCheckmarkOutline,
  IoFlashOutline,
  IoCheckmarkSharp,
} from "react-icons/io5";

const CharitableCommunity = () => {
  return (
    <div className="container mx-auto px-4">
      {/* TOP */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#543D2E] mb-3">
          Trusted by Qatar's Charitable Community
        </h2>
        <p className="text-[#8a1538] font-medium">
          Fully integrated with Sandi for transparent, regulated charitable
          giving
        </p>
      </div>
      {/* CENTER */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
        {/* Left */}
        <div className="bg-white transition-transform duration-300 hover:-translate-y-1.5 rounded-xl p-6 shadow-md border border-[#e5ddd5] flex flex-col items-center">
          <div className="text-center mb-5">
            <h3 className="font-semibold text-[#543D2E] mb-2">
              Official Partnerships
            </h3>
            <div className="h-1 w-12 bg-[#8a1538] mx-auto mb-4" />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-linear-to-br from-[#8a1538] to-[#6c102c] rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-md">
                RACA
              </div>
              <span>Regulatory Body</span>
            </div>
            <div className="h-12 w-px bg-[#e5ddd5] hidden md:block"></div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-linear-to-br from-[#8a1538] to-[#6c102c] rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-md">
                SANDI
              </div>
              <span>National Pateform</span>
            </div>
          </div>
        </div>

        {/* Center */}
        <div className="bg-white transition-transform duration-300 hover:-translate-y-1.5 rounded-xl p-6 shadow-md border border-[#e5ddd5]">
          <div className="text-center mb-5">
            <h3 className="font-semibold text-[#543D2E] mb-2">Out Impact</h3>
            <div className="h-1 w-12 bg-[#8a1538] mx-auto mb-4" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#8a1538]">
                42+
              </div>
              <div className="text-xs text-[#543D2E] mt-1 font-medium">
                Verified Charities
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#8a1538]">
                12.4M+
              </div>
              <div className="text-xs text-[#543D2E] mt-1 font-medium">
                Donations Raised
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#8a1538]">
                5,241+
              </div>
              <div className="text-xs text-[#543D2E] mt-1 font-medium">
                Families Helped
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#8a1538]">
                100%
              </div>
              <div className="text-xs text-[#543D2E] mt-1 font-medium">
                Compilance
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white transition-transform duration-300 hover:-translate-y-1.5 rounded-xl p-6 shadow-md border border-[#e5ddd5]">
          <div className="text-center mb-5">
            <h3 className="font-semibold text-[#543D2E] mb-2">
              Security & Trust
            </h3>
            <div className="h-1 w-12 bg-[#8a1538] mx-auto mb-4" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#f8f5f2] rounded-full flex items-center justify-center border border-[#e5ddd5]">
                <IoShieldCheckmark className="h-6 w-6 text-[#8a1538]" />
              </div>
              <span className="text-xs text-[#543D2E] mt-2 font-medium text-center">
                Secure
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#f8f5f2] rounded-full flex items-center justify-center border border-[#e5ddd5]">
                <IoShieldCheckmarkOutline className="h-6 w-6 text-[#8a1538]" />
              </div>
              <span className="text-xs text-[#543D2E] mt-2 font-medium text-center">
                Verified
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#f8f5f2] rounded-full flex items-center justify-center border border-[#e5ddd5]">
                <IoFlashOutline className="h-6 w-6 text-[#8a1538]" />
              </div>
              <span className="text-xs text-[#543D2E] mt-2 font-medium text-center">
                Transparent
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#f8f5f2] rounded-full flex items-center justify-center border border-[#e5ddd5]">
                <IoCheckmarkSharp className="h-6 w-6 text-[#8a1538]" />
              </div>
              <span className="text-xs text-[#543D2E] mt-2 font-medium text-center">
                Compilant
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-10 pt-8 border-t border-[#e5ddd5] flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="flex items-center space-x-2 text-sm text-[#543D2E] font-medium">
          <IoMdCheckmarkCircle className="h-5 w-5 text-[#8a1538]" />
          <span>100% compliant with Qatari charitable regulations</span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-[#f8f5f2] px-3 py-1 rounded-lg border border-[#e5ddd5]">
            <div className="w-5 h-5 bg-[#543D2E] rounded flex items-center justify-center">
              <span className="text-xs font-bold text-white">SSL</span>
            </div>
            <span className="text-xs text-[#543D2E]">Secure Encryption</span>
          </div>
          <div className="h-6 w-px bg-[#e5ddd5]" />
          <div className="flex items-center space-x-2 bg-[#f8f5f2] px-3 py-1 rounded-lg border border-[#e5ddd5]">
            <span className="text-xs text-[#543D2E]">Blockchain Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharitableCommunity;
