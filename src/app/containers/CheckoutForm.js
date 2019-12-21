import React from "react";
import { CardElement, injectStripe } from "react-stripe-elements";

const createOptions = () => {
  return {
    style: {
      base: {
        color: "#fff",
        fontWeight: 600,
        fontFamily: "Quicksand, Open Sans, Segoe UI, sans-serif",
        fontSize: "1.5rem",
        width: "100%",
        fontSmoothing: "antialiased",

        ":focus": {
          color: "#424770"
        },

        "::placeholder": {
          color: "#9BACC8"
        },

        ":focus::placeholder": {
          color: "#CFD7DF"
        }
      },
      invalid: {
        color: "#fff",
        ":focus": {
          color: "#FA755A"
        },
        "::placeholder": {
          color: "#FFCCA5"
        }
      }
    }
  };
};

class CheckoutForm extends React.Component {
  state = { errorMessage: "" };
  handleChange(e) {
    console.log(e);
    if (e.error) {
      this.setState({
        errorMessage:
          e.error.message === "Недопустимый номер карты."
            ? "Invalid card number. Please enter existing one!"
            : e.error.message
      });
    } else {
      this.setState({
        errorMessage: ""
      });
    }
  }
  handleSubmit() {}
  render() {
    return (
      <form className="checkout-form" onSubmit={this.handleSubmit.bind(this)}>
        <div className="split-form">
          <label>
            Please, enter your card information here:
            <CardElement
              {...createOptions()}
              onChange={this.handleChange.bind(this)}
            />
          </label>
          <label>
            Your Postal code
            <input
              name="name"
              type="text"
              placeholder="94115"
              className="StripeElement"
              required
            />
          </label>
        </div>
        <div className="error" role="alert">
          {this.state.errorMessage}
        </div>
        <button className="form-button">Pay</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);
