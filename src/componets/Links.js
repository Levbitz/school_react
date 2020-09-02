import React from "react";

import { Container, Row, Col, CardText, CardBody, CardTitle } from "reactstrap";

//import my css
import "../css/Showcase.css";
import "../css/Links.css";

//import ima

//import show from "../images/1.jpg";

function Links() {
  return (
    <div className="link__container">
      <Container className="link__wrapper">
        <Row xs="1" sm="4">
          <Col>
            <div>
              <div>
                <CardBody>
                  <div className="popular__headingwrap">
                    <CardTitle className="popular__cardheading ">
                      Navigation
                    </CardTitle>
                  </div>

                  <CardText>
                    <p>home</p>
                    <p>About</p>
                    <p>our gallary</p>
                  </CardText>
                </CardBody>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <div>
                <CardBody>
                  <div className="popular__headingwrap">
                    <CardTitle className="popular__cardheading ">
                      More
                    </CardTitle>
                  </div>

                  <CardText>
                    <p>Apply now</p>
                    <p>our Events</p>
                    <p>popular courses</p>
                  </CardText>
                </CardBody>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <div>
                <CardBody>
                  <div className="popular__headingwrap">
                    <CardTitle className="popular__cardheading ">
                      Get in touch
                    </CardTitle>
                  </div>

                  <CardText>
                    <p>+2322844939222</p>
                    <p>inf@yourgmail.com</p>
                  </CardText>
                </CardBody>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <div>
                <CardBody>
                  <div className="popular__headingwrap ">
                    <CardTitle className="popular__cardheading ">
                      our Statistics
                    </CardTitle>
                  </div>

                  <CardText>
                    <p>Login</p>
                    <p>Register</p>
                    <p>Contact us</p>
                  </CardText>
                </CardBody>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Links;
