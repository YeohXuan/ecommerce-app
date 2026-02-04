import { createContext } from "react";
import { products } from "../../assets/assets";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "RM";
  const delivery_fee = 5;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select product size.");
      return;
    }

    const cartData = structuredClone(cartItems);

    cartData[itemId] ??= {}; // If itemId doesn't exist, initialize it as an empty object
    cartData[itemId][size] ??= 0; // If size doesn't exist under itemId, initialize it to 0
    cartData[itemId][size]++; // Increment the quantity for the specific size

    setCartItems(cartData);
    console.log(cartData);
  };

  const getCartCount = () => {
    let total = 0;

    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        total += cartItems[itemId][size];
      }
    }

    return total;
  };

  useEffect(() => {
    console.log("Cart Items Updated:", cartItems);
  }, [cartItems]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
