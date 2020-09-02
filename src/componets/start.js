import React from "react";
import { Container, Row, Col, CardText, CardBody, CardTitle } from "reactstrap";

//import my css
import "../css/Showcase.css";
import "../css/Doing.css";
import "../css/PopularCourse.css";
import "../css/Doing.css";
import "../css/start.css";

//import  kid component
import Kid from "./kid";

//import show from "../images/1.jpg";

function start() {
  return (
    <div className="start__container">
      <Container className="showcase__form">
        <Row>
          <div className="showcase__headingContainer">
            <div className="showcase__headeing">
              <h3 className="showcase__headingText">
                <span className="showcase__coral">our statistics</span>
              </h3>
            </div>
          </div>
        </Row>
      </Container>
      <Container>
        <Row xs="1" sm="4">
          <Col>
            <Kid />
          </Col>
          <Col>
            <div>
              <CardBody>
                <div className="popular__headingwrap">
                  <CardTitle className="popular__cardheading ">50+</CardTitle>
                </div>

                <CardText>total teachers</CardText>
              </CardBody>
            </div>
          </Col>
          <Col>
            <div>
              <CardBody>
                <div className="popular__headingwrap">
                  <CardTitle className="popular__cardheading ">100+</CardTitle>
                </div>

                <CardText>class</CardText>
              </CardBody>
            </div>
          </Col>
          <Col>
            <div>
              <CardBody>
                <div className="popular__headingwrap ">
                  <CardTitle className="popular__cardheading ">30+</CardTitle>
                </div>

                <CardText>School buses</CardText>
              </CardBody>
            </div>
          </Col>
        </Row>
      </Container>
      <br />
    </div>
  );
}

export default start;
