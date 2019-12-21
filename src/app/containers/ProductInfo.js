import React, { Component } from "react";
import { spawn } from "child_process";
import ItemButton from "../components/ItemButton";
import { addToCart, removeItem } from "./../redux/action";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const determineProduct = (products, id) => {
  return products.find(product => product.id === +id);
};

export class ProductInfo extends Component {
  state = {
    isFetching: false
  };
  static getDerivedStateFromProps(props, state) {
    if (props.products.length < 1) {
      return {
        isFetching: true
      };
    } else {
      return {
        isFetching: false
      };
    }
  }
  render() {
    if (this.state.isFetching) {
      return (
        <div className="loader-wrapper">
          <div className="big-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      );
    } else {
      let product = determineProduct(
        this.props.products,
        this.props.match.params.id
      );
      if (product) {
        let { image, name, id, price, detail, inStock, sex, size } = product;
        return (
          <div className="container">
            <div className="row product-content">
              <div className="col-xs-12 col-md-12 col-lg-6">
                <div className="product-image">
                  <img src={image} alt="" />
                </div>
              </div>
              <div className="col-xs-12 col-md-12 col-lg-6">
                <div className="product-info">
                  <h1 className="product-name">{name}</h1>
                  <p className="product-description">Details: {detail}</p>
                  <h2 className="product-price">Price: ${price}</h2>
                  {inStock ? (
                    <h2 className="product-instock">
                      This product is available at store!
                    </h2>
                  ) : (
                    <h2 className="product-instock">
                      This product is out of stock!
                    </h2>
                  )}
                  <h2 className="product-sex">
                    Sex:{" "}
                    {sex === "M" ? "Male" : sex === "F" ? "Female" : "Unisex"}
                  </h2>
                  <div className="product-sizes">
                    <span className="product-size">Available sizes:</span>
                    {Array.isArray(size) ? (
                      size.map(i => <span className="product-size">{i}</span>)
                    ) : (
                      <span className="product-size">{size}</span>
                    )}
                  </div>
                  <ItemButton
                    styles={{
                      margin: "3rem 0rem 1rem 0rem",
                      fontSize: "1.4rem"
                    }}
                    handler={
                      this.props.inCart
                        ? () => this.props.removeItem(id)
                        : () => this.props.addToCart({ ...product })
                    }
                  >
                    {this.props.text || "Add to cart"}
                  </ItemButton>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <h1
            style={{
              fontSize: "2rem",
              color: "grey",
              padding: "3rem",
              fontFamily: "'Abel'",
              fontWeight: "light",
              textAlign: "center"
            }}
          >
            No product was found!
            <FontAwesomeIcon
              style={{
                fontSize: "3rem",
                color: "#fdcb6e",
                margin: "2rem",
                display: "block",
                margin: "1rem auto"
              }}
              icon={faExclamationTriangle}
            ></FontAwesomeIcon>
          </h1>
        );
      }
    }
  }
}
const getCurrentItem = (cart = [], props) => {
  if (cart.length < 1) return null;
  let product = determineProduct(props.products, props.match.params.id);
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
)(ProductInfo);
