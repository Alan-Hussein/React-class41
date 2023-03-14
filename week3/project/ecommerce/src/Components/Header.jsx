import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-nav">
      <Link to="/">
        <p>Products</p>
      </Link>
      <Link to="/favorites">
        <p>Favourites</p>
      </Link>
    </div>
  );
};

export default Header;