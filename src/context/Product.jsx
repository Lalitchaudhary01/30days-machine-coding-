import React from "react";
import { useCart } from "./CartContext";

const products = [
  { id: 1, name: "iPhone", price: 1000 },
  { id: 2, name: "MacBook", price: 2000 },
];

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Products</h2>
      {products.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - ₹{item.price}
          </p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
