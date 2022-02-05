import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const ReuseAbleBreadCrumb = ({ secondTitle, thirdTitle, path }) => (
  <div className="pe-2">
    <Breadcrumb style={{ borderRadius: "5px" }}>
      {!secondTitle && !thirdTitle ? (
        <Breadcrumb.Item>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            Dashboard
          </Link>
        </Breadcrumb.Item>
      ) : (
        <>
          <Breadcrumb.Item>
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              Dashboard
            </Link>
          </Breadcrumb.Item>
          {secondTitle && !thirdTitle ? (
            <Breadcrumb.Item active>{secondTitle}</Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item>
              <Link to={`${path}`} style={{ textDecoration: "none" }}>
                {secondTitle}
              </Link>
            </Breadcrumb.Item>
          )}
          {secondTitle && thirdTitle && <Breadcrumb.Item active>{thirdTitle}</Breadcrumb.Item>}
        </>
      )}
    </Breadcrumb>
  </div>
);

export default ReuseAbleBreadCrumb;
