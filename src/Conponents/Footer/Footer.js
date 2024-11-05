import React from "react";

import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";
import "../Footer/Footer.scss";
import { Discover, Helpcenter } from "../Navbar/Navimports";
import logo from "../images/logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="row footer-box">
        <div className="col-12 col-md-3 footer-box-social">
          <img src={logo} alt="footer-logo" width={60} height={60} />
          <p>
            The world first and largest digital marketplace for nft collectables
            and non-fungable tokens (NFT) Byu and sell exclusive digital items
          </p>
          <div className="footer-social">
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        <div className="col-12 col-md-3 footer-box-discover">
          <h4>Discover</h4>

          <Discover />
        </div>
        <div className="col-12 col-md-3 footer-box-helpcenter">
          <h4>Help Center</h4>
          <Helpcenter />
        </div>
        <div className="col-12 col-md-3 subscribe">
          <h4>Subscribe</h4>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your Email" />
            <RiSendPlaneFill className="subscribe-box-send" />
          </div>
          <div className="subscribe-box-info">
            <p>
              Discover,collect,and sell extraordinary NFT OpenSea is the first
              and largest NFT marketplace
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
