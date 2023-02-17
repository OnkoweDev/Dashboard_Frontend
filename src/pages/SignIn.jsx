import React, { useState } from "react";
import "./styles/SignInUp.css";

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import image from "../assets/signInImage.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [showPassowrd, setShowPassword] = useState(false);
  const showPassword = () => {
    setShowPassword(!showPassowrd);
  };
  return (
    <div className="sign__container">
      <section className="form__section">
        <div className="form__section__wrapper">
          <h5>Welcome Back!</h5>
          <small>Ready to gather the thought once again?</small>
          <form action="">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" className="input" />
            <label htmlFor="Password">Password</label>
            <div className="input__container">
              <article className="input__wrapper">
                <input
                  type={showPassowrd ? "text" : "password"}
                  className="input"
                />
                {showPassowrd ? (
                  <AiOutlineEyeInvisible
                    className="icon"
                    onClick={showPassword}
                  />
                ) : (
                  <AiOutlineEye className="icon" onClick={showPassword} />
                )}
              </article>
            </div>
            {/* btn */}
            <button className="btn article-btn" style={{ fontSize: "16px" }}>
              Login
            </button>
          </form>
          {/* other sign up options */}
          <p className="sign__up__option__text">Or Log in with </p>
          <div className="sign__up__options">
            <button>Y</button>
            <button>Y</button>
            <button>Y</button>
          </div>
          <p
            style={{ textAlign: "center", margin: "10px 0" }}
            className="login__text"
          >
            Don’t have an account? <Link to="/sign-up">Sign Up</Link>
          </p>
        </div>
      </section>
      <section className="image__section">
        <img src={image} alt="" />
      </section>
    </div>
  );
};

export default SignIn;
