import "./place-order-page.styles.scss";

import React, { useContext, useEffect, useReducer } from "react";
import { Helmet } from "react-helmet-async";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardSubtitle,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from "shards-react";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "../../Store";
import CheckoutSteps from "../../components/checkout-steps/checkout-steps.component";
import CartPage from "../cart/cart-page.component";
import { toast } from "react-toastify";
import axios from "axios";
import LoadingPageAnimation from "../../components/loading-page-animation/loading-page-animation.component";
import { getError } from "../../util";

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE_REQUEST":
      return { ...state, loading: true };
    case "CREATE_SUCCESS":
      return { ...state, loading: false };
    case "CREATE_FAIL":
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default function PlaceOrderPage({ userCountry }) {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store); //ctxdispatch => context dispatch
  const { cart, userInfo } = state;
  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: false,
  });

  const cloudFrontDistributionDomain =
    "https://dem6epkjrbcxz.cloudfront.net/test-products-images-nobg/";

  function round2(num) {
    return Math.round(num * 100 + Number.EPSILON) / 100;
  }
  function regionalPrice() {
    return userCountry == "CAN" ? 0 : 1;
  }

  function quoteCheck(price) {
    // this returns a string if the value is 0 - just means that the item or amount needs to be quoted
    return price > 0 ? price : "Quote To Be Emailed";
  }

  cart.itemsPrice = round2(
    cart.cartItems.reduce(
      (a, c) => a + c.quantity * c.onlinePrice[regionalPrice()],
      0
    )
  ); // c.onlinePrice[regionalPrice()] is accessing each items price
  //   cart.shippingPrice = cart.itemsPrice > 600 ? round2(100) : round2(15);
  cart.shippingPrice = 0;
  cart.taxPrice = round2(0.13 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

  const orderInfo = {
    orderItems: cart.cartItems.map((item) => ({
      ...item,
      name: item.productBrand + item.productName + item.modelVariant,
      onlinePrice: item.onlinePrice[regionalPrice()],
      image: item.images[0],
    })),
    shippingAddress: cart.shippingAddress,
    paymentMethod: cart.paymentMethod,
    itemsPrice: cart.itemsPrice,
    shippingPrice: cart.shippingPrice,
    taxPrice: cart.taxPrice,
    totalPrice: cart.totalPrice,
  };
  async function sendEmail(submittedOrder) {
    try {
      console.log("info sent in sendEmail: ", submittedOrder);
      const { data } = await axios.post(
        "/api/email/sendOrderConfirmation",
        //data being sent to backend:
        {
          //   userInfo: userInfo,
          order: submittedOrder,
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      console.log("email sent successfully + data: ", data);
    } catch (err) {
      console.log("bloody error: ", err);
      dispatch({ type: "CREATE_FAIL" });
      toast.error(getError(err));
    }
  }

  const placeOrderHandler = async () => {
    try {
      dispatch({ type: "CREATE_REQUEST" });
      console.log("itemsPrice: ", cart);

      const { data } = await axios.post(
        "/api/orders",
        //data being sent to backend -> orderRoutes:
        orderInfo,
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      console.log("order success + order data", data);
      await sendEmail(data);
      ctxDispatch({ type: "CART_CLEAR" }); // this goes to store.js
      dispatch({ type: "CREATE_SUCCESS" }); // this one goes to the reducer created above

      localStorage.removeItem("cartItems"); // this clears the cache of items in cache after order is created
      navigate(`/${userCountry}/order/${data.order._id}`);
    } catch (err) {
      console.log("bloody error", err);
      dispatch({ type: "CREATE_FAIL" });
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (!cart.paymentMethod) {
      navigate(`/${userCountry}/payment-method`);
    }
  }, [cart, navigate]);

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <Helmet>
        <title>Preview Order</title>
      </Helmet>
      <div className="title-container">
        <h1 className="my-3 order-page-title">Preview Order</h1>
      </div>
      <div className="order-page-div">
        <div className="items-container">
          {" "}
          <Col>
            <Row>
              <h4 className="place-order-section">Items</h4>
            </Row>
            <Row>
              <ListGroup className="items-listgroup">
                {cart.cartItems.map((item) => (
                  <ListGroupItem
                    className="order-items-list-group-item"
                    key={item._id}
                  >
                    <Row className="align-items-center order-items-row">
                      <Col md={6}>
                        <img
                          src={`${
                            cloudFrontDistributionDomain + item.images[0]
                          }`}
                          alt={item.productName}
                          className="img-fluid rounded img-thumbnail"
                        ></img>
                        <Link to={`/${userCountry}/products/${item.slug}`}>
                          {item.productName}
                        </Link>
                      </Col>
                      <Col md={3}>
                        <span>{item.quantity}</span>
                      </Col>
                      <Col md={3}>
                        <span>${quoteCheck(item.price)}</span>
                      </Col>
                    </Row>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Row>
          </Col>
        </div>
        <div className="shipping-container">
          {" "}
          <Col>
            <Row>
              <h4 className="place-order-section">Shipping</h4>
            </Row>
            <Row>
              <h5 className="order-subsection">Name</h5>
            </Row>
            <Row>{cart.shippingAddress.fullName}</Row>
            <br />

            <Row>
              <h5 className="order-subsection">Address</h5>{" "}
            </Row>
            <Row>{cart.shippingAddress.address}</Row>
            <Row>{cart.shippingAddress.city}</Row>
            <Row>{cart.shippingAddress.postalCode}</Row>
            <Row>{cart.shippingAddress.country}</Row>
            <Link to={`/${userCountry}/shipping`}>Edit</Link>
          </Col>
        </div>
        <div className="payment-container">
          {" "}
          <Col>
            <Row>
              <h4 className="place-order-section">Payment</h4>
            </Row>
            <Row>
              <h5 className="order-subsection">Method</h5>
            </Row>
            <Row>{cart.paymentMethod}</Row>

            <br />
            <Link to={`/${userCountry}/payment-method`}>Edit</Link>
            <br />
            <br />
            <br />

            <Row>
              <h5 id="price-disclaimer-text">
                Please note that if any of your items require quoting, finish
                the checkout, and we will email you a quote. No payment or
                purchase will be conducted on those items until quote is
                received.
              </h5>
            </Row>
          </Col>
        </div>
        <div className="order-summary-container">
          {" "}
          <Col>
            <Row>
              <h4 className="place-order-section">Order Summary</h4>
            </Row>
            <ListGroup className="order-summary-listgroup">
              <ListGroupItem className="order-summary-listgroup-item">
                <Row>
                  <Col>Items</Col>
                  <Col>${quoteCheck(cart.itemsPrice.toFixed(2))}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem className="order-summary-listgroup-item">
                <Row>
                  <Col>Shipping</Col>
                  <Col>${quoteCheck(cart.shippingPrice.toFixed(2))}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem className="order-summary-listgroup-item">
                <Row>
                  <Col>Tax</Col>
                  <Col>${quoteCheck(cart.taxPrice.toFixed(2))}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem className="order-summary-listgroup-item">
                <Row>
                  <Col>Order Total</Col>
                  <Col>${quoteCheck(cart.totalPrice.toFixed(2))}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem className="order-summary-listgroup-item">
                <div className="mb-5 d-grid">
                  <Button
                    className="btn-outline-success"
                    type="button"
                    onClick={placeOrderHandler}
                    disable={cart.cartItems.length === 0}
                  >
                    Place Order
                  </Button>
                </div>
                {loading && <LoadingPageAnimation />}
              </ListGroupItem>
            </ListGroup>
          </Col>
        </div>
      </div>
    </div>
  );
}
