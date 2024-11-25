import React from 'react';
import "./CheckOut.css";
import  CheckOutProduct from "./CheckOutProduct";
import  Subtotal from "./Subtotal.js";

export default function CheckOut() {
  return (
    <div className="checkout">

      <div className="checkout_left">
          <img src="https://www.socialfix.com/wp-content/uploads/2021/04/ban-2.jpg"alt="checkout_ad" className="checkout_ad img"/>
          <div>
             <h2 className="checkout_title">
                Your Shopping Basket
             </h2>
             <CheckOutProduct/>
             <CheckOutProduct/>
             <CheckOutProduct/>
          </div>
      </div>

      <div className="checkout_right">
        <Subtotal/>
      </div>
        
    </div>
  );
}



