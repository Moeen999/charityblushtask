import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="lg:hidden transition-all duration-300 ease-in-out max-h-96 opacity-100">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
        {["Home", "Campaigns", "About", "Donor", "Contact"].map((item) => (
          <Link
            to={"/" + item.toLowerCase()}
            key={item}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
