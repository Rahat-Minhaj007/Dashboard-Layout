import React from "react";
import DashboardBarChart from "./DashboardBarChart";
import DashboardPieChart from "./DashboardPieChart";

const DashboardFirstRow = () => (
  <div className="mx-4 my-5">
    <div className="row d-flex justify-content-between g-2">
      <div className="col-md-6 bg-light p-3">
        <h4 className="text-secondary text-center py-3">Last 30 days Statistics </h4>
        <DashboardBarChart />
      </div>
      <div className="col-md-5 bg-light p-3 ">
        <h4 className="text-secondary text-center py-3">Statistics of different types SMS</h4>
        <DashboardPieChart />
      </div>
    </div>
  </div>
);

export default DashboardFirstRow;
