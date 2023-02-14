import axios from "axios";
import { useContext, useEffect, useReducer, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// import { Carousel } from "react-carousel-minimal";
// import { Carousel } from "react-responsive-carousel";

import { Carousel } from "react-carousel-minimal";

import "./product-page.styles.scss";
import {
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  FormInput,
  FormSelect,
  Button,
  Badge,
  Alert,
  Col,
  Row,
} from "shards-react";
import { Rating } from "react-simple-star-rating";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Collapsible from "react-collapsible";
import LoadingPageAnimation from "../../components/loading-page-animation/loading-page-animation.component";
import ErrorMessageBox from "../../components/error-message-box/error-message-box.component";
import { getError } from "../../util";
import { Store } from "../../Store";

const ACTIONS = {
  FETCH_REQUEST: "FETCH_REQUEST",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_FAILURE: "FETCH_FAILURE",
};

const reducer = (state, action) => {
  //-------- // originally from the products-search-page //----
  //state is the starting or default value of the state.  2nd param, action , is the action or function that changes the current state.
  switch (action.type) {
    case ACTIONS.FETCH_REQUEST:
      return { ...state, loading: true }; // ...state returns the previous state values. loading: true -> shows a loading message or animation

    case ACTIONS.FETCH_SUCCESS:
      return { ...state, loading: false, productData: action.payload }; // 3rd param -  productsData: action.payload -> loads the productsData variable/state with data coming from the 'action'

    case ACTIONS.FETCH_FAILURE:
      return { ...state, loading: false, error: action.payload }; //error returns the payload as a error message
  }
};

function displayVoltage(voltage) {
  if (voltage !== "") {
    return " and " + voltage + "V";
  } else {
    return "";
  }
}
function ProductPage() {
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  const [quantity, setQuantity] = useState(1);
  const changeQuantity = (event) => {
    setQuantity(event.target.quantity);
  };

  const navigate = useNavigate();
  const params = useParams(); //this enables you to grab the productsData params or variables
  const { slug } = params; //this gets the slug variable from productData

  ////////////////////////////////////   copied from products-page-component  //////////////////////////
  const [{ loading, error, productData }, dispatch] = useReducer(reducer, {
    //changed productsData to productData
    loading: true,
    error: "",
    productData: [],
  });
  // 1st param - {loading, error, products} -> created a set of states within an object
  // 2nd param, dispatch, is the different functions that will be passed through to manipulate the states in said object
  //useReducer 1st param - reducer -> reducer is the function created outside of the component.
  // useReducer 2nd param - {loading: true, error: '', products: [] -> these are the default or starting states of said object initialized in the first half

  // const [productsData, setProducts] = useState([]); // useState() returns an array that contains variable and a function that return values in that variable ; in this case products

  useEffect(() => {
    //this hook does something everytime something rerenders -> ex. use types something/ click someting
    const fetchData = async () => {
      //this is a async functinon that grabs products from backend

      dispatch({ type: ACTIONS.FETCH_REQUEST });

      try {
        const result = await axios.get(`/api/products/slug/${slug}`); //sends ajax request to the address specified- api

        dispatch({
          type: ACTIONS.FETCH_SUCCESS,
          payload: result.data,
        });
      } catch (err) {
        dispatch({
          type: ACTIONS.FETCH_FAIL,
          payload: getError(err),
        });
      }
    };

    // setProducts(result.data); // sets state for products by grabbing 'data' from backend with the 'result' function

    fetchData(); //now that we've define fetchData function we call it within the useEffect.
  }, [slug]); // 2nd parameter - after the , - specifies when to rerender/update it, in this case its when the user selects another product which changes the slug
  // therefore useEffect will run this function after the 1st render of this component

  const { state, dispatch: ctxDispatch } = useContext(Store); //dispatch: is renamed to ctxdispatch to distinguish it from the dispatch in the reducer
  const { cart } = state;

  const addToCartHandler = async () => {
    const itemExists = cart.cartItems.find((x) => x._id === productData._id); //checks if current product exists in the cart
    const quantity = itemExists ? itemExists.quantity + 1 : 1; // '?' if itemExists then increase quantity +1 ':' otherwise make quantity 1
    const { data } = await axios.get(`/api/products/${productData._id}`); //ajax request to pull data on this item.

    // console.log("const data on product page: ", data);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock. Call to order or reserve!");
      return;
    }

    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...productData, quantity }, //this is the item and 1 amount is added to cart
    });

    navigate("/cart");
  };

  const productFullName =
    productData.productBrand +
    " " +
    productData.productName +
    " " +
    productData.modelVariant +
    " " +
    productData.gasType +
    displayVoltage(productData.voltage);

  const cloudFrontDistributionDomain =
    "https://dem6epkjrbcxz.cloudfront.net/test-products-images-nobg/";
  const productImage = productData.images;
  const data1 = [
    { image: cloudFrontDistributionDomain + productImage },

    // { image: cloudFrontDistributionDomain + testImage },
    // { image: cloudFrontDistributionDomain + testImage },
    // { image: cloudFrontDistributionDomain + testImage },
    // { image: cloudFrontDistributionDomain + testImage },
    // { image: cloudFrontDistributionDomain + testImage },
    // { image: cloudFrontDistributionDomain + testImage },
    // { image: cloudFrontDistributionDomain + testImage },
  ];

  function infoAvailableCheck(dataField) {
    if (dataField.length > 0) {
      return <h7 className="product-page-collapsible-text">{dataField}</h7>;
    } else {
      return <h5 className="product-page-collapsible-headers">None</h5>;
    }
  }

  // const technicalInfoData = [{productData.Weight}]
  // const warrantyInfoData = [{{productData.component1}}, productData.duration1},]
  function renderWarrantyInfo(productData) {
    //maybe add info headers parameter
    const component1 = productData.component1;
    const component2 = productData.component2;
    const duration1 = productData.duration1;
    const duration2 = productData.duration2;
    const warrantyList = [];

    function notEmpty(item) {
      if (item > 0 || item != "" || item != "0") {
        return true;
      } else {
        return false;
      }
    }

    if (notEmpty(duration1)) {
      warrantyList.push({
        componentName: component1,
        componentDuration: duration1,
      });
    }

    if (notEmpty(duration2)) {
      warrantyList.push({
        componentName: component2,
        componentDuration: duration2,
      });
    }
    if (warrantyList.length > 0) {
      return warrantyList.map((component) => (
        <Col className="product-page-collapsible-column">
          <h5 className="product-page-collapsible-headers">
            {component.componentName}
          </h5>
          <br />
          <h7 className="product-page-collapsible-text">
            {component.componentDuration}
          </h7>
        </Col>
      ));
    } else {
      console.log(warrantyList);
    }
  }

  // ///////////////////////////////////////////////////////////////////////////////////////////////////
  function renderEnergyInfo(productData) {
    //maybe add info headers parameter
    const gasType = productData.gasType;
    const phase = productData.phase;
    const voltage = productData.voltage;
    const BTU = productData.BTU;
    const amps = productData.amps;

    const fuelInfoList = [];

    function notEmpty(item) {
      if (item > 0 || item != "") {
        return true;
      } else {
        return false;
      }
    }

    if (notEmpty(gasType)) {
      fuelInfoList.push({
        energyHeader: "Energy Type",
        energyDetail: gasType,
      });
    }

    if (notEmpty(phase)) {
      fuelInfoList.push({
        energyHeader: "Phase",
        energyDetail: phase,
      });
    }

    if (notEmpty(voltage)) {
      fuelInfoList.push({
        energyHeader: "Voltage",
        energyDetail: voltage,
      });
    }

    if (notEmpty(BTU)) {
      fuelInfoList.push({
        energyHeader: "BTU",
        energyDetail: BTU,
      });
    }

    if (notEmpty(amps)) {
      fuelInfoList.push({
        energyHeader: "Amps",
        energyDetail: amps,
      });
    }

    if (fuelInfoList.length > 0) {
      return fuelInfoList.map((energyInfo) => (
        <Col className="product-page-collapsible-column">
          <h5 className="product-page-collapsible-headers">
            {energyInfo.energyHeader}
          </h5>
          <br />
          <h7 className="product-page-collapsible-text">
            {energyInfo.energyDetail}
          </h7>
        </Col>
      ));
    } else {
      return (
        <Col className="product-page-collapsible-column">
          <h5 className="product-page-collapsible-headers">N/A</h5>
        </Col>
      );
    }
  }

  function callForPriceCheck(price) {
    if (price == 0.0) {
      return "Call For Price";
    } else {
      return "$ " + price;
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////   copied from products-page-component  //////////////////////////

  return loading ? (
    // <div>Please Wait, Loading...</div>
    <div style={{ margin: "auto", width: "0%" }}>
      <LoadingPageAnimation />
    </div>
  ) : error ? (
    <ErrorMessageBox variant="danger">{error}</ErrorMessageBox>
  ) : (
    <div className="product-page-container">
      <Helmet>
        <title>{productFullName}</title>
      </Helmet>

      <div className="product-page-product-display-container">
        <div className="product-page-carousel-container">
          <Carousel
            className="product-page-carousel"
            // data={`/assets/images/test-products-images-nobg/${productData.images}`}
            data={data1}
            time={200000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="grey"
            pauseIconSize="40px"
            slideBackgroundColor="#fff"
            slideImageFit="scale-down"
            thumbnails={true}
            thumbnailWidth="15%"
            style={{
              textAlign: "center",
              maxWidth: "800px",
              maxHeight: "500px",
              margin: "0px",
            }}
          />
        </div>

        <div className="item-info-card" id="purchase-card">
          <h1 id="product-page-title">{productFullName}</h1>

          <div id="product-page-ratings-container"></div>
          {productData.inStock === 0 ? (
            <Badge outline theme="danger" id="product-page-stock-indicator">
              Out of Stock
            </Badge>
          ) : (
            <Badge outline theme="success" id="product-page-stock-indicator">
              In Stock
            </Badge>
          )}

          <h5 id="variant-title">Variant</h5>
          <FormSelect size="sm" id="product-page-formselect">
            <option value="first">{productFullName}</option>
            {/* <option value="second">This is the second Variant.</option>
            <option value="third">This is the third variant.</option> */}
          </FormSelect>

          <div id="product-page-quantity-container">
            <InputGroup className="mb-2" id="product-page-quantity-inputgroup">
              <InputGroupAddon className="quantity-input" type="prepend">
                <InputGroupText className="quantity-input">
                  Quantity
                </InputGroupText>
              </InputGroupAddon>
              <FormInput
                type="number"
                className="quantity-input"
                value={quantity}
                onChange={changeQuantity}
                min="1"
                max="99"
              ></FormInput>
            </InputGroup>
          </div>

          {/* <Badge outline theme="light" id="product-page-price">
            $ {productData.price}
          </Badge> */}

          <h3 id="product-page-price">
            {callForPriceCheck(productData.onlinePrice[0].toFixed(2))}
          </h3>

          <Button
            id="product-page-cart-btn"
            theme="light"
            onClick={addToCartHandler}
          >
            <MdOutlineAddShoppingCart
              className="product-add-cart-icon"
              style={{ width: "2em" }}
            />
            Add To Cart
          </Button>
        </div>
      </div>
      {/* /////////////////////////////////////////////////////////////// */}
      <div className="product-page-technicals-container">
        <Collapsible
          className="product-page-collapsible"
          open="true"
          trigger={
            <Button
              className="product-page-collapsible-section"
              outline
              theme="light"
            >
              Product Description
            </Button>
          }
        >
          <div className="product-page-collapsible-info">
            {infoAvailableCheck(productData.shortDescription)}
          </div>
        </Collapsible>

        <Collapsible
          className="product-page-collapsible"
          trigger={
            <Button
              className="product-page-collapsible-section"
              outline
              theme="light"
            >
              Additional Information
            </Button>
          }
        >
          <div className="product-page-collapsible-info">
            <Row>
              <Col className="product-page-collapsible-column">
                <h5 className="product-page-collapsible-headers"></h5>
                <br />
                {infoAvailableCheck(productData.additionalInfo)}
              </Col>
            </Row>
          </div>
        </Collapsible>

        <Collapsible
          className="product-page-collapsible"
          // open="true"
          trigger={
            <Button
              className="product-page-collapsible-section"
              outline
              theme="light"
            >
              Technical Information
            </Button>
          }
        >
          <div className="product-page-collapsible-info">
            <Row>
              <Col className="product-page-collapsible-column">
                <h5 className="product-page-collapsible-headers">Weight</h5>
                <br />
                <h7 className="product-page-collapsible-text">
                  {productData.itemWeight}
                </h7>
              </Col>
              <Col className="product-page-collapsible-column">
                <h5 className="product-page-collapsible-headers">Dimensions</h5>
                <br />
                <h7 className="product-page-collapsible-text">
                  {productData.dimensions}
                </h7>
              </Col>

              <Col className="product-page-collapsible-column">
                <h5 className="product-page-collapsible-headers">Model</h5>
                <br />
                <h7 className="product-page-collapsible-text">
                  {productData.storeSKU}
                </h7>
              </Col>
            </Row>
          </div>
        </Collapsible>
        {/* </div> */}

        <Collapsible
          className="product-page-collapsible"
          trigger={
            <Button
              className="product-page-collapsible-section"
              outline
              theme="light"
            >
              Warranty
            </Button>
          }
        >
          <div className="product-page-collapsible-info">
            <Row>
              {renderWarrantyInfo(productData)}
              <Col className="product-page-collapsible-column">
                <h5 className="product-page-collapsible-headers">
                  Parts & Labour
                </h5>
                <br />
                <h7 className="product-page-collapsible-text">
                  {productData.partsAndLabour && productData.partsAndLabour > 0
                    ? productData.partsAndLabour + " Months"
                    : "None"}
                </h7>
              </Col>
              <Col className="product-page-collapsible-column">
                <h5 className="product-page-collapsible-headers">
                  General Warranty
                </h5>
                <br />
                <h7 className="product-page-collapsible-text">
                  {productData.general} Months
                </h7>
              </Col>
            </Row>
          </div>
        </Collapsible>

        <Collapsible
          className="product-page-collapsible"
          trigger={
            <Button
              className="product-page-collapsible-section"
              outline
              theme="light"
            >
              Energy Information
            </Button>
          }
        >
          <div className="product-page-collapsible-info">
            <Row>{renderEnergyInfo(productData)}</Row>
          </div>
        </Collapsible>
      </div>
    </div>
  );
}

export default ProductPage;
