import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Collapsible from "react-collapsible";
import { Button, Nav, NavItem } from "shards-react";

import { Treebeard } from "react-treebeard";

import "./collapsible-filter.styles.scss";
import TreeMenu from "../tree-menu/tree-menu.component.jsx";
import TreeData from "../../categories-data.json";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { getError } from "../../util";
import axios from "axios";
import { wait, waitFor } from "@testing-library/react";

// create a button that has a collapsible layer where all the departments are.
// this will dropdown and show all categories

//when you click on a category then all products under that category will populate the product list component.
// furthermore, under the category menu, the children of that category will be available to further click.
// refer to https://community.algolia.com/instantsearch.js/v1/examples/e-commerce/ for example

var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function () {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

const CategoriesFilter = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
        console.log("categories list: " + categories.data + " test");
        // });
      } catch (err) {
        toast.error(getError(err));
      }
    };
    //
    //
    fetchCategories();
  }, []);

  const productCategories = async () => {
    const categoriesData = await axios.get(`/api/categories`);
    setCategories(categoriesData.data);
    console.log("axios data: " + categoriesData.data);
  };

  const testCategories = ["Cooking", "Warewashing, Sinks & Plumbing"];
  return (
    <div className="collapsible-filter-container">
      <Collapsible
        trigger={
          <Button className="collapsible-filter-btn" outline theme="light">
            <strong>Categories</strong>
          </Button>
        }
        className="categories-collapsible"
      >
        {/* <div className="col-lg-14 text-left text-dark">
                    <TreeMenu data={TreeData}/>
                </div> */}
        {/* <p style={{ color: "#fff" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
          quidem consequatur. Reprehenderit consequatur earum sint provident
          exercitationem qui, quibusdam commodi itaque? Aut quo fugiat ut
          inventore, velit nobis tempore commodi?
        </p> */}
        <ul>
          {categories?.map((category) => (
            <li key={category} className="li-category">
              {category}
            </li>
          ))}
        </ul>

        {/* <Nav className="categories-nav">
          <ul id="myUL">
            <li>
              <span class="caret">Beverages</span>
              <ul class="nested">
                <li className="li-category">Water</li>
                <li className="li-category">Coffee</li>
                <li>
                  <span class="caret">Tea</span>
                  <ul class="nested">
                    <li>Black Tea</li>
                    <li>White Tea</li>
                    <li>
                      <span class="caret">Green Tea</span>
                      <ul class="nested">
                        <li>Sencha</li>
                        <li>Gyokuro</li>
                        <li>Matcha</li>
                        <li>Pi Lo Chun</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </Nav> */}
      </Collapsible>
    </div>
  );
};
export default CategoriesFilter;
