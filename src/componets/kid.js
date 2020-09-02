import React from "react";
import "../css/start.css";

//import the kid img
import kidImg from "../images/img3.png";

function kid() {
  return (
    <div className="kidImg__wrapper">
      <img className="kid_img" src={kidImg} alt="" />
    </div>
  );
}

export default kid;
