import { useContext } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import { useState } from "react";
import { useEffect } from "react";

const CartTotal = () => {
  const { products, currency, cartItems } = useContext(ShopContext);
  const [totalAmount, setTotalAmount] = useState([]);
  const shippingFee = 8;

  useEffect(() => {
    countTotal();
  }, [cartItems]);

  const countTotal = () => {
    let total = 0;

    for (const items in cartItems) {
      const productData = products.find((product) => product._id === items);

      if (productData) {
        for (const item in cartItems[items]) {
          total += productData.price * cartItems[items][item];
        }
      }
    }

    setTotalAmount(total);
  };

  return (
    <div className="flex justify-end my-20">
      <div className="w-full sm:w-112.5">
        <div className="text-2xl">
          <Title firstText={"CART"} secondText={"TOTALS"} />
          <div className="flex flex-col gap-2 mt-5 text-sm">
            <p className="flex justify-between">
              Subtotal
              <p>
                {currency} {totalAmount}.00
              </p>
            </p>
            <hr className="border-gray-300" />
            <p className="flex justify-between">
              Shipping Fee
              <p>
                {currency} {shippingFee}.00
              </p>
            </p>
            <hr className="border-gray-300" />
            <p className="flex justify-between font-bold">
              Total
              <p>
                {currency} {totalAmount > 0 ? totalAmount + shippingFee : 0}.00
              </p>
            </p>
          </div>
        </div>
        <div className="w-full text-end">
          <button className="bg-black text-[#f2f8fc] px-6 py-3 my-8 cursor-pointer text-sm">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
