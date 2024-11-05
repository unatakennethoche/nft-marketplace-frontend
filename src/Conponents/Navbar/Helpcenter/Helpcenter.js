import React from "react";
import "./Helpcenter.scss";
function Helpcenter() {
  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];
  return (
    <div className="help-center-container">
      {helpCenter.map((el, i) => (
        <div key={i + 1} className="help-center">
          <a href={el.link}>{el.name}</a>
        </div>
      ))}
    </div>
  );
}

export default Helpcenter;
