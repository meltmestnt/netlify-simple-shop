import React from "react";
import ItemButton from "./../components/ItemButton";
import { addToCart, removeItem } from "./../redux/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const sizes = ["XS", "S", "M", "L", "XL"];

function Item(props) {
  const { name, image, price, inStock, sale, size } = props.product;
  const link = `/product/${props.product.id}`;
  return (
    <div className="col-sm-12 col-md-4" style={{ margin: `1rem 0 1rem 0` }}>
      <div className="item-card">
        <div
          className="item-card-badge"
          style={{ display: inStock ? "block" : "none" }}
        >
          <div className="item-card-badge-content">In stock!</div>
        </div>
        <h2 className="item-card-heading">{name}</h2>
        <div className="item-card-img">
          <img src={image} alt="" className="card-img" />
        </div>
        <div className="item-card-body">
          <div className="item-card-text">
            <h4 className="item-card-text-price">
              <p style={{ marginRight: "0.5rem", display: "inline-block" }}>
                Price:
              </p>
              <span style={{ margin: "0.5rem" }}>${price}</span>
              {sale && (
                <span
                  style={
                    sale
                      ? {
                          background: "rgba(0, 184, 148,1.0)",
                          padding: "0rem 1rem 0rem 1rem",
                          color: "black"
                        }
                      : {}
                  }
                >
                  Sale!
                </span>
              )}
            </h4>
            <div className="item-card-sizes">
              <p style={{ marginRight: "0.5rem", display: "inline-block" }}>
                Available sizes:
              </p>
              {sizes.map(i => {
                const style = {
                  color: "rgba(87, 101, 116,1.0)",
                  padding: "0rem 0.6rem 0rem 0.6rem"
                };
                let span;

                if (Array.isArray(size)) {
                  span = size.includes(i) ? (
                    <span style={style}>{i}</span>
                  ) : null;
                } else {
                  span = size === i ? <span style={style}>{i}</span> : null;
                }
                return (
                  <div key={i} className="item-card-text-sizes">
                    {span}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="buttons">
            <ItemButton
              handler={
                props.inCart
                  ? () => props.removeItem(props.product.id)
                  : () => props.addToCart({ ...props.product })
              }
            >
              {props.text || "Add to cart"}
            </ItemButton>
            <ItemButton>
              <Link
                style={{
                  textDecoration: "none",
                  color: "rgba(238, 82, 83,1.0)"
                }}
                to={link}
              >
                More info
              </Link>
            </ItemButton>
          </div>
        </div>
      </div>
    </div>
  );
}

const getCurrentItem = (cart = [], { product }) => {
  if (cart.length < 1) return null;
  let item = cart.find(i => i.id === product.id);
  return item;
};

const mapStateToProps = (state, ownProps) => {
  let item = getCurrentItem(state.cart, ownProps);
  return item
    ? {
        text: "In cart!",
        inCart: true
      }
    : {
        text: "Add to cart",
        inCart: false
      };
};

const mapDispatchToProps = {
  addToCart,
  removeItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
