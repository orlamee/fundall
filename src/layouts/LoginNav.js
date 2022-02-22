import React from "react";
import reactLogo from "../images/logo.png";

export default function LoginNav() {
  return (
    <div className="container">
      <a className="navbar-brand">
        <img src={reactLogo} alt="" className="logo-img" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav ms-auto d-flex align-items-center">
        </div>
      </div>
    </div>
  )
}