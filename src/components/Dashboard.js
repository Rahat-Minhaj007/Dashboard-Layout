import React from "react";
import MainHeading from "../common/MainHeading";
import MainLayout from "../common/MainLayout";
import ReuseAbleBreadCrumb from "../common/ReuseAbleBreadCrumb";
import DashboardHeader from "./dashboard/DashboardHeader";

const Dashboard = () => (
  <MainLayout>
    <MainHeading title="Dashboard">
      <ReuseAbleBreadCrumb />
    </MainHeading>
    <DashboardHeader />
  </MainLayout>
);

export default Dashboard;
