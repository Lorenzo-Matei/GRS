import React, { useState, useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormInput } from "shards-react";
import { Store } from "../../Store";
import "./shipping-page.styles.scss";
import CheckoutSteps from "../../components/checkout-steps/checkout-steps.component";

export default function ShippingPage({ userCountry }) {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    userInfo,
    cart: { shippingAddress },
  } = state;
  const [fullName, setFullName] = useState(shippingAddress.fullName || ""); // gets stored shipping address if it exists or enters empty field.
  const [address, setAddress] = useState(shippingAddress.address || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress.country || "");

  useEffect(() => {
    if (!userInfo) {
      // userInfo comes from state > listed above
      navigate(`/${userCountry}/sign-in?redirect=/${userCountry}/shipping`);
    }
  });

  function submitHander(e) {
    e.preventDefault(); // prevents refreshing the page when submitting
    ctxDispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: {
        fullName,
        address,
        city,
        postalCode,
        country,
      },
    });
    localStorage.setItem(
      "shippingAddress",
      JSON.stringify({
        fullName,
        address,
        city,
        postalCode,
        country,
      })
    );
    navigate(`/${userCountry}/payment-method`);
  }

  return (
    <div>
      <Helmet>
        <title>Shipping Address</title>
      </Helmet>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className="container small-container shipping-page-container">
        <h1 className="my-3 shipping-page-title">Shipping Address</h1>

        <Form className="shipping-form" onSubmit={submitHander}>
          <FormInput
            className="shipping-form-fields"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <FormInput
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <FormInput
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <FormInput
            placeholder="Postal/Zip Code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
          <FormInput
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
          <div className="mb-3">
            <Button
              className="btn-success btn-continue"
              variant="success"
              type="submit"
            >
              Continue
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
