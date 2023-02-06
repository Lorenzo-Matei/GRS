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

import { MdOutlineMicrowave } from "react-icons/md";
import { BsCupStraw } from "react-icons/bs";
import { FaSink } from "react-icons/fa";

import { CgSmartHomeRefrigerator, CgDatabase } from "react-icons/cg";
import { ImSpoonKnife } from "react-icons/im";

import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import OutsideClickHandler from "react-outside-click-handler";

var categoriesSelected = [];

function NavDropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search); // if url is /search/?category=shirts then searches for shirts
  const category = searchParams.get("category") || "all"; //returns items in that category, otherwise return null or all items.
  const subCategory = searchParams.get("subCategory") || "all";
  const microCategory = searchParams.get("microCategory") || "all";

  const getFilterURL = (filter) => {
    const filterCategory = filter.category || category;
    const filterSubCategory = filter.subCategory || subCategory;
    const filterMicroCategory = filter.microCategory || microCategory;

    return `/search?category=${encodeURIComponent(
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
          {/* {categories.map((category) => (
          <DropDownItem key={category}></DropDownItem>
        ))} */}

          <div className="menu">
            <Link to={getFilterURL({ category: "all", subCategory: "all" })}>
              <DropDownItem leftIcon={<IoStorefrontSharp />}>
                All Products
              </DropDownItem>
            </Link>
            <DropDownItem
              leftIcon={<GiCampCookingPot />}
              rightIcon={<FaRegArrowAltCircleRight />}
              menuItem="Cooking"
              goToMenu="Cooking"
            >
              Cooking
            </DropDownItem>

            <DropDownItem
              leftIcon={<CgSmartHomeRefrigerator />}
              rightIcon={<FaRegArrowAltCircleRight />}
              menuItem="Refrigeration"
              goToMenu="Refrigeration"
            >
              Refrigeration
            </DropDownItem>

            <DropDownItem
              leftIcon={<GiManualMeatGrinder />}
              rightIcon={<FaRegArrowAltCircleRight />}
              menuItem="Food Preparation"
              goToMenu="Food Preparation"
            >
              Food Preparation
            </DropDownItem>

            <DropDownItem
              leftIcon={<BsCupStraw />}
              rightIcon={<FaRegArrowAltCircleRight />}
              menuItem="Beverage, Food Display & Warmers"
              goToMenu="Beverage, Food Display & Warmers"
            >
              Beverage, Food Display & Warmers
            </DropDownItem>

            <DropDownItem
              leftIcon={<FaSink />}
              rightIcon={<FaRegArrowAltCircleRight />}
              menuItem="Warewashing, Sinks & Plumbing"
              goToMenu="Warewashing, Sinks & Plumbing"
            >
              Warewashing, Sinks & Plumbing
            </DropDownItem>

            <DropDownItem
              leftIcon={<GiTable />}
              rightIcon={<FaRegArrowAltCircleRight />}
              menuItem="Tables, Shelves & Furniture"
              goToMenu="Tables, Shelves & Furniture"
            >
              Tables, Shelves & Furniture
            </DropDownItem>

            <DropDownItem
              leftIcon={<GiChemicalTank />}
              rightIcon={<FaRegArrowAltCircleRight />}
              menuItem="Janitorial & Chemicals"
              goToMenu="Janitorial & Chemicals"
            >
              Janitorial & Chemicals
            </DropDownItem>

            <DropDownItem
              leftIcon={<GiClothes />}
              rightIcon={<FaRegArrowAltCircleRight />}
              menuItem="Clothing"
              goToMenu="Clothing"
            >
              Clothing
            </DropDownItem>

            <DropDownItem
              leftIcon={<ImSpoonKnife />}
              rightIcon={<FaRegArrowAltCircleRight />}
              menuItem="Tabletop & Service"
              goToMenu="Tabletop & Service"
            >
              Tabletop & Service
            </DropDownItem>

            <DropDownItem
              leftIcon={<RiKnifeLine />}
              rightIcon={<FaRegArrowAltCircleRight />}
              menuItem="Smallwares"
              goToMenu="Smallwares"
            >
              Smallwares
            </DropDownItem>
          </div>
        </CSSTransition>

        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <CSSTransition
          in={activeMenu === "Cooking"}
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
            />
            <DropDownItem menuItem="all">All</DropDownItem>

            <DropDownItem menuItem="Fryers">Fryers</DropDownItem>

            <DropDownItem menuItem="Charbroilers">Charbroilers</DropDownItem>

            <DropDownItem menuItem="Griddles">Griddles</DropDownItem>

            <DropDownItem menuItem="Hotplates">Hotplates</DropDownItem>

            <DropDownItem menuItem="Ranges">Ranges</DropDownItem>

            <DropDownItem menuItem="Broilers">Broilers</DropDownItem>
            <DropDownItem menuItem="Stockpot Ranges">
              Stockpot Ranges
            </DropDownItem>

            <DropDownItem menuItem="Ovens">Ovens</DropDownItem>

            <DropDownItem menuItem="Kettles">Kettles</DropDownItem>

            <DropDownItem menuItem="Steamers">Steamers</DropDownItem>

            <DropDownItem menuItem="Heated Holding & Proofers">
              Heated Holding & Proofers
            </DropDownItem>
          </div>
        </CSSTransition>
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <CSSTransition
          in={activeMenu === "Refrigeration"}
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
            />

            <DropDownItem menuItem="Upright Coolers">
              Upright Coolers
            </DropDownItem>

            <DropDownItem menuItem="Upright Freezers">
              Upright Freezers
            </DropDownItem>
            <DropDownItem menuItem="Worktop & Undercounter Coolers">
              Worktop & Undercounter Coolers
            </DropDownItem>
            <DropDownItem menuItem="Worktop & Undercounter Freezers">
              Worktop & Undercounter Freezers
            </DropDownItem>
            <DropDownItem menuItem="Back Bar Coolers">
              Back Bar Coolers
            </DropDownItem>
            <DropDownItem menuItem="Sandwich Prep Tables">
              Sandwich Prep Tables
            </DropDownItem>
            <DropDownItem menuItem="Pizza Prep Tables">
              Pizza Prep Tables
            </DropDownItem>
            <DropDownItem menuItem="Chef Bases">Chef Bases</DropDownItem>
            <DropDownItem menuItem="Ice Machines">Ice Machines</DropDownItem>
            <DropDownItem menuItem="Blast Freezers & Chillers">
              Blast Freezers & Chillers
            </DropDownItem>
            <DropDownItem menuItem="Display Cases">Display Cases</DropDownItem>
            <DropDownItem menuItem="Ice Cream">Ice Cream</DropDownItem>
            <DropDownItem menuItem="Walk-in Coolers & Freezers">
              Walk-in Coolers & Freezers
            </DropDownItem>
          </div>
        </CSSTransition>
        {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}

        <CSSTransition
          in={activeMenu === "Food Preparation"}
          unmountOnExit
          timeout={500}
          classNames="menu-secondary"
          onEnter={calcHeight}
        >
          <div className="menu">
            <DropDownItem
              leftIcon={<FaRegArrowAltCircleLeft />}
              goToMenu="main"
            />
            <DropDownItem menuItem="all">All</DropDownItem>

            <DropDownItem menuItem="Meat Grinders">Meat Grinders</DropDownItem>

            <DropDownItem menuItem="Meat Saw">Meat Saw</DropDownItem>
            <DropDownItem menuItem="Meat Tenderizers">
              Meat Tenderizers
            </DropDownItem>
            <DropDownItem menuItem="Sausage Stuffers">
              Sausage Stuffers
            </DropDownItem>
            <DropDownItem menuItem="Meat & Deli Slicers">
              Meat & Deli Slicers
            </DropDownItem>
            <DropDownItem menuItem="Planetary Mixers">
              Planetary Mixers
            </DropDownItem>
            <DropDownItem menuItem="Dough Sheeters, Cutters & Presses">
              Dough Sheeters, Cutters & Presses
            </DropDownItem>
            <DropDownItem menuItem="Scales">Scales</DropDownItem>
            <DropDownItem menuItem="Salad Dryers">Salad Dryers</DropDownItem>
            <DropDownItem menuItem="Automatic Peelers">
              Automatic Peelers
            </DropDownItem>
            <DropDownItem menuItem="Food Processors">
              Food Processors
            </DropDownItem>
            <DropDownItem menuItem="Blenders">Blenders</DropDownItem>
            <DropDownItem menuItem="Immersion Blenders">
              Immersion Blenders
            </DropDownItem>

            <DropDownItem menuItem="Juicers">Juicers</DropDownItem>
            <DropDownItem menuItem="Food Cutters">Food Cutters</DropDownItem>
            <DropDownItem menuItem="Can Openers">Can Openers</DropDownItem>
            <DropDownItem menuItem="Mobile Food Racks">
              Mobile Food Racks
            </DropDownItem>
          </div>
        </CSSTransition>

        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <CSSTransition
          in={activeMenu === "Beverage, Food Display & Warmers"}
          unmountOnExit
          timeout={500}
          classNames="menu-secondary"
          onEnter={calcHeight}
        >
          <div className="menu">
            <DropDownItem
              leftIcon={<FaRegArrowAltCircleLeft />}
              goToMenu="main"
            />
            <DropDownItem menuItem="all">All</DropDownItem>

            <DropDownItem menuItem="Coffee Machines">
              Coffee Machines
            </DropDownItem>

            <DropDownItem menuItem="Espresso Machines">
              Espresso Machines
            </DropDownItem>
            <DropDownItem menuItem="Coffee Grinders">
              Coffee Grinders
            </DropDownItem>
            <DropDownItem menuItem="Hot Water Dispensers">
              Hot Water Dispensers
            </DropDownItem>
            <DropDownItem menuItem="Juice & Slushy Machines">
              Juice & Slushy Machines
            </DropDownItem>
            <DropDownItem menuItem="Other Dispensers">
              Other Dispensers
            </DropDownItem>
            <DropDownItem menuItem="Steam Tables">Steam Tables</DropDownItem>
            <DropDownItem menuItem="Microwaves">Microwaves</DropDownItem>
            <DropDownItem menuItem="Soup Warmers">Soup Warmers</DropDownItem>
            <DropDownItem menuItem="Food Warmers">Food Warmers</DropDownItem>
            <DropDownItem menuItem="Concession, Catering & Buffet">
              Concession, Catering & Buffet
            </DropDownItem>
          </div>
        </CSSTransition>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}
        <CSSTransition
          in={activeMenu === "Warewashing, Sinks & Plumbing"}
          unmountOnExit
          timeout={500}
          classNames="menu-secondary"
          onEnter={calcHeight}
        >
          <div className="menu">
            <DropDownItem
              leftIcon={<FaRegArrowAltCircleLeft />}
              goToMenu="main"
            />

            <DropDownItem menuItem="all">All</DropDownItem>

            <DropDownItem menuItem="Water Filters">Water Filters</DropDownItem>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === "Tables, Shelves & Furniture"}
          unmountOnExit
          timeout={500}
          classNames="menu-secondary"
          onEnter={calcHeight}
        >
          <div className="menu">
            <DropDownItem
              leftIcon={<FaRegArrowAltCircleLeft />}
              goToMenu="main"
            />
            <DropDownItem menuItem="all">All</DropDownItem>

            <DropDownItem menuItem="Work Tables">Work Tables</DropDownItem>

            <DropDownItem menuItem="Equipment Stands">
              Equipment Stands
            </DropDownItem>
            <DropDownItem menuItem="Casters">Casters</DropDownItem>
            <DropDownItem menuItem="Shelves">Shelves</DropDownItem>
            <DropDownItem menuItem="Dunnage Racks">Dunnage Racks</DropDownItem>
            <DropDownItem menuItem="Dining Tablse & Booths">
              Dining Tables & Booths
            </DropDownItem>
            <DropDownItem menuItem="Dining Chairs">Dining Chairs</DropDownItem>
          </div>
        </CSSTransition>
        <CSSTransition
          in={activeMenu === "Janitorial & Chemicals"}
          unmountOnExit
          timeout={500}
          classNames="menu-secondary"
          onEnter={calcHeight}
        >
          <div className="menu">
            <DropDownItem
              leftIcon={<FaRegArrowAltCircleLeft />}
              goToMenu="main"
            />
            <DropDownItem menuItem="all">All</DropDownItem>

            <DropDownItem menuItem="Pails">Pails</DropDownItem>

            <DropDownItem menuItem="Brooms">Brooms</DropDownItem>
            <DropDownItem menuItem="Mops">Mops</DropDownItem>
            <DropDownItem menuItem="Gloves">Gloves</DropDownItem>
            <DropDownItem menuItem="Chemicals">Chemicals</DropDownItem>
            <DropDownItem menuItem="Cleaning Supplies">
              Cleaning Supplies
            </DropDownItem>
            <DropDownItem menuItem="Pest Control">Pest Control</DropDownItem>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === "Clothing"}
          unmountOnExit
          timeout={500}
          classNames="menu-secondary"
          onEnter={calcHeight}
        >
          <div className="menu">
            <DropDownItem
              leftIcon={<FaRegArrowAltCircleLeft />}
              goToMenu="main"
            />
            <DropDownItem menuItem="all">All</DropDownItem>

            <DropDownItem menuItem="Chef Shirts & Jackets">
              Chef Shirts & Jackets
            </DropDownItem>

            <DropDownItem menuItem="Chef Pants">Chef Pants</DropDownItem>
            <DropDownItem menuItem="Hats & Serving Gloves">
              Hats & Serving Gloves
            </DropDownItem>
            <DropDownItem menuItem="Aprons">Aprons</DropDownItem>
            <DropDownItem menuItem="Oven Mitts">Oven Mitts</DropDownItem>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === "Tabletop & Service"}
          unmountOnExit
          timeout={500}
          classNames="menu-secondary"
          onEnter={calcHeight}
        >
          <div className="menu">
            <DropDownItem
              leftIcon={<FaRegArrowAltCircleLeft />}
              goToMenu="main"
            />

            <DropDownItem menuItem="Glassware">Glassware</DropDownItem>

            <DropDownItem menuItem="Stemware">Stemware</DropDownItem>
            <DropDownItem menuItem="Dessert Glasses">
              Dessert Glasses
            </DropDownItem>
            <DropDownItem menuItem="Dinnerware">Dinnerware</DropDownItem>
            <DropDownItem menuItem="Flatware">Flatware</DropDownItem>
            <DropDownItem menuItem="Tumblers">Tumblers</DropDownItem>
            <DropDownItem menuItem="Melamine">Melamine</DropDownItem>
            <DropDownItem menuItem="Serveware">Serveware</DropDownItem>
            <DropDownItem menuItem="Squeeze Bottles">
              Squeeze Bottles
            </DropDownItem>
            <DropDownItem menuItem="Bar Supplies">Bar Supplies</DropDownItem>
            <DropDownItem menuItem="Disposbales & Takeout">
              Disposables & Takeout
            </DropDownItem>
            <DropDownItem menuItem="Bussing & Transport">
              Bussing & Transport
            </DropDownItem>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === "Smallwares"}
          unmountOnExit
          timeout={500}
          classNames="menu-secondary"
          onEnter={calcHeight}
        >
          <div className="menu">
            <DropDownItem
              leftIcon={<FaRegArrowAltCircleLeft />}
              goToMenu="main"
            />
            <DropDownItem menuItem="all">All</DropDownItem>

            <DropDownItem menuItem="Knives">Knives</DropDownItem>

            <DropDownItem menuItem="Japanese Knives">
              Japanese Knives
            </DropDownItem>
            <DropDownItem menuItem="Knife Sharpeners">
              Knife Sharpeners
            </DropDownItem>
            <DropDownItem menuItem="Stock Pots">Stock Pots</DropDownItem>
            <DropDownItem menuItem="Sauce Pots">Sauce Pots</DropDownItem>
            <DropDownItem menuItem="Braziers">Braziers</DropDownItem>
            <DropDownItem menuItem="Fry Pans">Fry Pans</DropDownItem>
            <DropDownItem menuItem="Cast Iron">Cast Iron</DropDownItem>
            <DropDownItem menuItem="Other Pots & Pans">
              Other Pots & Pans
            </DropDownItem>
            <DropDownItem menuItem="Sheet & Cookie Pans">
              Sheet & Cookie Pans
            </DropDownItem>
            <DropDownItem menuItem="Cake & Bread Pans">
              Cake & Bread Pans
            </DropDownItem>
            <DropDownItem menuItem="PIzza Pans & Screens">
              Pizza Pans & Screens
            </DropDownItem>
            <DropDownItem menuItem="Pizza Tools & Bags">
              Pizza Tools & Bags
            </DropDownItem>
            <DropDownItem menuItem="Steam Table Pans">
              Steam Table Pans
            </DropDownItem>
            <DropDownItem menuItem="Poly Food Pans">
              Poly Food Pans
            </DropDownItem>
            <DropDownItem menuItem="Food Storage">Food Storage</DropDownItem>
            <DropDownItem menuItem="Kitchen Utensils">
              Kitchen Utensils
            </DropDownItem>
          </div>
        </CSSTransition>
      </div>
    </OutsideClickHandler>
    // </div>
  );
}
export default NavDropdownMenu;
