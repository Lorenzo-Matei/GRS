import React, { useContext } from "react";
import { Link } from "react-router-dom"; // adding the Link Tag will ensure that the page isnt refreshed and thusly loads quicker

import { Rating } from "react-simple-star-rating";
import { Badge, Button } from "shards-react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
// import Skeleton from "react-loading-skeleton";

// import KitchenKnife from "../../assets/images/product-search/kitchen-knife.png";
// import Logo from "../../assets/images/product-search/wusthof.png";
// import Logo2 from "../../assets/images/product-search/wusthof2.png";

import "./product-search-item.styles.scss";
import { Store } from "../../Store";
import axios from "axios";
import { toast } from "react-toastify";

// const ProductSearchItem = (props) => {
function ProductSearchItem(props) {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    //copied from product-page.jsx add to cart button
    // console.log("const data on items: ", props);
    const itemExists = cartItems.find((x) => x._id === props._id); //checks if the product exists
    const quantity = itemExists ? itemExists.quantity + 1 : 1; // if item exists then it checks the quantity of the existing product and adds one
    const { data } = await axios.get(`/api/productsData/${item._id}`); // this stores the products info into a data object

    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock.");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
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
          disabled
          className="product-listing-cart-button-no-stock"
          pill
          theme="light"
        >
          519-966-0950
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
      <div className="search-item-cardbody">
        <div className="leftside-product-item">
          {/* <a> creates a link over the image that is clickable */}
          {/* The href is site directory + the slug from data */}
          <Link to={`/products/${props.slug}`}>
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
          <Badge className="product-card-badge" outline theme="success">
            NEW!
          </Badge>
          {fuelBadgeHandler(props.gasType)};
          <div className="product-card-overlay">
            <Link
              to={`/products/${props.slug}`}
              style={{ textDecoration: "None" }}
            >
              <h5 className="product-card-addinfo">
                {getDescriptinOverlay(props.shortDescription)}
              </h5>
            </Link>
          </div>
        </div>

        <div className="rightside-product-item">
          <Link to={`/products/${props.slug}`}>
            <p className="search-product-title">{props.name}</p>

            {/* <Rating
              m-auto
              style={{ margin: "0 10px" }}
              size={15}
              readonly="true"
              ratingValue={props.rating * 20}
              className="search-product-ratings"
            /> */}
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
