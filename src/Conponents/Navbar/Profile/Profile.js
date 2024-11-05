import React from "react";
import "./Profile.scss";
import user1 from "../../images/user-1.png";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownload, TbDownloadOff } from "react-icons/tb";
import { Helpcenter } from "../Navimports";

function Profile() {
  return (
    <div className="profile-container">
      <div className="account-container">
        <div className="profile-account">
          <img
            src={user1}
            alt="Profile-image"
            width={40}
            height={40}
            className="profile-account-image"
          />
        </div>
        <div className="profile-account-info">
          <h4>Unata Kenneth</h4>
          <small>0X82474298578j</small>
        </div>
        <div className="profile-menu">
          <div className="profile-menu-one">
            <div className="profile-menu-one-item">
              <FaUserAlt className="icon" />
              <p>
                <a href="#">My Profile</a>
              </p>
            </div>
            <div className="profile-menu-one-item">
              <FaRegImage className="icon" />
              <p>
                <a href="#">My Items</a>
              </p>
            </div>
            <div className="profile-menu-one-item">
              <FaUserEdit className="icon" />
              <p>
                <a href="#">Edit Profile</a>
              </p>
            </div>
          </div>
          <div className="profile-menu-two">
            <div className="profile-menu-one-item">
              <MdHelpCenter className="icon" />
              <p>
                <a href="Helpcenter">Help</a>
              </p>
            </div>
            <div className="profile-menu-one-item">
              <TbDownload className="icon" />
              <p>
                <a href="disconnect">Disconnect</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
