import React from "react";
import "../Button/Button.scss";

function Button({ btnName, handleClick }) {
  return (
    <div className="btn-box">
      <button
        className="btn btn-success btn-style"
        onClick={() => handleClick()}
      >
        {btnName}
      </button>
    </div>
  );
}

export default Button;
