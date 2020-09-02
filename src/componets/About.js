import React from "react";
import { Container, Row, Col } from "reactstrap";
import Footer from "./Footer";

import AboutImg from "../images/bg2.jpg";

import "../css/About.css";

function About() {
  return (
    <div>
      <Container>
        <Row>
          <div className="About__headingwrap">
            <h1 className="About__heading">About us</h1>
          </div>
        </Row>
        <div className="About__wrapper">
          <Row xs="1" sm="2">
            <Col>
              <img src={AboutImg} className="About__image" alt="logo" />
            </Col>
            <Col>
              <div>
                <h3>A School is a Place of Light ,Liberty And Learning</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nihil laboriosam, officia incidunt ad eveniet consequuntur
                  adipisci? Tempore amet minima atque!
                </p>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis, sint.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default About;
