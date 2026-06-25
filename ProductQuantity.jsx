import React, { useState } from 'react';

const ProductQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  const product = "Laptop";
  const price = 50000;
  const totalAMT = price * quantity;

  return (
    <>
      <h2> Assignment 2:Product Quantity</h2>

      <div className="container">
        <p>Product: {product}</p>
        <p>Price: ₹{price}</p>

        <button onClick={() => setQuantity(quantity + 1)}>
          +
        </button>

        <span style={{ margin: "0 10px" }}>{quantity}</span>

        <button
          onClick={() =>
            quantity > 1 && setQuantity(quantity - 1)
          }
        >
          -
        </button>

        <p>Total Amount: ₹{totalAMT}</p>
      </div>
    </>
  );
};

export default ProductQuantity;
