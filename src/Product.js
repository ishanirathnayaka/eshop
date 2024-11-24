import React from "react";
import "./Product.css";

export default function Product() {
  return (
    <div>
     
      <div className="product">
         <div className="Product_info">
            <p> Bennett mystic 15.6 inch laptop shoulder messenger sling office bag, Water repellent fabric for men and women(Blue) </p>
            <p className="product_price"></p>
                  <small> $ </small>
                  <strong> 30 </strong>
            <div className="product_rating">⭐⭐⭐</div>

         </div>

         <img src="https://lifemobile.lk/wp-content/uploads/2023/06/01-89.jpg"alt="product-image"/>
         <button> Add to Basket </button>
       </div>
    </div>
    
  );
}

