import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;

  const { cartItems, setCartItems, addToCart, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>
          <b>Ksh. {price}</b>
        </p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={cartItems[id]}
            onChange={(e) =>
              setCartItems((c) => ({ ...c, [id]: Number(e.target.value) }))
            }
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
