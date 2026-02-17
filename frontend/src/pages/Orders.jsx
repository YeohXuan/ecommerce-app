import { useContext } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t border-gray-300 pt-8">
      <div className="text-2xl">
        <Title firstText={"MY"} secondText={"ORDERS"} />
      </div>

      <div>
        {products.slice(0, 3).map((item, index) => (
          <div
            className="py-4 border-t border-b border-gray-300 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            key={index}
          >
            <div className="flex items-start gap-6 text-sm">
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-16 sm:w-20"
              />
              <div className="flex flex-col gap-2">
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 text-base text-gray-700">
                  <p>
                    {currency} {item.price}
                  </p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p>
                  Date: <span className="text-gray-400">7-Feb-2026</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <span className="min-w-2 h-2 rounded-full bg-green-500"></span>
                <p className="text-sm md:text-base">Ready to ship</p>
              </div>
              <button className="px-4 py-2 rounded-sm text-sm font-medium border border-gray-300 cursor-pointer">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
