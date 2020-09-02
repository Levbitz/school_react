import React from "react";
import { CardText, CardBody, CardTitle } from "reactstrap";

import "../PartialsCss/MycardBody.css";

function MycardBody({ MyTitle, myCardParagraph }) {
  return (
    <CardBody>
      <div className="doing__headingwrap">
        <CardTitle className="doing__cardheading">{MyTitle}</CardTitle>
      </div>

      <CardText className="doing__text">{myCardParagraph}</CardText>
    </CardBody>
  );
}

export default MycardBody;
