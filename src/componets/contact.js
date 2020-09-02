import React from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";

//import my css
import "../css/Showcase.css";
import "../css/contact.css";

//reusable
import MyButton from "../componets/Partials/PartialsJs/MyBotton";

import Footer from "./Footer";

function Contact() {
  return (
    <div className="contact__container">
      <Container className="showcase__form">
        <Row>
          <div className="showcase__headingContainer">
            <div className="showcase__headeing">
              <h3 className="showcase__headingText">
                <span className="showcase__coral">Cantact Us</span>
              </h3>
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
                    type="text"
                    name="email"
                    id="exampleEmail"
                    placeholder="emial"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row xs="1" sm="2">
              <Col>
                <FormGroup>
                  <Input
                    className="My__inputs"
                    type="text"
                    name="subject"
                    id="exampleEmail"
                    placeholder="enter subject"
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
      <Footer />
    </div>
  );
}

export default Contact;
