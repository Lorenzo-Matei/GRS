import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

//Autoquotes
//Reach out by email or phone to inquire about API usage.

import HomePage from "./pages/homepage/homepage.component";
import Showroom from "./pages/showroom/showrooom.component";
import ContactPage from "./pages/contact/contact.component";
import ProductListingsPage from "./pages/product-listings/product-listings.component";
import SignInPage from "./pages/sign-in-page/sign-in-page.component";

import NavbarFloating from "./components/navbar-floating/navbar-floating.component";
import Background from "../src/assets/images/backgrounds/kitchen1.jpg";

import SearchPage from "./pages/search/search.component";
import CartPage from "./pages/cart/cart-page.component";
import ProductSearchPage from "./pages/products-search/products-search-page.component";
import Footer from "./components/footer/footer.component";
import ProductPage from "./pages/product-page/product-page.component";
import { Alert } from "shards-react";
import { AiFillWarning } from "react-icons/ai";
import ExpandingSearchBox from "./components/expanding-search-box/expanding-search-box.component";
import axios from "axios";
import ShippingPage from "./pages/shipping/shipping-page.component";
import SignUpPage from "./pages/sign-up/sign-up-page.component";
import PaymentMethodsPage from "./pages/payment-methods-page/payment-methods-page.component";
import PlaceOrderPage from "./pages/place-order-page/place-order-page.component";
import OrderCompletePage from "./pages/order-complete-page/order-complete-page.component";
import UserOrderHistory from "./pages/user-order-history/user-order-history.component";
import UserProfilePage from "./pages/user-profile/user-profile.component";

const App = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  const [userCountry, setUserCountry] = useState("CAN");

  useEffect(() => {
    // Fetch user's country based on IP address
    const fetchCountry = async () => {
      try {
        const response = await axios.get("http://ip-api.com/json");
        const country = response.data.country;
        setUserCountry(
          country === "Canada"
            ? "CAN"
            : country === "United States"
            ? "USA"
            : "CAN"
        );
        // console.log("ip country: ", ipCountry);
      } catch (error) {
        console.error("Error fetching country :", error);
      }
    };
    fetchCountry();
  }, []);

  useEffect(() => {
    console.log("user country: ", userCountry);
  }, [userCountry]);

  function handleCountrySwitch() {
    setUserCountry(userCountry === "CAN" ? "USA" : "CAN");
    window.scrollTo(0, 0);
    // navigate(`/${userCountry}/home`);
  }

  return (
    <div
      className="site-container"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <Router>
        <NavbarFloating userCountry={userCountry} />
        <Alert theme="warning" className="maintenance-alert">
          <AiFillWarning />
          {"  "} Our site is undergoing changes - please use desktop for best
          Viewing. Due to a rapidly changing market - please call for pricing
          and ordering.{"  "}
          <AiFillWarning />
        </Alert>
        <Routes>
          <Route path="/" element={<Navigate to={`/${userCountry}/home`} />} />
          <Route
            path="/:country/*"
            element={
              <Routes>
                <Route path="home" element={<HomePage />} />
                <Route path="products" element={<ProductSearchPage />} />
                <Route
                  path="products/:slug"
                  element={<ProductPage userCountry={userCountry} />}
                />
                <Route path="search" element={<ProductSearchPage />} />
                <Route path="showroom" element={<Showroom />} />
                <Route path="contact-us" element={<ContactPage />} />
                <Route
                  path="sign-in"
                  element={<SignInPage userCountry={userCountry} />}
                />
                <Route
                  path="sign-up"
                  element={<SignUpPage userCountry={userCountry} />}
                />
                <Route
                  path="shipping"
                  element={<ShippingPage userCountry={userCountry} />}
                />
                <Route
                  path="payment-method"
                  element={<PaymentMethodsPage userCountry={userCountry} />}
                />
                <Route
                  path="place-order"
                  element={<PlaceOrderPage userCountry={userCountry} />}
                />
                <Route
                  path="order/:id"
                  element={<OrderCompletePage userCountry={userCountry} />}
                />

                <Route
                  path="cart"
                  element={<CartPage userCountry={userCountry} />}
                />
                <Route path="cart:id" element={<CartPage />} />
              </Routes>
            }
          />
          <Route path="/order-history" element={<UserOrderHistory />}></Route>
          <Route path="/user-profile" element={<UserProfilePage />}></Route>
        </Routes>
        <Footer
          userCountry={userCountry}
          onCountrySwitch={handleCountrySwitch}
        />{" "}
        {/* the handleCountrySwitch function is passed into component*/}
      </Router>
    </div>
  );
};

export default App;
