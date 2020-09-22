import React from "react";
import Link from "next/link";

export default function ProjectContent() {
  return (
    <section className="works-area ptb-80 bg-f7fafd">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <Link href="/vonza">
              <div className="single-works">
                <img
                  src={require("../../../static/images/home/vonza1.png")}
                  alt="image"
                />
                <div className="works-content">
                  <h3>Vonza</h3>
                  <p>
                    Vonza is the ultimate platform to build online courses, sell
                    products, offer services, construct sales funnels, schedule
                    appointments, launch email marketing campaigns and develop
                    amazing websites.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-4 col-md-6">
            <Link href="/rapidsolution">
              <div className="single-works">
                <img
                  src={require("../../../static/images/home/rapid1.png")}
                  alt="image"
                />

                <div className="works-content">
                  <h3>Rapid Solution</h3>
                  <p>
                    Rapid Solution is the first laptop repair service in Lahore
                    to provide all sort of laptop repair solutions at your
                    doorstep.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-4 col-md-6">
            <Link href="/fotisto">
              <div className="single-works">
                <img
                  src={require("../../../static/images/home/fotisto1.png")}
                  alt="image"
                />

                <div className="works-content">
                  <h3>Fotisto</h3>
                  <p>
                    Fotisto is a marketplace that uses AI and Cloud-based tools
                    to bridge clients with photographers/videographers.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-4 col-md-6">
            <Link href="/psms">
              <div className="single-works">
                <img
                  src={require("../../../static/images/home/school1.png")}
                  alt="image"
                />

                <div className="works-content">
                  <h3>School Information System</h3>
                  <p>
                    Our School Management System is specialized to manage
                    education based organization like school, colleges,
                    Universities etc
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-4 col-md-6">
            <Link href="/swatrader">
              <div className="single-works">
                <img
                  src={require("../../../static/images/home/furniture.png")}
                  alt="image"
                />

                <div className="works-content">
                  <h3>SWA Trader</h3>
                  <p>
                    SWA Trader is one stop online shopping store. Having
                    all kinds of products from clothing and apparel to
                    electronics and mobile phones.
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
