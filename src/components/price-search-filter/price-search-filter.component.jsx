import React from 'react';
import { FormInput } from "shards-react";

import './price-search-filter.styles.scss';

const PriceSearchFilter = () => {
    return (
        <div className='price-search-filter'>
            <p className='quick-price-search-item'>≤ $1</p>
            <p className='quick-price-search-item'>$1 - $80</p>
            <p className='quick-price-search-item'>$80 - $160</p>
            <p className='quick-price-search-item'>$160 - $240</p>
            <p className='quick-price-search-item'>$240 - $1,820</p>
            <p className='quick-price-search-item'>$1,820 - $3,400</p>
            <p className='quick-price-search-item'>$3,400 - $4,980</p>
            <p className='quick-price-search-item'>≥ 4,980</p>

            <div className='price-input-container'>
                <FormInput placeholder="$" className="price-input-item"/>
                <p className='price-input-text'> to </p>
                <FormInput placeholder="$" className="price-input-item"/>


            </div>


        </div>
    )
}

export default PriceSearchFilter;