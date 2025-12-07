import React from "react";
import "./Subtotal.css";

import { useStateValue } from "./StateProvider";
import {getBusketTotal} from"./reducer";


export default function Subtotal({ cartItems }) {
  const calculateSubtotal = (items) =>
    items?.reduce((total, item) => total + (item.price || 0) * (item.quantity || 1), 0);
    const [{basket}, dispatch]= useStateValue();
  return (
    
    <div className="subtotal">
      <>
        <p>
          Subtotal ({basket?.length || 0} items):{" "}
          <strong>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(calculateSubtotal(basket) || 0)}
          </strong>
        </p>
        <small className="subtotal_gift">
          <input type="checkbox" /> This order contains a gift
        </small>
        <button> Proceed to Checkout </button>
      </>
    </div>
  );
}

