import React from "react";

import { Container, Row, Col, Card } from "reactstrap";

import "../css/Doing.css";
import "../css/PopularCourse.css";

import "../css/Showcase.css";
import "../css/Gallary.css";

import ImgOne from "../images/g1.jpg";
import ImgTwo from "../images/g2.jpg";
import ImgThree from "../images/g3.jpg";
import ImgFour from "../images/g4.jpg";
import ImgFive from "../images/g5.jpg";
import ImgSix from "../images/g6.jpg";
import ImgSeven from "../images/g7.jpg";
import ImgEight from "../images/g8.jpg";
import ImgNine from "../images/g9.jpg";
import Footer from "./Footer";

function Gallary() {
  return (
    <div className="showcase__container">
      <Container className="showcase__form">
        <Row>
          <div className="showcase__headingContainer">
            <div className="showcase__headeing">
              <h3 className="showcase__headingText">
                <span className="showcase__coral">Our Gallary</span>
              </h3>
            </div>
          </div>
        </Row>
      </Container>

      <Container>
        <Row xs="1" sm="3">
          <Col>
            <div>
              <Card className="gallary__wrapper">
                <img src={ImgOne} alt="" className="gallary__img" />
              </Card>
            </div>
          </Col>
          <Col>
            <div>
              <Card className="gallary__wrapper">
                <img src={ImgTwo} alt="" className="gallary__img" />
              </Card>
            </div>
          </Col>
          <Col>
            <div>
              <Card className="gallary__wrapper">
                <img src={ImgThree} alt="" className="gallary__img" />
              </Card>
            </div>
          </Col>
        </Row>
        <Row xs="1" sm="3">
          <Col>
            <div>
              <Card className="gallary__wrapper">
                <img src={ImgFour} alt="" className="gallary__img" />
              </Card>
            </div>
          </Col>
          <Col>
            <div>
              <Card className="gallary__wrapper">
                <img src={ImgFive} alt="" className="gallary__img" />
              </Card>
            </div>
          </Col>
          <Col>
            <div>
              <Card className="gallary__wrapper">
                <img src={ImgSix} alt="" className="gallary__img" />
              </Card>
            </div>
          </Col>
        </Row>
        <Row xs="1" sm="3">
          <Col>
            <div>
              <Card className="gallary__wrapper">
                <img src={ImgSeven} alt="" className="gallary__img" />
              </Card>
            </div>
          </Col>
          <Col>
            <div>
              <Card className="gallary__wrapper">
                <img src={ImgEight} alt="" className="gallary__img" />
              </Card>
            </div>
          </Col>
          <Col>
            <div>
              <Card className="gallary__wrapper">
                <img src={ImgNine} alt="" className="gallary__img" />
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Gallary;
