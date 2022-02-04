import React from "react";
import Foot from "./Foot";
import Navigation from "./Navigation";
import SideNav from "./SideNav";

const WrapperLayout = ({ children }) => (
  <div>
    <Navigation />
    <div className="d-flex flex-row">
      <div className="sidenav d-none d-lg-block">
        <SideNav />
      </div>
      <div className="main w-100">{children}</div>
    </div>
    <Foot />
  </div>
);

export default WrapperLayout;
