import React from "react";

import "./styles.scss";

import { useForm } from "hooks/useForm";

import FormInput from "components/FormInput";
import Button from "components/Button";

const Signup = () => {
  const { form, handleInputChange, clearInputs } = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const onSubmit = e => {
    e.preventDefault();
    console.log(form);
    clearInputs();
  };
  return (
    <div className="sign-up">
      <h2 className="title">I don not have an account</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={onSubmit} className="sign-up-form">
        <FormInput
          type="text"
          name="name"
          value={form.name}
          label="Name"
          onChange={handleInputChange}
        />
        <FormInput
          type="email"
          name="email"
          value={form.email}
          label="Email"
          onChange={handleInputChange}
        />
        <FormInput
          type="password"
          name="password"
          value={form.password}
          label="Password"
          onChange={handleInputChange}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          label="Confirm Password"
          onChange={handleInputChange}
        />
        <Button type="submit">SIGN UP</Button>
      </form>
    </div>
  );
};

export default Signup;
