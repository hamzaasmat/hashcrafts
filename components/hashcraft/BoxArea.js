import React from "react";
import * as Icon from "react-feather";

const BoxArea = (props) => {
  return (
    <section className="boxes-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="single-box">
              <div className="icon">
                <Icon.TrendingUp />
              </div>
              <h3>Business Strategy</h3>
              <p>
                We provide latest business specific strategies, identifying
                product strengths, adjusting pricing, acquiring new business.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-box bg-f78acb">
              <div className="icon">
                <Icon.Monitor />
              </div>
              <h3>Engineering monitoring</h3>
              <p>
                performance evaluation and close watch on developing project so
                that project will be in right shape and gives best desired
                performance.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-box bg-c679e3">
              <div className="icon">
                <Icon.Settings />
              </div>
              <h3>Maintenance</h3>
              <p>
                We assure our customers for satisfactory service and result.
                During maintenance we edit, revise, change and bring new content
                to the website.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-box bg-eb6b3d">
              <div className="icon">
                <Icon.Pocket />
              </div>
              <h3>Quality Assurance</h3>
              <p>
                {" "}
                We conduct thorough and rigorous quality checks on all of our
                projects to ensure you're getting what you expect from us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxArea;
