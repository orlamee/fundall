import React from "react";
import { Link } from "react-router-dom";
// import Avatar from "../images/avatar.png";
import reactLogo from "../images/logo.png";
import DataTable from "./DataTable";
import DashboardForm from "./DashboardForm";

export default function MainContentDashboard() {
  return (
    <div className="container">
      <div className="home">
        <Link to="/">
          <img src={reactLogo} alt="" className="img-fluid"/>
        </Link>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="flex-container">
                <div className="user-bg">
                  <i class="bi bi-person-fill icon-user"></i>
                </div>
                <div className="pt-4">
                  <h4>Babatunde Fashola</h4>
                  <h6>baba2@gmail.com</h6>
                </div>
              </div>
              <div className="mt-5">
                <h4>Target Monthly Expenses</h4>
                <h5 className="fw-bolder">₦596,000</h5>
              </div>
              <div className="progress mt-4">
                <div className="progress-bar bg-success" role="progressbar"></div>
              </div>
              <div className="expenses-bg">
                <h5>Daily Expenses Summary</h5>
                <DataTable/>
              </div>
            </div>
            <div className="col-md-6 mt-2">
              <div className="bg-dash">
                <div className="header">
                  <h2><span className="color-text">Welcome back,</span> Babatunde</h2>
                  <h6>Now, let’s get your expenses for this month</h6>
                </div>
                <div>
                  <DashboardForm/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}