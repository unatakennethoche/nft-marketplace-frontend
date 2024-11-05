import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import "../Subscribe/Subscribe.scss";
import update from "../images/update.png";

function Subscribe() {
  return (
    <div className="container subscribe-container-style">
      <div className="row m-3 subscribe-box">
        <div className="col-12 col-md-6 my-5 subscribe-box-left">
          <h2>Never miss a drop!</h2>
          <p>
            Subscribe to our super-exclusive drop list and be the first to know
            about upcoming drops
          </p>
          <div className="subscribe-left-box-highlight">
            <span>01 </span>
            <small>Get more discount</small>
          </div>
          <div className="subscribe-left-box-highlight">
            <span>02 </span>
            <small>Get premium discount</small>
          </div>
          <div className="subcribe-left-input">
            <input type="email" placeholder="Enter your Email" />
            <RiSendPlaneFill className="subscribe-left-icon" />
          </div>
        </div>
        <div className="col-12 col-md-6 subscribe-box-right">
          <img
            src={update}
            alt="NFT update"
            width={600}
            height={400}
            className="subscribe-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
