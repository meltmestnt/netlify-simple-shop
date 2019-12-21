import React from "react";

function TotalPrice(props) {
  return (
    <div className="cart-price-container">
      <h1 className="total-price">
        {props.totalPrice ? (
          <p>
            Total price is:{" "}
            <span style={{ background: `#fdcb6e`, padding: "1rem" }}>
              {props.totalPrice}$
            </span>
          </p>
        ) : (
          "Add items first!"
        )}
      </h1>
    </div>
  );
}

export default TotalPrice;
