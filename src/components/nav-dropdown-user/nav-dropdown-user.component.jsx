import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { useState, useEffect, useRef } from "react";

import "./nav-dropdown-user.styles.scss";
import { RiKnifeLine } from "react-icons/ri";
import { GiClothes, GiPorcelainVase, GiPizzaCutter } from "react-icons/gi";
import { MdOutlineMicrowave } from "react-icons/md";
import { BsCupStraw } from "react-icons/bs";
import { CgReorder, CgProfile, CgDatabase } from "react-icons/cg";
import { GoSignOut } from "react-icons/go";

import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Store } from "../../Store";

function NavDropDownUser() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  const { state, dispatch: ctxDispatch } = useContext(Store);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropDownItem(props) {
    return (
      <a
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
  };

  return (
    // <div className="dropdown-container">
    <div
      className="dropdown-user"
      style={{ height: menuHeight + 25 }}
      ref={dropdownRef}
    >
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <Link to="/profile">
            <DropDownItem leftIcon={<CgProfile />}>Profile</DropDownItem>
          </Link>

          <DropDownItem leftIcon={<CgReorder />}>Order History</DropDownItem>

          <Link to="#signout" onClick={signoutHandler}>
            <DropDownItem leftIcon={<GoSignOut />}>SignOut</DropDownItem>
          </Link>
        </div>
      </CSSTransition>
    </div>
  );
}
export default NavDropDownUser;
