import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">HOME</Link>
      <Link to="/profile">PROFILE</Link>
    </nav>
  );
};

export default NavBar;
