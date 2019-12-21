import React, { Component } from "react";
import CartProducts from "./../components/CartProducts";
import TotalPrice from "./../components/TotalPrice";
import { connect } from "react-redux";
import ClearButton from "../components/ClearButton";
import { clearCart } from "./../redux/action";
import Form from "./../components/Form";

class Cart extends Component {
  render() {
    return (
      <div className="container-fluid center-xs">
        <div className="row">
          <div className="col-xs-12 col-lg-6 bg-grey" style={{ padding: "0" }}>
            <CartProducts products={this.props.cart}></CartProducts>
            <TotalPrice totalPrice={this.props.totalPrice}></TotalPrice>
            <div className="cart-button-wrapper">
              {this.props.cart.length > 0 ? (
                <ClearButton
                  text="Clear cart"
                  clearHandle={this.props.clearCart}
                ></ClearButton>
              ) : null}
            </div>
          </div>
          <div
            className="col-xs-12 col-lg-6 checkout-section"
            style={{ padding: "0" }}
          >
            <Form></Form>
          </div>
        </div>
      </div>
    );
  }
}

const calculateTotalPrice = cart => {
  if (cart.length < 1) return null;
  return cart.reduce((p, i) => p + i.price * i.amount, 0);
};

const mapStateToProps = (state, oldProps) => {
  let totalPrice = calculateTotalPrice(state.cart);
  return {
    cart: [...state.cart],
    totalPrice
  };
};

const mapDispatchToProps = {
  clearCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
