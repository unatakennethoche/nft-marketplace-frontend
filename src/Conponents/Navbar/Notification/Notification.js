import React from "react";
import "./Notification.scss";
import user1 from "../../images/user-1.png";
function Notification() {
  return (
    <div className="notification">
      <p>Notification</p>
      <div className="notification-container">
        <div className="notifiction-image">
          <img src={user1} alt="Profile image" width={40} height={40} />
        </div>
        <div className="notification-info">
          <h4>Unata Kenneth</h4>
          <small>This will be user address</small>
          <small>3 minutes</small>
        </div>
      </div>
    </div>
  );
}

export default Notification;
