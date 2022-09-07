import React from 'react';

import {
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
    Button,
    CardImgOverlay,
    CardSubtitle
  } from "shards-react";

import './new-arrivals.styles.scss';

import Carousel from 'react-elastic-carousel';
import NewArrivalItem from './new-arrivals-item.component.jsx';

import cardBackground from '../new-arrivals/promo-cards-background.jpg';
import cardBackground4 from '../on-sale/wooden-board2.jpg'

import { NeuDiv } from "neumorphism-react";

import CommercialOven from '../../assets/images/new-arrivals/commercial-oven.jpg';
import DishWasher from '../../assets/images/new-arrivals/dishwasher.jpg';
import Fridge from '../../assets/images/new-arrivals/fridge.jpg';
import KitchenRack from '../../assets/images/new-arrivals/kitchen-rack.jpg';
import JapaneseKnife from '../../assets/images/new-arrivals/japanese-knife.jpg';
import Ladle from '../../assets/images/new-arrivals/ladle.jpg';
import PizzaOven from '../../assets/images/new-arrivals/pizza-oven.jpg';
import PotsAndPans from '../../assets/images/new-arrivals/pot-and-pan-set.jpg';

class NewArrivalSection extends React.Component{

  constructor(){
    super()
    this.breakPoints = [
      { width: 157, itemsToShow: 1 },
      { width: 314, itemsToShow: 2, itemsToScroll: 2, pagination: true },
      { width: 461, itemsToShow: 5 },
      { width: 600, itemsToShow: 4, itemsToScroll: 2 },
      { width: 1450, itemsToShow: 5 },
      { width: 1750, itemsToShow: 6 },
    ]

  this.state = {
    sections : [
      {
        productName: 'Hobart Commercial Oven',
        productImage: CommercialOven,
        productRating: 4,
        productPrice: "$5999.99",
        id: 1,
      },

      {
        productName: 'Mr.Clean Large Dishwasher',
        productImage: DishWasher,
        productRating: 3.7,
        productPrice: "$979.99",
        id: 2
      },

      {
        productName: 'Wellington Double Doored Stainless Steel Industrial Fridge',
        productImage: Fridge,
        productRating: 5,
        productPrice: "$2,479.99",
        id: 3
      },

      {
        productName: 'Sekura 12" Japanese Knife',
        productImage: JapaneseKnife,
        productRating: 5,
        productPrice: "$299.99",
        id: 4
      },

      {
        productName: 'MaxWell 5-foot Kitchen Rack',
        productImage: KitchenRack,
        productRating: 3.3,
        productPrice: "$255.99",
        id: 5
      },


      {
        productName: 'CuisinArt Stainless Steel Ladle',
        productImage: Ladle,
        productRating: 4.3,
        productPrice: "$12.99",
        id: 6
      },

      {
        productName: 'MaMaMia Pizza Oven 5-foot',
        productImage: PizzaOven,
        productRating: 3.5,
        productPrice: "$10,399.99",
        id: 7
      },

      {
        productName: 'MainStays Pots & Pans (set of 7)',
        productImage: PotsAndPans,
        productRating: 4,
        productPrice: "$219.47",
        id: 8
      },

    ]

  }
}

  render(){
      return(
          <div className='new-arrivals-container'>
              <Card className='new-arrivals-card' style={{}}>
                {/* <CardImgOverlay/> */}
                {/* <CardImg className='new-arrivals-card-background' />  */}
                <div class='CardBody' className='new-arrivals-card-body'>
                  
                  <NeuDiv className='new-arrivals-title-neumorph' width="90%" height="15%" revert color="#ddd"  radius={15}>
                      <h3 className='new-arrivals-title'>New Arrivals</h3>
                  </NeuDiv>

                  <Carousel breakPoints={this.breakPoints} className="new-arrivals-carousel" itemPadding={[0,5]} outerSpacing={[15]}>
                    {
                      this.state.sections.map(({id, productName, productImage,  productRating, productPrice}) =>(
                        <NewArrivalItem key={id} productName={productName} productImage={productImage} productRating={productRating} productPrice={productPrice}/>
                      ))
                    }

                  </Carousel>

                </div>

              </Card>

          </div>
      );

  }



}
export default NewArrivalSection;