import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft } from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext"; // adjust path if needed
import { useNavigate } from 'react-router-dom';
export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
 
 
 
  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      await login(email, password);
      navigate("/dashboard");
  
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="card-body">
          <button className="btn btn-link text-dark mb-3 p-0" onClick={handleBack}>
            <FaArrowLeft className="me-2" /> Back
          </button>

          <h3 className="card-title text-center mb-4">Login to Your Account</h3>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          {error && <div className="alert alert-danger text-center">{error}</div>}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="btn btn-primary w-100 mb-3"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="text-center">
            <span>Already a user? </span>
            <button
              className="btn btn-link p-0"
              onClick={() => alert("Redirect to sign up page")}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
