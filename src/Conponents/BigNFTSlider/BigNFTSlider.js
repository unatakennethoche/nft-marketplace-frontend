import { React, useState, useEffect, useCallback } from "react";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLine, TbArrowBigRightLine } from "react-icons/tb";

import user1 from "../images/user-1.png";
import user2 from "../images/user-2.png";
import user3 from "../images/user-3.png";
import user4 from "../images/user-4.png";
import nftImage1 from "../images/nft-image-1.png";
import nftImage2 from "../images/nft-image-2.png";
import nftImage3 from "../images/nft-image-3.png";
import nftImage4 from "../images/nft_1.png";
import "../BigNFTSlider/BigNFTSlider.scss";

function BigNFTSlider() {
  const [idNumber, setIdNumber] = useState(0);

  const sliderData = [
    {
      title: "Zico Nft",
      id: 1,
      name: "Naomi",
      collection: "Gym",
      price: "000067667 ETH",
      like: 353,
      image: user1,
      nftImage: nftImage1,
      time: {
        days: 23,
        hours: 19,
        minutes: 30,
        seconds: 57,
      },
    },
    {
      title: "Smart Nft",
      id: 2,
      name: "Debbi",
      collection: "Gym",
      price: "000088667 ETH",
      like: 400,
      image: user2,
      nftImage: nftImage2,
      time: {
        days: 2,
        hours: 14,
        minutes: 10,
        seconds: 60,
      },
    },
    {
      title: "Samuel Nft",
      id: 3,
      name: "Esther",
      collection: "Gym",
      price: "0002667 ETH",
      like: 200,
      image: user3,
      nftImage: nftImage3,
      time: {
        days: 29,
        hours: 1,
        minutes: 3,
        seconds: 5,
      },
    },
    {
      title: "Josh Nft",
      id: 4,
      name: "Precious",
      collection: "Gym",
      price: "0027667 ETH",
      like: 53,
      image: user4,
      nftImage: nftImage4,
      time: {
        days: 7,
        hours: 13,
        minutes: 18,
        seconds: 21,
      },
    },
  ];

  const inc = () => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  };
  const dec = () => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  };

  return (
    <div className="bigNFTSlider-container-style">
      <div className="row bigNFTSlider-container">
        <div className="col-12 col-md-6 bigNFTSlider-container-left">
          <h3 className="NFT-name">{sliderData[idNumber].title}</h3>
          <div className="bigNFTSlider-creator">
            <div className="bigNFTSlider-creator-profile">
              <img
                src={sliderData[idNumber].image}
                alt="user"
                width={50}
                height={50}
                className="creator-profile-image"
              />

              <div className="creator-profile-info">
                <p>Creator</p>
                <h4>
                  {sliderData[idNumber].name}{" "}
                  <span>
                    <MdVerified />{" "}
                  </span>{" "}
                </h4>
              </div>
            </div>
            <div className="bigNFTSlider-creator-collection">
              <AiFillFire className="collection-icon" />
              <div className="collection-info">
                <p>Collections</p>
                <h4>{sliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>
          <div className="bigNFTSlider-bidding">
            <div className="bigNFTSlider-bidding-box">
              <small>Current Bid</small>
              <p>
                {sliderData[idNumber].price} <span>$645477</span>
              </p>
            </div>
            <p className="bigNFTSlider-bidding-box-auction">
              <MdTimer className="bidding-box-auction-icon" />
              <span>Auction ending in</span>
            </p>
            <div className="bidding-auction-timer">
              <div className="bidding-auction-timer-item">
                <p>
                  {sliderData[idNumber].time.days} <span>Ds</span>
                </p>
              </div>
              <div className="bidding-auction-timer-item">
                <p>
                  {sliderData[idNumber].time.hours} <span>Hrs</span>
                </p>
              </div>
              <div className="bidding-auction-timer-item">
                <p>
                  {sliderData[idNumber].time.minutes} <span>Mins</span>
                </p>
              </div>
              <div className="bidding-auction-timer-item">
                <p>
                  {sliderData[idNumber].time.seconds} <span>Secs</span>
                </p>
              </div>
            </div>
            <div className="bigNFTSlider-left-btn">
              <button onClick={() => {}} className="btn btn-success btn-style">
                Place
              </button>
              <button onClick={() => {}} className="btn btn-success btn-style">
                View
              </button>
            </div>
          </div>
          <div className="bigNFTSlider-left-sliderBtn">
            <TbArrowBigRightLine
              className="bigNFTSlider-left-sliderBtn-icon"
              onClick={() => inc()}
            />
            <TbArrowBigLeftLine
              className="bigNFTSlider-left-sliderBtn-icon"
              onClick={() => dec()}
            />
          </div>
        </div>
        <div className="col-12 col-md-6 bigNFTSlider-container-right">
          <div className="bigNFTSlider-right-box">
            <img
              src={sliderData[idNumber].nftImage}
              alt="NFT-IMAGE"
              width={400}
              height={400}
            />
            <div className="biNFTSlider-right-like">
              <AiFillHeart />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigNFTSlider;
