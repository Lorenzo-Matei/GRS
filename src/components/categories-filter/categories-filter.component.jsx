import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Collapsible from "react-collapsible";
import { Button, Nav, NavItem } from "shards-react";

import { Treebeard } from "react-treebeard";

import "./collapsible-filter.styles.scss";
import TreeData from "../../categories-data.json";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { getError } from "../../util";
import axios from "axios";
import TreeMenu from "react-simple-tree-menu";

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
  const [categoryFilter, setCategoryFilter] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);

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

  const treeData = {
    Cooking: {
      // key
      label: "Cooking",
      // index: 0, // decide the rendering order on the same level
      nodes: {
        Broilers: {
          label: "Broilers",
          // index: 0,
        },
        Charbroilers: {
          label: "Charbroilers",
          // index: 1,
        },
        Fryers: {
          label: "Fryers",
          // index: 2,
        },
        Griddles: {
          label: "Griddles",
          // index: 3,
        },
        HeatedHoldingAndProofers: {
          label: "Heated Holding & Proofers",
          // index: 3,
        },
        Hotplates: {
          label: "Hotplates",
          // index: 3,
        },
        Kettles: {
          label: "Kettles",
          // index: 3,
        },
        Ovens: {
          label: "Ovens",
          // index: 3,
        },
        Ranges: {
          label: "Ranges",
          // index: 3,
        },
        Steamers: {
          label: "Steamers",
          // index: 3,
        },
        StockpotRanges: {
          label: "Stockpot Ranges",
          // index: 3,
        },
      },
    },

    "Warewashing, Sinks & Plumbing": {
      label: "Warewashing, Sinks & Plumbing",
      nodes: {
        WaterFilters: {
          label: "Water Filters",
          // index: 0,
        },
      },
    },
  };

  const testCategories = ["Cookings", "Warewashing, Sinks & Plumbing"];
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
        {/* <ul>
          {categories?.map((category) => (
            <li key={category} className="li-category">
              {category}
            </li>
          ))}
        </ul> */}

        <TreeMenu
          data={treeData}
          onClickItem={({ key, label, ...props }) => {
            // alert(label);
            setCategoryFilter(label);
          }}
        ></TreeMenu>
      </Collapsible>
    </div>
  );
};
export default CategoriesFilter;
