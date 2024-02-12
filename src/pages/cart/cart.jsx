import React, { useContext } from "react";
import { PRODUCTS } from "../../assets/files/products";
import { ShopContext } from "../../context/shopContext";
import CartItem from "./cartItem";
import "./cart.css";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cart">
      <div>
        <h2>Your Cart Items</h2>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] > 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
