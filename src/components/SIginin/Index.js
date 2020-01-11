import React from "react";

import "./styles.scss";

import { useForm } from "hooks/useForm";

import FormInput from "components/FormInput";
import Button from "components/Button";

const Signin = () => {
  const { form, handleInputChange, clearInputs } = useForm({
    email: "",
    password: ""
  });

  const onSubmit = e => {
    e.preventDefault();
    console.log(form);
    clearInputs();
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onSubmit}>
        <FormInput
          type="email"
          name="email"
          value={form.email}
          handleChange={handleInputChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={form.password}
          handleChange={handleInputChange}
          required
          label="Password"
        />
        <Button type="submit">Sign in</Button>
      </form>
    </div>
  );
};

export default Signin;
