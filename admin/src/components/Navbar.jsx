import { assets } from "../admin_assets/assets.js";

const Navbar = ({ setToken }) => {
  return (
    <>
      <div className="flex justify-between items-center py-2 px-[4%]">
        <img src={assets.logo} alt="logo" className="w-[max(10%,80px)]" />
        <button
          className="bg-gray-600 text-amber-100 py-2 px-5 sm:px-7 sm:py-2 text-xs sm:text-sm rounded-full cursor-pointer"
          onClick={() => setToken("")}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Navbar;
