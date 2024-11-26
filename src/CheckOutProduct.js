import React from 'react';
import "./CheckOutProduct.css";
import {useStateValue} from "./StateProvider";

export default function CheckOutProduct({ id, image, title, price, rating }) {
  const [{busket},dispatch] = useStateValue();

  const removefromBasket = () =>{
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id,
    })
  }
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
        <button onClick={removefromBasket}>Remove from Busket  </button>
      </div>
    </div>
  );
}

