import React from "react";
import { Link } from "react-router-dom";
import reactLogo from "../images/logo.png";

export default function NavBar() {
  return (
    <div className="container">
      <Link to="/"className="navbar-brand">
        <img src={reactLogo} alt="" className="logo-img" />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav ms-auto d-flex align-items-center">
          {/* <a href="/login" className="login me-3 fw-bold text-dark">LOG IN</a> */}
          {/* <a href="#" className="btn btn-success rounded-3 text-dark fw-bold">SIGN UP</a> */}
          <Link to="/login" className="login me-3 fw-bold text-dark">LOGIN</Link>
          <Link to="/signup" className="sign-btn btn btn-success rounded-3 text-dark fw-bold">SIGN UP</Link>
        </div>
      </div>
    </div>
  )
}