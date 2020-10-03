import React, { useState} from "react";
import "./SignUp.css"
import {Link, useHistory} from "react-router-dom";
import SignUpImg from "../../assets/join.svg"

const SignUp = () => {

  const history = useHistory();
  
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: ""
  });

  const preprocess = () => {
    if(!localStorage.getItem("userDetails")) {
      localStorage.setItem("useDetails", JSON.stringify([]));
    }
  }

  // preprocess();

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataInLocalStorage = JSON.parse(localStorage.getItem("userDetails") || "[]");
    
    dataInLocalStorage.push(details);

    localStorage.setItem("userDetails", JSON.stringify(dataInLocalStorage));
    
    setDetails({
      name: "",
      email: "",
      password: ""
    });

    history.push("/signin")
  }

  const handleInputChange = e => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="SignUp">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label for="name">Name</label><br />
        <input 
          id="name"
          type="text" 
          name="name"
          value={details.name}
          onChange={handleInputChange}
          autoComplete="off"/><br />
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
          onChange={handleInputChange}/><br />
        <button className="btn">Sign Up</button>
        <p>Already have an account?, <Link to="/signin">Sign In here</Link></p>
      </form>
      <img src={SignUpImg} />
    </div>
  );
};

export default SignUp;