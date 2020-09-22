import React from "react";
import Link from "next/link";
import ReactWOW from "react-wow";
import Banner from "../../static/images/home/home.png";

const MainBanner = () => {
  return (
    <div className="main-banner">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-5">
                <ReactWOW delay="0.5s" animation="fadeInLeft">
                  <div className="hero-content">
                    <h1>Craft Your Business With Us</h1>
                    <p>
                      We consult, design & engineer successful web, mobile &
                      custom software solutions, that fuel innovation & increase
                      business efficiency!
                    </p>

                    <Link href="#">
                      <a className="btn btn-primary">Get Started</a>
                    </Link>
                  </div>
                </ReactWOW>
              </div>

              <div className="col-lg-6 offset-lg-1">
                <ReactWOW delay="0.5s" animation="fadeInUp">
                  <img
                    src={Banner}
                    className="wow fadeInUp"
                    data-wow-delay="0"
                    alt="main-pic"
                  />
                </ReactWOW>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
