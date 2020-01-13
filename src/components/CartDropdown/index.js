import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./styles.scss";

import Button from "components/Button";
import CartItem from "components/CartItem";

import { selectCartItems } from "redux/reducers/cart/selectors";
import { toggleCartHidden } from "redux/actions/cart";

const CartDropdown = ({ cartItems, toggleCartHidden }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Link to="/checkout" className="link" onClick={toggleCartHidden}>
        <Button>GO TO CHECKOUT</Button>
      </Link>
    </div>
  );
};

export default connect(state => ({ cartItems: selectCartItems(state) }), {
  toggleCartHidden
})(CartDropdown);
