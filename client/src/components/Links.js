import React from "react";
import { Link } from "react-router-dom";

function Links() {
  return (
    <>
      <div className="links-main">
        <Link to="/" className="navbar-brand">
          My First Mern Application
        </Link>

        <span className="items">
          <Link to="/movies/list" className="nav-link">
            List Movies
          </Link>
          <Link to="/movies/create" className="nav-link">
            Create Movie
          </Link>
        </span>
      </div>
      ;
    </>
  );
}

export default Links;
