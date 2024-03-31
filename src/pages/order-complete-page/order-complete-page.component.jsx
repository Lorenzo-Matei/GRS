import React, { useContext, useEffect, useReducer } from "react";
// import ErrorAlert from "../../components/error-message-box/error-message-box.component";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { getError } from "../../util";
import { Store } from "../../Store";
import LoadingPageAnimation from "../../components/loading-page-animation/loading-page-animation.component";
import { Alert, Col, ListGroup, ListGroupItem, Row } from "shards-react";
import "./order-complete-page.styles.scss";

const cloudFrontDistributionDomain =
  "https://dem6epkjrbcxz.cloudfront.net/test-products-images-nobg/";

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, order: action.payload, error: "" };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

export default function OrderCompletePage({ userCountry }) {
  const { state } = useContext(Store);
  const { userInfo } = state;

  const params = useParams();
  const { id: orderId } = params;
  const navigate = useNavigate();

  const [{ loading, error, order }, dispatch] = useReducer(reducer, {
    loading: true,
    order: {},
    error: "",
  });

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(`/api/orders/${orderId}`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };

    if (!userInfo) {
      return navigate(`/${userCountry}/sign-in`);
    }
    if (!order._id || (order._id && order._id !== orderId)) {
      fetchOrder();
    }
  }, [order, userInfo, orderId, navigate]);

  return loading ? (
    <LoadingPageAnimation></LoadingPageAnimation>
  ) : error ? (
    <Alert variant="danger">{error}</Alert>
  ) : (
    <div className="order-complete-page-container">
      <Helmet>
        <title>Order Placed</title>
      </Helmet>
      <div className="order-info-section order-number">
        <h1 className="my-3 order-complete-title">Order {orderId}</h1>
      </div>
      <Row>
        <Col>
          <div className="order-info-section">
            <div className="price-disclaimer-container">
              <h5 id="price-disclaimer-text">
                Please note that if any of your items required quoting we will
                be sending you a reply to your email confirmation or new email
                with quote inside. We may also call you to review your order.
              </h5>
            </div>
          </div>
          <div className="order-info-section order-items-list">
            <h3>Items</h3>
            <div className="order-items-list-group-container">
              <ListGroup className="order-items-list-group">
                <ListGroupItem>
                  <Row>
                    <Col md={6}>Item</Col>
                    <Col md={3}>Quantity</Col>
                    <Col md={3}>Price</Col>
                  </Row>
                </ListGroupItem>
                {order?.orderItems?.map((item) => (
                  <ListGroupItem key={item._id}>
                    <Row className="align-items-center">
                      <Col md={6}>
                        <Row>
                          <img
                            src={cloudFrontDistributionDomain + item.image}
                            alt={item.name}
                            className="img-fluid rounded img-thumbnail"
                          ></img>{" "}
                        </Row>
                        <Row>
                          {" "}
                          <Link to={`/${userCountry}/products/${item.slug}`}>
                            {item.name}
                          </Link>
                        </Row>
                      </Col>
                      <Col md={3}>
                        <span>{item.quantity}</span>
                      </Col>
                      <Col md={3}>${item.price}</Col>
                    </Row>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </div>
        </Col>
        <Col>
          <div className="order-info-section">
            <h3>Shipping</h3>
            <br />
            <h5>{order.shippingAddress.fullName}</h5>
            <h5>{order.shippingAddress.address}</h5>
            <h5>{order.shippingAddress.city}</h5>
            <h5>{order.shippingAddress.postalCode}</h5>
            <h5>{order.shippingAddress.country}</h5>
            {order.isDelivered ? (
              <Alert className="order-page-alert" variant="success">
                Delivered at {order.deliveredAt}
              </Alert>
            ) : (
              <Alert className="order-page-alert" variant="danger">
                Not Delivered
              </Alert>
            )}
          </div>
          <div className="order-info-section">
            <h3>Payment</h3>
            <br />
            <h4>Method:</h4>
            <h5>{order.paymentMethod}</h5>

            {order.isPaid ? (
              <Alert className="order-page-alert" variant="success">
                Paid at {order.paidAt}
              </Alert>
            ) : (
              <Alert className="order-page-alert" variant="danger">
                Not Paid
              </Alert>
            )}
          </div>
        </Col>
        <Col>
          <div className="order-info-section">
            <ListGroup className="items-price-section">
              <ListGroupItem>
                <Row>
                  <Col>Items</Col>
                  <Col>${order.itemsPrice.toFixed(2)}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${order.shippingPrice.toFixed(2)}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Tax</Col>
                  <Col>${order.taxPrice.toFixed(2)}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>
                    <strong> Order Total</strong>
                  </Col>
                  <Col>
                    <strong>${order.totalPrice.toFixed(2)}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </div>
  );
}
