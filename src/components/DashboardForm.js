import React from "react";

export default function DashboardForm () {
  return (
    <form className="row g-3 dashform">
      <div className="col-12">
        <label for="inputTarget" className="form-label">Target Monthly Expenses</label>
        <input type="text" className="form-control" id="inputTarget" placeholder="596,000"/>
      </div>
      <div className="col-12">
        <label for="inputDate" className="form-label">Date</label>
        <input type="date" className="form-control" id="inputDate"/>
      </div>
      <div className="col-md-6">
        <label for="inputList" className="form-label"></label>
        <input type="text" className="form-control" id="inputEmail" placeholder="Pizza" />
      </div>
      <div className="col-md-6">
        <label for="inputList" className="form-label"></label>
        <input type="number" className="form-control" id="inputEmail" placeholder="10,000" />
      </div>
      <div className="col-md-6">
        <label for="inputList" className="form-label"></label>
        <input type="text" className="form-control" id="inputEmail" placeholder="Tuition Fee" />
      </div>
      <div className="col-md-6">
        <label for="inputList" className="form-label"></label>
        <input type="number" className="form-control" id="inputEmail" placeholder="20,000" />
      </div>
      <div className="col-md-6">
        <label for="inputList" className="form-label"></label>
        <input type="text" className="form-control" id="inputEmail" placeholder="Textbook" />
      </div>
      <div className="col-md-6">
        <label for="inputList" className="form-label"></label>
        <input type="number" className="form-control" id="inputEmail" placeholder="20,000" />
      </div>
      <div class="row mt-4 left">
        <label for="inputEmail3" class="col-md-5 col-form-label fw-bold">Total Actual Expenses: </label>
        <div class="col-md-7">
          <input type="email" class="form-control expenses" id="inputEmail3" />
        </div>
      </div>
      <div className="col-12 text-center">
        <button type="submit" className="btn btn-primary sign-btn text-dark fw-bold">SAVE TODAY'S EXPENSES</button>
      </div>
    </form>
  )
}