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

const CategoriesFilter = () => {
  const [categories, setCategories] = useState({});
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

    fetchCategories();
  }, []);

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
        <Nav className="nav-categories">
          <NavItem>
            <TreeMenu
              data={categories}
              // onClickItem={({ key, label, ...props }) => {
              //   // <Link to={`/home`}></Link>;
              //   // <NavLink href="/test-category"></NavLink>;
              //   alert(`/category/${key}`);
              //   // setCategoryFilter(label);
              // }}
            >
              {/* <Link to=""></Link> */}
            </TreeMenu>
          </NavItem>
        </Nav>

        {/* <Nav>
          <NavItem>
            <TreeMenu
              // data={treeData}
              data={categories}
              onClickItem={({ key, label, ...props }) => {
                <NavItem key={key}>
                  <NavLink
                    to={`/search?category=${key}`}
                    onClick={() => alert("link clicked")}
                  ></NavLink>
                </NavItem>;

                // alert(key);
                // setCategoryFilter(label);
              }}
            ></TreeMenu>
          </NavItem>
        </Nav> */}
      </Collapsible>
    </div>
  );
};
export default CategoriesFilter;
