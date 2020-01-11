import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

import { ReactComponent as Logo } from "assets/icons/crown.svg";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="shop" className="option">
          SHOP
        </Link>
        <Link to="shop" className="option">
          CONTACT
        </Link>
      </div>
    </header>
  );
};

export default Header;
