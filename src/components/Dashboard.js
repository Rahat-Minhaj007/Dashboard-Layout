import React from "react";
import MainHeading from "../common/MainHeading";
import MainLayout from "../common/MainLayout";
import ReuseAbleBreadCrumb from "../common/ReuseAbleBreadCrumb";

const Dashboard = () => (
  <MainLayout>
    <MainHeading title="Dashboard">
      <ReuseAbleBreadCrumb />
    </MainHeading>
  </MainLayout>
);

export default Dashboard;
