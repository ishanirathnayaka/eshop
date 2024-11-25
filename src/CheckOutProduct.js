import React from 'react';
import "./CheckOutProduct.css";

export default function CheckOutProduct({ id, image, title, price, rating }) {
  return (
    <div className="checkoutProduct">
      <img
        src={image}
        alt="Product"
        className="checkoutProduct_image"
      />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">
          {title}
        </p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
        </div>
        <button>Remove from Basket</button>
      </div>
    </div>
  );
}

