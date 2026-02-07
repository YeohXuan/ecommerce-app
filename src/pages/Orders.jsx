import { useContext } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";

const Orders = () => {
  const { products, currency, cartItems } = useContext(ShopContext);

  return (
    <div className="border-t border-gray-300 pt-8">
      <div className="text-2xl">
        <Title firstText={"MY"} secondText={"ORDERS"} />
      </div>
    </div>
  );
};

export default Orders;
