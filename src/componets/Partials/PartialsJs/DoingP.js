import React from "react";
import { CardText } from "reactstrap";

import "../PartialsCss/DoingP.css";

function DoingP({ CardParagraph }) {
  return (
    <div>
      <CardText className="doing__text">{CardParagraph}</CardText>
    </div>
  );
}

export default DoingP;
