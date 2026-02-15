import { FaCircleCheck } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";

const CampaignCard = ({
  badgeText,
  category,
  currency,
  description,
  fundedPercentage,
  goalAmount,
  img,
  isVerified,
  organization,
  raisedAmount,
  title,
}) => {
  const progressWidth = `${fundedPercentage}%`;
  return (
    <div className="bg-red-50 rounded-2xl shadow-md overflow-hidden border border-[#e5ddd5] group hover:-translate-y-1.5 transition-transform duration-300">
      <div className="h-48 relative overflow-hidden">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-red-100 text-red-800">
            {category}
          </span>
        </div>
        {isVerified && (
          <div className="absolute top-4 right-4 bg-white rounded-full p-1.5 shadow-md">
            <FaCircleCheck className="h-5 w-5 text-[#8a1538]" />
          </div>
        )}
      </div>
      <div className="p-6">
        <span className="text-sm font-medium text-[#543D2E]">
          {organization}
        </span>
        <h3 className="text-xl font-semibold text-[#543D2E] mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-[#543D2E]/80 mb-5">{description}</p>
        <div className="mb-5">
          <div className="flex justify-between text-sm text-[#543D2E] mb-2">
            <span className="font-medium">{fundedPercentage}% funded</span>
            <span className="font-medium">
              {currency} {raisedAmount.toLocaleString()}
            </span>
          </div>
          <div className="w-full bg-[#e5ddd5] rounded-full h-2.5">
            <div
              className="h-3 rounded-full bg-gradient-to-r from-[#723134] to-[#a84d51]"
              style={{ width: progressWidth }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-[#543D2E]/70 mt-1">
            <span>Raised</span>
            <span>
              Goal:{currency} {goalAmount.toLocaleString()}
            </span>
          </div>
        </div>
        <button className="w-full bg-[#8a1538] hover:bg-[#6c102c] text-white font-semibold py-2.5 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg">
          Donate Now
        </button>
        <div className="mt-4 flex gap-x-2 items-center justify-center text-xs text-[#543D2E]/70">
          <div className="w-4 h-4 bg-[#8a1538]/10 rounded-full flex items-center justify-center">
            <IoMdCheckmark className="h-3 w-3 text-[#8a1538]" />
          </div>
          <span>{badgeText}</span>
        </div>
      </div>
    </div>
  );
};
export default CampaignCard;
