import React from "react";
import MainHeading from "../common/MainHeading";
import MainLayout from "../common/MainLayout";
import ReuseAbleBreadCrumb from "../common/ReuseAbleBreadCrumb";
import Role from "../common/Role";

const AvailableUser = () => (
  <MainLayout>
    <MainHeading title="Available User">
      <ReuseAbleBreadCrumb secondTitle="availableUser" path="/available-user" />
    </MainHeading>

    <Role />
  </MainLayout>
);

export default AvailableUser;
