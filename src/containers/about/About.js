import React from "react";

import img1 from "../../assets/imges/gr-img.png";
import img2 from "../../assets/imges/gr2-img.webp";
import Brand from "../brands/Brands";
import NewCollection from "../newCollection/NewCollection";

import "./About.scss";

function About() {
  return (
    <div>
      <div className="app-about-container">
        <div className="app-about-container__block-story">
          <div className="app-about-container__block-story__block-text">
            <p className="app-about-container__block-story__block-text__title">
              Our Story
            </p>
            <p className="info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <img
            className="app-about-container__block-story__img"
            src={img1}
            alt="img1"
          />
        </div>
        <div className="app-about-container__block-story">
          <div className="app-about-container__block-story__block-text">
            <p className="app-about-container__block-story__block-text__title">
              Journey start from
            </p>
            <p className="info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <img
            className="app-about-container__block-story__img"
            src={img2}
            alt="img1"
          />
        </div>
        <div className="app-about-container__block-story__block-text">
          <p className="app-about-container__block-story__block-text__title">
            2020
          </p>
          <p className="info-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
      <Brand />
      <NewCollection />
    </div>
  );
}

export default About;
