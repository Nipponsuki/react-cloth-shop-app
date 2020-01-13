import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

import { ReactComponent as Logo } from "assets/icons/crown.svg";

import { auth } from "firebase/firebase.utils";

import CartIcon from "components/CartIcon";
import CartDropdown from "components/CartDropdown";
import { connect } from "react-redux";

const Header = ({ currentUser, hidden }) => {
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
        {currentUser && currentUser ? (
          <div className="option" type="button" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/auth">SIGN IN</Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </header>
  );
};

export default connect(state => ({ hidden: state.cart.hidden }))(Header);
