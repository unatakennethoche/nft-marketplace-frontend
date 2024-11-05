import React from "react";

import "../HeroSection/Hero.scss";
import hero from "../images/hero.png";
import { CgSearch } from "react-icons/cg";

function Hero() {
  return (
    <div className="container container-style-hero">
      <div className="row hero-section-box">
        <div className="col-12 col-md-6 hero-section-left">
          <h1>Discover, Collect, and sell NFTs</h1>
          <p>
            Discover the most outstanding NFTs in all topic your NFTs and sell
            them
          </p>
          <button className="btn btn-success">
            Start your Search <CgSearch />
          </button>
        </div>
        <div className="col-12 col-md-6 hero-section-right">
          <img
            src={hero}
            alt="hero-image"
            width={500}
            height={500}
            className="hero-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
