import React from "react";
import { Container, Row, Col, Card } from "reactstrap";

import "../css/Doing.css";

//re-useble components
import MycardBody from "../componets/Partials/PartialsJs/MycardBody";
import MyBotton from "../componets/Partials/PartialsJs/MyBotton";
import tee from "../images/te1.jpg";

function Doing() {
  return (
    <div className="doing__container">
      <Container>
        <Row>
          <div className="doing__headingwrap">
            <h3 className="doing__heading">What we do?</h3>
          </div>
        </Row>
        <Row xs="1" sm="3">
          <Col className="card__wrap">
            <div>
              <Card>
                <div className="doing__imagewrap">
                  <img src={tee} className="doing__image" alt="" />
                </div>

                <MycardBody
                  MyTitle={"Active Learning"}
                  myCardParagraph={
                    "lSome quick example text to build on the card title and make up the bulk of the card's content."
                  }
                />
                <MyBotton myBtn={"read more"} />
              </Card>
            </div>
          </Col>
          <Col className="card__wrap">
            <div>
              <Card>
                <div className="doing__imagewrap">
                  <img src={tee} className="doing__image" alt="" />
                </div>
                <MycardBody
                  MyTitle={"Active Learning"}
                  myCardParagraph={
                    "lSome quick example text to build on the card title and make up the bulk of the card's content."
                  }
                />
                <MyBotton myBtn={"read more"} />
              </Card>
            </div>
          </Col>
          <Col className="card__wrap">
            <div>
              <Card>
                <div className="doing__imagewrap">
                  <img src={tee} className="doing__image" alt="" />
                </div>
                <MycardBody
                  MyTitle={"Active Learning"}
                  myCardParagraph={
                    "lSome quick example text to build on the card title and make up the bulk of the card's content."
                  }
                />
                <MyBotton myBtn={"read more"} />
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Doing;
