import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const MenuItem = ({ title, imageUrl, size }) => (
  <Link className={`${size} menu-item`} to="/">
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </Link>
);

export default MenuItem;
