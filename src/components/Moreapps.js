import React from "react";
import "./Moreapps.css";
import DriverAppImg from "../assets/Driver-App-logo.webp";
import UberAppImg from "../assets/Rider-App-logo.webp";
function Moreapps() {
  return (
    <div className="more_container">
      <div className="container_1">
        <h3>There’s more to love in the apps</h3>
        <div className="col">
          <div className="row-1">
            <div className="image">
              <img src={DriverAppImg} alt="driver-app"></img>
            </div>
            <div className="details">
              <h5>Download the Driver app</h5>
            </div>
            <div className="svg">
              <svg
                aria-hidden="true"
                focusable="false"
                width="1em"
                height="25"
                fill="currentColor"
                viewBox="0 0 36 36"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <div className="row-1">
            <div className="image">
              <img src={UberAppImg} alt="driver-app"></img>
            </div>
            <div className="details">
              <h5>Download the Uber app</h5>
            </div>
            <div className="svg">
              <svg
                aria-hidden="true"
                focusable="false"
                width="1em"
                height="25"
                fill="currentColor"
                viewBox="0 0 36 36"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Moreapps;
