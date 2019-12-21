import React from "react";
import { Route } from "react-router-dom";
import MainContent from "./../containers/MainContent";
import Cart from "./../containers/Cart";
import ProductInfo from "./../containers/ProductInfo";

function routes(productsFromApp) {
  return (
    <>
      <Route
        exact
        path="/"
        render={props => (
          <MainContent {...props} {...productsFromApp}></MainContent>
        )}
      ></Route>
      <Route
        exact
        path="/store/:id"
        render={props => (
          <MainContent {...props} {...productsFromApp}></MainContent>
        )}
      ></Route>
      <Route path="/cart" render={() => <Cart></Cart>}></Route>
      <Route
        path="/product/:id"
        render={props => (
          <ProductInfo
            products={productsFromApp.products}
            {...props}
          ></ProductInfo>
        )}
      ></Route>
    </>
  );
}

export default routes;
