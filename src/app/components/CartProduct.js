import React from "react";
import CartProductControls from "./../containers/CartProductControls";

function CartProduct(props) {
  console.log(props.product);
  let { id, image, name, price, amount, detail } = props.product;

  return (
    <div className="cart-product">
      <div className="cart-product-wrapper">
        <div className="cart-product-image">
          <img src={image} alt="" />
        </div>
        <div className="cart-product-info">
          <h4 className="cart-product-heading">{name}</h4>
          <p className="cart-product-price">${price}</p>
          <p className="cart-product-description">{detail}</p>
        </div>
      </div>
      <CartProductControls productId={id} amount={amount}></CartProductControls>
    </div>
  );
}

export default CartProduct;
