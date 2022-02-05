import React from "react";
import MainHeading from "../common/MainHeading";
import MainLayout from "../common/MainLayout";
import ReuseAbleBreadCrumb from "../common/ReuseAbleBreadCrumb";
import Role from "../common/Role";

const OperatorCredential = () => (
  <MainLayout>
    <MainHeading title="Operator Credential">
      <ReuseAbleBreadCrumb secondTitle="operatorCredential" path="/operator-credential" />
    </MainHeading>

    <Role />
  </MainLayout>
);

export default OperatorCredential;
