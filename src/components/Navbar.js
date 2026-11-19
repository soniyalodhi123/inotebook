import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  let location = useLocation();
  const [user, setUser] = useState({ name: "", email: "" });
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      if (localStorage.getItem("token")) {
        try {
          const response = await fetch(
            "http://localhost:5000/api/auth/getuser",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
              },
            },
          );
          const json = await response.json();
          setUser(json);
        } catch (error) {
          console.error("User fetch error:", error);
        }
      }
    };
    fetchUser();
  }, [localStorage.getItem("token")]);

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            iNotebook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            {!localStorage.getItem("token") ? (
              <form className="d-flex">
                <Link
                  className="btn btn-primary mx-2"
                  to="/login"
                  role="button"
                >
                  Login
                </Link>
                <Link
                  className="btn btn-primary mx-2"
                  to="/signup"
                  role="button"
                >
                  Signup
                </Link>
              </form>
            ) : (
              <div className="d-flex align-items-center">
                <span
                  className="badge rounded-pill me-3 px-3 py-2 fs-6"
                  style={{
                    backgroundColor: "#e7f1ff",
                    color: "#0d6efd",
                    border: "1px solid #b6d4fe",
                  }}
                  title={user.email}
                >
                  👤 {user.name || "User"}
                </span>
                <button onClick={handleLogout} className="btn btn-primary">
                  Logout
                </button>
              </div>
            )}
            {/* Dark / Light Mode Switch */}
            <div
              className={`form-check form-switch mx-3 text-${mode === "light" ? "dark" : "light"}`}
            >
              <input
                className="form-check-input"
                onClick={toggleMode}
                type="checkbox"
                id="darkModeSwitch"
                style={{ cursor: "pointer" }}
              />
              <label className="form-check-label" htmlFor="darkModeSwitch">
                {mode === "light" ? "🌙 Dark" : "☀️ Light"}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
