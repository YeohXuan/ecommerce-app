import { useContext } from "react";
import Title from "./Title";
import { useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useState } from "react";

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
    </div>
  );
};

export default LatestCollection;
