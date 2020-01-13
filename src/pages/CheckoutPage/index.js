import React from "react";
import { connect } from "react-redux";

import "./styles.scss";

import {
  selectCartItems,
  selectCartTotal
} from "redux/reducers/cart/selectors";
import CheckoutItem from "components/CheckoutItem";

const CheckoutPage = ({ cartItems, totalValue = 0 }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(item => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <span className="total">TOTAL: ${totalValue}</span>
    </div>
  );
};

export default connect(state => ({
  cartItems: selectCartItems(state),
  totalValue: selectCartTotal(state)
}))(CheckoutPage);
