import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import {
  Button,
  Card,
  CardBody,
  Form,
  FormInput,
  FormGroup,
} from "shards-react";
import "./sign-up-page.styles.scss";
import Background from "../../assets/images/backgrounds/vector1.jpg";
import { FaMailBulk } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Store } from "../../Store.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getError } from "../../util";

const SignUpPage = ({ userCountry }) => {
  const navigate = useNavigate();
  const { search } = useLocation(); // react hook,
  const redirectInUrl = new URLSearchParams(search).get("redirect"); // passes search object and then grabs redirect query
  const redirect = redirectInUrl ? redirectInUrl : `/${userCountry}/home`; // checks redirectinurl if it exists otherwise default url is '/'

  console.log(search);
  console.log(redirectInUrl);
  console.log(redirect);

  // required fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // additional Fields
  const [businessName, setBusinessName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipPostalCode, setZipPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const submitHandler = async (e) => {
    e.preventDefault(); // prevents refreshs page when clicking sign-in button
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/; // At least 1 uppercase letter, 1 digit, and a minimum length of 8 characters

    if (!passwordRegex.test(password)) {
      try {
        toast.warning(
          "Password must contain: \n- 1 uppercase letter \n- 1 digit \n- at least 8 characters long.",
          {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: Bounce,
          }
        );
      } catch (error) {
        console.log(error);
      }

      return;
    }

    try {
      //send ajax request to api/users/sign-in
      const { data } = await Axios.post("/api/users/signup", {
        //the api is from userRoutes
        //passes two field into users/sign in the extracts data response into the {data}
        //email and password are states
        fullName,
        businessName,
        address,
        city,
        zipPostalCode,
        country,
        email,
        phoneNumber,
        password,
      });
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      console.log(data);

      localStorage.setItem("userInfo", JSON.stringify(data)); // key is userInfo, data is now a string datatype. userInfo is found under store 'case'
      navigate(redirect || "/");
    } catch (err) {
      // alert("Invalid Email or Password");
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <div className="signup-page-container">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>

      <Card className="signup-card">
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Form onSubmit={submitHandler}>
          <FormGroup>
            <FormInput
              id="#fullName"
              placeholder="Full Name"
              required
              onChange={(e) => setFullName(e.target.value)}
            />
            <FormInput
              id="#businessName"
              placeholder="Business Name"
              onChange={(e) => setBusinessName(e.target.value)}
            />
            <FormInput
              id="#address"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <FormInput
              id="#city"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
            />
            <FormInput
              id="#postalCode"
              placeholder="Zip/Postal Code"
              onChange={(e) => setZipPostalCode(e.target.value)}
            />
            <FormInput
              id="#country"
              placeholder="Country"
              onChange={(e) => setCountry(e.target.value)}
            />
            <FormInput
              id="#email"
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              id="#phone-number"
              placeholder="Phone Number"
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <FormInput
              type="password"
              id="#password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormInput
              type="password"
              id="#confirm-password"
              placeholder="Confirm Password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormGroup>

          <Button id="signin-btn" outline pill theme="success" type="submit">
            Sign Up!
          </Button>
          <div className="mb-3">
            Already have an account?{""}
            <Link to={`/sign-in?redirect=${redirect}`}>Sign-In</Link>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default SignUpPage;
