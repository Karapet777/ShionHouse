import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="app-Footer">
      <div className="app-Footer__block">
        <div className="app-Footer__items">
          <p className="app-Footer__logo">Shion House</p>
          <p>
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare, eros dolor interdum nulla.
          </p>
        </div>
        <div>
          <p>Quick links</p>
          <p>Image Licensin</p>
          <p>Style Guide</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <p>Shop Category</p>
          <p>Image Licensin</p>
          <p>Style Guide</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <p>Pertners</p>
          <p>Image Licensin</p>
          <p>Style Guide</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <p>Get in touch</p>
          <p>(+374) 93-68-27-14</p>
          <p>kkarapetyan1192@gmail.com</p>
        </div>
      </div>
      <div className="app-Footer__icons">
        <FacebookIcon />
        <TwitterIcon />
        <PinterestIcon />
      </div>
    </div>
  );
};

export default Footer;
