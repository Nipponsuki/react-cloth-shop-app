import React from "react";
import { connect } from "react-redux";

import "./styles.scss";

import { ReactComponent as ShoppingIcon } from "assets/icons/cart.svg";

import { toggleCartHidden } from "redux/actions/cart";
import { selectCartItemsCount } from "redux/reducers/cart/selectors";

const CartIcon = ({ toggleCartHidden, itemCount = 0 }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden} type="button">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default connect(state => ({ itemCount: selectCartItemsCount(state) }), {
  toggleCartHidden
})(CartIcon);
