import React from "react";
import { useState } from "react";
import "./Navbar.scss";
import { FaSearch } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import collection from "../images/collection.png";
import user1 from "../images/user-1.png";
import {
  Discover,
  Helpcenter,
  Notification,
  Profile,
  SideBar,
} from "./Navimports";
import Button from "../Button/Button";
// import { Button } from "bootstrap";

function Navbar() {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText == "HelpCenter") {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setDiscover(false);
      setHelp(false);
      setNotification(true);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(true);
    } else {
      setProfile(false);
    }
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top nav-style">
      <div className="container-fluid container-style">
        <div className="navbar-left">
          <div className="nav-brand-wrapper">
            <a href="#" className="navbar-brand">
              <img
                src={collection}
                alt="Collection"
                width={40}
                height={40}
                className="navbar-brand-image"
              />
            </a>
          </div>

          <div className="search">
            <input type="text" placeholder="search" className="search-input" />
            <FaSearch onClick={() => {}} className="search-icon" />
          </div>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
            aria-controls="nav"
            aria-label="Expand Navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        {/* col-12 col-md-6  */}
        <div className="navbar-right">
          <div
            className="collapse navbar-collapse navbar-collapse-style "
            id="nav"
          >
            <div className="collapse-content">
              {/* DISCOVER COMPONENT */}
              <div className="dicover-container space">
                <p onClick={(e) => openMenu(e)}>Discover</p>

                {discover && (
                  <div className="discover">
                    <Discover />
                  </div>
                )}
              </div>
              {/* HELPCENTER COMPONENTS */}
              <div className="helpcenter-container space">
                <p onClick={(e) => openMenu(e)}>HelpCenter</p>
                {help && (
                  <div className="help-center">
                    <Helpcenter />
                  </div>
                )}
              </div>
              {/* NOTIFICATION MENU */}
              <div className="notification space">
                <MdNotificationsActive
                  className="notify"
                  onClick={() => openNotification()}
                />
                {notification && <Notification />}
              </div>

              <div className="button space">
                <Button btnName="create" handleClick={() => {}} />
              </div>
              <div className="profile-container space">
                <div className="profile">
                  <img
                    src={user1}
                    alt="User"
                    width={30}
                    height={30}
                    onClick={() => openProfile()}
                    className="profile-image"
                  />
                  {profile && <Profile />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
