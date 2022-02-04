import React from "react";
import ReuseAbleBreadCrumb from "../common/ReuseAbleBreadCrumb";

const Dashboard = () => (
  <main className="m-2 shadow my-2 " style={{ minHeight: "auto", borderRadius: "5px" }}>
    <div className="bg-success p-3 text-dark bg-opacity-25 d-flex justify-content-between align-items-center">
      <div>
        <h6 className="text-dark fw-bold">Dashboard</h6>
      </div>
      <ReuseAbleBreadCrumb />
    </div>
  </main>
);

export default Dashboard;
