import React from "react";

import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

import "../css/Doing.css";
import "../css/PopularCourse.css";
import "../css/Showcase.css";
import Footer from "./Footer";

function PopularCourses() {
  return (
    <div>
      <div className="courses__container">
        <Row>
          <div className="showcase__headingContainer">
            <div className="showcase__headeing">
              <h3 className="showcase__headingText">
                <span className="popular_heading"> our Popular Courses</span>
              </h3>
            </div>
          </div>
        </Row>

        <Container>
          <Row xs="1" sm="4">
            <Col>
              <div>
                <Card className="course__cardOne">
                  <CardBody>
                    <div className="popular__headingwrap">
                      <CardTitle className="popular__cardheading ">
                        Active Learning
                      </CardTitle>
                    </div>

                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col>
              <div>
                <Card className="course__cardTwo">
                  <CardBody>
                    <div className="popular__headingwrap">
                      <CardTitle className="popular__cardheading ">
                        Full Day Programs
                      </CardTitle>
                    </div>

                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col>
              <div>
                <Card className="course__cardThree">
                  <CardBody>
                    <div className="popular__headingwrap">
                      <CardTitle className="popular__cardheading ">
                        Full Day Programs
                      </CardTitle>
                    </div>

                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col>
              <div>
                <Card className="course__cardFour">
                  <CardBody>
                    <div className="popular__headingwrap ">
                      <CardTitle className="popular__cardheading ">
                        Expert Teachers
                      </CardTitle>
                    </div>

                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default PopularCourses;
