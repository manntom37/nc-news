import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";

const Nav = () => {
  return (
    <nav className="Nav">
      <Link to="/articles">
        <FaHome className="HomeButton" />
      </Link>
      <Link to={`/topics`}>
        <BiCategory className="CategoryIcon" />{" "}
      </Link>
      <FaUserCircle className="UserIcon" />
    </nav>
  );
};

export default Nav;
