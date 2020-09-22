import React, { Component } from "react";
import ReactWOW from "react-wow";

class WhyChoose extends Component {
  render() {
    return (
      <section className="why-choose-us ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <h2>Why Choose Us</h2>
                <div className="bar"></div>
                <p>
                  We always focus on results. For us it’s all about what adds
                  value for you and your business
                </p>
              </div>

              <div className="why-choose-us-image">
                <ReactWOW animation="fadeInLeft">
                  <img
                    src={require("../../static/images/why-choose-us-image/man-stand.png")}
                    className="wow fadeInLeft"
                    alt="image"
                  />
                </ReactWOW>
                <ReactWOW animation="fadeInRight">
                  <img
                    src={require("../../static/images/why-choose-us-image/database.png")}
                    className="wow fadeInRight"
                    alt="image"
                  />
                </ReactWOW>
                <ReactWOW animation="rotateme">
                  <img
                    src={require("../../static/images/services-left-image/cercle-shape.png")}
                    className="rotateme"
                    alt="image"
                  />
                </ReactWOW>
                <ReactWOW animation="fadeInUp">
                  <img
                    src={require("../../static/images/why-choose-us-image/main-static.png")}
                    className="main-pic"
                    alt="image"
                  />
                </ReactWOW>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="single-why-choose-us">
                    <div className="icon">
                      <i className="flaticon-team"></i>
                    </div>
                    <h3>Proficient & Friendly</h3>
                    <p>
                      We're Proficient as well as accountable to our clients and
                      to each other, and respond to problems with solutions, not
                      blame.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-why-choose-us">
                    <div className="icon">
                      <i className="flaticon-rocket"></i>
                    </div>
                    <h3>Extremely Fast</h3>
                    <p>
                      We build applications with minimalist and sleek design to
                      give it a performance boost and make it extremely fast.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-why-choose-us">
                    <div className="icon">
                      <i className="flaticon-shield"></i>
                    </div>
                    <h3>100% Safe & Security</h3>
                    <p>
                      Give us your most ambitious projects and get in return
                      meticulous digital products that are fast, secure,
                      fault-tolerant, scalable, and maintainable.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-why-choose-us">
                    <div className="icon">
                      <i className="flaticon-diamond"></i>
                    </div>
                    <h3>Top-Rated</h3>
                    <p>
                      Smart usability sparks at the design and technology,
                      keeping your audiences delighted which adds extra element
                      of emotion that our competitors covet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WhyChoose;
