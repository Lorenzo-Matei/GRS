import { render } from '@testing-library/react';
import React from 'react';
import { Card } from 'shards-react';

import OnSaleSection from '../on-sale/on-sale.component';
import NewArrivalSection from '../new-arrivals/new-arrivals.component';

import './promo-section.styles.scss';

const PromoSection = () => (
    <div class='grid-container' className='promo-section-container'>
        <div class="grid-item grid-item-1">
            <NewArrivalSection/>
        </div>

        <div class="grid-item grid-item-2">
            <OnSaleSection/>
        </div>

    </div>


);



export default PromoSection;