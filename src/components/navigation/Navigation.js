import React from "react";
import Logo from '../logo/Logo';
import './navigations.css'
const Navigation = () => {
  return (
    <nav className="navcontainer flex justify-between items-center">
        <Logo/>
      <p className="f5 link dim black underline pointer">Sign Out</p>
    </nav>
  );
};

export default Navigation;
