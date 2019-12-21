import React from "react";
import { StripeProvider, Elements } from "react-stripe-elements";
import CheckoutForm from "./../containers/CheckoutForm";

function Form() {
  return (
    <StripeProvider
      apiKey="pk_test_0CCKCM9H5D6lgH605nhIgqlF00WsQbeAWu
"
    >
      <Elements>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </StripeProvider>
  );
}

export default Form;
