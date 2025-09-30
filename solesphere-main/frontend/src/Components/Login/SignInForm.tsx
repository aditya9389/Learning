import React, { ChangeEvent, FormEvent, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router";
import AxiosInstance from "../AxiosInstance";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/reducers/userSlice"; // adjust path
interface State {
  email: string;
  password: string;
}

function SignInForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState<State>({
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

    const { email, password } = state;

    AxiosInstance.post("/api/users/login", state)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert(res.data.message);
          dispatch(setUser(res.data.user)); // Make sure your backend sends user details
          navigate("/");
        } else {
          console.log(res.data.message);
          alert("Error logging in");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Error logging in");
      });
  };

  return (
    <div className="form-container sign-in-container">
      <form className="login-form" onSubmit={handleOnSubmit}>
        <h1 className="title">Sign in</h1>
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
        <span className="span1">or use your account</span>
        <input
          className="form-input"
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <a className="social" href="#">
          Forgot your password?
        </a>
        <button className="sign-button">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
