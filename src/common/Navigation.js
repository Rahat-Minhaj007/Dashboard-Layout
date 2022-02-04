import { faDotCircle } from "@fortawesome/free-regular-svg-icons";
import { faBars, faCog, faSms, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSound from "use-sound";
import pop from "../assets/audio/popUp.mp3";
import ResponsiveSideNav from "./ResponsiveSideNav";

const Navigation = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const [playOn] = useSound(pop);

  return (
    <nav className="p-3 bg-success">
      <div className="px-2 d-flex flex-row justify-content-between align-items-center">
        <div>
          <Link style={{ textDecoration: "none" }} to="/">
            <h5 className="text-light fw-bold">
              Suffix SMS Gateway <FontAwesomeIcon icon={faSms} />
            </h5>
          </Link>
        </div>
        <div className="text-light d-flex ">
          <h6 className="px-2 d-flex" style={{ cursor: "pointer" }}>
            <FontAwesomeIcon icon={faDotCircle} className="mt-1" />
            <span className="px-1 fw-bold">admin</span>
          </h6>
          <h6 className="px-2" style={{ cursor: "pointer" }}>
            <FontAwesomeIcon icon={faUserCircle} />
          </h6>
          <h6 className="px-2" style={{ cursor: "pointer" }}>
            <FontAwesomeIcon icon={faCog} />
          </h6>
          <h5 className="px-2 d-block d-lg-none" style={{ cursor: "pointer" }}>
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => {
                setShowSideNav(!showSideNav);
                playOn();
              }}
            />
          </h5>
          <ResponsiveSideNav setShowSideNav={setShowSideNav} showSideNav={showSideNav} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
