import React from "react";
import MainHeading from "../common/MainHeading";
import MainLayout from "../common/MainLayout";
import ReuseAbleBreadCrumb from "../common/ReuseAbleBreadCrumb";
import DashboardFirstRow from "./dashboard/DashboardFirstRow";
import DashboardHeader from "./dashboard/DashboardHeader";

const Dashboard = () => (
  <MainLayout>
    <MainHeading title="Dashboard">
      <ReuseAbleBreadCrumb />
    </MainHeading>
    <DashboardHeader />
    <DashboardFirstRow />
  </MainLayout>
);

export default Dashboard;
