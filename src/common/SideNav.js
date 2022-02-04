import React from "react";
import "../styles/SideNav.css";
import AccordionSideNav from "./AccordionSideNav";

const SideNav = () => (
  <div
    className=" p-2 m-2 shadow"
    style={{
      width: "20rem",
      minHeight: "100vh",
      listStyle: "none",
      textDecoration: "none",
      backgroundColor: "white",
      borderRadius: "5px",
    }}
  >
    <AccordionSideNav />
  </div>
);

export default SideNav;
