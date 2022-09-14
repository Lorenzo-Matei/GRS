import React from "react";
import "./carousel.styles.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import { UncontrolledCarousel } from "reactstrap";
import carouselExampleIndicators from "bootstrap";

import knifePromo from "../carousel/wusthof-knife.jpg";

const cloudFrontDistributionDomain =
  "https://dem6epkjrbcxz.cloudfront.net/promo-carousel/";

const CarouselItem = (
  { title, imageUrl, imageDir } //passing in a prop (title) etc
) => (
  <div className="promo-carousel">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src={cloudFrontDistributionDomain + "hobart1.jpg"}
            alt="First slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src={cloudFrontDistributionDomain + "hobart2.jpg"}
            alt="Second slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src={cloudFrontDistributionDomain + "hobart3.jpg"}
            alt="Third slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src={cloudFrontDistributionDomain + "hobart4.jpg"}
            alt="4th slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src={cloudFrontDistributionDomain + "hobart5.jpg"}
            alt="5th slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src={cloudFrontDistributionDomain + "hobart6.jpg"}
            alt="6th slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src={cloudFrontDistributionDomain + "hobart7.jpg"}
            alt="7th slide"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
);

export default CarouselItem;
