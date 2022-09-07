import React from "react";
import { Carousel } from "react-carousel-minimal";
import { Col, Row } from "shards-react";

import "./contact.styles.scss";

const cloudFrontDistributionMiscDomain =
  "https://dem6epkjrbcxz.cloudfront.net/misc/";

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <img
        className="contact-page-store-img"
        src={cloudFrontDistributionMiscDomain + "GRSStore.JPG"}
        alt={cloudFrontDistributionMiscDomain + "GRSStore.JPG"}
      />

      <div className="contact-page-card">
        <Row>
          <Col className="contact-info-col">
            <h1 id="contact-page-title"> Contact Us</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <hr id="contact-page-hr" />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h4 id="contact-page-subtitle"> Phone Number </h4>
          </Col>
          <Col>
            <h4 id="contact-page-subtitle">(519) 966-0950</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <hr id="contact-page-hr" />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h4 id="contact-page-subtitle"> Address </h4>
          </Col>
          <Col>
            <h4 id="contact-page-subtitle">
              1131 Crawford Ave Windsor, Ontario, Canada,{" "}
            </h4>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <hr id="contact-page-hr" />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h4 id="contact-page-subtitle"> Email </h4>
          </Col>
          <Col>
            <h4 id="contact-page-subtitle">sales@germainers.com</h4>
          </Col>
        </Row>

        {/* <h1 id="contact-page-title"> Contact Us</h1>
      </div>
      <div className="contact-page">
        <h3 id="contact-page-info"> Contact Us</h3> */}
      </div>
    </div>
  );
};

export default ContactPage;
