import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useState } from "react";
import { useEffect } from "react";
import { assets } from "../../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import Footer from "../components/Footer";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  };
  useEffect(() => {
    fetchProductData();
    console.log("Products in context:", products);
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 border-gray-200 pt-10 transition-opacity ease-in duration-50 opacity-100">
      <div className="flex gap-12 flex-col sm:flex-row">
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                onClick={() => setImage(item)}
                alt={productData.name}
                className="w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt={productData.name} className="w-full h-auto" />
          </div>
        </div>

        {/* Product details */}
        <div className="flex-1">
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
          <p className="my-5 font-light md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((itemSize, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 bg-gray-100 border ${size === itemSize ? "border-amber-500" : "border-gray-200"} cursor-pointer`}
                  onClick={() => {
                    setSize(itemSize);
                  }}
                >
                  {itemSize}
                </button>
              ))}
            </div>
          </div>
          <button
            className="bg-gray-900 text-zinc-100 py-3 px-6 text-sm cursor-pointer"
            onClick={() => addToCart(productData._id, size)}
          >
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

      {/* Description and Reviews */}
      <div className="mt-20">
        <div className="flex">
          <b className="border border-gray-200 px-5 py-3 text-sm cursor-pointer">
            Description
          </b>
          <p className="border border-gray-200 px-5 py-3 text-sm cursor-pointer">
            Reviews (122)
          </p>
        </div>
        <div className="flex flex-col gap-4 border border-gray-200 px-6 py-6 text-sm text-gray-500">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />

      {/* Footer */}
      <Footer />
    </div>
  ) : null;
};

export default Product;
