import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">
              <h1 class="t-eyebrow-elevated">
                <img
                  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-trade-in-logo-202303?wid=462&amp;hei=96&amp;fmt=png-alpha&amp;.v=1689868087861"
                  alt="Apple Trade In"
                  width="150"
                  height="35"
                  data-scale-params-1="wid=231&amp;hei=48&amp;fmt=png-alpha&amp;.v=1689868087861"
                  data-scale-initial="2"
                  class="dd-logo ir"
                />
              </h1>
            </h1>
            <p className="lead mb-4">
              The Apple App Store is a digital distribution platform where
              individuals can buy and download digital software and
              applications. Apps—an abbreviation of the word "applications"—are
              software tools that provide additional functionality to an
              operating system. Apps purchased from the Apple App Store are
              stored in the iCloud—a cloud storage and cloud computing service
              from Apple—for easy access from any signed-in device.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/images/about.png"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
