import React from "react";

import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import CardBodyTitleSubtitleExample from "../test-components/card-tile.component";

import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  CardImgOverlay,
  CardSubtitle,
} from "shards-react";

import bakingCategoryImage from "../prod-category-images/baking-category.jpg";
import clothingCategoryImage from "../prod-category-images/clothing-category.jpg";
import countertopCategoryImage from "../prod-category-images/countertop-category.jpg";
import disposableCategoryImage from "../prod-category-images/disposable-category.jpg";
import equipmentCategoryImage from "../prod-category-images/equipment-category.jpg";
import glassCategoryImage from "../prod-category-images/glass-and-porcelain-category.jpg";
import knivesCategoryImage from "../prod-category-images/knives-category.jpg";
import pizzaCategoryImage from "../prod-category-images/pizza-category.jpg";

class Directory extends React.Component {
  constructor() {
    // this establishes the normal functions that comes with a React Class or component
    super(); //this enables you to use the react.component methods.

    this.state = {
      sections: [
        {
          title: "Baking",
          imageDir: bakingCategoryImage, //grabs image imported from the top
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "Clothing",
          imageDir: clothingCategoryImage,
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "Countertop",
          imageDir: countertopCategoryImage,
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "Disposable",
          imageDir: disposableCategoryImage,
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "Equipment",
          imageDir: equipmentCategoryImage,
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
        {
          title: "Glass & Porcelain",
          imageDir: glassCategoryImage,
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 6,
          linkUrl: "shop/mens",
        },
        {
          title: "Knives",
          imageDir: knivesCategoryImage,
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 7,
          linkUrl: "shop/mens",
        },
        {
          title: "Pizza",
          imageDir: pizzaCategoryImage,
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 8,
          linkUrl: "shop/mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-container">
        <div className="directory-title">
          <Card className="title-card" style={{ height: "50px" }}>
            <CardBody className="category-title">
              <h4 class="card-title" className="card-title-text">
                Shop By Category
              </h4>
            </CardBody>
          </Card>
        </div>

        <div className="directory-menu">
          {this.state.sections.map(
            (
              { title, imageDir, imageUrl, id } // this takes all the variables above in an array as arguments. Its like passing an array
            ) => (
              <MenuItem
                key={id}
                title={title}
                imageDir={imageDir}
                imageUrl={imageUrl}
              />
            )
          )}
        </div>
      </div>
    );
  }
}

export default Directory;
