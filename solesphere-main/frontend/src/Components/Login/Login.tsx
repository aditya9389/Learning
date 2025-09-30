import React, { useState } from "react";
import "./login.css";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import Header from "../Header";

export default function Login() {
    const [type, setType] = useState<string>("signIn");
    const handleOnClick = (text: string): void => {
        if (text !== type) {
            setType(text);
        }
    };
    const containerClass: string =
        "login-container " + (type === "signUp" ? "right-panel-active" : "");

    return (
        <>
            <Header page="login" />
            <div className="login">
                <div className="App-login">
                    <div className={containerClass} id="container">
                        <SignUpForm />
                        <SignInForm />
                        <div className="overlay-container">
                            <div className="overlay">
                                <div className="overlay-panel overlay-left">
                                    <h1>Welcome Back!</h1>
                                    <p className="login-ptext">
                                        To keep connected with us please login with your personal info
                                    </p>
                                    <button
                                        className="ghost"
                                        id="signIn"
                                        onClick={() => handleOnClick("signIn")}
                                    >
                                        Sign In
                                    </button>
                                </div>
                                <div className="overlay-panel overlay-right">
                                    <h1>Hello, Friend!</h1>
                                    <p className="login-ptext">
                                        Enter your personal details and start journey with us
                                    </p>
                                    <button
                                        className="ghost"
                                        id="signUp"
                                        onClick={() => handleOnClick("signUp")}
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
