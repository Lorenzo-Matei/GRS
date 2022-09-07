import React from 'react';
import { Rating } from 'react-simple-star-rating';


import './ratings-filter.styles.scss';

const RatingsFilter = () => {
    var num5Stars = 44
    var num4Stars = 30
    var num3Stars = 5
    var num2Stars = 12
    var num1Stars = 3


    var textString = [num1Stars,num2Stars,num3Stars, num4Stars, num5Stars]

    return (
        <div className='ratings-container'>
            <div className='rating-item'>
                <Rating 
                ratingValue={100}
                readonly={true}
                size={25}
                onClick={null}
                showTooltip
                tooltipArray={textString}
                tooltipStyle= {{borderRadius: "50px",}}
                /> 
            </div>

            <div className='rating-item'>
                <Rating 
                ratingValue={80}
                readonly={true}
                size={25}
                onClick={null}
                showTooltip
                tooltipArray={textString}
                tooltipStyle= {{borderRadius: "50px",}}
                /> 
            </div>

            <div className='rating-item'>
                <Rating 
                ratingValue={60}
                readonly={true}
                size={25}
                onClick={null}
                showTooltip
                tooltipArray={textString}
                tooltipStyle= {{borderRadius: "50px",}}
                />
            </div>

            <div className='rating-item'>
                <Rating 
                ratingValue={40}
                readonly={true}
                size={25}
                onClick={null}
                showTooltip
                tooltipArray={textString}
                tooltipStyle= {{borderRadius: "50px",}}
                />
            </div>

            <div className='rating-item'>
                <Rating 
                ratingValue={20}
                readonly={true}
                size={25}
                onClick={null}
                showTooltip
                tooltipArray={textString}
                tooltipStyle= {{borderRadius: "50px",}}
                />
            </div>
              
        </div>
    )
}

export default RatingsFilter;