import { useContext } from "react";
import Title from "./Title";
import { useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useState } from "react";
import Product from "./Product";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title firstText="LATEST" secondText="COLLECTIONS" />
        <p className="text-xs sm:text-sm md:text-base text-gray-600 my-3 mx-auto w-3/4 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, cum
          voluptatem inventore quis nobis.{" "}
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <Product
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
