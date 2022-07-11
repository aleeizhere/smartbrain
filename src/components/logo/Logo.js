import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brainlogo.png";
import "./logo.css";

const Logo = () => {
  return (
    <div className="logocontainer">
      <Tilt>
        <div className="imagecontainer">
          <img src={brain} alt="logo here" />
          <h4>
            Smart <span>Brain</span>
          </h4>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
