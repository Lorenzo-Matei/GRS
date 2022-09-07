import React, { useContext, useState } from "react"; // useState is a Hook

import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Collapse,
  Card,
  Badge,
  DropdownMenu,
  Dropdown,
  DropdownToggle,
  DropdownItem,
} from "shards-react";

import {
  FaHome,
  FaShoppingBag,
  FaVideo,
  FaPhoneVolume,
  FaSearch,
  FaShoppingCart,
  FaUserAstronaut,
} from "react-icons/fa";

import { IoStorefrontSharp } from "react-icons/io5";

import "./navbar-floating.styles.scss";
import ExpandingSearchBox from "../expanding-search-box/expanding-search-box.component";
import Logo from "../../assets/images/misc/store_logo.png";
import NewArrivalItem from "../new-arrivals/new-arrivals-item.component";
import NavItemDropdown from "../NavItemDropdown/nav-item-dropdown.component.jsx";
import NavDropdownMenu from "../nav-dropdown-menu/nav-dropdown-menu.component.jsx";
import { Link } from "react-router-dom";
import { Store } from "../../Store";
import NavDropdownUser from "../nav-dropdown-user/nav-dropdown-user.component";
import NavItemDropdownUser from "../nav-item-dropdown-user/nav-item-dropdown-user.component";

const NavBarFloating = () => {
  const { state } = useContext(Store); //copied from product-page and removed dispatch as changes wont occur here
  const { cart, userInfo } = state;

  // const toggleDropdown = toggleDropdown.bind();
  // const toggleNavbar = toggleNavbar.bind();

  const [dropdownOpen, setDropDownOpen] = useState(false);
  const [collapseOpen, setCollapseOpen] = useState(false);

  function toggleDropDown() {
    setDropDownOpen(!dropdownOpen);
  }

  function toggleNavbar() {
    setCollapseOpen(!collapseOpen);
  }

  const [openProfileDropdown, setOpenProfileDropdown] = useState();
  const toggleProfileDropDown = () => {
    setOpenProfileDropdown((open) => !open);
  };

  return (
    <div className="navbar-div">
      <div className="logo-img-container">
        <img src={Logo} className="m-auto logo-img" />
      </div>

      <Card className="m-auto navbar-card">
        <Navbar className="m-auto" type="dark" expand="md" sticky="top">
          <NavbarToggler onClick={toggleNavbar} />

          <Collapse open={collapseOpen} navbar>
            <Nav navbar>
              <NavItem>
                <Link to="/">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-pill nav-btn"
                  >
                    <FaHome className="button-icon" />
                    Home
                  </button>
                </Link>
              </NavItem>
              {/* ////////////////////////////////////////////// */}
              <NavItem>
                <Link to="/products">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-pill nav-btn"
                  >
                    <IoStorefrontSharp className="button-icon" />
                    Products
                  </button>
                </Link>
              </NavItem>
              {/* /////////////////////////////////////////////// */}
              <NavItemDropdown>
                <NavDropdownMenu />
              </NavItemDropdown>

              <NavItem>
                <Link to="/showroom">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-pill nav-btn"
                  >
                    <FaVideo className="button-icon" />
                    Showroom
                  </button>
                </Link>
              </NavItem>

              <NavItem>
                <Link to="/contact-us">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-pill nav-btn"
                  >
                    <FaPhoneVolume className="button-icon" />
                    Contact Us
                  </button>
                </Link>
              </NavItem>

              {userInfo ? (
                <NavItemDropdownUser>
                  <NavDropdownUser />
                </NavItemDropdownUser>
              ) : (
                <Link to="sign-in">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-pill nav-btn"
                  >
                    <FaUserAstronaut className="button-icon" />
                    Sign In
                  </button>
                </Link>
              )}
              {/* // functional statement on what to do if user is logged in and
                when they arent. */}
              {/* </NavItem> */}

              <NavItem>
                <Link to="/cart">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-pill shopping-cart nav-btn"
                  >
                    <FaShoppingCart className="button-icon" />
                    {cart.cartItems.length > 0 && ( //if carts items in context exists and is great than 0 items
                      <Badge id="badge-cart-num" outline theme="success">
                        {cart.cartItems.reduce(
                          // this ensures that no duplicates are created, only increases the quantity of that item
                          (accumulator, currentItem) =>
                            accumulator + currentItem.quantity,
                          0
                        )}
                        {/** show a badge with the number of items */}
                      </Badge>
                    )}
                  </button>
                </Link>
              </NavItem>

              <NavItem className="nav-item">
                <ExpandingSearchBox />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Card>
    </div>
  );
};
export default NavBarFloating;

// export default class NavBarFloating extends React.Component {
//   // const { state } = useContext(Store);
//   // const { cart } = state;

//   constructor(props) {
//     super(props);
//     // fontawesome.library.add(faSearch, FontAwesomeIcon);

//     this.toggleDropdown = this.toggleDropdown.bind(this);
//     this.toggleNavbar = this.toggleNavbar.bind(this);

//     this.state = {
//       dropdownOpen: false,
//       collapseOpen: false,
//     };
//   }

//   toggleDropdown() {
//     this.setState({
//       ...this.state,
//       ...{
//         dropdownOpen: !this.state.dropdownOpen,
//       },
//     });
//   }

//   toggleNavbar() {
//     this.setState({
//       ...this.state,
//       ...{
//         collapseOpen: !this.state.collapseOpen,
//       },
//     });
//   }

//   render() {
//     return (
//       <div className="navbar-div">
//         <div className="logo-img-container">
//           <img src={Logo} className="m-auto logo-img" />
//         </div>

//         <Card className="m-auto navbar-card">
//           <Navbar className="m-auto" type="dark" expand="md" sticky="top">
//             <NavbarToggler onClick={this.toggleNavbar} />

//             <Collapse open={this.state.collapseOpen} navbar>
//               <Nav navbar>
//                 <NavItem>
//                   <Link to="/">
//                     <button
//                       type="button"
//                       class="btn btn-outline-light btn-pill nav-btn"
//                     >
//                       <FaHome className="button-icon" />
//                       Home
//                     </button>
//                   </Link>
//                 </NavItem>
//                 {/* ////////////////////////////////////////////// */}
//                 <NavItem>
//                   <Link to="/products">
//                     <button
//                       type="button"
//                       class="btn btn-outline-light btn-pill nav-btn"
//                     >
//                       <FaHome className="button-icon" />
//                       Products
//                     </button>
//                   </Link>
//                 </NavItem>
//                 {/* /////////////////////////////////////////////// */}
//                 <NavItemDropdown>
//                   <NavDropdownMenu />
//                 </NavItemDropdown>

//                 <NavItem>
//                   <Link to="/showroom">
//                     <button
//                       type="button"
//                       class="btn btn-outline-light btn-pill nav-btn"
//                     >
//                       <FaVideo className="button-icon" />
//                       Showroom
//                     </button>
//                   </Link>
//                 </NavItem>

//                 <NavItem>
//                   <Link to="/contact-us">
//                     <button
//                       type="button"
//                       class="btn btn-outline-light btn-pill nav-btn"
//                     >
//                       <FaPhoneVolume className="button-icon" />
//                       Contact Us
//                     </button>
//                   </Link>
//                 </NavItem>

//                 <NavItem>
//                   <Link to="sign-in">
//                     <button
//                       type="button"
//                       class="btn btn-outline-light btn-pill nav-btn"
//                     >
//                       <FaUserAstronaut className="button-icon" />
//                       Sign In
//                     </button>
//                   </Link>
//                 </NavItem>

//                 <NavItem>
//                   <Link to="/cart">
//                     <button
//                       type="button"
//                       class="btn btn-outline-light btn-pill shopping-cart nav-btn"
//                     >
//                       <FaShoppingCart className="button-icon" />
//                       {cart.cartItems.length > 0 && (
//                         <Badge pill theme="danger">
//                           {cart.cartItems.length}
//                         </Badge>
//                       )}
//                     </button>
//                   </Link>
//                 </NavItem>

//                 <NavItem className="nav-item">
//                   <Link to="/search">
//                     <ExpandingSearchBox />
//                   </Link>
//                 </NavItem>
//               </Nav>
//             </Collapse>
//           </Navbar>
//         </Card>
//       </div>
//     );
//   }
// }
