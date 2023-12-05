import React, { useState } from "react";
import "./Login.css"; // Import the CSS file for styling
import { supabase } from "./supabase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="page-container">
      <div className="login-container">
        {" "}
        {/* Added a class for styling */}
        <h2>Login / Sign Up</h2>
        <form>
          <label>
            Email:
            <input
              className="login-input"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              className="login-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          {errorMessage}
          <button type="button" onClick={handleLogin}>
            Login
          </button>
          <a href="/signup">Create account</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
