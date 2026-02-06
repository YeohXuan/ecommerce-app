import { useState } from "react";
import { assets } from "../../assets/assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t border-gray-300">
      {/* Delivery Information */}
      <div className="flex flex-col gap-4 w-full sm:max-w-120">
        <div className="text-xl sm:text-2xl my-3">
          <Title firstText={"DELIVERY"} secondText={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="First name"
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Last name"
          />
        </div>
        <input
          type="email"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Email address"
        />
        <input
          type="text"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="City"
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Zip code"
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Country"
          />
        </div>
        <input
          type="number"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Phone"
        />
      </div>

      {/* Right side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title firstText={"PAYMENT"} secondText={"METHOD"} />
          {/* Payment Method */}
          <div className="flex gap-3 flex-col lg:flex-row mt-3">
            <div
              className="flex items-center border border-gray-300 p-2 px-3 cursor-pointer"
              onClick={() => setMethod("stripe")}
            >
              <span
                className={`min-w-3.5 h-3.5 border rounded-full ${method === "stripe" ? "bg-green-400 border-0" : ""}`}
              ></span>
              <img
                src={assets.stripe_logo}
                alt="stripe-logo"
                className="h-5 mx-4"
              />
            </div>
            <div
              className="flex items-center border border-gray-300 p-2 px-3 cursor-pointer"
              onClick={() => setMethod("razorpay")}
            >
              <span
                className={`min-w-3.5 h-3.5 border rounded-full ${method === "razorpay" ? "bg-green-400 border-0" : ""}
              `}
              ></span>
              <img
                src={assets.razorpay_logo}
                alt="razorpay-logo"
                className="h-5 mx-4"
              />
            </div>
            <div
              className="flex items-center border border-gray-300 p-2 px-3 cursor-pointer"
              onClick={() => setMethod("cod")}
            >
              <span
                className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ? "bg-green-400 border-0" : ""}
              `}
              ></span>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end">
            <button className="bg-black text-[#f2f8fc] px-8 py-3 my-8 cursor-pointer text-sm" onClick={() => navigate("/orders")}>
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
