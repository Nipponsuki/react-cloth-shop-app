import React from "react";
import { connect } from "react-redux";
import "./styles.scss";

import { ReactComponent as ShoppingIcon } from "assets/icons/cart.svg";

import { toggleCartHidden } from "redux/actions/cart";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden} type="button">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default connect(null, { toggleCartHidden })(CartIcon);
