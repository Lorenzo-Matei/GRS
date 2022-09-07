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
import { MdOutlineMicrowave } from "react-icons/md";
import { BsCupStraw } from "react-icons/bs";
import { FaSink } from "react-icons/fa";

import { CgSmartHomeRefrigerator, CgDatabase } from "react-icons/cg";
import { ImSpoonKnife } from "react-icons/im";

import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

function NavDropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

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

  return (
    // <div className="dropdown-container">
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
          <DropDownItem
            leftIcon={<GiCampCookingPot />}
            rightIcon={<FaRegArrowAltCircleRight />}
            goToMenu="Cooking"
          >
            Cooking
          </DropDownItem>

          <DropDownItem
            leftIcon={<CgSmartHomeRefrigerator />}
            rightIcon={<FaRegArrowAltCircleRight />}
            goToMenu="Refrigeration"
          >
            Refrigeration
          </DropDownItem>

          <DropDownItem
            leftIcon={<GiManualMeatGrinder />}
            rightIcon={<FaRegArrowAltCircleRight />}
            goToMenu="Food Preparation"
          >
            Food Preparation
          </DropDownItem>

          <DropDownItem
            leftIcon={<BsCupStraw />}
            rightIcon={<FaRegArrowAltCircleRight />}
            goToMenu="Beverage, Food Display & Warmers"
          >
            Beverage, Food Display & Warmers
          </DropDownItem>

          <DropDownItem
            leftIcon={<FaSink />}
            rightIcon={<FaRegArrowAltCircleRight />}
            goToMenu="WareWashing, Sinks & Plumbing"
          >
            WareWashing, Sinks & Plumbing
          </DropDownItem>

          <DropDownItem
            leftIcon={<GiTable />}
            rightIcon={<FaRegArrowAltCircleRight />}
            goToMenu="Tables, Shelves & Furniture"
          >
            Tables, Shelves & Furniture
          </DropDownItem>

          <DropDownItem
            leftIcon={<GiChemicalTank />}
            rightIcon={<FaRegArrowAltCircleRight />}
            goToMenu="Janitorial & Chemicals"
          >
            Janitorial & Chemicals
          </DropDownItem>

          <DropDownItem
            leftIcon={<GiClothes />}
            rightIcon={<FaRegArrowAltCircleRight />}
            goToMenu="Clothing"
          >
            Clothing
          </DropDownItem>

          <DropDownItem
            leftIcon={<ImSpoonKnife />}
            rightIcon={<FaRegArrowAltCircleRight />}
            goToMenu="Tabletop & Service"
          >
            Tabletop & Service
          </DropDownItem>

          <DropDownItem
            leftIcon={<RiKnifeLine />}
            rightIcon={<FaRegArrowAltCircleRight />}
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
          />

          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Fryers
          </DropDownItem>

          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Charbroilers
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Griddles
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Hotplates
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Ranges
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Broilers
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Stockpot
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Ovens
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Rotisseries
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Gyros & Shawarma Machines
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Smokers
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Kettles
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Steamers
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Heated Holding & Proofers
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Toasters
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Panini Presses
          </DropDownItem>

          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Rice Cookers
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Crepe & Waffle Machines
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Gas Lines
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
          />

          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Upright Coolers
          </DropDownItem>

          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Upright Freezers
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Worktop & Undercounter Coolers
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Worktop & Undercounter Freezers
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Back Bar Coolers
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Sandwich Prep Tables
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Pizza Prep Tables
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Chef Bases
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Ice Machines
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Blast Freezers & Chillers
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Display Cases
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Ice Cream
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
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

          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Meat Grinders
          </DropDownItem>

          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Meat Saw
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Meat Tenderizers
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Sausage Stuffers
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Meat & Deli Slicers
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Planetary Mixers
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Dough Sheeters, Cutters & Presses
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Scales
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Salad Dryers
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Automatic Peelers
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Food Processors
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Blenders
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Immersion Blenders
          </DropDownItem>

          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Juicers
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Food Cutters
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Can Openers
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
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

          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Coffee Machines
          </DropDownItem>

          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Espresso Machines
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Coffee Grinders
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Hot Water Dispensers
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Juice & Slushy Machines
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Other Dispensers
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Steam Tables
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Microwaves
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Soup Warmers
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Food Warmers
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
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

          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Dishwashers
          </DropDownItem>

          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Dishwasher Detergents
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Sinks
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Handwash Sinks
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Faucets
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Faucet Parts
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Grease Traps
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Water Filters
          </DropDownItem>
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

          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Work Tables
          </DropDownItem>

          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Equipment Stands
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Casters
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Shelves
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Dunnage Racks
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Dining Tables & Booths
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Dining Chairs
          </DropDownItem>
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

          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Pails
          </DropDownItem>

          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Brooms
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Mops
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Gloves
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Chemicals
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Cleaning Supplies
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Pest Control
          </DropDownItem>
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

          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Chef Shirts & Jackets
          </DropDownItem>

          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Chef Pants
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Hats & Serving Gloves
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Aprons
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Oven Mitts
          </DropDownItem>
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

          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Glassware
          </DropDownItem>

          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Stemware
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Dessert Glasses
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Dinnerware
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Flatware
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Tumblers
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Melamine
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Serveware
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Squeeze Bottles
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Bar Supplies
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Disposables & Takeout
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
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

          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Knives
          </DropDownItem>

          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Japanese Knives
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Knife Sharpeners
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Stock Pots
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Sauce Pots
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Braziers
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Fry Pans
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Cast Iron
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Other Pots & Pans
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Sheet & Cookie Pans
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Cake & Bread Pans
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Pizza Pans & Screens
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Pizza Tools & Bags
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Steam Table Pans
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Poly Food Pans
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Food Storage
          </DropDownItem>
          <DropDownItem
          // leftIcon={<RiKnifeLine/>}
          >
            Kitchen Utensils
          </DropDownItem>
        </div>
      </CSSTransition>
    </div>

    // </div>
  );
}
export default NavDropdownMenu;
