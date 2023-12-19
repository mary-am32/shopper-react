import React, { useContext } from "react";
import { PRODUCTS } from "../../Products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";
export const Cart = () => {
  const { cartItem, getTotalCartAmaount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmaount();
  const navigate =useNavigate()
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartitems">
        {PRODUCTS.map((product) => {
          if (cartItem[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
        {totalAmount>0?
      <div className="checkout">
        <p> subtotal: ${totalAmount}</p>
        <button onClick={()=>navigate('/')}>Continue Shopping</button>
        <button>CheckOut</button>
      </div>
      : <h1>Your Cart Is Empty</h1> }
    </div>
  );
};
