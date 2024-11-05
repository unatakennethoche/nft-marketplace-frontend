import React from "react";

import "../Title/Title.scss";

function Title({ heading, paragraph }) {
  return (
    <div className="container title">
      <h2>{heading}</h2>
      <p>{paragraph}</p>
    </div>
  );
}

export default Title;
