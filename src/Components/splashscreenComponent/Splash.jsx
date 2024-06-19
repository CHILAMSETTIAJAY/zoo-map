import React from "react";
import logoText from "../../assets/logo-text.png";
import "./splash.css";

const Splash = () => {
  return (
    <>
      <div className="splash-container">
        <img src={logoText} alt="Logo with text" className="splash-image" />
        <p className="creator">Created by @Ajay Chilamsetti</p>
      </div>
    </>
  );
};

export default Splash;
