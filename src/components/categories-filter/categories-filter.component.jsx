import React from 'react';
import { CSSTransition } from "react-transition-group";
import Collapsible from 'react-collapsible';
import {Button} from 'shards-react';

import {Treebeard} from 'react-treebeard';


import './collapsible-filter.styles.scss';
import TreeMenu from '../tree-menu/tree-menu.component.jsx';
import TreeData from '../../categories-data.json';

// create a button that has a collapsible layer where all the departments are.
// this will dropdown and show all categories

//when you click on a category then all products under that category will populate the product list component.
// furthermore, under the category menu, the children of that category will be available to further click.
// refer to https://community.algolia.com/instantsearch.js/v1/examples/e-commerce/ for example


const CategoriesFilter = () => {

    return (
        <div className='collapsible-filter-container'>
            <Collapsible trigger={<Button className='collapsible-filter-btn' outline  theme="light">Categories</Button>} className='categories-collapsible' >
                <div className="col-lg-14 text-left text-dark">
                    <TreeMenu data={TreeData}/>
                </div>
            </Collapsible>
            
        </div>
        

    )
}
export default CategoriesFilter;