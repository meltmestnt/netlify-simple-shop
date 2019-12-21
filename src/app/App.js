import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./containers/navbar";
import Routes from "./components/routes";
import CustomRangeInput from "./components/CustomRangeInput";
import CustomSwitch from "./components/CustomSwitch";
import CustomSearch from "./components/CustomSearch";
import ClearButton from "./components/ClearButton";
import CustomCheckbox from "./components/CustomCheckbox";

const checkKeyword = (products, keyword) => {
  return products.filter(
    product => product.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
  );
};
const checkPrice = (products, price) => {
  return products.filter(product => product.price <= price);
};
const checkInStock = products => {
  return products.filter(product => product.inStock);
};

const priceSort = products => {
  return products.sort((a, b) => a.price - b.price);
};

class App extends React.Component {
  state = {
    products: [],
    inStock: false,
    price: 0,
    maxPrice: 0,
    keyword: "",
    sorted: false
  };
  clearHandle = () => {
    this.setState({
      inStock: false,
      price: 0,
      keyword: "",
      products: this.allProducts,
      sorted: false
    });
  };
  switchHandle = checked => {
    let products = checkPrice(
      this.allProducts,
      this.state.price > 0 ? this.state.price : this.state.maxPrice
    );
    if (checked) {
      products = checkInStock(products);
    }
    if (this.state.keyword) {
      products = checkKeyword(products, this.state.keyword);
    }
    if (this.state.sorted) {
      products = priceSort(products);
    }
    this.setState({
      products,
      inStock: checked
    });
  };
  rangeHandle = price => {
    let products = checkPrice(this.allProducts, price);
    if (this.state.inStock) {
      products = checkInStock(products);
    }
    if (this.state.keyword) {
      products = checkKeyword(products, this.state.keyword);
    }
    if (this.state.sorted) {
      products = priceSort(products);
    }
    this.setState({
      products,
      price
    });
  };
  checkboxHandle = checked => {
    let products;
    if (checked) {
      products = priceSort(this.state.products);
    } else {
      products = this.allProducts;
    }
    if (this.state.price > 0) {
      products = checkPrice(
        products,
        this.state.price > 0 ? this.state.price : this.state.maxPrice
      );
    }
    if (this.state.inStock) {
      products = checkInStock(products);
    }
    if (this.state.keyword) {
      products = checkKeyword(products, this.state.keyword);
    }
    this.setState({
      products,
      sorted: checked
    });
  };
  handleSearch = keyword => {
    let products = checkPrice(
      this.allProducts,
      this.state.price > 0 ? this.state.price : this.state.maxPrice
    );
    if (this.state.inStock) {
      products = checkInStock(products);
    }
    if (keyword) {
      products = checkKeyword(products, keyword);
    }
    if (this.state.sorted) {
      products = priceSort(products);
    }
    this.setState({
      products,
      keyword
    });
  };
  componentDidMount() {
    import("./../products.json").then(data => {
      let products = data.default;
      let maxPrice = products.reduce((p, i) => {
        return p.price > i.price ? p.price : i.price;
      }, products[0]);
      this.setState({
        products,
        maxPrice
      });
      this.allProducts = [...products];
    });
  }
  render() {
    return (
      <Router>
        <div className="app">
          <Navbar
            CustomSearch={() => (
              <CustomSearch handleSearch={this.handleSearch}></CustomSearch>
            )}
          ></Navbar>
          <Routes
            CustomCheckbox={() => (
              <CustomCheckbox
                sorted={this.state.sorted}
                checkboxHandle={this.checkboxHandle}
              ></CustomCheckbox>
            )}
            ClearButton={text => (
              <ClearButton
                text={text}
                clearHandle={this.clearHandle}
              ></ClearButton>
            )}
            Range={() => (
              <CustomRangeInput
                rangeHandle={this.rangeHandle}
                maxPrice={this.state.maxPrice}
                price={this.state.price}
              ></CustomRangeInput>
            )}
            SwitchInput={() => (
              <CustomSwitch
                inStock={this.state.inStock}
                switchHandle={this.switchHandle}
              ></CustomSwitch>
            )}
            products={this.state.products}
          ></Routes>
        </div>
      </Router>
    );
  }
}

export default App;
