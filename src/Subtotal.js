import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

export default function Subtotal({ cartItems }) {
  const calculateSubtotal = (items) =>
    items?.reduce((total, item) => total + (item.price || 0) * (item.quantity || 1), 0);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cartItems?.length || 0} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
            <button> Proceed to Checkout </button>
          </>
        )}
        decimalScale={2}
        value={calculateSubtotal(cartItems) || 0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

