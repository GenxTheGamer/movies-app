import React from "react";
import Links from "./Links";
import Logo from "./Logo";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <>
      <div className="container">
        <nav className="nav">
          <Logo />
          <Links />
        </nav>
      </div>
      ;
    </>
  );
}

export default NavBar;
