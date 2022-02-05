import React from "react";

const MainHeading = ({ children, title }) => (
  <div className="bg-success p-3 text-dark bg-opacity-25 d-flex justify-content-between align-items-center">
    <div>
      <h6 className="text-dark fw-bold">{title}</h6>
    </div>
    {children}
  </div>
);

export default MainHeading;
