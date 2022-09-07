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
import "./sign-in-page.styles.scss";
import Background from "../../assets/images/backgrounds/vector1.jpg";
import { FaMailBulk } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Store } from "../../Store.jsx";
import { toast } from "react-toastify";
import { getError } from "../../util";

const SignInPage = () => {
  const navigate = useNavigate();
  const { search } = useLocation(); // react hook,
  const redirectInUrl = new URLSearchParams(search).get("redirect"); // passes search object and then grabs redirect query
  const redirect = redirectInUrl ? redirectInUrl : "/"; // checks redirectinurl if it exists otherwise default url is '/'

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const submitHandler = async (e) => {
    e.preventDefault(); // prevents refreshs page when clicking sign-in button

    try {
      //send ajax request to api/users/sign-in
      const { data } = await Axios.post("/api/users/signin", {
        //the api is from userRoutes
        //passes two field into users/sign in the extracts data response into the {data}
        //email and password are states
        email,
        password,
      });
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      // console.log(data);

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
    <div className="signin-page-container">
      <Helmet>
        <title>Sign In</title>
      </Helmet>

      <Card className="signin-card">
        <CardBody
          className="signup-leftside"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 id="signup-title">New here?</h1>
          <p id="signup-subtitle">
            Sign up to stay up to date on cutting edge industry equipment!
          </p>
          <hr id="signup-hr" />
          <Link to={`/sign-in?redirect=${redirect}`}>
            <Button id="signup-btn" outline pill theme="danger">
              {/* if user is new, redirect user to signup page and set querying string to url fetched in redirect */}
              Sign Up Now!
            </Button>
          </Link>
        </CardBody>
        <div id="signin-rightside">
          <h1 id="signin-title">Sign-In</h1>
          <p id="signin-subtitle">Welcome back</p>

          <Form className="login-forms" onSubmit={submitHandler}>
            <FormGroup>
              {/* <label htmlFor="#username">Email</label> */}
              <FormInput
                id="#username"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              {/* <label htmlFor="#password">Password</label> */}
              <FormInput
                type="password"
                id="#password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <p id="forgot-password">forgot your password?</p>

            <Button id="signin-btn" outline pill theme="success" type="submit">
              Sign In!
            </Button>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default SignInPage;
