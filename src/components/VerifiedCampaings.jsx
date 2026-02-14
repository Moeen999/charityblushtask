import { GrGroup } from "react-icons/gr";
import CampaignDetail from "./CampaignCard";
import { featuredCampaigns } from "../constants/content";
import { Link } from "react-router-dom";

const VerifiedCampaings = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex gap-x-3 items-center justify-center px-4 py-1.5 bg-[#8a1538]/10 rounded-full text-[#8a1538] font-medium text-sm mb-6">
          <GrGroup />
          Verified Campaigns
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#543D2E] mb-4">
          Make a Difference Today
        </h2>
        <p className="text-lg text-[#543D2E]/80">
          Support RACA-approved campaigns from trusted charities in Qatar. All
          campaigns are integrated with Sandi for transparent impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredCampaigns.map((campaings, index) => {
          return <CampaignDetail key={index} {...campaings} />;
        })}
      </div>

      <div className="text-center mt-12">
        <Link to="/campaign">
          <button className="bg-white hover:bg-[#f8f5f2] text-[#8a1538] font-semibold py-2.5 px-10 rounded-lg border-2 border-[#8a1538] transition duration-300 shadow-md hover:shadow-lg">
            View All Campaigns
          </button>
        </Link>
        <p className="text-sm text-[#543D2E]/70 mt-4">
          All campaigns are RACA-approved and Sandi-integrated
        </p>
      </div>
    </div>
  );
};

export default VerifiedCampaings;
