import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import {
  Badge,
  Button,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from "shards-react";
import ErrorMessageBox from "../../components/error-message-box/error-message-box.component";
import { Store } from "../../Store";

import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

import "./cart-page.styles.scss";
import axios from "axios";
import ProductPage from "../product-page/product-page.component";

const cloudFrontDistributionDomain =
  "https://dem6epkjrbcxz.cloudfront.net/test-products-images-nobg/";

const CartPage = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxdispatch } = useContext(Store); //this will access to store and variables in cart from the backend

  const {
    cart: { cartItems }, //this is the list of cart items
  } = state;

  const updateCartQuantityHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`); //ajax request to get current product from backend

    if (data.inStock < quantity) {
      // checks the items inventory quantity, if stock is less than quantity on cart.
      window.alert("Sorry. Product is out of stock");
      return;
    }

    ctxdispatch({
      //copied from product page
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };

  const removeItemHandler = (item) => {
    ctxdispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  const checkoutHandler = () => {
    //1st -> checks if they are signedin/authenticated
    // if they arent authenticated then they will be redirected to the shipping page.
    navigate("/sign-in?redirect=/shipping");
  };

  function displayVoltage(voltage) {
    if (voltage !== "") {
      return " and " + voltage + "V";
    } else {
      return "";
    }
  }

  // const productFullName =
  //   item.productBrand +
  //   " " +
  //   item.productName +
  //   " " +
  //   item.modelVariant +
  //   " " +
  //   item.gasType;

  return (
    <div className="cart-page-container">
      {/* ---------------------------------------- */}
      <Helmet>
        <title>Cart</title>
      </Helmet>
      {/* ---------------------------------------- */}
      {/* <h1>This is the Cart Page.</h1> */}

      <Row>
        {/* <div className="cart-page-items-container"> */}
        <Col md={8} className="cart-page-items-container">
          {cartItems.length === 0 ? ( //if cartItems is 0 then show error message
            <ErrorMessageBox>
              Cart is Empty. <Link to="/"> Go Shopping</Link>
            </ErrorMessageBox>
          ) : (
            <ListGroup>
              <ListGroupItem className="cart-page-title-container">
                <h1 className="cart-page-title">Shopping Cart</h1>
              </ListGroupItem>
              {cartItems.map((item) => (
                <ListGroupItem key={item._id} className="cart-page-cart-item">
                  <Row className="align-items-center">
                    <Col md={2}>
                      <img
                        src={cloudFrontDistributionDomain + item.images[0]}
                        alt={item.images[0]}
                        className="img-fluid rounded img-thumbnail"
                      ></img>{" "}
                    </Col>

                    <Col md={2}>
                      {/*  {" "} -> this creates a space between elements */}
                      <Link
                        id="cart-page-item-name"
                        to={`/product/${item.slug}`}
                      >
                        {item.productBrand +
                          " " +
                          item.productName +
                          " " +
                          item.modelVariant +
                          " " +
                          item.gasType +
                          displayVoltage(item.voltage)}
                      </Link>
                    </Col>
                    <Col md={3}>
                      <Button // decrease '-' quantity button
                        outline
                        pill
                        theme="light"
                        onClick={() =>
                          updateCartQuantityHandler(item, item.quantity - 1)
                        }
                        disabled={item.quantity === 1} // were not gonna make item quantity less than 1 so its disabled when its one
                        className="quantity-mod-btn"
                      >
                        <FaMinus />
                      </Button>
                      <Badge
                        outline
                        theme="success"
                        className="cart-page-quantity-badge"
                      >
                        {item.quantity}
                      </Badge>
                      <Button // this is the increase '+' quantity button
                        outline
                        pill
                        theme="light"
                        onClick={() =>
                          updateCartQuantityHandler(item, item.quantity + 1)
                        }
                        disabled={
                          item.quantity === item.countInStock ||
                          item.quantity === 99
                        } // were not gonna make item quantity less than 1 so its disabled when its one
                        className="quantity-mod-btn"
                      >
                        <FaPlus />
                      </Button>
                    </Col>

                    <Col md={4}>
                      <h3 className="cart-page-price">
                        $ {item.onlinePrice[0].toFixed(2)}
                      </h3>
                    </Col>
                    <Col md={1}>
                      <Button // trash item button
                        outline
                        pill
                        theme="light"
                        onClick={() => removeItemHandler(item)}
                        className="quantity-mod-btn"
                      >
                        <FaTrash />
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Col>
        {/* </div> */}
        <Col md={4} className="cart-page-checkout-container">
          {/* <Card className="cart-page-totals-card">
            <CardBody> */}
          <div>
            <ListGroup flush="true">
              <ListGroupItem className="cart-page-checkout-listgroupitem">
                <h4 className="cart-page-subtotal-title">
                  Subtotal (
                  {cartItems.reduce(
                    (accumulator, cart) => accumulator + cart.quantity,
                    0
                  )}{" "}
                  items)
                </h4>
                <h4 className="cart-page-subtotal-title">
                  $
                  {cartItems.reduce(
                    (accumulator, cart) =>
                      accumulator +
                      cart.onlinePrice[0].toFixed(2) * cart.quantity,
                    0
                  )}
                </h4>
              </ListGroupItem>
              <ListGroupItem className="cart-page-checkout-listgroupitem">
                <h4 className="cart-page-tax">Tax (13%)</h4>
                <h4 className="cart-page-tax">
                  $
                  {cartItems.reduce(
                    (accumulator, cart) =>
                      +(
                        (accumulator +
                          cart.onlinePrice[0].toFixed(2) * cart.quantity) *
                        0.13
                      ).toFixed(2),
                    0
                  )}
                </h4>
              </ListGroupItem>
              <ListGroupItem className="cart-page-checkout-listgroupitem">
                <h3 className="cart-page-total">Total</h3>
                <h3 className="cart-page-total">
                  $
                  {cartItems.reduce(
                    (accumulator, cart) =>
                      +(
                        (accumulator +
                          cart.onlinePrice[0].toFixed(2) * cart.quantity) *
                        1.13
                      ).toFixed(2),
                    0
                  )}
                </h3>
              </ListGroupItem>

              <ListGroupItem className="cart-page-checkout-listgroupitem">
                <div className="cart-page-checkout d-grid">
                  <Button
                    className="cart-page-checkout-btn"
                    type="button"
                    theme="success"
                    onClick={checkoutHandler}
                    // disabled={cartItems.length === 0} //if no items in cart, button doesnt work
                    disabled
                  >
                    Call To Place Order
                    {/* Proceed to Checkout */}
                  </Button>
                </div>
              </ListGroupItem>
            </ListGroup>
          </div>
          {/* </CardBody>
          </Card> */}
        </Col>
      </Row>
    </div>
  );
};
export default CartPage;
