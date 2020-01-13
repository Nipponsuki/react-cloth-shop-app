import React from "react";
import { connect } from "react-redux";

import "./styles.scss";

import Button from "components/Button";

import { addItem } from "redux/actions/cart";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button inverted onClick={() => addItem(item)}>
        Add to cart
      </Button>
    </div>
  );
};

export default connect(null, { addItem })(CollectionItem);
