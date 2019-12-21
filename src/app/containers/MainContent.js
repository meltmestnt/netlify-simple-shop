import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Container, Row } from "reactstrap";
import ItemsList from "./../components/ItemsList";
import SideBar from "./SideBar";

const filterProducts = (id, products) => {
  return id
    ? id === "mens"
      ? products.filter(product => product.sex === "M")
      : id === "womens"
      ? products.filter(product => product.id === "F")
      : id === "cart"
      ? []
      : products.filter(product => product.sale)
    : [...products];
};

class MainContent extends Component {
  render() {
    let id = this.props.match.params.id ? this.props.match.params.id : "";
    let products = filterProducts(id, this.props.products);

    let section = id
      ? `${id.slice(0, 1).toUpperCase()}${
          id !== "sale" ? id.slice(1, id.length - 1) : id.slice(1, id.length)
        }`
      : "All collection";
    const { Range, SwitchInput, ClearButton, CustomCheckbox } = this.props;
    return (
      <div className="container center-xs main-section">
        <div className="row">
          <SideBar
            CustomCheckbox={CustomCheckbox}
            ClearButton={ClearButton}
            Range={Range}
            SwitchInput={SwitchInput}
          ></SideBar>
          <ItemsList products={products}></ItemsList>
        </div>
      </div>
    );
  }
}

export default withRouter(MainContent);
