import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((userCredential) => {
        // Signed in
        const logeduser = userCredential.user;
        console.log(logeduser);
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="" required />
          <p></p>
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p>
        <small>
          New to Ema-john? <Link to="/signup">Create New Account</Link>
        </small>
      </p>
    </div>
  );
};

export default Login;
