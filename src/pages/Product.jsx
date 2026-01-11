import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useState } from "react";
import { useEffect } from "react";
import { assets } from "../../assets/assets";

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const { currency } = useContext(ShopContext);

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        console.log(productData);
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  });

  return productData ? (
    <div className="flex gap-12 flex-col sm:flex-row pt-10 border-t border-gray-300">
      <div className="flex flex-col sm:flex-row-reverse gap-3">
        <img src={image} alt={productData.name} className="w-full h-auto" />
        <img
          src={productData.image[0]}
          alt={productData.name}
          className="w-[24%]"
        />
      </div>
      <div className="">
        <p className="font-medium text-2xl mt-2">{productData.name}</p>
        <div className="flex gap-1 mt-2 items-center">
          <img src={assets.star_icon} className="w-3" />
          <img src={assets.star_icon} className="w-3" />
          <img src={assets.star_icon} className="w-3" />
          <img src={assets.star_icon} className="w-3" />
          <img src={assets.star_dull_icon} className="w-3.5" />
          <p className="pl-2">(122)</p>
        </div>
        <p className="font-medium text-3xl mt-5">
          {currency}
          {productData.price}
        </p>
        <p className="my-5 font-light">{productData.description}</p>
        <div className="flex flex-col gap-4 my-8">
          <p>Select Size</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-100 border border-gray-200 cursor-pointer">
              S
            </button>
            <button className="px-4 py-2 bg-gray-100 border border-gray-200 cursor-pointer">
              M
            </button>
            <button className="px-4 py-2 bg-gray-100 border border-gray-200 cursor-pointer">
              L
            </button>
            <button className="px-4 py-2 bg-gray-100 border border-gray-200 cursor-pointer">
              XL
            </button>
            <button className="px-4 py-2 bg-gray-100 border border-gray-200 cursor-pointer">
              XXL
            </button>
          </div>
        </div>
        <button className="bg-gray-900 text-zinc-100 py-3 px-6 text-sm cursor-pointer">
          ADD TO CART
        </button>
        <hr className="border-gray-300 mt-8 mb-5" />
        <div className="flex flex-col gap-1 font-light text-sm">
          <p>100% Original product.</p>
          <p>Cash on delivery is available on this product.</p>
          <p>Easy return and exchange policy within 7 days.</p>
        </div>
      </div>
    </div>
  ) : null;
};

export default Product;
