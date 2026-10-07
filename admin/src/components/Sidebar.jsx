import { NavLink } from "react-router-dom";
import { assets } from "../admin_assets/assets.js";

const Sidebar = () => {
  return (
    <>
      <div className="w-full min-h-screen border-r-2 border-gray-200 pt-2">
        <div className="flex gap-4 flex-col text-[15px] pl-[20%] pt-6">
          <NavLink
            to="/add"
            className="flex gap-2 items-center border border-r-0 border-gray-300 p-2 px-4"
          >
            <img src={assets.add_icon} alt="" className="w-5" />
            <p className="hidden md:block">Add items</p>
          </NavLink>
          <NavLink
            to="/list"
            className="flex gap-2 items-center border border-r-0 border-gray-300 p-2 px-4"
          >
            <img src={assets.order_icon} alt="" className="w-5" />
            <p className="hidden md:block">List items</p>
          </NavLink>
          <NavLink
            to="/order"
            className="flex gap-2 items-center border border-r-0 border-gray-300 p-2 px-4"
          >
            <img src={assets.order_icon} alt="" className="w-5" />
            <p className="hidden md:block">Orders</p>
          </NavLink>
        </div>
      </div>
      <div className="w-[70%] mx-auto"></div>
    </>
  );
};

export default Sidebar;
