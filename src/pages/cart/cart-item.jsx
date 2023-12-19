import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, producName, price, productImage } = props.data;
  const { cartItem, addToCart, removeFromCart,updateCountItemCount } = useContext(ShopContext);

  return (
    <div className="cartitem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{producName}</b>
        </p>
        <p>${price}</p>
        <div className="counthandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input value={cartItem[id]} onChange={(e)=> updateCountItemCount(Number(e.target.value), id)} />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};
