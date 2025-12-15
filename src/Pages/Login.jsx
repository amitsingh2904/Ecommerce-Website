import React, { useState, useContext } from 'react'
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Context/AuthContext";
import { FaGithub, FaEye, FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import './Form.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // 👇 State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();
  const { setRole } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin@gmail.com" && password === "admin123") {
      setRole("admin");
      navigate("/admin");
    } else if (username === "user@gmail.com" && password === "user123") {
      setRole("user");
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container"> 
      <div className="login-logo">Ecommerce</div>
      <div className="login-title">Create an Account</div>
      <div className="login-subtitle">Get started with Ecommerce today.</div>

      <div className="login-social-buttons">
        <button><FcGoogle /> Google</button>
        <button><FaGithub /> Github</button>
      </div>

      <div className="login-divider">Or Continue with</div>

      <form onSubmit={handleLogin}>
        <div className="login-form-group">
          <label>Email</label>
          <input 
            type="email" 
            placeholder="@youremail.com" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            required 
          />
        </div>

        {/* New Password with Show/Hide toggle */}
        <div className="login-form-group">
          <label>New Password</label>
          <div className="password-wrapper">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="********" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
            <button 
              type="button" 
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <small>Must be at least 6 characters long.</small>
        </div>

        {/* Confirm Password with Show/Hide toggle */}
        <div className="login-form-group">
          <label>Confirm Password</label>
          <div className="password-wrapper">
            <input 
              type={showConfirmPassword ? "text" : "password"} 
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required 
            />
            <button 
              type="button" 
              className="toggle-password"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <button type="submit" className="login-btn">Create Account →</button>
      </form>

      <div className="login-footer">
        Already have an account? <a href="#">Login</a>
      </div>    
    </div>
  )
}

export default Login;
