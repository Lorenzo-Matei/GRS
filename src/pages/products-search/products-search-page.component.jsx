import { useState, useEffect, useRef, useReducer } from "react";
import { CSSTransition } from "react-transition-group";

import { Button } from "shards-react";
import { BsFilterCircle } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import LoadingPageAnimation from "../../components/loading-page-animation/loading-page-animation.component";
// import ReactPaginate from "react-paginate";
// import "bootstrap/dist/css/bootstrap.css";
// import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import ReactPaginate from "react-paginate";

import ProductSearchFilters from "../../components/product-search-filters/product-search-filters.component";
import ProductSearchItem from "../../components/product-search-item/product-search-item.component";
// import productsData from "../../productsData"; // dont use anymore because of the useEffect hook that fetchs it

import "./products-search-page.styles.scss";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import ErrorMessageBox from "../../components/error-message-box/error-message-box.component";
import { useLocation, useNavigate } from "react-router-dom";
import { getError } from "../../util";
import { toast } from "react-toastify";

function getBrandLogo(cloudFront, brand) {
  brand = brand.toLowerCase();

  switch (brand) {
    case "blodgett":
      return cloudFront + "blodgett.png";

    case "ecomax":
      return cloudFront + "ecomax.png";

    case "hobart":
      return cloudFront + "hobart.png";

    case "vulcan":
      return cloudFront + "vulcan.png";

    case "winco":
      return cloudFront + "winco.png";

    case "wusthof":
      return "/assets/images/logos/wusthof.png";
  }
}
const changeIcon = (icon) => icon.classList.toggle(<IoIosCloseCircleOutline />);

const ACTIONS = {
  FETCH_REQUEST: "FETCH_REQUEST",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_FAILURE: "FETCH_FAILURE",
};

const reducer = (state, action) => {
  //state is the starting or default value of the state.  2nd param, action , is the action or function that changes the current state.
  switch (action.type) {
    case ACTIONS.FETCH_REQUEST:
      return { ...state, loading: true }; // ...state returns the previous state values. loading: true -> shows a loading message or animation

    case ACTIONS.FETCH_SUCCESS:
      return { ...state, loading: false, productsData: action.payload }; // 3rd param -  productsData: action.payload -> loads the productsData variable/state with data coming from the 'action'

    case ACTIONS.FETCH_FAILURE:
      return { ...state, loading: false, error: action.payload }; //error returns the payload as a error message
  }
};

//disabled as this is used for filters
// const searchReducer = (state, action) => {
//   switch (action.type) {
//     case "FETCH_REQUEST":
//       return { ...state, loading: true };

//     case "FETCH_SUCCESS":
//       return {
//         ...state,
//         products: action.payload.products,
//         page: action.payload.page,
//         pages: action.payload.pages,
//         countProducts: action.payload.countProducts,
//         loading: false,
//       };
//     case "FETCH_FAIL":
//       return { ...state, loading: false, error: action.payload };

//     default:
//       return state;
//   }
// };

function getFiles() {
  // const files = [];
  const files = process.env.PUBLIC_URL + "/products";
  console.log("files:" + files);
  // return files;
}

const ProductSearchPage = () => {
  // const[filterMenuWidth, setFilterMenuWidth] = useState('3px');
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [filterMenuWidth, setFilterMenuWidth] = useState(0);
  const searchFilterRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(0);
  const PER_PAGE = 16;
  const offset = currentPage * PER_PAGE;
  // const pageCount = Math.ceil(productsData.length / PER_PAGE);

  // const currentPageData = productsData
  //   .slice(offset, offset + PER_PAGE)
  //   .map(({ thumburl }) => <img src={thumburl} />);
  // const pageCount = Math.ceil(data.length / PER_PAGE);

  // const { state } = useContext(Store); //copied from product-page and removed dispatch as changes wont occur here
  // const { cart } = state;

  //hooks
  const [{ loading, error, productsData }, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
    productsData: [],
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
        //old
        const result = await axios.get("/api/products"); //sends ajax request to the address specified- api
        // this is address used in server.js
        // const result = await axios.get("/api/products"); //sends ajax request to the address specified- api

        dispatch({
          type: ACTIONS.FETCH_SUCCESS,
          payload: result.data,
        });
        window.scrollTo(0, 0);
      } catch (err) {
        dispatch({
          type: ACTIONS.FETCH_FAIL,
          payload: err.message,
        });
      }
    };
    fetchData();
  }, []);
  // this secion is used for filters
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `/api/products/search?page=${page}&query=${query}&category=${category}&subCategory=${subCategory}&microCategory=${microCategory}&brand=${brand}&gasType=${gasType}&price=${price}&rating=${rating}&order=${order}`
  //       );
  //     } catch (err) {
  //       dispatch({
  //         type: "FETCH_FAIL",
  //         payload: getError(error),
  //       });
  //     }
  //   };
  //   fetchData();
  // }, [
  //   page,
  //   query,
  //   category,
  //   subCategory,
  //   microCategory,
  //   brand,
  //   gasType,
  //   price,
  //   rating,
  //   order,
  // ]);

  // const [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const { data } = await axios.get(`/api/products/categories`);
  //       setCategories(data);
  //     } catch (err) {
  //       toast.error(getError(err));
  //     }
  //   };
  //   fetchCategories();
  // }, [dispatch]);

  // const getFilterUrl = (filter) => {
  //   const filterPage = filter.page || page;
  //   const filterQuery = filter.query || query;
  //   const filterCategory = filter.category || category;
  //   const filterSubCategory = filter.subCategory || subCategory;
  //   const filterBrand = filter.brand || brand;
  //   const filterGasType = filter.gasType || gasType;
  //   const filterRating = filter.rating || rating;
  //   const filterPrice = filter.price || price;
  //   const sortOrder = filter.order || order;

  //   return `/search?category=${filterCategory}&query=${filterQuery}&price=${filterPrice}&rating=${filterRating}&order=${sortOrder}&page=${filterPage}`;
  // };

  ///////////////////////////////////////////  old useEffect /////////////////////////////
  // useEffect(() => {
  //   //this hook does something everytime something rerenders -> ex. use types something/ click someting
  //   const fetchData = async () => {
  //     //this is a async functinon that grabs products from backend

  //     dispatch({ type: ACTIONS.FETCH_REQUEST });

  //     try {
  //       //old
  //       const result = await axios.get("/api/products"); //sends ajax request to the address specified- api
  //       // this is address used in server.js
  //       // const result = await axios.get("/api/products"); //sends ajax request to the address specified- api

  //       dispatch({
  //         type: ACTIONS.FETCH_SUCCESS,
  //         payload: result.data,
  //       });
  //     } catch (err) {
  //       dispatch({
  //         type: ACTIONS.FETCH_FAIL,
  //         payload: err.message,
  //       });
  //     }
  //   };

  //   // setProducts(result.data); // sets state for products by grabbing 'data' from backend with the 'result' function

  //   fetchData(); //now that we've define fetchData function we call it within the useEffect.
  // }, []); // 2nd parameter - after the , - specifies when to to do it, in this case its after the first render and only do it once.
  // // therefore useEffect will run this function after the 1st render of this component
  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  // const navigate = useNavigate();
  // const { search } = useLocation();
  // const sp = new URLSearchParams(search); // search?category='insertCategoryHere'

  // const query = sp.get("query") || "all";

  // const category = sp.get("productCategory") || "all";
  // const subCategory = sp.get("productSubCategory") || "all";
  // const microCategory = sp.get("productMicroCategory") || "all";

  // const gasType = sp.get("gasType") || "all";
  // const brand = sp.get("productBrand") || "all";
  // const price = sp.get("price") || "all";
  // const rating = sp.get("rating") || "all";
  // const order = sp.get("order") || "all";
  // const page = sp.get("page") || "1";

  // const [{ loading, error, productsData, pages, countProducts }, dispatch] =
  //   useReducer(searchReducer, {
  //     loading: true,
  //     error: "",
  //   });

  // ** gotta get props through to filters component
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
    window.scrollTo(0, 200);
  }

  function displayVoltage(voltage) {
    if (voltage !== "") {
      return " and " + voltage + "V";
    } else {
      return "";
    }
  }

  const pageCount = Math.ceil(productsData.length / PER_PAGE);
  const cloudFrontDistributionInventoryDomain =
    "https://dem6epkjrbcxz.cloudfront.net/test-products-images-nobg/";

  const cloudFrontDistributionLogosDomain =
    "https://dem6epkjrbcxz.cloudfront.net/logos/";

  return (
    <div className="product-search-container">
      <Helmet>
        <title>GRS Products</title>
      </Helmet>

      <div className="product-search-card">
        <div className="product-search-cardbody">
          <div className="search-filter-container-test">
            <Button
              onClick={() => setShowFilterMenu(!showFilterMenu)}
              pill
              theme="primary"
              className="filter-open-button"
            >
              <BsFilterCircle size="25px" />
            </Button>

            <div
              className="search-filter-container-test-2"
              style={{ width: filterMenuWidth }}
              ref={searchFilterRef}
            >
              <CSSTransition
                in={showFilterMenu}
                timeout={0}
                classNames="filter-menu"
                unmountOnExit
                onEnter={() => setFilterMenuWidth(300)}
                onExited={() => setFilterMenuWidth(0)}
              >
                <ProductSearchFilters />
              </CSSTransition>
            </div>
          </div>

          <div className="search-results-container">
            {loading ? (
              <LoadingPageAnimation />
            ) : error ? (
              <ErrorMessageBox variant="danger">{error}</ErrorMessageBox> // if there is an 'error' then show the message
            ) : (
              (getFiles(),
              // otherwise show products
              productsData.slice(offset, offset + PER_PAGE).map((product) => (
                // productsData.slice(0, 3).map((product) => (
                <ProductSearchItem
                  key={product.slug}
                  _id={product._id}
                  slug={product.slug}
                  name={
                    product.productBrand +
                    " " +
                    product.productName +
                    " " +
                    product.modelVariant +
                    " " +
                    product.gasType +
                    displayVoltage(product.voltage)
                  }
                  brand={product.productBrand}
                  brandLogo={getBrandLogo(
                    cloudFrontDistributionLogosDomain,
                    product.productBrand
                  )}
                  // image={product.image}
                  // image={`/assets/images/test-products-images-nobg/${product.images[0]}`}
                  image={
                    cloudFrontDistributionInventoryDomain + product.images[0]
                  }
                  // rating={product.rating}
                  price={product.onlinePrice[0]}
                  gasType={product.gasType}
                  countInStock={product.inStock}
                />
              )))
            )}
          </div>
        </div>
      </div>
      <div className="search-page-pagination-container">
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
        {/* <ReactPaginate
          className="search-page-pagination-component"
          id="container"
          breakLabel="..."
          nextLabel="next >"
          // onPageChange=
          pageRangeDisplayed={5}
          pageCount={10}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        /> */}
      </div>
    </div>
  );
};

export default ProductSearchPage;

// <ProductSearchItem />
// <ProductSearchItem />
