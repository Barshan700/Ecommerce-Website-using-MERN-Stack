import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:2000/admin/login", {
        email,
        pass,
      });

      if (res.data && res.data.id) {
        // ✅ Save admin data to localStorage
        localStorage.setItem("admin", JSON.stringify(res.data));

        // ✅ Redirect to dashboard
        navigate("/dashboard");
      } else {
        setError(res.data.msg || "Invalid login");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "350px", borderRadius: "15px" }}>
        <h3 className="text-center mb-4">Admin Login</h3>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control rounded-pill"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter email"
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control rounded-pill"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-pill">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
