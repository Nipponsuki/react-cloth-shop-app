import React from "react";

import "./styles.scss";

const Button = ({ children, isGoogle, ...props }) => {
  return (
    <button
      className={`${isGoogle ? "google-sign-in" : ""} custom-button`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
