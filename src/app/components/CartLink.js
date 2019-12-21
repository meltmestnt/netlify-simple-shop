import React from "react";
import { connect } from "react-redux";
function CartLink(props) {
  const styles = {
    fontSize: "1rem",
    color: "grey",
    fontWeight: "bold",
    fontFamily: "Quicksand",
    marginRight: "0.5rem"
  };
  return (
    <div
      style={{ position: "relative", display: "flex", alignItems: "center" }}
    >
      <span style={styles}>({props.cartItems})</span>
      {props.children}
    </div>
  );
}
const mapStateToProps = (state, oldProps) => {
  return {
    cartItems: state.cart.length
  };
};
export default connect(
  mapStateToProps,
  null
)(CartLink);
