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
    <div className="flex justify-end">
      <div className="w-full sm:w-112.5">
        <div className="text-2xl">
          <Title firstText={"CART"} secondText={"TOTALS"} />
          <div className="flex flex-col gap-2 mt-5 text-sm">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>
                {currency} {totalAmount}.00
              </p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between">
              <p>Shipping Fee</p>
              <p>
                {currency} {shippingFee}.00
              </p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between font-bold">
              <p>Total</p>
              <p>
                {currency} {totalAmount > 0 ? totalAmount + shippingFee : 0}.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
