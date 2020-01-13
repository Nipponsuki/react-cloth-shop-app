import React from "react";

import "./styles.scss";

import Signin from "components/SIginin/Index";
import Signup from "components/Signup";

const AuthPage = () => (
  <div className="sign-in-and-sign-up">
    <Signin />
    <Signup />
  </div>
);

export default AuthPage;
