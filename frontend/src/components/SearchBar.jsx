import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../../assets/assets";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation().pathname;

  useEffect(() => {
    if (location.includes("collection")) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [location]);

  return showSearch && isVisible ? (
    <div className="border-y border-gray-200 bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center w-1/2 border border-gray-400 px-5 my-5 rounded-full">
        <input
          type="text"
          className="flex-1 outline-none h-9 text-sm"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <img src={assets.search_icon} alt="search-icon" className="w-4" />
      </div>
      <img
        src={assets.cross_icon}
        alt="cross-icon"
        className="w-3 inline ml-4 cursor-pointer"
        onClick={() => setShowSearch(false)}
      />
    </div>
  ) : null;
};

export default SearchBar;
