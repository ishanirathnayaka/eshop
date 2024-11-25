import React from 'react';
import "./CheckOut.css";
import CheckOutProduct from "./CheckOutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

export default function CheckOut() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://www.socialfix.com/wp-content/uploads/2021/04/ban-2.jpg"
          alt="checkout_ad"
          className="checkout_ad"
        />
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckOutProduct
              key={item.id} // Add a unique key for React lists
              id={item.id}
              title={item.title}  // Use correct property
              image={item.image || "https://via.placeholder.com/150"}  // Add fallback
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}





