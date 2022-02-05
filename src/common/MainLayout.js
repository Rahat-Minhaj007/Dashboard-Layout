import React from "react";

const MainLayout = ({ children }) => (
  <main className="m-2 my-2 pb-1 shadow" style={{ minHeight: "auto", borderRadius: "5px" }}>
    {children}
  </main>
);

export default MainLayout;
