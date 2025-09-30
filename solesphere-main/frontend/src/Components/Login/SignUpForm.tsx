import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "./login.css";
import AxiosInstance from "../AxiosInstance";

interface State {
  name: string;
  email: string;
  password: string;
}

function SignUpForm() {
  const [state, setState] = useState<State>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOnSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const { name, email, password } = state;
    // alert(
    //   `You are sign up with name: ${name} email: ${email} and password: ${password}`
    // );
    AxiosInstance.post("/api/users/signup", state)
      .then((res) => {
        console.log(res.data);
        alert("User created successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Error creating user");
      });

    for (const key in state) {
      setState((prevState) => ({
        ...prevState,
        [key]: "",
      }));
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form className="login-form" onSubmit={handleOnSubmit}>
        <h1 className="title">Create Account</h1>
        <div className="social-container">
          <a href="#" className="social">
            <img src="/icons/facebook-f.svg" alt="image" className="icon" />
          </a>
          <a href="#" className="social">
            <img src="/icons/google-plus-g.svg" alt="image" className="icon" />
          </a>
          <a href="#" className="social">
            <img src="/icons/linkedin-in.svg" alt="image" className="icon" />
          </a>
        </div>
        <span className="span1">or use your email for registration</span>
        <input
          className="form-input"
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          className="form-input"
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className="form-input"
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button className="sign-button">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
