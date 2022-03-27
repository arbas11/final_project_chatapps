import React from "react";
import "./nav.css";
import logo from "./../../images/dibimbing.png";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__blocks">
        <img src={logo} alt="logo dibimbing"></img>
      </div>
      <div className="nav__blocks"></div>
      <div className="nav__blocks"></div>
    </div>
  );
}

export default Nav;
