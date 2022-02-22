import React from "react";
import NavBar from "./NavBar";
import HomeLogo from "../images/home.png"

export default function MainContent() {
  return (
    <div className="container">
      <div className="home">
        <nav className="navbar navbar-expand-lg navbar-light">
          <NavBar/>
        </nav>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <img src={HomeLogo} alt="" className="img-fluid"/>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
        <div className="container">
          <div className="row text-center mt-4">
            <h2 className="fw-bolder">Fundall Expense Tracker</h2>
            <h3 className="mt-3">Mini Project Frontend</h3>
            <h6 className="mt-4">by Babatunde Fashola</h6>
          </div>
        </div>
      </div>
    </div>
  )
}