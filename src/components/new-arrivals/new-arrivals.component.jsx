import React from "react";

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

import "./new-arrivals.styles.scss";

import Carousel from "react-elastic-carousel";
import NewArrivalItem from "./new-arrivals-item.component.jsx";

import cardBackground from "../new-arrivals/promo-cards-background.jpg";
import cardBackground4 from "../on-sale/wooden-board2.jpg";

import { NeuDiv } from "neumorphism-react";

import CommercialOven from "../../assets/images/new-arrivals/commercial-oven.jpg";
import DishWasher from "../../assets/images/new-arrivals/dishwasher.jpg";
import Fridge from "../../assets/images/new-arrivals/fridge.jpg";
import KitchenRack from "../../assets/images/new-arrivals/kitchen-rack.jpg";
import JapaneseKnife from "../../assets/images/new-arrivals/japanese-knife.jpg";
import Ladle from "../../assets/images/new-arrivals/ladle.jpg";
import PizzaOven from "../../assets/images/new-arrivals/pizza-oven.jpg";
import PotsAndPans from "../../assets/images/new-arrivals/pot-and-pan-set.jpg";

class NewArrivalSection extends React.Component {
  constructor() {
    const cloudFrontDistributionDomain =
      "https://dem6epkjrbcxz.cloudfront.net/test-products-images-nobg/";

    super();
    this.breakPoints = [
      { width: 157, itemsToShow: 1 },
      { width: 314, itemsToShow: 2, itemsToScroll: 2, pagination: true },
      { width: 461, itemsToShow: 5 },
      { width: 600, itemsToShow: 4, itemsToScroll: 2 },
      { width: 1450, itemsToShow: 5 },
      { width: 1750, itemsToShow: 6 },
    ];

    this.state = {
      sections: [
        {
          productName: "Vulcan LG300 Fryer 40lb Natural Gas",
          productImage: cloudFrontDistributionDomain + "vulcan-lg300.png",
          productRating: 5,
          productPrice: "CALL",
          id: 1,
        },
        {
          productName:
            "Vulcan 70 lb double fryer with Filter and Digital Controls Natural Gas",
          productImage: cloudFrontDistributionDomain + "vulcan-2tr45df.png",
          productRating: 4.7,
          productPrice: "CALL",
          id: 2,
        },
        {
          productName: "Vulcan MSA Series Griddle 48 inch Natural Gas",
          productImage: cloudFrontDistributionDomain + "vulcan-msa48.png",
          productRating: 4.2,
          productPrice: "CALL",
          id: 3,
        },
        {
          productName:
            "Vulcan VACB Achiever Series Charbroiler 60 inch Natural Gas",
          productImage: cloudFrontDistributionDomain + "vulcan-vacb60.png",
          productRating: 5,
          productPrice: "CALL",
          id: 4,
        },
        {
          productName: "Vulcan Endurance Series Range 36 inch 6 Burner",
          productImage: cloudFrontDistributionDomain + "vulcan-36s6b.png",
          productRating: 5,
          productPrice: "CALL",
          id: 5,
        },
        {
          productName: "Vulcan MINI-JET Combi Oven 208V",
          productImage: cloudFrontDistributionDomain + "vulcan-mini-jet.png",
          productRating: 5,
          productPrice: "CALL",
          id: 6,
        },
        {
          productName:
            "Vulcan VP Series Proofing & Holding Cabinet 18 Pan 120V",
          productImage: cloudFrontDistributionDomain + "vulcan-vp18.png",
          productRating: 4.5,
          productPrice: "CALL",
          id: 7,
        },
        {
          productName: "Vulcan VCRH Series Hot Plate 24 inch Natural Gas",
          productImage: cloudFrontDistributionDomain + "vulcan-vcrh24.png",
          productRating: 4,
          productPrice: "CALL",
          id: 8,
        },
        {
          productName:
            "Vulcan VC4 Series Convection Oven Single Deck Natural Gas",
          productImage: cloudFrontDistributionDomain + "vulcan-vc4gd.png",
          productRating: 4,
          productPrice: "CALL",
          id: 9,
        },
        {
          productName:
            "Vulcan VC5 Series Convection Oven Single Deck Natural Gas",
          productImage: cloudFrontDistributionDomain + "vulcan-vc5gd.png",
          productRating: 5,
          productPrice: "CALL",
          id: 10,
        },
      ],
    };
  }

  render() {
    return (
      <div className="new-arrivals-container">
        <Card className="new-arrivals-card" style={{}}>
          {/* <CardImgOverlay/> */}
          {/* <CardImg className='new-arrivals-card-background' />  */}
          <div class="CardBody" className="new-arrivals-card-body">
            <NeuDiv
              className="new-arrivals-title-neumorph"
              width="90%"
              height="15%"
              revert
              color="#ddd"
              radius={15}
            >
              <h3 className="new-arrivals-title">New Arrivals</h3>
            </NeuDiv>

            <Carousel
              breakPoints={this.breakPoints}
              className="new-arrivals-carousel"
              itemPadding={[0, 5]}
              outerSpacing={[15]}
            >
              {this.state.sections.map(
                ({
                  id,
                  productName,
                  productImage,
                  productRating,
                  productPrice,
                }) => (
                  <NewArrivalItem
                    key={id}
                    productName={productName}
                    productImage={productImage}
                    productRating={productRating}
                    productPrice={productPrice}
                  />
                )
              )}
              {/* <h5 style={{ color: "#ddd" }}>Coming Soon</h5> */}
            </Carousel>
          </div>
        </Card>
      </div>
    );
  }
}
export default NewArrivalSection;
