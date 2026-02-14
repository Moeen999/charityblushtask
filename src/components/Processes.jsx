import { IoFlashOutline } from "react-icons/io5";
import { processList, processSteps } from "../constants/content";
import { Link } from "react-router-dom";

const Processes = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex gap-x-2 items-center justify-center px-4 py-1.5 bg-[#8a1538]/10 rounded-full text-[#8a1538] font-medium text-sm mb-6">
          <IoFlashOutline />
          Transparent Process
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#543D2E] mb-4">
          How Your Donation Makes an Impact
        </h2>
        <p className="text-lg text-[#543D2E]/80">
          Our platform ensures complete transparency from donation to
          distribution, with full integration to Qatar's Sandi system
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-16">
        {processSteps.map((step) => {
          const { id, icon: Icon, title, description } = step;

          return (
            <div
              key={id}
              className="relative flex flex-col items-center text-center hover:-translate-y-1.5 transition-transform duration-300"
            >
              <div className="mb-6">
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 relative shadow-lg ${id === 2 && "bg-gradient-to-br from-[#543D2E] to-[#3e2c21]"} bg-linear-to-br from-[#8a1538] to-[#6c102c]`}
                >
                  <Icon className="h-10 w-10 text-white" />

                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-white text-[#8a1538] rounded-full flex items-center justify-center font-bold border-2 border-[#8a1538] shadow-md">
                    {id}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[#543D2E] mb-2">
                  {title}
                </h3>

                <p className="text-[#543D2E]/80">{description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-md border border-[#e5ddd5]">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
            <h3 className="text-2xl font-bold text-[#543D2E] mb-4">
              Complete Transparency with Sandi Integration
            </h3>
            <p className="text-[#543D2E]/80 mb-4">
              Our platform uses blockchain technology to create an immutable
              record of every transaction, ensuring complete transparency from
              donor to beneficiary while integrating with Qatar's national Sandi
              platform.
            </p>
            <ul className="space-y-3">
              {processList.map((listItem) => {
                const { id, icon: Icon, description } = listItem;
                return (
                  <li className="flex items-start" key={id}>
                    <div className="flex gap-2.5 mt-0.5">
                      <div className="w-6 h-6 bg-[#8a1538]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="h-4 w-4 text-[#8a1538]" />
                      </div>
                      <span className="text-[#543D2E]">{description}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-[#8a1538] to-[#543D2E] rounded-2xl flex items-center justify-center p-6 text-white text-center shadow-lg">
              <div>
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-lg font-medium">
                  Transparent Donation Tracking
                </div>
                <div className="text-sm opacity-80 mt-2">
                  From donor to beneficiary
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link to="/contact">
          <button className="bg-[#8a1538] hover:bg-[#6c102c] text-white font-semibold py-3 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 active:scale-95">
            Start Donating Now
          </button>
        </Link>
        <p className="text-sm text-[#543D2E]/70 mt-4">
          All donations are processed securely and are tax-deductible in Qatar
        </p>
      </div>
    </div>
  );
};

export default Processes;
