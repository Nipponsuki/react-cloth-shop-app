import React from "react";
import { connect } from "react-redux";

import "./styles.scss";

import Button from "components/Button";
import CartItem from "components/CartItem";
import { selectCartItems } from "redux/reducers/cart/selectors";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length > 0 &&
          cartItems.map(item => <CartItem key={item.id} item={item} />)}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default connect(state => ({ cartItems: selectCartItems(state) }))(
  CartDropdown
);
