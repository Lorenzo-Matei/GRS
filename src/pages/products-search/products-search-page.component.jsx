import { useState, useEffect, useRef, useReducer, useCallback } from "react";
import { CSSTransition } from "react-transition-group";

import { Button, Card, CardBody, Col, Row } from "shards-react";
import { BsFilterCircle } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import LoadingPageAnimation from "../../components/loading-page-animation/loading-page-animation.component";

import ReactPaginate from "react-paginate";

import ProductSearchFilters from "../../components/product-search-filters/product-search-filters.component";
import ProductSearchItem from "../../components/product-search-item/product-search-item.component";

import "./products-search-page.styles.scss";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import ErrorMessageBox from "../../components/error-message-box/error-message-box.component";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getError } from "../../util";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import TreeMenu from "react-simple-tree-menu";

function getBrandLogo(cloudFront, brand) {
  brand = brand.toLowerCase();
  brand = brand.replaceAll(" ", "-");

  const logoURL = cloudFront + brand + ".png";

  return logoURL;
}

const ACTIONS = {
  FETCH_REQUEST: "FETCH_REQUEST",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_FAILURE: "FETCH_FAILURE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };

    case "FETCH_SUCCESS":
      return {
        ...state,
        productsData: action.payload.products,
        page: action.payload.page,
        pages: action.payload.pages,
        countProducts: action.payload.countProducts,
        loading: false,
      };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

const priceFiltersDict = [
  {
    name: "$1 to $50",
    value: "1-50",
  },
  {
    name: "$51 to $100",
    value: "51-100",
  },
  {
    name: "$101 to $200",
    value: "101-200",
  },
  {
    name: "$201 to $400",
    value: "201-400",
  },
  {
    name: "$401 to $800",
    value: "401-800",
  },
  {
    name: "$801 to $1600",
    value: "801-1600",
  },
  {
    name: "$1601 to $2500",
    value: "1601-2500",
  },
  {
    name: "$2501 to $4000",
    value: "2501-4000",
  },
  {
    name: "$4001 to $6000",
    value: "4001-6000",
  },
  {
    name: "$6001 to $8000",
    value: "6001-8000",
  },
  {
    name: "$8000+",
    value: "8000-100000",
  },
];

const ratingsFiltersDict = [
  {
    name: "4+ Stars",
    rating: 4,
  },

  {
    name: "3+ Stars",
    rating: 3,
  },

  {
    name: "2+ Stars",
    rating: 2,
  },

  {
    name: "1+ Stars",
    rating: 1,
  },
];

const ProductSearchPage = () => {
  // const[filterMenuWidth, setFilterMenuWidth] = useState('3px');
  const [showFilterMenu, setShowFilterMenu] = useState(false); // T/F if filter is open
  const [filterMenuWidth, setFilterMenuWidth] = useState(0);
  const searchFilterRef = useRef(null);
  {
    window.scrollTo(0, 200);
  }

  ////////////////////////////////////////////////////////////////
  // new filters code
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search); // if url is /search/?category=shirts then searches for shirts
  const category = searchParams.get("category") || "all"; //returns items in that category, otherwise return null or all items.
  const query = searchParams.get("query") || "all";
  const price = searchParams.get("price") || "all";
  const rating = searchParams.get("rating") || "all";
  const order = searchParams.get("order") || "newest";
  const page = searchParams.get("page") || 1;
  const brands = searchParams.get("brands") || "all";
  const gasType = searchParams.get("gasType") || "all";
  const phase = searchParams.get("phase") || "all";
  const voltage = searchParams.get("voltage") || "all";

  const location = useLocation();
  const locationPath = location.pathname;
  const locationCountry = locationPath.split("/")[1];

  const subCategory = searchParams.get("subCategory") || "all";
  const microCategory = searchParams.get("microCategory") || "all";

  const [{ loading, error, productsData, pages, countProducts }, dispatch] =
    useReducer(reducer, {
      // default values are:
      loading: true,
      error: "",
      // productsData: [],
    });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          // the encoder addresses the '&' being used as an escape character and then resulting in half the string missing
          `/api/products/search?page=${page}&query=${query}&category=${encodeURIComponent(
            category
          )}&subCategory=${encodeURIComponent(
            subCategory
          )}&microCategory=${encodeURIComponent(
            microCategory
          )}&price=${price}&brands=${brands}&gasType=${gasType}&phase=${phase}&voltage=${voltage}&rating=${rating}&order=${order}`
        );
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({
          type: "FETCH_FAIL",
          payload: getError(error),
        });
      }
    };
    fetchData();
  }, [
    category,
    subCategory,
    microCategory,
    error,
    order,
    page,
    price,
    brands,
    gasType,
    phase,
    voltage,
    query,
    rating,
  ]);

  //tree menu categories getter below
  const [categories2, setCategories2] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories2`);
        setCategories2(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, [dispatch]);

  const [brandsList, setBrandsList] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const { data } = await axios.get(`/api/products/brands`);
        setBrandsList(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchBrands();
  }, [dispatch]);

  const [gastTypeList, setGasTypeList] = useState([]);

  useEffect(() => {
    const fetchGasType = async () => {
      try {
        const { data } = await axios.get(`/api/products/gasType`);
        setGasTypeList(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchGasType();
  }, [dispatch]);

  const [phaseList, setPhaseList] = useState([]);

  useEffect(() => {
    const fetchPhases = async () => {
      try {
        const { data } = await axios.get(`/api/products/phase`);
        setPhaseList(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchPhases();
  }, [dispatch]);

  const [voltageList, setVoltageList] = useState([]);

  useEffect(() => {
    const fetchVoltages = async () => {
      try {
        const { data } = await axios.get(`/api/products/voltage`);
        setVoltageList(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchVoltages();
  }, [dispatch]);

  function onloadTooltip() {}

  useEffect(() => {});

  const getFilterURL = (filter) => {
    const filterPage = filter.page || page;
    const filterCategory = filter.category || category;
    const filterQuery = filter.query || query;
    const filterRating = filter.rating || rating;
    const filterPrice = filter.price || price;
    const sortOrder = filter.order || order;
    const filterBrands = filter.brands || brands;
    const filterGasType = filter.gasType || gasType;
    const filterPhase = filter.phase || phase;
    const filterVoltage = filter.voltage || voltage;

    const filterSubCategory = filter.subCategory || subCategory;
    const filterMicroCategory = filter.microCategory || microCategory;

    return `/${locationCountry}/search?category=${encodeURIComponent(
      filterCategory
    )}&subCategory=${encodeURIComponent(
      filterSubCategory
    )}&microCategory=${encodeURIComponent(
      filterMicroCategory
    )}&query=${filterQuery}&price=${filterPrice}&brands=${filterBrands}&gasType=${filterGasType}&phase=${filterPhase}&voltage=${filterVoltage}&rating=${filterRating}&order=${sortOrder}&page=${filterPage}`;
  };

  ///////////////////////////////////////////////////////////////////
  // ** gotta get props through to filters component
  const [currentPageNum, setCurrentPageNum] = useState(page);
  function handlePageClick({ selected: selectedPage }) {
    console.log("selected num: " + selectedPage);
    navigate(
      getFilterURL({
        page: selectedPage + 1,
      })
    );
    setCurrentPageNum(page);
    window.scrollTo(0, 200);
  }

  function displayVoltage(voltage, gas) {
    if (voltage !== "" && voltage !== null) {
      return " (" + voltage + "V)";
    } else {
      return "";
    }
  }

  function getCategories(directory) {
    const categorySplitList = directory.split("/", 3);
    const listLength = categorySplitList.length;
    var category = "all";
    var subCategory = "all";
    var microCategory = "all";
    var params = {};

    switch (listLength) {
      case 1:
        if (categorySplitList[0] === "all") {
          params = { category, subCategory, microCategory };

          return params;
        } else {
          category = categorySplitList[0];

          params = { category, subCategory, microCategory };

          return params;
        }

      case 2:
        category = categorySplitList[0];
        subCategory = categorySplitList[1];

        params = { category, subCategory, microCategory };

        return params;

      case 3:
        category = categorySplitList[0];
        subCategory = categorySplitList[1];
        microCategory = categorySplitList[2];
        params = { category, subCategory, microCategory };

        return params;
    }
  }

  function getCountryPrice(priceArray) {
    const USA = "usa";
    const CAN = "can";
    if (locationCountry.toLowerCase == CAN) {
      return priceArray[0];
    } else {
      return priceArray[1];
    }
    // product.onlinePrice[0]
  }

  // const pageCount = Math.ceil(productsData.length / PER_PAGE);
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
              onClick={() => {
                setShowFilterMenu(!showFilterMenu);
                // filterHelpNotify();
              }}
              pill
              theme="primary"
              className="filter-open-button"
              id="filter-open-button"
            >
              <BsFilterCircle size="25px" />
            </Button>
            <Tooltip
              id="filter-tooltip"
              anchorId="filter-open-button"
              variant="info"
              place="right"
              content="Click me to filter products!"
              events={["hover"]}
              delayHide={1000}
            />

            <div
              className="search-filter-container-test-2"
              style={{ width: filterMenuWidth }}
              ref={searchFilterRef}
            >
              <CSSTransition
                in={showFilterMenu}
                timeout={0}
                classNames="filter-menu"
                // unmountOnExit
                onEnter={() => setFilterMenuWidth(300)}
                onExited={() => setFilterMenuWidth(0)}
              >
                {/* <ProductSearchFilters /> */}
                <Card className="search-filter-card">
                  <CardBody className="search-filter-cardbody">
                    <div>
                      <Row>
                        <Col md={12}>
                          <div>
                            {countProducts === 0 ? (
                              <h5 id="filter-selection-statements">
                                No Results
                              </h5>
                            ) : (
                              <h5 id="filter-selection-statements">
                                {countProducts} Results
                              </h5>
                            )}
                            {query !== "all" && (
                              <h5 id="filter-selection-statements">
                                Searched: "{query}"
                              </h5>
                            )}
                            {category !== "all" && (
                              <h5 id="filter-selection-statements">
                                Category: {category}
                              </h5>
                            )}
                            {subCategory !== "all" && (
                              <h5 id="filter-selection-statements">
                                Subcategory: {subCategory}
                              </h5>
                            )}
                            {microCategory !== "all" && (
                              <h5 id="filter-selection-statements">
                                `{">"}` {microCategory}
                              </h5>
                            )}
                            {price !== "all" && (
                              <h5 id="filter-selection-statements">
                                Price: {price}
                              </h5>
                            )}
                            {brands !== "all" && (
                              <h5 id="filter-selection-statements">
                                Brands: {brands}
                              </h5>
                            )}
                            {gasType !== "all" && (
                              <h5 id="filter-selection-statements">
                                Gas Type: {gasType}
                              </h5>
                            )}
                            {phase !== "all" && (
                              <h5 id="filter-selection-statements">
                                Phase: {phase}
                              </h5>
                            )}
                            {voltage !== "all" && (
                              <h5 id="filter-selection-statements">
                                Voltage: {voltage}
                              </h5>
                            )}

                            {query !== "all" ||
                            category !== "all" ||
                            brands !== "all" ||
                            gasType !== "all" ||
                            phase !== "all" ||
                            voltage !== "all" ||
                            // rating !== 'all' ||
                            price !== "all" ? (
                              <div>
                                <Button
                                  className="reset-filters-button"
                                  outline
                                  theme="danger"
                                  onClick={() => navigate("/search")}
                                >
                                  Reset
                                </Button>
                                <hr className="hr" />
                              </div>
                            ) : null}
                            {/* ^ this will remove all filters and return to search screen */}
                          </div>
                          <h5 id="filter-title">Sort By:</h5>
                          <select
                            className="filter-order-selection"
                            value={order}
                            onChange={(click) => {
                              navigate(
                                getFilterURL({
                                  order: click.target.value,
                                  page: 1,
                                })
                              );
                            }}
                          >
                            <option value="relevant">Most Relevant</option>
                            <option value="newest">Newest Arrivals</option>
                            <option value="ascendingPrice">
                              Price: Low to High
                            </option>
                            <option value="descendingPrice">
                              Price: High to Low
                            </option>
                            {/* <option value="topRated">Highest Reviews</option> */}
                          </select>
                          <h5 id="filter-title">Category</h5>
                          <div>
                            <ul>
                              <li>
                                <TreeMenu
                                  data={categories2}
                                  onClickItem={({ key, label, ...props }) => {
                                    const selectionData = getCategories(key);

                                    navigate(
                                      getFilterURL({
                                        category: selectionData.category,
                                        subCategory: selectionData.subCategory,
                                        microCategory:
                                          selectionData.microCategory,
                                        page: 1,
                                      })
                                    );
                                  }}
                                ></TreeMenu>
                              </li>
                            </ul>
                          </div>
                          <h5 id="filter-title">Brands</h5>
                          <div>
                            <ul>
                              <li className="filter-item">
                                <Link
                                  className={
                                    "all" === brands
                                      ? "font-weight-bold"
                                      : "filter-item"
                                  }
                                  to={getFilterURL({ brands: "all", page: 1 })}
                                >
                                  Any
                                </Link>
                              </li>

                              {brandsList.map((brand) => (
                                <li key={brand} className="filter-item">
                                  <Link
                                    to={getFilterURL({
                                      brands: brand,
                                      page: 1,
                                    })}
                                    className={
                                      brand === brands
                                        ? "font-weight-bold"
                                        : "filter-item"
                                    }
                                  >
                                    {brand}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <h5 id="filter-title">Gas Type</h5>
                          <div>
                            <ul>
                              <li>
                                <Link
                                  className={
                                    "all" === gasType
                                      ? "font-weight-bold"
                                      : "filter-item"
                                  }
                                  to={getFilterURL({ gasType: "all", page: 1 })}
                                >
                                  Any
                                </Link>
                              </li>

                              {gastTypeList.map((type) => (
                                <li key={type}>
                                  <Link
                                    to={getFilterURL({
                                      gasType: type,
                                      page: 1,
                                    })}
                                    className={
                                      type === gasType
                                        ? "font-weight-bold"
                                        : "filter-item"
                                    }
                                  >
                                    {type}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <h5 id="filter-title">Phase</h5>
                          <div>
                            <ul>
                              <li>
                                <Link
                                  className={
                                    "all" === phase
                                      ? "font-weight-bold"
                                      : "filter-item"
                                  }
                                  to={getFilterURL({ phase: "all", page: 1 })}
                                >
                                  Any
                                </Link>
                              </li>

                              {phaseList.map((phaseItem) => (
                                <li key={phaseItem}>
                                  <Link
                                    to={getFilterURL({
                                      phase: phaseItem,
                                      page: 1,
                                    })}
                                    className={
                                      phaseItem === phase
                                        ? "font-weight-bold"
                                        : "filter-item"
                                    }
                                  >
                                    {phaseItem}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <h5 id="filter-title">Voltage</h5>
                          <div>
                            <ul>
                              <li>
                                <Link
                                  className={
                                    "all" === voltage
                                      ? "font-weight-bold"
                                      : "filter-item"
                                  }
                                  to={getFilterURL({ voltage: "all", page: 1 })}
                                >
                                  Any
                                </Link>
                              </li>

                              {voltageList.map((voltageItem) => (
                                <li key={voltageItem}>
                                  <Link
                                    to={getFilterURL({
                                      voltage: voltageItem,
                                      page: 1,
                                    })}
                                    className={
                                      voltageItem === voltage
                                        ? "font-weight-bold"
                                        : "filter-item"
                                    }
                                  >
                                    {voltageItem}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <h5 id="filter-title">Price</h5>
                          <div>
                            <ul>
                              <li>
                                <Link
                                  className={
                                    "all" === price
                                      ? "font-weight-bold"
                                      : "filter-item"
                                  }
                                  to={getFilterURL({ price: "all", page: 1 })}
                                >
                                  Any
                                </Link>
                              </li>

                              {priceFiltersDict.map((priceItem) => (
                                <li key={price.value}>
                                  <Link
                                    to={getFilterURL({
                                      price: priceItem.value,
                                      page: 1,
                                    })}
                                    className={
                                      priceItem.value === price
                                        ? "font-weight-bold"
                                        : "filter-item"
                                    }
                                  >
                                    {priceItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </Col>
                        <Col md={9}>
                          {loading ? (
                            <LoadingPageAnimation></LoadingPageAnimation>
                          ) : error ? (
                            <ErrorMessageBox variant="danger">
                              {error}
                            </ErrorMessageBox>
                          ) : (
                            <>
                              {/* {productsData.length === 0 && (
                                <ErrorMessageBox>No Products Found</ErrorMessageBox>
                              )} */}
                            </>
                          )}
                        </Col>
                      </Row>
                    </div>
                  </CardBody>
                </Card>
              </CSSTransition>
            </div>
          </div>

          <div className="search-results-container">
            {loading ? (
              <LoadingPageAnimation />
            ) : error ? (
              <ErrorMessageBox variant="danger">{error}</ErrorMessageBox> // if there is an 'error' then show the message
            ) : (
              <>
                {productsData.length === 0 && (
                  <ErrorMessageBox>No Products Found</ErrorMessageBox>
                )}

                {productsData.map((product) => (
                  <ProductSearchItem
                    country={locationCountry}
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
                      displayVoltage(product.voltage, product.gasType)
                    }
                    brand={product.productBrand}
                    brandLogo={getBrandLogo(
                      cloudFrontDistributionLogosDomain,
                      product.productBrand
                    )}
                    image={
                      cloudFrontDistributionInventoryDomain + product.images[0]
                    }
                    price={getCountryPrice(product.onlinePrice)}
                    gasType={product.gasType}
                    countInStock={product.inStock}
                    additionalInfo={product.additionalInfo}
                    shortDescription={product.shortDescription}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="search-page-pagination-container">
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={pages}
          pageRangeDisplayed={1}
          pageClassName={"react-paginate-page-nums"}
          activeLinkClassName={"react-paginate-page-active"}
          onPageChange={handlePageClick}
          initialPage={currentPageNum - 1}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          nextClassName={"pagination__next"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </div>
    </div>
  );
};

export default ProductSearchPage;

// <ProductSearchItem />
// <ProductSearchItem />
