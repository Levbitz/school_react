import React from "react";
import { Parallax } from "react-parallax";

import Doing from "./Doing";
import "../css/parallax.css";

const parallax = () => (
  <div className="parallax__container">
    <Parallax>
      <Doing />
    </Parallax>
  </div>
);
export default parallax;
