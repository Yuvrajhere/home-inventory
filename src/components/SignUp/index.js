import React from "react";
import "./SignUp.css"
import {Link} from "react-router-dom";
import SignUpImg from "../../assets/join.svg"

const SignUp = () => {
  return (
    <div className="SignUp">
      <form>
        <h1>Sign Up</h1>
        <label for="name">Name</label><br />
        <input 
          id="name"
          type="text" 
          name="name"/><br />
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
        <button className="btn">Sign Up</button>
        <p>Already have an account?, <Link to="/signin">Sign In here</Link></p>
      </form>
      <img src={SignUpImg} />
    </div>
  );
};

export default SignUp;