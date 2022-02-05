import React from "react";
import MainHeading from "../common/MainHeading";
import MainLayout from "../common/MainLayout";
import ReuseAbleBreadCrumb from "../common/ReuseAbleBreadCrumb";
import Role from "../common/Role";

const CompanyWallet = () => (
  <MainLayout>
    <MainHeading title="Company Wallet">
      <ReuseAbleBreadCrumb secondTitle="companyWallet" path="/company-wallet" />
    </MainHeading>

    <Role />
  </MainLayout>
);

export default CompanyWallet;
