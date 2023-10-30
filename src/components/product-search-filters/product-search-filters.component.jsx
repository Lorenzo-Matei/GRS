import React from "react";
import { Rating } from "react-simple-star-rating";
import { Button, Collapse, Card, CardBody, CardImg } from "shards-react";
import { BackgroundSyncPlugin } from "workbox-background-sync";
import CategoriesFilter from "../categories-filter/categories-filter.component";
import BrandsFilter from "../brands-filter/brands-filter.component";

import "./product-search-filters.styles.scss";
import RatingsFilter from "../ratings-filter/ratings-filter.component";
import PriceSearchFilter from "../price-search-filter/price-search-filter.component";

const ProductSearchFilters = () => {
  return (
    <Card className="search-filter-card">
      <CardBody className="search-filter-cardbody">
        <Button className="reset-filters-button" outline theme="danger">
          Reset
        </Button>

        <hr className="hr" />

        <CategoriesFilter className="categories-container" />
        <BrandsFilter className="brands-container" />

        <h5 id="filter-title">Ratings</h5>
        <RatingsFilter />

        <h5 id="filter-title">Price</h5>
        <PriceSearchFilter />
      </CardBody>
    </Card>
  );
};
export default ProductSearchFilters;
