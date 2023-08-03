import React from "react";
import { Button, NavItem } from "shards-react";
import "./footer.styles.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaMailBulk,
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { } from

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  function getCountryParam() {
    const country = location.pathname.split("/")[1];

    return country;
  }

  function changeCountry() {
    getCountryParam() === "USA" ? navigate(`/CAN/home`) : navigate(`/USA/home`);
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

  return (
    <div className="footer-container">
      <div className="footer-category">
        <h1 className="footer-title">Menu</h1>
        <Link to={"/"}>
          <h3 className="footer-page">Home</h3>
        </Link>
        <Link to={"/search"}>
          <h3 className="footer-page">Shop</h3>
        </Link>
        <Link to={"/showroom"}>
          <h3 className="footer-page">Showroom</h3>
        </Link>
        <Link to={"/contact-us"}>
          <h3 className="footer-page">Contact Us</h3>
        </Link>
        <Link to={"/sign-in"}>
          <h3 className="footer-page">Sign In</h3>
        </Link>
        <Link to={"/cart"}>
          <h3 className="footer-page">Cart</h3>
        </Link>
      </div>

      <div className="footer-category">
        <h1 className="footer-title">Shop Categories</h1>
        <h3 className="footer-page">Cooking</h3>
        <h3 className="footer-page">Refrigeration</h3>
        <h3 className="footer-page">Food Preparation</h3>
        <h3 className="footer-page">Beverage, Food Display & Warmers</h3>
        <h3 className="footer-page">Tables, Shelves & Furniture</h3>
        <h3 className="footer-page">Janitorial & Chemicals</h3>
        <h3 className="footer-page">Clothing</h3>
        <h3 className="footer-page">Tabletop & Service</h3>
        <h3 className="footer-page">Smallwares</h3>
      </div>

      <div className="footer-category">
        <h1 className="footer-title">Company</h1>
        <h3 className="footer-page">About Us</h3>
        <h3 className="footer-page">Services</h3>
        <h3 className="footer-page">Terms of Use</h3>
        <h3 className="footer-page">Privacy</h3>
        {/* services, product resources, Blog, Showroom */}
      </div>

      <div className="footer-category">
        <h1 className="footer-title">Support</h1>
        <h3 className="footer-page">Product Resources</h3>
        <h3 className="footer-page">FAQ</h3>
        <h3 className="footer-page">Blog</h3>
      </div>

      <div className="footer-category">
        <h1 className="footer-title">Social Media</h1>
        <Button
          className="footer-social-media-buttons"
          outline
          pill
          theme="light"
        >
          <FaFacebookF className="social-media-icon" />
        </Button>
        <Button
          className="footer-social-media-buttons"
          outline
          pill
          theme="light"
        >
          <FaInstagram className="social-media-icon" />
        </Button>
        <Button
          className="footer-social-media-buttons"
          outline
          pill
          theme="light"
        >
          <FaTwitter className="social-media-icon" />
        </Button>
        <Button
          className="footer-social-media-buttons"
          outline
          pill
          theme="light"
        >
          <FaYoutube className="social-media-icon" />
        </Button>
        <Button
          className="footer-social-media-buttons"
          outline
          pill
          theme="light"
        >
          <FaLinkedinIn className="social-media-icon" />
        </Button>
        <Button
          className="footer-social-media-buttons"
          outline
          pill
          theme="light"
        >
          <FaMailBulk className="social-media-icon" />
        </Button>

        {/* includes social media links */}
      </div>

      <div className="footer-category">
        <h1 className="footer-title">We Accept</h1>
        <FaCcVisa size={70} className="footer-icons-payment" />
        <FaCcMastercard size={70} className="footer-icons-payment" />
      </div>
      <div className="footer-category">
        <NavItem>
          {/* <Link to={`/${country}`}> */}
          <button
            type="button"
            class="btn btn-outline-light btn-pill nav-btn"
            onClick={() => {
              changeCountry();
              // setCountryChangePromptOpen(!countryChangePromptOpen);
              // console.log("country state: ", countryChangePromptOpen);
            }}
          >
            {changeCountryIcon()}
            Site
          </button>
          {/* </Link> */}
        </NavItem>
      </div>
    </div>
  );
};

export default Footer;
