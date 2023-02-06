import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
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

const App = () => {
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
      <ToastContainer
        position="bottom-center"
        limit={1}
        style={{ color: "#121212" }}
      />
      <Router>
        <NavbarFloating />
        <Alert theme="warning" className="maintenance-alert">
          <AiFillWarning />
          {"  "} Our site is undergoing changes - please use desktop for best
          Viewing. Due to a rapidly changing market - please call for pricing
          and ordering.{"  "}
          <AiFillWarning />
        </Alert>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductSearchPage />} />
          <Route path="/products/:slug" element={<ProductPage />} />{" "}
          {/* :slug    is a parameter/argument/variable that is inserted from the product slug */}
          <Route path="/search" element={<ProductSearchPage />} />
          <Route path="/shop" element={<ProductListingsPage />} />
          <Route path="/showroom" element={<Showroom />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/cart:id" element={<CartPage />} />
          {/* <Route
            render={({ history }) => (
              <ExpandingSearchBox history={history}></ExpandingSearchBox>
            )}
          /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
