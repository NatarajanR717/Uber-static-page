import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup_container">
      <div className="col-1">
        <div className="row-2">
          <div className="heading">
            <h3>Sign up to drive</h3>
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
        <div className="row-2">
          <div className="heading">
            <h3>Sign up to ride</h3>
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

export default Signup;
