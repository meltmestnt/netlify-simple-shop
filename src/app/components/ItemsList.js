import React, { Component } from "react";
import Item from "./../containers/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
class ItemsList extends Component {
  render() {
    return (
      <div className="col-xs-12 col-md-12 col-lg-9">
        <div className="row">
          {this.props.products.length > 0 ? (
            this.props.products.map(product => (
              <Item key={product.name} product={product} />
            ))
          ) : (
            <h1
              style={{
                fontSize: "2rem",
                color: "grey",
                padding: "3rem",
                fontFamily: "'Abel'",
                fontWeight: "light"
              }}
            >
              No products were found with provided filter or keyword.
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
          )}
        </div>
      </div>
    );
  }
}

export default ItemsList;
