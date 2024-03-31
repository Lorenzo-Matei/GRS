import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"; // adding the Link Tag will ensure that the page isnt refreshed and thusly loads quicker

import { Rating } from "react-simple-star-rating";
import { Badge, Button } from "shards-react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
// import Skeleton from "react-loading-skeleton";

import "./product-search-item.styles.scss";
import { Store } from "../../Store";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

// const ProductSearchItem = (props) => {
function ProductSearchItem(props) {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store); //dispatch: is renamed to ctxdispatch to distinguish it from the dispatch in the reducer
  const { cart } = state;

  const addToCartHandler = async () => {
    //copied from product-page.jsx add to cart button
    // console.log("const data on items: ", props);
    console.log("product destruct: ", props._id);
    const itemExists = cart.cartItems.find((x) => x._id === props._id); //checks if the product exists
    const quantity = itemExists ? itemExists.quantity + 1 : 1; // if item exists then it checks the quantity of the existing product and adds one
    const { data } = await axios.get(`/api/products/${props._id}`); // this stores the products info into a data object

    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock.");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...data, quantity },
    });
    props.addToCartToast(props.name);

    // toast.success(props.name + "\nAdded to Cart!");
  };

  function checkPrice(price) {
    if (price > 0.0) {
      // return "$ " + price
      return (
        <Badge className="product-listing-price-badge" outline theme="light">
          $ {price}
        </Badge>
      );
    } else {
      return (
        <Badge
          className="product-listing-price-badge"
          id="product-listing-call-for-price"
          outline
          theme="light"
        >
          Call for Price
        </Badge>
      );

      // return "Call For Price";
    }
  }

  // const gasType = {props.gasType};

  function fuelBadgeHandler(gas) {
    if (gas == "Propane") {
      return (
        <Badge className="product-card-badge-fuel" outline theme="info">
          PROPANE
        </Badge>
      );
    } else {
      //
    }
  }

  function addToCartButton(props) {
    //stock exists, price listed
    //stock exists, call for price
    // stock doesnt exist, price listed
    // stock doesnt exist, call for price

    //note: out of stock prompt doesnt appear if you cant press add to cart button.
    if (props.countInStock <= 0 && props.price <= 0.0) {
      // stock doesnt exist, call for price

      return (
        <Button
          disabled
          className="product-listing-cart-button-no-stock"
          pill
          theme="danger"
        >
          Out of Stock
        </Button>
      );
    } else if (props.countInStock <= 0 && props.price > 0.0) {
      // stock doesnt exist, price listed

      return (
        <Button
          disabled
          className="product-listing-cart-button-no-stock"
          pill
          theme="danger"
        >
          Out of Stock
        </Button>
      );
    } else if (props.countInStock > 0 && props.price <= 0.0) {
      //stock exists, call for price

      return (
        <Button
          // disabled
          className="product-listing-cart-button-no-stock"
          pill
          theme="light"
          onClick={addToCartHandler}
        >
          Add to Cart
        </Button>
      );
    } else if (props.countInStock > 0 && props.price > 0.0) {
      //stock exists, price listed

      return (
        <Button
          className="product-listing-cart-button"
          onClick={() => addToCartHandler(props)}
          pill
          theme="light"
        >
          <MdOutlineAddShoppingCart className="product-add-cart-icon" />
        </Button>
      );
    }
  }

  function getDescriptinOverlay(field) {
    if (field.length > 0 && field != "") {
      return field;
    } else {
      return "Click Me For More Information";
    }
  }

  return (
    <div className="search-item-card">
      {/* <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition="Bounce"
      /> */}

      <div className="search-item-cardbody">
        <div className="leftside-product-item">
          {/* <a> creates a link over the image that is clickable */}
          {/* The href is site directory + the slug from data */}
          <Link to={`/${props.country}/products/${props.slug}`}>
            <img
              className="product-card-image"
              src={props.image}
              alt={props.name}
            />
          </Link>
          <div id="corner-product-card-div">
            <img
              className="corner-product-card-logo"
              src={props.brandLogo}
              alt={props.brand}
            />
          </div>
          {/* <Badge className="product-card-badge" outline theme="success">
            NEW!
          </Badge> */}
          {fuelBadgeHandler(props.gasType)};
          <div className="product-card-overlay">
            <Link
              to={`/${props.country}/products/${props.slug}`}
              style={{ textDecoration: "None" }}
            >
              <h5 className="product-card-addinfo">
                {getDescriptinOverlay(props.shortDescription)}
              </h5>
            </Link>
          </div>
        </div>

        <div className="rightside-product-item">
          <Link to={`/${props.country}/products/${props.slug}`}>
            <p className="search-product-title">{props.name}</p>
          </Link>

          <div className="cart-price-container">
            {/* <Badge
              className="product-listing-price-badge"
              outline
              theme="light" */}
            {checkPrice(props.price)}
            {/* </Badge> */}
            {addToCartButton(props)}
            {/* {props.countInStock === 0 ? (
              <Button
                disabled
                className="product-listing-cart-button-no-stock"
                pill
                theme="danger"
              >
                Out of Stock
              </Button>
            ) : (
              <Button
                className="product-listing-cart-button"
                onClick={() => addToCartHandler(props)}
                pill
                theme="light"
              >
                <MdOutlineAddShoppingCart className="product-add-cart-icon" />
              </Button>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSearchItem;
