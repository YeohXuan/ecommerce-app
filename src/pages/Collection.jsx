import { useContext } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import { useState } from "react";
import { useEffect } from "react";
import Product from "../components/Product";
import { assets } from "../../assets/assets";

const Collection = () => {
  const { products, showSearch, search } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const handleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const handleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilterAndSort = () => {
    let productsCopy = products;

    // Apply search filter
    if (showSearch && search.trim() !== "") {
      productsCopy = productsCopy.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply category filter
    if (category.length > 0) {
      productsCopy = productsCopy.filter((product) =>
        category.includes(product.category)
      );
    }
    // Apply subcategory filter
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((product) =>
        subCategory.includes(product.subCategory)
      );
    }

    // Apply sorting to filtered array
    switch (sortType) {
      case "low":
        setfilteredProducts(productsCopy.sort((a, b) => a.price - b.price));
        break;
      case "high":
        setfilteredProducts(productsCopy.sort((a, b) => b.price - a.price));
        break;
      case "relevant":
        setfilteredProducts(
          productsCopy.sort((a, b) =>
            a.bestseller === b.bestseller ? 0 : a.bestseller ? -1 : 1
          )
        );
        break;
      default:
        break;
    }

    setfilteredProducts(productsCopy);
  };
  useEffect(() => {
    applyFilterAndSort();
  }, [category, subCategory, sortType, products, search, showSearch]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-300">
      <div className="min-w-60">
        <p
          className={`text-xl my-2 flex items-center gap-2 cursor-pointer sm:cursor-default select-none sm:pointer-events-none`}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          FILTERS{" "}
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
          />
        </p>
        {/* Category of product */}
        <div
          className={`border border-gray-300 p-4 px-5 mt-6 ${
            showFilter ? "block" : "hidden"
          } sm:block`}
        >
          <p className="font-medium text-sm mb-2">CATEGORIES</p>
          <div className="flex flex-col gap-2 select-none">
            <div className="flex gap-2 font-extralight text-sm">
              <input
                type="checkbox"
                value="Men"
                id="men"
                name="men"
                className="accent-black cursor-pointer"
                onChange={handleCategory}
              />
              <label htmlFor="men" className="cursor-pointer">
                Men
              </label>
            </div>
            <div className="flex gap-2 font-extralight text-sm">
              <input
                type="checkbox"
                value="Women"
                id="women"
                name="women"
                className="accent-black cursor-pointer"
                onChange={handleCategory}
              />
              <label htmlFor="women" className="cursor-pointer">
                Women
              </label>
            </div>
            <div className="flex gap-2 font-extralight text-sm">
              <input
                type="checkbox"
                value="Kids"
                id="kids"
                name="kids"
                className="accent-black cursor-pointer"
                onChange={handleCategory}
              />
              <label htmlFor="kids" className="cursor-pointer">
                Kids
              </label>
            </div>
          </div>
        </div>

        {/* Type of product */}
        <div
          className={`border border-gray-300 p-4 px-5 mt-6 ${
            showFilter ? "block" : "hidden"
          } sm:block`}
        >
          <p className="font-medium text-sm mb-2">TYPE</p>
          <div className="flex flex-col gap-2 select-none">
            <div className="flex gap-2 font-extralight text-sm">
              <input
                type="checkbox"
                value="Topwear"
                id="topwear"
                name="topwear"
                className="accent-black cursor-pointer"
                onChange={handleSubCategory}
              />
              <label htmlFor="topwear" className="cursor-pointer">
                Topwear
              </label>
            </div>
            <div className="flex gap-2 font-extralight text-sm">
              <input
                type="checkbox"
                value="Bottomwear"
                id="bottomwear"
                name="bottomwear"
                className="accent-black cursor-pointer"
                onChange={handleSubCategory}
              />
              <label htmlFor="bottomwear" className="cursor-pointer">
                Bottomwear
              </label>
            </div>
            <div className="flex gap-2 font-extralight text-sm">
              <input
                type="checkbox"
                value="Winterwear"
                id="winterwear"
                name="winterwear"
                className="accent-black cursor-pointer"
                onChange={handleSubCategory}
              />
              <label htmlFor="winterwear" className="cursor-pointer">
                Winterwear
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="text-2xl flex justify-between mb-4">
          <Title firstText="ALL" secondText="COLLECTIONS" className="my-2" />
          <select
            className="text-sm border-2 border-gray-300 p-2 cursor-pointer"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low">Sort by: Low to High</option>
            <option value="high">Sort by: High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filteredProducts.map((product, index) => (
            <Product
              key={index}
              name={product.name}
              price={product.price}
              id={product._id}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
