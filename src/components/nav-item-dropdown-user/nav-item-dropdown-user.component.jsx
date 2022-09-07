import React, { useState } from "react";
import { FaHome, FaUserAstronaut, FaShoppingBag } from "react-icons/fa";
import OutsideClickHandler from "react-outside-click-handler";

import "./nav-item-dropdown-user.styles.scss";

function NavItemDropdownUser(props) {
  const [open, setOpen] = useState(false);

  //////////////
  return (
    <li className="nav-item-and-dropdown">
      <OutsideClickHandler
        onOutsideClick={() => {
          setOpen(false);
        }}
      >
        <a className="dropdown-icon-button">
          <button
            onClick={() => setOpen(!open)}
            type="button"
            class="btn btn-outline-light btn-pill nav-btn"
          >
            <FaUserAstronaut className="button-icon" />
            My Account
          </button>
        </a>

        {open && props.children}
      </OutsideClickHandler>
    </li>
  );
}
export default NavItemDropdownUser;
