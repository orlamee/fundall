import React from "react";
import { Link } from "react-router-dom";
import HomeLogo from "../images/home.png";
import reactLogo from "../images/logo.png";

export default function MainContentSignup() {
  return (
    <div className="container">
      <div className="home">
        <Link to="/">
          <img src={reactLogo} alt="" className="img-fluid"/>
        </Link>
        <div className="container mt-3">
          <div className="row login-container">
            <div className="col-md-6 text-center">
              <img src={HomeLogo} alt="" className="img-fluid"/>
              <h2 className="mt-4"><span className="color-text">Welcome!</span> Let’s get <br/> to know you.</h2>
              <p>Your first step toward a better financial<br/>lifestyle starts here.</p>
            </div>
            <div className="col-md-6">
              <div className="form-bg">
                <form className="row g-3">
                  <div className="col-md-6">
                    <label for="inputFirstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="inputFirstName" placeholder="John"/>
                  </div>
                  <div className="col-md-6">
                    <label for="inputLastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="inputLastName" placeholder="Doe"/>
                  </div>
                  <div className="col-12">
                    <label for="inputEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="johndoe@yahoo.com" />
                  </div>
                  <div className="col-12">
                    <label for="inputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Enter password" required/>
                  </div>
                  <div className="col-12">
                    <label for="inputPassword" className="form-label">Confirm password</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Confirm password"/>
                  </div>
                  
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-block sign-btn text-dark fw-bold">SIGN UP</button>
                  </div>
                </form>
                <div className="text-center mt-4">
                  <h6>Already have an account? <Link to="/login" className="color-link">Login Here</Link></h6>
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