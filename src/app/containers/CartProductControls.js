import React from "react";
import { connect } from "react-redux";
import { increaseAmount, decreaseAmount } from "./../redux/action";

function CartProductControls(props) {
  return (
    <div className="cart-products-controls">
      <span onClick={() => props.increaseAmount(props.productId)}>+</span>
      <p className="control-amount">{props.amount}</p>
      <span onClick={() => props.decreaseAmount(props.productId)}></span>
    </div>
  );
}

const mapDispatchToProps = {
  increaseAmount,
  decreaseAmount
};

export default connect(
  null,
  mapDispatchToProps
)(CartProductControls);
