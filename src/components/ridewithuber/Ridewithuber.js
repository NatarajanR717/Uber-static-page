import React from "react";
import "./Ridewithuber.css";
import AutoImg from "../../assets/Auto-150X150p4x.png";
import MotoImg from "../../assets/Moto-150X150p4x.png";
import RentalImg from "../../assets/uber-hourly.jfif";
import IntercityImg from "../../assets/Intercity-150X150p4x.png";

function Ridewithuber() {
  return (
    <div className="ride_container">
      <h3 className="head">Ride with uber</h3>
      <div className="cards">
        <div className="card">
          <div>
            <img src={AutoImg} alt="Auto_png"></img>
          </div>
          <div className="text">
            <h2>Uber Auto</h2>
            <p>
              Get affordable Uber auto ride with no haggling.Request Uber Auto
              ride comfortably around your city
            </p>
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
        <div className="card">
          <div>
            <img src={MotoImg} alt="Auto_png"></img>
          </div>
          <div className="text">
            <h2>Uber Moto</h2>
            <p>
              Get affordable Uber bike rides at your doorstep.Skip the crowd and zip through traffic with uber moto.
            </p>
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
        <div className="card">
          <div>
            <img src={RentalImg} alt="Auto_png"></img>
          </div>

          <div className="text">
            <h2>Uber Rentals</h2>
            <p>
                Book Rentals to save time with one car and driver for your multi-step trips
            </p>
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
        <div className="card">
          <div>
            <img src={IntercityImg} alt="Auto_png"></img>
          </div>
          <div className="text">
            <h2>Uber Intercity</h2>
            <p>
                Book Intercity to head outstation anytime in convenient and affordable cars.
            </p>
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
  );
}

export default Ridewithuber;
