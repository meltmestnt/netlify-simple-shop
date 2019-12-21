import React from "react";
import CartProduct from "./CartProduct";

function CartProducts(props) {
  return (
    <div className="cartproducts-section">
      {props.products.map(product => (
        <CartProduct key={product.id} product={product}></CartProduct>
      ))}
    </div>
  );
}

export default CartProducts;
