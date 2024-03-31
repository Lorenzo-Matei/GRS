import React, { useContext, useEffect, useState } from "react";
import "./payment-methods-page.styles.scss";
import CheckoutSteps from "../../components/checkout-steps/checkout-steps.component";
import { Button, Form, FormGroup, FormRadio } from "shards-react";
import { Store } from "../../Store";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function PaymentMethodsPage({ userCountry }) {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { shippingAddress, paymentMethod },
  } = state;
  const [paymentMethodName, setPaymentMethodName] = useState(
    paymentMethod || "In-store"
  );

  useEffect(() => {
    if (!shippingAddress.address) {
      // if shipping address doesnt exist
      navigate(`/${userCountry}/shipping`); //navigate to previous page to input
      console.log("not shipping address -> redirecting to shipping");
    }
  }, [shippingAddress, navigate]);

  function submitHandler(e) {
    e.preventDefault();
    ctxDispatch({ type: "SAVE_PAYMENT_METHOD", payload: paymentMethodName });
    localStorage.setItem("paymentMethod", paymentMethodName);
    navigate(`/${userCountry}/place-order`);
  }

  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="container small-container payment-method-container">
        <Helmet>
          <title className="payment-method-title">Payment Method</title>
        </Helmet>
        <h1 className="my-3 payment-method-title">Payment Method</h1>
        <Form className="payment-method-form" onSubmit={submitHandler}>
          <FormGroup>
            <FormRadio
              name="payment"
              id="in-store"
              label="In-store"
              value="In-store"
              checked={paymentMethodName === "In-store"}
              onChange={(e) => {
                setPaymentMethodName(e.target.value);
              }}
            >
              In-store
            </FormRadio>
            <FormRadio
              name="payment"
              id="credit-card"
              label="Credit Card"
              value="Credit Card"
              checked={paymentMethodName === "Credit Card"}
              onChange={(e) => {
                setPaymentMethodName(e.target.value);
              }}
            >
              Credit Card
            </FormRadio>
            <div className="mb-3">
              <Button
                id="payment-submit-btn"
                outline
                // pill
                theme="success"
                type="submit"
              >
                Continue
              </Button>
            </div>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}
