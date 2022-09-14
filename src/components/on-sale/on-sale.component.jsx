import React from "react";

import "./on-sale.styles.scss";

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

import cardBackground from "../new-arrivals/promo-cards-background.jpg";
import cardBackground2 from "../on-sale/cutting-board2.jpg";
import cardBackground3 from "../on-sale/wooden-board.jpg";
import cardBackground4 from "../on-sale/wooden-board2.jpg";
import cardBackground5 from "../../assets/images/backgrounds/blue-vector-background1.jpg";

import Carousel from "react-elastic-carousel";
import NewArrivalItem from "../new-arrivals/new-arrivals-item.component";
import { NeuDiv } from "neumorphism-react";

import RangeHood from "../../assets/images/on-sale/range-hood.jpg";
import Sink from "../../assets/images/on-sale/sink.jpg";
import Sink2 from "../../assets/images/on-sale/sink2.jpg";
import Skillet from "../../assets/images/on-sale/skillet1.jpg";
import Stove from "../../assets/images/on-sale/stove.jpg";
import Table1 from "../../assets/images/on-sale/table1.jpg";
import Table2 from "../../assets/images/on-sale/table2.jpg";
import Dishwasher2 from "../../assets/images/on-sale/dishwasher2.jpg";

class OnSaleSection extends React.Component {
  constructor() {
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
          productName: "Hobart 3-foot Rangehood",
          productImage: RangeHood,
          productRating: 3,
          productPrice: "$1,149.99",
          id: 1,
        },

        {
          productName: "WhirlPool Chrome Sink",
          productImage: Sink,
          productRating: 4.2,
          productPrice: "$779.99",
          id: 2,
        },

        {
          productName: "Wellington Double Sink with Fawcett",
          productImage: Sink2,
          productRating: 5,
          productPrice: "$926.00",
          id: 3,
        },

        {
          productName: 'Sekura 12" Steak Skillet',
          productImage: Skillet,
          productRating: 3.8,
          productPrice: "$99.15",
          id: 4,
        },

        {
          productName: "MaxiAppliance Industrial Stove and Oven",
          productImage: Stove,
          productRating: 4.1,
          productPrice: "$2,355.99",
          id: 5,
        },

        {
          productName: "CuisinArt Stainless Steel Table",
          productImage: Table1,
          productRating: 4.7,
          productPrice: "$862.00",
          id: 6,
        },

        {
          productName: 'Brogan 7" Expoxy Finish Wooden Table ',
          productImage: Table2,
          productRating: 4.5,
          productPrice: "$3,100.00",
          id: 7,
        },

        {
          productName: "LG High Impact Industrial DishWashing Machine",
          productImage: Dishwasher2,
          productRating: 4,
          productPrice: "$2019.99",
          id: 8,
        },
      ],
    };
  }

  render() {
    return (
      <div className="on-sale-container">
        <Card className="on-sale-card" style={{}}>
          {/* <CardImgOverlay/> */}
          {/* <CardImg className='on-sale-card-background' /> */}
          {/* src={cardBackground5}/> */}
          <div class="CardBody" className="on-sale-card-body">
            <NeuDiv
              className="on-sale-title-neumorph"
              width="90%"
              height="15%"
              revert
              color="#ddd"
              radius={15}
            >
              <h3 className="on-sale-title">On Sale</h3>
            </NeuDiv>

            <Carousel
              breakPoints={this.breakPoints}
              className="on-sale-carousel"
              itemPadding={[0, 5]}
              outerSpacing={[15]}
            >
              {/* {
                            this.state.sections.map(({id, productName, productImage,  productRating, productPrice}) =>(
                                <NewArrivalItem key={id} productName={productName} productImage={productImage} productRating={productRating} productPrice={productPrice}/>
                            ))
                        } */}
              <h5 style={{ color: "#ddd" }}>Sales Are Around The Corner</h5>
            </Carousel>
          </div>
        </Card>
      </div>
    );
  }
}

export default OnSaleSection;
