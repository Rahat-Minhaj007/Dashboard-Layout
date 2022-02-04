import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import error from "../assets/images/pageNotFound.svg";

const PageNotFound = () => (
  <main className="m-2 p-2 shadow my-2" style={{ minHeight: "100vh" }}>
    <div className="row d-flex justify-content-center ">
      <div className="col-md-5">
        <img src={error} alt="" style={{ width: "100%", objectFit: "contain" }} />
      </div>
    </div>
    <div className="d-flex justify-content-center mt-2 ">
      <Link to="/" className="btn btn-success btn-lg fw-bold p-2 px-3">
        <FontAwesomeIcon icon={faArrowLeft} />
        Take Me Back TO The Dashboard
      </Link>
    </div>
  </main>
);

export default PageNotFound;
