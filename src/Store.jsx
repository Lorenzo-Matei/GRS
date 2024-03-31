import mongoose from "mongoose";
import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,

  cart: {
    shippingAddress: localStorage.getItem("shippingAddress") // get the existing shipping address if already cached
      ? JSON.parse(localStorage.getItem("shippingAddress"))
      : {}, // if doesnt exist, make empty

    paymentMethod: localStorage.getItem("paymentMethod")
      ? localStorage.getItem("paymentMethod")
      : "",
    cartItems: localStorage.getItem("cartItems") //if cart items exists in the localstorage
      ? JSON.parse(localStorage.getItem("cartItems")) //use JSON.parse to convert local storage cartITems(which are string rn) into javacript object (aka json)
      : [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "CART_ADD_ITEM":
      //add item to cart:
      const newItem = action.payload;
      const itemExists = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      ); // checks if cart has existing item
      const cartItems = itemExists //checks if item exists (T/F) in cart
        ? state.cart.cartItems.map(
            (
              item //if true (exists) then you have to find that item in cart
            ) => (item._id === itemExists._id ? newItem : item) //when item is found in cart and it matches with what you wanna add then it updates the quantity ':' otherwise adds the item
          )
        : [...state.cart.cartItems, newItem]; //if itemExists is null then we need to add item to the end of the array
      localStorage.setItem("cartItems", JSON.stringify(cartItems)); // cart items are converted to a string and saved in the cartItems variable which is then saved on the devices local storage.
      return { ...state, cart: { ...state.cart, cartItems } };

    case "CART_REMOVE_ITEM": {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id // if item._id doesnt equal action.payload._id (aka: current id) then remove it.
      );
      localStorage.setItem("cartItems", JSON.stringify(cartItems)); // cart items are converted to a string and saved in the cartItems variable which is then saved on the devices local storage.
      return { ...state, cart: { ...state.cart, cartItems } };
    }

    case "CART_CLEAR":
      return { ...state, cart: { ...state.cart, cartItems: [] } }; // keeps everything the same except resets the cart items to an empty array

    case "USER_SIGNIN":
      return { ...state, userInfo: action.payload };

    case "USER_SIGNOUT":
      return {
        ...state,
        userInfo: null,
        cart: {
          cartItems: [],
          shippingAddress: {},
          paymentMethod: "",
        },
      };

    case "SAVE_SHIPPING_ADDRESS":
      return {
        ...state, // this is being changed
        cart: {
          // the change is in the cart and its adding a shipping address
          ...state.cart,
          shippingAddress: action.payload, //update shipping address field with this data/payload from shipping page.
        },
      };

    case "SAVE_PAYMENT_METHOD":
      return {
        ...state, // this is being changed
        // the change is in the cart and its adding a payment method
        cart: {
          ...state.cart,
          paymentMethod: action.payload,
        }, //update payment method field with this data/payload from shipping page.
      };

    default:
      return state;
  }
}

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};
