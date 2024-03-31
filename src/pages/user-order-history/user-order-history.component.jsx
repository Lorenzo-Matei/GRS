import "./user-order-history.styles.scss";

import React, { useContext, useEffect, useReducer } from "react";
import { Helmet } from "react-helmet-async";
import LoadingPageAnimation from "../../components/loading-page-animation/loading-page-animation.component";
import ErrorMessageBox from "../../components/error-message-box/error-message-box.component";
import { Store } from "../../Store";
import { useNavigate } from "react-router-dom";
import { getError } from "../../util";
import { Button } from "shards-react";
import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, orders: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function UserOrderHistory({ userCountry }) {
  const { state } = useContext(Store);
  const { userInfo } = state;
  const navigate = useNavigate();
  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const { data } = await axios.get(
          `/api/orders/mine`,

          { headers: { Authorization: `Bearer ${userInfo.token}` } }
        );
        console.log("response data: ", data);
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        dispatch({
          type: "FETCH_FAIL",
          payload: getError(error),
        });
      }
    };
    fetchData();
    console.log("orders data: ", orders);
  }, [userInfo]);

  return (
    <div className="order-history-page-container">
      <Helmet>
        <title>Order History</title>
      </Helmet>

      <h1 className="order-history-title">Order History</h1>
      {loading ? (
        <LoadingPageAnimation />
      ) : error ? (
        <ErrorMessageBox>{error}</ErrorMessageBox>
      ) : (
        <table className="orders-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="order-data-field">{order._id}</td>
                <td className="order-data-field">
                  {order.createdAt.substring(0, 10)}
                </td>
                <td className="order-data-field">
                  {order.totalPrice.toFixed(2)}
                </td>
                <td className="order-data-field">
                  {order.isPaid ? order.paidAt.substring(0, 10) : "No"}
                </td>
                <td className="order-data-field">
                  {order.isDelivered
                    ? order.deliveredAt.substring(0, 10)
                    : "No"}
                </td>
                <td className="order-data-field">
                  <Button
                    outline
                    theme="info"
                    type="button"
                    onClick={() => {
                      navigate(`/${userCountry}/order/${order._id}`);
                    }}
                  >
                    Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
