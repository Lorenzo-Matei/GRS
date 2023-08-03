import React from "react";
import { CSSTransition } from "react-transition-group";
import { useState, useEffect, useRef } from "react";

import "./nav-dropdown-menu.styles.scss";
import { RiKnifeLine } from "react-icons/ri";
import {
  GiClothes,
  GiPorcelainVase,
  GiPizzaCutter,
  GiCampCookingPot,
  GiManualMeatGrinder,
  GiTable,
  GiChemicalTank,
} from "react-icons/gi";
import { IoStorefrontSharp } from "react-icons/io5";

import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import OutsideClickHandler from "react-outside-click-handler";
import axios from "axios";
// import { Toast } from "react-toastify/dist/components";
import { getError } from "../../util";
import { act } from "react-dom/test-utils";

var categoriesSelected = [];

function NavDropdownMenu(props) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  // uses /categories
  // const prodCategories = props.categoriesProps;
  // console.log("prodCats: ", prodCategories);

  //variables using /categories2
  const prodCategories = props.categoriesProps;
  const mainCategories = Object.keys(prodCategories);

  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search); // if url is /search/?category=shirts then searches for shirts
  const category = searchParams.get("category") || "all"; //returns items in that category, otherwise return null or all items.
  const subCategory = searchParams.get("subCategory") || "all";
  const microCategory = searchParams.get("microCategory") || "all";

  function getSubCats(mainCategory) {
    const subCats = Object.keys(prodCategories[mainCategory].nodes);

    return subCats;
  }

  const getFilterURL = (filter) => {
    const filterCategory = filter.category || category;
    const filterSubCategory = filter.subCategory || subCategory;
    const filterMicroCategory = filter.microCategory || microCategory;

    return `/${props.countryProp}/search?category=${encodeURIComponent(
      filterCategory
    )}&subCategory=${encodeURIComponent(
      filterSubCategory
    )}&microCategory=${encodeURIComponent(
      filterMicroCategory
    )}&query=all&price=all&rating=all&order=all&page=1`;
  };

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function menuPageNavigation() {
    var categoriesLen = categoriesSelected.length;

    function allProductsCheck(string) {
      if (string.toLowerCase().includes("all ")) {
        return "all";
      } else {
        return string;
      }
    }

    switch (categoriesLen) {
      case 1:
        return navigate(
          getFilterURL({ category: allProductsCheck(categoriesSelected[0]) })
        );

      case 2:
        return navigate(
          getFilterURL({
            category: allProductsCheck(categoriesSelected[0]),
            subCategory: allProductsCheck(categoriesSelected[1]),
          })
        );
    }
  }

  function DropDownItem(props) {
    return (
      <a
        className="menu-item"
        onClick={() => {
          props.goToMenu && setActiveMenu(props.goToMenu);

          if (props.goToMenu && props.goToMenu != "main") {
            categoriesSelected.push(props.goToMenu);
          } else if (!props.goToMenu) {
            categoriesSelected.push(props.menuItem);
            menuPageNavigation();
            categoriesSelected.pop();
          } else if (props.goToMenu == "main") {
            categoriesSelected = [];
          }
        }} // props exist then setActive menu
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    // <div className="dropdown-container">
    <OutsideClickHandler
      onOutsideClick={() => {
        categoriesSelected = [];
      }}
    >
      <div
        className="dropdown"
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
          {/* {console.log("menu categories: ", categories)} */}

          <div className="menu">
            {mainCategories.map((category) => {
              if (category.toLowerCase() === "all") {
                return <DropDownItem menuItem="all">All</DropDownItem>;
              } else if (category != "") {
                return (
                  <DropDownItem
                    key={category}
                    // leftIcon={<GiCampCookingPot />}
                    rightIcon={<FaRegArrowAltCircleRight />}
                    menuItem={category}
                    goToMenu={category}
                  >
                    {category}
                  </DropDownItem>
                );
              }
            })}
          </div>
        </CSSTransition>

        {mainCategories.map((mainCategory) => (
          <CSSTransition
            in={activeMenu === mainCategory}
            unmountOnExit
            timeout={500}
            classNames="menu-secondary"
            onEnter={calcHeight}
          >
            <div className="menu">
              <DropDownItem
                leftIcon={<FaRegArrowAltCircleLeft />}
                goToMenu="main"
                menuItem="menu-back"
              >
                Categories
                {/* {activeMenu} */}
              </DropDownItem>
              <DropDownItem menuItem="all">All</DropDownItem>

              {getSubCats(mainCategory).map((category) => (
                <DropDownItem menuItem={category}>{category}</DropDownItem>
              ))}
            </div>
          </CSSTransition>
        ))}

        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
      </div>
    </OutsideClickHandler>
    // </div>
  );
}
export default NavDropdownMenu;
