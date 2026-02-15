import { platformStakeholders } from "../constants/content";
import RoleCard from "./RoleCard";
import { IoFlashOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

const PlatformStakeholders = () => {
  const listData = [
    {
      icon: FaCheck,
      text: "Sync beneficiary data to prevent duplicate assistance",
    },
    {
      icon: FaCheck,
      text: "Unified database combining Sandi and our platform",
    },
    {
      icon: FaCheck,
      text: "Full visibility of all aid distribution in Qatar",
    },
  ];
  return (
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16 relative">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#8A1538] rounded-full"></div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          A Platform for <span class="text-[#8A1538]">Everyone</span>
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          Designed to serve all stakeholders in Qatar's charitable ecosystem
          with transparency and efficiency
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {platformStakeholders.map((roles) => {
          return <RoleCard {...roles} key={roles.id} />;
        })}
      </div>
      <div className="mt-20 bg-gradient-to-r from-[#8A1538] to-[#6A0F2A] rounded-2xl p-10 md:p-14 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-10"></div>
        <div className="flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-2/3 mb-8 md:mb-0 md:pr-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-sm font-medium mb-5">
              <IoFlashOutline className="h-4 w-4 mr-2" />
              Integrated Solution
            </div>
            <h3 className="text-3xl font-bold mb-5">
              Seamless Sandi Integration
            </h3>
            <p className="mb-6 text-lg opacity-95 leading-relaxed">
              Our platform integrates directly with Qatar's national Sandi
              platform to ensure coordinated aid distribution and prevent
              duplication of assistance.
            </p>
            <ul className="space-y-4">
              {listData.map((item, index) => {
                const { icon: Icon, text } = item;
                return (
                  <li key={index} className="flex items-start">
                    <div className="flex gap-2.5 mt-0.5 items-center">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                        <Icon className="h-4 w-4 text-[#8A1538]" />
                      </div>
                      <span className="text-lg">{text}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-xl font-medium mb-1">
                Coordination Efficiency
              </div>
              <div className="text-sm opacity-90 mt-2">
                No duplicate assistance
              </div>
              <div className="mt-6 w-full bg-white/20 rounded-full h-2.5">
                <div className="bg-white h-2.5 rounded-full w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformStakeholders;
