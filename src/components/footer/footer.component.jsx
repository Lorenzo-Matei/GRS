import React from "react";
import { Button } from "shards-react";
import './footer.styles.scss'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn, FaMailBulk, FaCcVisa, FaCcMastercard } from "react-icons/fa";
// import { } from 

const Footer = () => {
    return (
        <div className="footer-container">

            <div className="footer-category">
                <h1 className="footer-title">Menu</h1>
                <h3 className="footer-page">Home</h3>
                <h3 className="footer-page">Shop</h3>
                <h3 className="footer-page">Showcase</h3>
                <h3 className="footer-page">contact Us</h3>
                <h3 className="footer-page">Sign In</h3>
                <h3 className="footer-page">Cart</h3>
            </div>

            <div className="footer-category">
                <h1 className="footer-title">Shop Categories</h1>
                <h3 className="footer-page">Baking</h3>
                <h3 className="footer-page">Clothing</h3>
                <h3 className="footer-page">Countertop</h3>
                <h3 className="footer-page">Disposable</h3>
                <h3 className="footer-page">Equipment</h3>
                <h3 className="footer-page">Glass and Porcelain</h3>
                <h3 className="footer-page">Knives</h3>
                <h3 className="footer-page">Pizza</h3>
                <h3 className="footer-page">Smallware</h3>
            </div>

            <div className="footer-category">
                <h1 className="footer-title">Company</h1>
                <h3 className="footer-page">Contact Us</h3>
                <h3 className="footer-page">About Us</h3>
                <h3 className="footer-page">Services</h3>
                <h3 className="footer-page">Terms of Use</h3>
                <h3 className="footer-page">Privacy</h3>
                {/* services, product resources, Blog, Showroom */}
            </div>

            <div className="footer-category">
                <h1 className="footer-title">Support</h1>
                <h3 className="footer-page">Product Resources</h3>
                <h3 className="footer-page">FAQ</h3>
                <h3 className="footer-page">Blog</h3>



            </div>

            <div className="footer-category">
                <h1 className="footer-title">Social Media</h1>
                <Button className="footer-social-media-buttons" outline pill theme="light"><FaFacebookF className="social-media-icon"/></Button>
                <Button className="footer-social-media-buttons" outline pill theme="light"><FaInstagram className="social-media-icon"/></Button>
                <Button className="footer-social-media-buttons" outline pill theme="light"><FaTwitter className="social-media-icon"/></Button>
                <Button className="footer-social-media-buttons" outline pill theme="light"><FaYoutube className="social-media-icon"/></Button>
                <Button className="footer-social-media-buttons" outline pill theme="light"><FaLinkedinIn className="social-media-icon"/></Button>
                <Button className="footer-social-media-buttons" outline pill theme="light"><FaMailBulk className="social-media-icon"/></Button>

                {/* includes social media links */}
            </div>

            <div className="footer-category">
                <h1 className="footer-title">We Accept</h1>
                <FaCcVisa size={70} className="footer-icons-payment"/>
                <FaCcMastercard size={70} className="footer-icons-payment"/>

            </div>




        </div>
    )

}

export default Footer;
