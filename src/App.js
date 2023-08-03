import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
  Navigate,
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
          <Route path="/" element={<Navigate to="/CAN/home" />} />
          <Route path="/CAN/home" element={<HomePage />} />
          <Route path="/CAN/products" element={<ProductSearchPage />} />
          <Route path="/CAN/products/:slug" element={<ProductPage />} />{" "}
          {/* :slug    is a parameter/argument/variable that is inserted from the product slug */}
          <Route path="/CAN/search" element={<ProductSearchPage />} />
          {/* <Route path="/shop" element={<ProductListingsPage />} /> */}
          <Route path="/CAN/showroom" element={<Showroom />} />
          <Route path="/CAN/contact-us" element={<ContactPage />} />
          <Route path="/CAN/sign-in" element={<SignInPage />} />
          <Route path="/CAN/cart" element={<CartPage />} />
          <Route path="/CAN/cart:id" element={<CartPage />} />
          {/*  */}
          <Route path="/USA/home" element={<HomePage />}></Route>
          <Route path="/USA/products" element={<ProductSearchPage />} />
          <Route path="/USA/products/:slug" element={<ProductPage />} />
          <Route path="/USA/search" element={<ProductSearchPage />} />
          <Route path="/USA/showroom" element={<Showroom />} />
          <Route path="/USA/contact-us" element={<ContactPage />} />
          <Route path="/USA/sign-in" element={<SignInPage />} />
          <Route path="/USA/cart" element={<CartPage />} />
          <Route path="/USA/cart:id" element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
