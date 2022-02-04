import React from "react";
import { Offcanvas } from "react-bootstrap";
import AccordionSideNav from "./AccordionSideNav";

const ResponsiveSideNav = ({ setShowSideNav, showSideNav }) => (
  <Offcanvas show={showSideNav} onHide={() => setShowSideNav(false)} style={{ width: "85%" }}>
    <div
      style={{
        listStyle: "none",
        textDecoration: "none",
        backgroundColor: "white",
      }}
    >
      <AccordionSideNav setShowSideNav={setShowSideNav} showSideNav={showSideNav} />
    </div>
  </Offcanvas>
);

export default ResponsiveSideNav;
