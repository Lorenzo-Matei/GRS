import React, { useState } from "react";
import {FaHome, FaShoppingBag, FaVideo, FaPhoneVolume, FaSearch, FaShoppingCart, FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight} from 'react-icons/fa';
import { RiKnifeLine } from "react-icons/ri";
import OutsideClickHandler from "react-outside-click-handler";


import './nav-item-dropdown.styles.scss';

function NavItemDropdown (props) {
    const [open, setOpen] = useState(false);
    
//////////////
    return (
        <li className="nav-item-and-dropdown">
            <OutsideClickHandler onOutsideClick={() => {setOpen(false);}}>

                <a className='dropdown-icon-button'>
                    <button onClick={() => setOpen(!open)} type="button" class="btn btn-outline-light btn-pill nav-btn" >
                        <FaShoppingBag className="button-icon"/>
                        Shop
                    </button>
                </a>

                {open && props.children}

            </OutsideClickHandler>

        </li>


    );


} export default NavItemDropdown;