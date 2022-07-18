import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brainlogo.png";
import "./logo.css";

const Logo = () => {
  return (
    <div className="logocontainer">
      <Tilt>
        <div className="imagecontainer w8">
          <img src={brain} alt="logo here" className="w-100"/>
          <h4 className="w-100">
            Smart <span>Brain</span>
          </h4>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
