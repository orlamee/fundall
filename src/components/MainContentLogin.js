import React from "react";
import { Link } from "react-router-dom";
import Login from "../images/login.png";
import reactLogo from "../images/logo.png";

export default function MainContentLogin() {
  return (
    <div className="container">
      <div className="home">
        <Link to="/" className="mb-4">
          <img src={reactLogo} alt="" className="img-fluid"/>
        </Link>
        <div className="container">
          <div className="row login-container">
            <div className="col-md-6 text-center mt-5">
              <img src={Login} alt="" className="img-fluid"/>
              <h2 className="mt-4 mb-4"><span className="color-text">Welcome Back!</span><br/>We miss you</h2>
            </div>
            <div className="col-md-6">
              <div className="form-bg">
                <div className="mb-4">
                  <h2>Holla</h2>
                  <h6 className="mt-2">Sign in to vibe!</h6>
                </div>
                <form className="row g-3 mt-5">
                  <div className="col-12">
                    <label for="inputEmail" className="form-label">Email or Username</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="johndoe@yahoo.com" />
                  </div>
                  <div className="col-12">
                    <label for="inputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Enter password" required/>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-block sign-btn text-dark fw-bold"><Link to="/dashboard">LOGIN</Link></button>
                  </div>
                </form>
                <div className="text-center mt-4">
                  <h6>Do you have an account? <Link to="/signup" className="color-link">Register Here</Link></h6>
                </div>
              </div>
              <div className="text-center mt-4">
                <small>By clicking on Login, you agree to our <span className="color-text">Terms & <br/>Conditions and Privacy Policy</span></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}