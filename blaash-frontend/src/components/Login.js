// Login.js
import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
    } catch (error) {
      alert("Login failed! Please check your credentials.");
    }
  };

  return (
    <div style={loginContainerStyles}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyles}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyles}
          required
        />
        <button type="submit" style={buttonStyles}>
          Login
        </button>
      </form>
    </div>
  );
};

const loginContainerStyles = {
  padding: "20px",
  maxWidth: "400px",
  margin: "0 auto",
  backgroundColor: "#f7f7f7",
  borderRadius: "8px",
};

const inputStyles = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const buttonStyles = {
  padding: "10px 20px",
  backgroundColor: "#333",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default Login;
