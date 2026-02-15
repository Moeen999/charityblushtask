import { IoCheckmarkSharp } from "react-icons/io5";

const RoleCard = (props) => {
  const { role, description, icon: Icon, features, ctaText } = props;
  return (
    <div className="relative bg-white flex flex-col rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group ">
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 rotate-45 transform origin-bottom-left bg-linear-to-br from-[#8A1538]/10 to-transparent"></div>
      </div>
      <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 bg-[rgba(138,21,56,0.082)] transition-transform duration-300 hover:scale-105 hover:rotate-6">
        <div style={{ color: "rgb(138, 21, 56)" }}>
          <Icon className="h-10 w-10" />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{role}</h3>
      <p className="text-gray-600 mb-7 leading-relaxed">{description}</p>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => {
          return (
            <li key={index} className="flex items-start flex-grow">
              <div className="flex gap-2.5 mt-0.5">
                <div
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-[rgba(138,21,56,0.125)]
"
                >
                  <IoCheckmarkSharp className="h-4 w-4" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <button className="w-full py-2.5 px-6 rounded-xl font-semibold transition-all duration-300 hover:opacity-90 hover:shadow-md group-hover:-translate-y-0.5 mt-auto bg-[rgb(138,21,56)] text-white">{ctaText}</button>
    </div>
  );
};

export default RoleCard;
