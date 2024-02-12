import React, { useContext } from "react";
import { PRODUCTS } from "../../assets/files/products";
import { ShopContext } from "../../context/shopContext";
import CartItem from "./cartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const navigate = useNavigate();

  const total = getTotalCartAmount();
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
      {total > 0 ? (
        <div className="checkout">
          <p>Subtotal : Ksh. {total} </p>
          <button onClick={() => navigate("/")}>Cont' Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <p>Shopping Cart Empty</p>
      )}
    </div>
  );
};

export default Cart;
