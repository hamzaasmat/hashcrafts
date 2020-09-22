import React from "react";
import * as Icon from "react-feather";
import Link from "next/link";

export default function ProjectContent() {
  return (
    <section className="works-area ptb-80 bg-f7fafd">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <Link href="/sms">
              <div className="single-works">
                <img
                  src={require("../../../static/images/home/school1.png")}
                  alt="image"
                />

                <div className="works-content">
                  <h3>
                    School Information System
                  </h3>
                  <p>
                    Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                    incididunt ut labore dolore magna aliqua.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-4 col-md-6">
            <Link href="/e-commerce">
              <div className="single-works">
                <img
                  src={require("../../../static/images/home/bags.png")}
                  alt="image"
                />

                <div className="works-content">
                  <h3>
                    E-commerce Solution
                  </h3>
                  <p>
                    Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                    incididunt ut labore dolore magna aliqua.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-4 col-md-6">
            <Link href="/pos">
              <div className="single-works">
                <img
                  src={require("../../../static/images/home/posdashboard.png")}
                  alt="image"
                />

                <div className="works-content">
                  <h3>
                    Point of Sale
                  </h3>
                  <p>
                    Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                    incididunt ut labore dolore magna aliqua.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="shape8 rotateme">
        <img src={require("../../../static/images/shape2.svg")} alt="shape" />
      </div>
      <div className="shape2 rotateme">
        <img src={require("../../../static/images/shape2.svg")} alt="shape" />
      </div>
      <div className="shape7">
        <img src={require("../../../static/images/shape4.svg")} alt="shape" />
      </div>
      <div className="shape4">
        <img src={require("../../../static/images/shape4.svg")} alt="shape" />
      </div>
    </section>
  );
}
