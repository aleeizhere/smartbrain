import React from "react";
import Logo from "../logo/Logo";
import "./navigations.css";
const Navigation = ({ issignedin, setsignedin, currstatus, setcurrstatus }) => {
  if (issignedin) {
    return (
      <nav className="navcontainer flex justify-between items-center">
        <Logo />
        <p
          className="f5 link dim black underline pointer"
          onClick={() => {
            setsignedin(false);
            setcurrstatus("signin");
          }}
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return currstatus === "signin" ? (
      <nav className="navcontainer flex justify-between items-center">
        <Logo />
        <p
          className="f5 link dim black underline pointer"
          onClick={() => {
            setcurrstatus("register");
          }}
        >
          Register
        </p>
      </nav>
    ) : (
      <nav className="navcontainer flex justify-between items-center">
        <Logo />
        <p
          className="f5 link dim black underline pointer"
          onClick={() => {
            setcurrstatus("signin");
          }}
        >
          Sign In
        </p>
      </nav>
    );
  }
};

export default Navigation;
