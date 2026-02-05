import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { useState } from "react";
import { useEffect } from "react";
import { assets } from "../../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }

    setCartData(tempData);
    console.log(tempData);
  }, [cartItems]);

  return (
    <div className="border-t-2 border-gray-100 pt-12">
      <div className="mb-6 text-2xl">
        <Title firstText={"YOUR"} secondText={"CART"} />
      </div>
      {cartData.map((item, index) => {
        const productData = products.find(
          (product) => product._id === item._id,
        );

        return (
          <div
            key={index}
            className="py-4 border-y border-gray-200 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
          >
            <div className="flex items-start gap-6">
              <img
                src={productData.image[0]}
                alt={productData.name}
                className="w-16 sm:w-20"
              />
              <div>
                <p className="text-xs sm:text-lg font-medium">
                  {productData.name}
                </p>
                <div className="flex items-center gap-5 mt-2">
                  <p>
                    {currency} {productData.price}
                  </p>
                  <p className="px-2 sm:px-3 sm:py-1 border border-gray-200 bg-slate-50">
                    {item.size}
                  </p>
                </div>
              </div>
            </div>
            <input
              type="number"
              min={1}
              value={item.quantity}
              className="border border-gray-200 px-1 sm:px-2 py-1 max-w-10 sm:max-w-20"
              onChange={(e) =>
                e.target.value === "" || e.target.value === "0"
                  ? updateQuantity(item._id, item.size, 0)
                  : updateQuantity(item._id, item.size, Number(e.target.value))
              }
            />
            <img
              src={assets.bin_icon}
              alt="delete-icon"
              className="w-4 sm:w-5 cursor-pointer"
              onClick={() => updateQuantity(item._id, item.size, 0)}
            />
          </div>
        );
      })}
      <CartTotal />
    </div>
  );
};

export default Cart;
