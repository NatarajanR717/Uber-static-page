import React from "react";
import "./Safety.css";
import SafeHomeImg from "../assets/Safety_Home_Img2x.webp";
import SafeCity from "../assets/Cities_Home_Img2x.webp";
import MultiPeopleImg from "../assets/person-multiple-outlined.svg";
import NewsReadingImg from "../assets/document-outlined.svg";
import HomeImg from "../assets/home-outlined.svg";

function Safety() {
  return (
    <div className="safety_container">
      <h1>Focused on safety, wherever you go</h1>
      <div className="items">
        <div className="item">
          <img src={SafeHomeImg} alt="home"></img>
          <div className="safe_content">
            <h5>Our commitment to your safety</h5>
            <p>
              With every safety feature and every standard in our Community
              Guidelines, we're committed to helping to create a safe
              environment for our users.
            </p>
          </div>
          <div className="link">
            <a href="./">Read about our Community Guidelines</a>
            <a href="./" className="safety">
              See all safety features
            </a>
          </div>
        </div>
        <div className="item">
          <img src={SafeCity} alt="home"></img>
          <div className="safe_content">
            <h5>Setting 10,000+ cities in motion</h5>
            <p>
              The app is available in thousands of cities worldwide, so you can
              request a ride even when you're far from home.
            </p>
          </div>
          <div className="link">
            <a href="./">View all cities</a>
          </div>
        </div>
      </div>

      <div className="row-2">
        <div className="col-1">
          <img src={MultiPeopleImg} alt="multile-people"></img>
          <div className="safe_content">
            <h5>About us</h5>
            <p>
              Find out how we started, what drives us, and how we’re reimagining
              how the world moves.
            </p>
          </div>
          <div className="link">
            <a href="./">Learn more about Uber</a>
          </div>
        </div>
        <div className="col-1">
          <img src={NewsReadingImg} alt="news_room"></img>
          <div className="safe_content">
            <h5>Newsroom</h5>
            <p>
              See announcements about our latest releases, initiatives, and
              partnerships.
            </p>
          </div>
          <div className="link">
            <a href="./">Go to Newsroom</a>
          </div>
        </div>
        <div className="col-1">
          <img src={HomeImg} alt="multile-people"></img>
          <div className="safe_content">
            <h5>Global citizenship</h5>
            <p>
              Read about our commitment to making a positive impact in the
              cities we serve.
            </p>
          </div>
          <div className="link">
            <a href="./">See our partnerships</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Safety;
