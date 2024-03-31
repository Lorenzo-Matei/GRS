import React, { useContext, useReducer, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button, Form, FormGroup, FormInput } from "shards-react";
import { Store } from "../../Store";
import { ToastContainer, toast } from "react-toastify";
import { getError } from "../../util";
import axios from "axios";
import { CgReorder, CgProfile, CgDatabase } from "react-icons/cg";

import "./user-profile.styles.scss";

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_REQUEST":
      return { ...state, loadingUpdate: true };
    case "UPDATE_SUCCESS":
      return { ...state, loadingUpdate: false };
    case "UPDATE_FAIL":
      return { ...state, loadingUpdate: false };
    default:
      return state;
  }
}

export default function UserProfilePage() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const [fullName, setFullName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [businessName, setBusinessName] = useState(userInfo.businessName);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [{ loadingUpdate }, dispatch] = useReducer(reducer, {
    loadingUpdate: false,
  });

  //   const submitHandler = async = () => {}; // is equivalent to below function...
  async function submitHandler(event) {
    event.preventDefault();
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
      const { data } = await axios.put(
        "/api/users/profile",
        { fullName, email, password, businessName },
        { headers: { Authorization: `Bearer ${userInfo.token}` } }
      );
      dispatch({ type: `UPDATE_SUCCESS` });
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      toast.success("User Updated Successfully");
    } catch (err) {
      dispatch({
        type: "FETCH_FAIL",
      });
      toast.error(getError(err));
    }
  }

  return (
    <div className="container user-profile-container small-container">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <CgProfile className="profile-icon" />
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

      <h1 className="profile-page-title my-3">Profile</h1>
      <Form onSubmit={submitHandler}>
        <FormGroup className="mb-3" id="formgroup-fullName">
          <label className="profile-field-title">Full Name</label>
          <FormInput
            id="#fullName"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup className="mb-3" id="formgroup-business-name">
          <label className="profile-field-title">Business Name</label>
          <FormInput
            id="#businessName"
            placeholder="Business name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="mb-3" id="formgroup-email">
          <label className="profile-field-title">Email</label>
          <FormInput
            id="#email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup className="mb-3" id="formgroup-password">
          <label className="profile-field-title">Password</label>
          <FormInput
            type="password"
            id="#password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup className="mb-3" id="formgroup-confirm-password">
          <label className="profile-field-title">Confirm Password</label>
          <FormInput
            type="password"
            id="#confirm-password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </FormGroup>
        <div>
          <Button type="submit">Update</Button>
        </div>
      </Form>
    </div>
  );
}
