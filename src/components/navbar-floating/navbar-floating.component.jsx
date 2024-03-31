import React, { useContext, useEffect, useState } from "react"; // useState is a Hook

import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Collapse,
  Card,
  Badge,
  DropdownMenu,
  Dropdown,
  DropdownToggle,
  DropdownItem,
} from "shards-react";

import {
  FaHome,
  FaShoppingBag,
  FaVideo,
  FaPhoneVolume,
  FaSearch,
  FaShoppingCart,
  FaUserAstronaut,
} from "react-icons/fa";

import { IoStorefrontSharp } from "react-icons/io5";

import "./navbar-floating.styles.scss";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import ExpandingSearchBox from "../expanding-search-box/expanding-search-box.component";
import NewArrivalItem from "../new-arrivals/new-arrivals-item.component";
import NavItemDropdown from "../NavItemDropdown/nav-item-dropdown.component.jsx";
import NavDropdownMenu from "../nav-dropdown-menu/nav-dropdown-menu.component.jsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Store } from "../../Store";
import NavDropdownUser from "../nav-dropdown-user/nav-dropdown-user.component";
import NavItemDropdownUser from "../nav-item-dropdown-user/nav-item-dropdown-user.component";
import axios from "axios";
import CountrySelection from "../country-selection/country-selection.component";
import { param } from "jquery";
import { timeout } from "workbox-core/_private";
const cloudFrontDistributionLogosDomain =
  "https://dem6epkjrbcxz.cloudfront.net/logos/";
const NavBarFloating = ({ userCountry }) => {
  const { state } = useContext(Store); //copied from product-page and removed dispatch as changes wont occur here
  const { cart, userInfo } = state;
  const navigate = useNavigate();
  const location = useLocation();

  // const toggleDropdown = toggleDropdown.bind();
  // const toggleNavbar = toggleNavbar.bind();

  const [dropdownOpen, setDropDownOpen] = useState(false);
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [categories, setCategories] = useState({});
  const [country, setCountry] = useState("CAN");
  const [countryChangePromptOpen, setCountryChangePromptOpen] = useState(false);

  const [changeSiteBool, setChangeSiteBool] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories2`);
        setCategories(data);

        // });
      } catch (err) {
        console.log("error message: ", err);
        // Toast.error(getError(err));
      }
    };

    fetchCategories();
  }, []);

  const [ipCountry, setipCountry] = useState("");

  /// country/region related functions

  // useEffect(() => {
  //   const fetchCountry = async () => {
  //     try {
  //       const response = await axios.get("http://ip-api.com/json");
  //       setipCountry((prevCountry) => (prevCountry = response.data.country));
  //       // console.log("ip country: ", ipCountry);
  //     } catch (error) {
  //       console.error("Error fetching country :", error);
  //     }
  //   };

  //   fetchCountry();
  //   redirectSiteToCountry();
  // }, []);

  // useEffect(() => {
  //   console.log("ip country: ", ipCountry);
  // }, [ipCountry]);

  // function redirectSiteToCountry() {
  //   const urlPath = location.pathname;
  //   const currentUrlCountry = urlPath.split("/");
  //   var redirectURL = "";

  //   if (ipCountry.toLowerCase().includes("canada")) {
  //     currentUrlCountry[1] = "CAN";
  //   } else {
  //     currentUrlCountry[1] = "USA";
  //   }

  //   redirectURL = currentUrlCountry.join("/");
  //   console.log("redirect URL: ", redirectURL);

  //   navigate(redirectURL);
  // }

  function toggleDropDown() {
    setDropDownOpen(!dropdownOpen);
  }

  function toggleNavbar() {
    setCollapseOpen(!collapseOpen);
  }

  const [openProfileDropdown, setOpenProfileDropdown] = useState();
  const toggleProfileDropDown = () => {
    setOpenProfileDropdown((open) => !open);
  };

  function changeCountry() {
    getCountryParam() === "USA" ? navigate(`/CAN`) : navigate(`/USA`);
    // navigate(`/${country}`);
    // console.log("country selected: ", country);
  }

  function changeCountryIcon() {
    if (getCountryParam() === "USA") {
      return <span class="fi fi-ca" id="country-flag" />;
    } else {
      return <span class="fi fi-us" id="country-flag" />;
    }
  }

  function getCountryIcon() {
    if (getCountryParam() === "USA") {
      return <span class="fi fi-us" id="country-flag" />;
    } else {
      return <span class="fi fi-ca" id="country-flag" />;
    }
  }

  function getCountryParam() {
    const country = location.pathname.split("/")[1];

    return country;
  }

  // function CountrySwitchPrompt() {
  //   if (countryChangePromptOpen) {
  //     // if the state for countryChangePromptOpen changes to true by click the site btn
  //     return (
  //       <CountrySelection
  //         getChangeSiteResponse={getChangeSiteResponse}
  //         country={country}
  //       />
  //     );
  //   }

  //   // {countryChangePromptOpen && <CountrySelection country={country} />}
  // }

  return (
    <div className="navbar-div">
      <div className="logo-img-container">
        <img
          src={cloudFrontDistributionLogosDomain + "grs_logo.png"}
          className="m-auto logo-img"
        />
      </div>

      <Card className="m-auto navbar-card">
        <Navbar className="m-auto" type="dark" expand="md" sticky="top">
          <NavbarToggler onClick={toggleNavbar} />

          <Collapse open={collapseOpen} navbar>
            <Nav navbar>
              <NavItem>
                <Link to={`/${userCountry}/home`}>
                  <button
                    type="button"
                    class="btn btn-outline-light btn-pill nav-btn"
                  >
                    <FaHome className="button-icon" />
                    Home
                  </button>
                </Link>
              </NavItem>

              <NavItemDropdown>
                <NavDropdownMenu
                  countryProp={getCountryParam()}
                  categoriesProps={categories}
                />
                {/* creates a variable called categoriesProps and passes axios categories data */}
              </NavItemDropdown>

              <NavItem>
                <Link to={`/${userCountry}/showroom`}>
                  <button
                    type="button"
                    class="btn btn-outline-light btn-pill nav-btn"
                  >
                    <FaVideo className="button-icon" />
                    Showroom
                  </button>
                </Link>
              </NavItem>

              <NavItem>
                <Link to={`/${getCountryParam()}/contact-us`}>
                  <button
                    type="button"
                    class="btn btn-outline-light btn-pill nav-btn"
                  >
                    <FaPhoneVolume className="button-icon" />
                    Contact Us
                  </button>
                </Link>
              </NavItem>

              {userInfo ? (
                <NavItemDropdownUser>
                  <NavDropdownUser userCountry={userCountry} />
                </NavItemDropdownUser>
              ) : (
                <Link to={`/${getCountryParam()}/sign-in`}>
                  <button
                    type="button"
                    class="btn btn-outline-light btn-pill nav-btn"
                  >
                    <FaUserAstronaut className="button-icon" />
                    Sign In
                  </button>
                </Link>
              )}
              {/* // functional statement on what to do if user is logged in and
                when they arent. */}
              {/* </NavItem> */}

              <NavItem>
                <Link to={`/${getCountryParam()}/cart`}>
                  <button
                    type="button"
                    class="btn btn-outline-light btn-pill shopping-cart nav-btn"
                  >
                    <FaShoppingCart className="button-icon" />
                    {cart.cartItems.length > 0 && ( //if carts items in context exists and is great than 0 items
                      <Badge id="badge-cart-num" outline theme="success">
                        {cart.cartItems.reduce(
                          // this ensures that no duplicates are created, only increases the quantity of that item
                          (accumulator, currentItem) =>
                            accumulator + currentItem.quantity,
                          0
                        )}
                        {/** show a badge with the number of items */}
                      </Badge>
                    )}
                  </button>
                </Link>
              </NavItem>

              <NavItem className="nav-item">
                <ExpandingSearchBox />
              </NavItem>
            </Nav>
            {getCountryIcon()}
          </Collapse>
        </Navbar>
        {/* {countryChangePromptOpen && <CountrySelection country={country} />} */}
      </Card>
    </div>
  );
};
export default NavBarFloating;
