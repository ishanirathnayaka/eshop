import React from 'react';
import "./CheckOutProduct.css";

export default function CheckOutProduct() {
  return (
    <div className="checkoutproduct">
      <img
        src="https://lifemobile.lk/wp-content/uploads/2023/06/01-89.jpg"
        alt="Product"
        className="checkoutProduct_image"
      />

      <div className="checkoutproduct_info">
        <p className="checkoutProduct_title">
          Bennett Mystic 15.6 inch laptop shoulder messenger sling office bag, Water repellent fabric for men and women
          (Blue)
        </p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>20</strong>
        </p>
        <div className="checkoutProduct_rating">⭐⭐⭐</div>
        <button>Remove from Basket</button>
      </div>
    </div>
  );
}
