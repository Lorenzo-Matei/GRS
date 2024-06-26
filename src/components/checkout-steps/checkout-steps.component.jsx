import React from "react";
import { Col, Row } from "shards-react";
import "./checkout-steps.styles.scss";

export default function CheckoutSteps(props) {
  return (
    <div className="checkout-steps-container">
      <Row className="checkout-steps">
        <Col className={props.step1 ? "active" : ""}>Sign-In</Col>
        <Col className={props.step2 ? "active" : ""}>Shipping</Col>
        <Col className={props.step3 ? "active" : ""}>Payment</Col>
        <Col className={props.step4 ? "active" : ""}>Place Order</Col>
      </Row>
    </div>
  );
}
