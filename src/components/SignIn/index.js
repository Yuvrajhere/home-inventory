import React from "react";
import "./SignIn.css";
import {Link} from "react-router-dom";
import SignInImg from "../../assets/login.svg"

const SignIn = () => {
  return (
    <div className="SignIn">
      <form>
        <h1>Sign In</h1>
        <label for="email">Email</label><br />
        <input 
          id="email"
          type="email" 
          name="email"/><br />
        <label for="password">Password</label><br />
        <input
          id="password"
          type="password"
          name="email"/><br />
        <button className="btn">Sign In</button>
        <p>Dont have an account?, <Link to="/signup">Create a new account here</Link></p>
      </form>
      <img src={SignInImg} />
    </div>
  );
};

export default SignIn;