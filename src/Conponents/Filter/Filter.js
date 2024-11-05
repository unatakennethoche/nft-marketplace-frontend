import { React, useState } from "react";
import {
  FaFilter,
  FaAngleDown,
  FaAngleUp,
  FaWallet,
  FaMusic,
  FaVideo,
  FaImages,
  FaUserAlt,
  FaImage,
} from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";

//INTERNAL IMPORT
import "../Filter/Filter.scss";

function Filter() {
  const [filter, setFilter] = useState(true);
  const [image, setImage] = useState(true);
  const [video, setVideo] = useState(true);
  const [music, setMusic] = useState(true);

  //FUNCTION SECTION
  const openFilter = () => {
    if (!filter) {
      setFilter(true);
    } else {
      setFilter(false);
    }
  };

  const openImage = () => {
    if (!image) {
      setImage(true);
    } else {
      setImage(false);
    }
  };

  const openVideo = () => {
    if (!video) {
      setVideo(true);
    } else {
      setVideo(false);
    }
  };
  const openMusic = () => {
    if (!music) {
      setMusic(true);
    } else {
      setMusic(false);
    }
  };
  return (
    <div className="container filter-container-style">
      <div className="row filter-box">
        <div className="col-12 col-md-6 filter-box-left">
          <button onClick={() => {}}>NFTs</button>
          <button onClick={() => {}}>Arts</button>
          <button onClick={() => {}}>Music</button>
          <button onClick={() => {}}>Sports</button>
          <button onClick={() => {}}>Photography</button>
        </div>
        <div className="col-12 col-md-6 filter-box-right">
          <div
            className="filter-right-content-box"
            onClick={() => openFilter()}
          >
            <FaFilter />
            <span>Filter</span>
            {filter ? <FaAngleDown /> : <FaAngleUp />}
          </div>
        </div>
      </div>
      {filter && (
        <div className="fiter-box-items">
          <div className="filter-content-box">
            <div className="filter-box-item">
              <FaWallet /> <span>0.01 ETH - 10 ETH</span>
              <AiFillCloseCircle />
            </div>
          </div>
          <div className="filter-content-box">
            <div className="filter-box-item-trans" onClick={() => openImage()}>
              <FaImages /> <span>Images</span>
              {image ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>
          <div className="filter-content-box">
            <div className="filter-box-item-trans" onClick={() => openVideo()}>
              <FaVideo /> <span>Video</span>
              {video ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>
          <div className="filter-content-box">
            <div className="filter-box-item-trans" onClick={() => openMusic()}>
              <FaMusic /> <span>Music</span>
              {music ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>
          <div className="filter-content-box">
            <div className="filter-box-item" onClick={() => {}}>
              <FaUserAlt /> <span>Verified</span>
              <MdVerified />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Filter;
