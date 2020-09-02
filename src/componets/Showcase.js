import React from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";

//import my css
import "../css/Showcase.css";

//reusable
import MyButton from "../componets/Partials/PartialsJs/MyBotton";

function Showcase() {
  return (
    <div className="showcase__container">
      <Container className="showcase__form">
        <Row>
          <div className="showcase__headingContainer">
            <div className="showcase__headeing">
              <h3 className="showcase__headingText">
                <span>Welcome to</span>{" "}
                <span className="showcase__coral">My school</span>
              </h3>
              <h3 className="showcase__headingText">Best for Education</h3>
              <p className="showcase__paragraph"> join My School Now</p>
            </div>
          </div>
        </Row>

        <div className="showcase__formwrap">
          <Form>
            <Row xs="1" sm="2">
              <Col>
                <FormGroup>
                  <Input
                    className="My__inputs"
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="First Name"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Input
                    className="My__inputs"
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Last Name"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row xs="1" sm="2">
              <Col>
                <FormGroup>
                  <Input
                    className="My__inputs"
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Mobile Number"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Input
                    className="My__inputs"
                    type="textarea"
                    name="text"
                    placeholder="Your Message"
                    id="exampleText"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row xs="1" sm="2">
              <div className="showcase_divsionwrapper">
                <MyButton className="showCaseBtn" myBtn={"sign up"} />
              </div>
            </Row>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default Showcase;
