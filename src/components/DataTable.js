import React from "react";

export default function DataTable (){
  return (
    <table id="tableexpenses" className="table table-striped table-bordered mt-4">
        <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>30 Nov, 2018</td>
            <td>₦30,000</td>
          </tr>
          <tr>
            <td>25 Nov, 2018</td>
            <td>₦30,000</td>
          </tr>
          <tr>
            <td>28 Oct, 2018</td>
            <td>₦30,000</td>
          </tr>
        </tbody>
    </table>
  )
}