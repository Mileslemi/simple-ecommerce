import { createContext, useState } from "react";
import React from "react";
import { PRODUCTS } from "../assets/files/products";

export const ShopContext = createContext();

const getDefault = () => {
  let cart = {};
  for (let id = 1; id < PRODUCTS.length + 1; id++) {
    cart[id] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefault());

  const addToCart = (itemId) => {
    setCartItems((prevState) => ({
      ...prevState,
      [itemId]: prevState[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevState) => ({
      ...prevState,
      [itemId]: prevState[itemId] - 1,
    }));
  };

  const contextValues = { cartItems, setCartItems, addToCart, removeFromCart };

  //   console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValues}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
