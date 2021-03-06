import React, { useState } from "react";
import "./SignIn.css";
import {Link, useHistory} from "react-router-dom";
import SignInImg from "../../assets/login.svg"

const SignIn = () => {

  const history = useHistory();
  const [details, setDetails] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  const handleInputChange = e => {
    e.preventDefault();
    setDetails({
      ...details,
    [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    const user = userDetails.find(item => item.email == details.email && item.password == details.password);
    if(!user) {
      setError("Email or password is incorrect!");
    } else {
      setError("");
      localStorage.setItem("loggedIn", true);
      history.push("/inventory")
    }
  }

  return (
    <div className="SignIn">
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <label for="email">Email</label><br />
        <input 
          id="email"
          type="email" 
          name="email"
          value={details.email}
          onChange={handleInputChange}
          autoComplete="off"/><br />
        <label for="password">Password</label><br />
        <input
          id="password"
          type="password"
          name="password"
          value={details.password}
          onChange={handleInputChange}
          /><br />
        <button className="btn">Sign In</button>
        <p className="error">{error ? error : ""}</p>
        <p>Dont have an account?, <Link to="/signup">Create a new account here</Link></p>
      </form>
      <img src={SignInImg} />
    </div>
  );
};

export default SignIn;