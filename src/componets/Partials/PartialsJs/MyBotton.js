import React from "react";

import "../PartialsCss/MyButton.css";

function MyBotton({ myBtn }) {
  return (
    <div className="btn_wrap">
      <button className="custom__btn">{myBtn}</button>
    </div>
  );
}

export default MyBotton;
