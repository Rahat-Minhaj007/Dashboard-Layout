import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { faBorderAll, faMoneyBillWave, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import useSound from "use-sound";
import pop2 from "../assets/audio/pop2.mp3";
import pop from "../assets/audio/popUp.mp3";
import adminData from "../fakeData/AdminActivities";
import userData from "../fakeData/UserActivities";
import "../styles/AccordionSideNav.css";

const AccordionSideNav = ({ setShowSideNav, showSideNav }) => {
  const [playOn] = useSound(pop);
  const [play] = useSound(pop2);
  return (
    <Accordion defaultActiveKey="0">
      {showSideNav && (
        <>
          <div className="d-flex justify-content-end p-3">
            <FontAwesomeIcon
              icon={faTimes}
              onClick={
                showSideNav
                  ? () => {
                      setShowSideNav(false);
                      playOn();
                    }
                  : ""
              }
            />
          </div>
          <div style={{ border: "1px solid white" }} />
        </>
      )}
      <Link
        to="/dashboard"
        style={{
          textDecoration: "none",
          color: "black",
        }}
        onClick={
          showSideNav
            ? () => {
                play();
                setShowSideNav(false);
              }
            : () => {
                play();
              }
        }
      >
        <Accordion.Item
          className="p-3 sideNav mb-1"
          style={{
            textDecoration: "none",
            borderBottom: "1px solid rgba(250 250 250 250)",
            borderLeft: "none",
            borderRight: "none",
            borderTop: "none",
          }}
        >
          <FontAwesomeIcon icon={faBorderAll} className="text-success" /> <span className="px-2 ">Dashboard</span>
        </Accordion.Item>
      </Link>
      <Accordion.Item
        eventKey="0"
        style={{
          textDecoration: "none",
          borderBottom: "1px solid rgba(250 250 250 250)",
          borderLeft: "none",
          borderRight: "none",
          borderTop: "none",
        }}
      >
        <Accordion.Header onClick={play}>
          <FontAwesomeIcon icon={faCreditCard} className="text-success" />
          <span className="px-2">Admin Activities</span>
        </Accordion.Header>
        <Accordion.Body>
          {adminData.map((item) => (
            <Link
              to={`${item?.path}`}
              style={{ textDecoration: "none", color: "black" }}
              key={item.id}
              onClick={
                showSideNav
                  ? () => {
                      playOn();
                      setShowSideNav(false);
                    }
                  : () => {
                      playOn();
                    }
              }
            >
              <li className="ps-2 py-2 my-2 sideNav">
                {item?.icon} <span className="px-2">{item?.name}</span>
              </li>
            </Link>
          ))}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item
        eventKey="1"
        style={{
          textDecoration: "none",
          borderBottom: "1px solid rgba(250 250 250 250)",
          borderLeft: "none",
          borderRight: "none",
          borderTop: "none",
        }}
      >
        <Accordion.Header onClick={play}>
          <FontAwesomeIcon icon={faCreditCard} className="text-success" />
          <span className="px-2">User Activities</span>
        </Accordion.Header>
        <Accordion.Body>
          {userData.map((item) => (
            <Link
              to={`${item?.path}`}
              style={{ textDecoration: "none", color: "black" }}
              key={item.id}
              onClick={
                showSideNav
                  ? () => {
                      playOn();
                      setShowSideNav(false);
                    }
                  : () => {
                      playOn();
                    }
              }
            >
              <li className="ps-2 py-2 my-2 sideNav">
                {item?.icon} <span className="px-2">{item?.name}</span>
              </li>
            </Link>
          ))}
        </Accordion.Body>
      </Accordion.Item>
      <Link
        to="/payment"
        style={{ textDecoration: "none", color: "black" }}
        onClick={
          showSideNav
            ? () => {
                play();
                setShowSideNav(false);
              }
            : () => {
                play();
              }
        }
      >
        <Accordion.Item className="p-3 sideNav mt-1" style={{ border: "none" }}>
          <FontAwesomeIcon icon={faMoneyBillWave} className="text-success" /> <span className="px-2">Payments</span>
        </Accordion.Item>
      </Link>
    </Accordion>
  );
};

export default AccordionSideNav;
