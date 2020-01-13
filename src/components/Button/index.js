import React from "react";

import "./styles.scss";

const Button = ({ children, isGoogle, inverted, ...props }) => {
  return (
    <button
      className={`${isGoogle ? "google-sign-in" : ""}${
        inverted ? "inverted" : ""
      } custom-button`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
