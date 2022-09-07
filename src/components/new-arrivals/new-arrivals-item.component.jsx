import React from 'react';
import './new-arrivals-item.styles.scss';
// import ReactStars from "react-rating-stars-component";
// import Rater from 'react-rater';
// import 'react-rater/lib/react-rater.css';

import {Rating} from 'react-simple-star-rating';

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

const NewArrivalItem = ({id, productImage, productName,productRating, productPrice}) => (
    // <div className='new-arrivals-item-card-container'>
    <Card className="new-arrivals-item-card" >
        {/* <CardImgOverlay/> */}
        <div className='new-arrivals-card-img-container'>
            <CardImg className="new-arrivals-card-img" src={productImage}/>
            {/* <Button outline pill theme="light" className="quick-view-button">Quick View</Button> */}


        </div>
        <CardBody className="new-arrivals-item-cardbody">
            <div className='new-arrivals-product-name-container'>
                <p className='new-arrivals-card-product-name'>{productName}</p>
            </div>
            
            {/* <div className='quick-view-container'> */}
                {/* <Button outline pill theme="light" className="quick-view-button">Quick View</Button> */}
            {/* </div> */}

            <div className='react-stars-rating-container'>
                <Rating className='new-arrivals-stars-rating' size={10} ratingValue={productRating*20} readonly='true'/>
            </div>

            <div className='new-arrivals-price-container'>
                <Card className="new-arrivals-price-card" >
                    <div className='product-price-container'>
                        <p className='product-price'>{productPrice}</p>
                    </div>

                </Card>
            </div>

        </CardBody>
    </Card>


);

export default NewArrivalItem;




