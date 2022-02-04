import React from "react";
import ReuseAbleBreadCrumb from "../common/ReuseAbleBreadCrumb";

const CompanyWallet = () => (
  <main className="m-2 my-2 shadow pb-5" style={{ minHeight: "auto", borderRadius: "5px" }}>
    <div className="bg-success p-3 text-dark bg-opacity-25 d-flex justify-content-between align-items-center">
      <div>
        <h6 className="text-dark fw-bold">Company Wallet</h6>
      </div>
      <ReuseAbleBreadCrumb secondTitle="companyWallet" path="/company-wallet" />
    </div>
    <div className="bg-success m-3 p-3 rounded-1">
      <h5 className="text-light ">
        Account Type: <span className="fw-bold">Role_Admin</span>
      </h5>
    </div>
  </main>
);

export default CompanyWallet;
