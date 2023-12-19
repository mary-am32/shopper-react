import React from "react";
import { PRODUCTS } from "../../Products.js";
import { Product } from "./product.jsx";
import "./shop.css";
export const Shop = () => {
  return (
    <div className="shop">
      <div className="shoptitle">
        <h1>Tech shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
