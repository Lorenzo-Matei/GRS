import React from "react";

import "./menu-item.styles.scss";

import { Card, CardImg, CardImgOverlay } from "shards-react";

const MenuItem = (
  { title, imageUrl, imageDir } //passing in a prop (title) etc
) => (
  <div className="product-category-card">
    <Card style={{ height: "150px", width: "256px" }}>
      <CardImg className="card-image" src={imageDir} />
      <CardImgOverlay />

      <div class="CardBody" className="card-body">
        <h1 className="text"> {title}</h1>
      </div>
    </Card>
  </div>
);

export default MenuItem;
