import React from "react";
import * as Icon from "react-feather";
import ReactWOW from "react-wow";
import Link from "../common/ActiveLink";

class ServicesArea extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="services-area ptb-80 ">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12 services-content">
                <div className="section-title">
                  <h2>WHAT WE CRAFT</h2>
                  <div className="bar"></div>
                  <p>
                    We’ll help you bring your most complex software vision to
                    life with our leading custom application development
                    services.
                  </p>
                </div>

                <div className="row">
                  <Link href="/ui-ux">
                    <div className="col-lg-6 col-md-6">
                      <div className="box">
                        <Icon.Database /> UI/UX Design
                      </div>
                    </div>
                  </Link>

                  <Link href="/web-app">
                    <div className="col-lg-6 col-md-6">
                      <div className="box">
                        <Icon.File /> Website App Development
                      </div>
                    </div>
                  </Link>

                  <Link href="/mobile-app">
                    <div className="col-lg-6 col-md-6">
                      <div className="box">
                        <Icon.TrendingUp /> Mobile App Development
                      </div>
                    </div>
                  </Link>

                  <Link href="/ecommerce">
                    <div className="col-lg-6 col-md-6">
                      <div className="box">
                        <Icon.Folder /> E-commerce Development
                      </div>
                    </div>
                  </Link>

                  <Link href="/hybrid-app">
                    <div className="col-lg-6 col-md-6">
                      <div className="box">
                        <Icon.Monitor /> Hybrid App Development
                      </div>
                    </div>
                  </Link>

                  <Link href="/digital-marketing">
                    <div className="col-lg-6 col-md-6">
                      <div className="box">
                        <Icon.Mail /> Digital Marketing
                      </div>
                    </div>
                  </Link>

                  <Link href="/app-deployment">
                    <div className="col-lg-6 col-md-6">
                      <div className="box">
                        <Icon.Globe /> Application Deployment
                      </div>
                    </div>
                  </Link>

                  <Link href="/dedicated-team">
                    <div className="col-lg-6 col-md-6">
                      <div className="box">
                        <Icon.Cloud /> Dedicated Team
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 services-right-image">
                <ReactWOW delay="0.6s" animation="fadeInDown">
                  <img
                    src={require("../../static/images/services-right-image/book-self.png")}
                    className="wow fadeInDown"
                    data-wow-delay="0.6s"
                    alt="book-self"
                  />
                </ReactWOW>
                <ReactWOW delay="0.6s" animation="fadeInUp">
                  <img
                    src={require("../../static/images/services-right-image/box.png")}
                    className="wow fadeInUp"
                    data-wow-delay="0.6s"
                    alt="box"
                  />
                </ReactWOW>
                <ReactWOW delay="0.6s" animation="fadeInLeft">
                  <img
                    src={require("../../static/images/services-right-image/chair.png")}
                    className="wow fadeInLeft"
                    data-wow-delay="0.6s"
                    alt="chair"
                  />
                </ReactWOW>
                <ReactWOW delay="0.6s" animation="zoomIn">
                  <img
                    src={require("../../static/images/services-right-image/cloud.png")}
                    className="wow zoomIn"
                    data-wow-delay="0.6s"
                    alt="cloud"
                  />
                </ReactWOW>
                <ReactWOW delay="0.6s" animation="bounceIn">
                  <img
                    src={require("../../static/images/services-right-image/cup.png")}
                    className="wow bounceIn"
                    data-wow-delay="0.6s"
                    alt="cup"
                  />
                </ReactWOW>
                <ReactWOW delay="0.6s" animation="fadeInDown">
                  <img
                    src={require("../../static/images/services-right-image/flower-top.png")}
                    className="wow fadeInDown"
                    data-wow-delay="0.6s"
                    alt="flower"
                  />
                </ReactWOW>
                <ReactWOW delay="0.6s" animation="zoomIn">
                  <img
                    src={require("../../static/images/services-right-image/head-phone.png")}
                    className="wow zoomIn"
                    data-wow-delay="0.6s"
                    alt="head-phone"
                  />
                </ReactWOW>
                <ReactWOW delay="0.6s" animation="fadeInUp">
                  <img
                    src={require("../../static/images/services-right-image/monitor.png")}
                    className="wow fadeInUp"
                    data-wow-delay="0.6s"
                    alt="monitor"
                  />
                </ReactWOW>
                <ReactWOW delay="0.6s" animation="rotateIn">
                  <img
                    src={require("../../static/images/services-right-image/mug.png")}
                    className="wow rotateIn"
                    data-wow-delay="0.6s"
                    alt="mug"
                  />
                </ReactWOW>
                <ReactWOW delay="0.6s" animation="fadeInUp">
                  <img
                    src={require("../../static/images/services-right-image/table.png")}
                    className="wow fadeInUp"
                    data-wow-delay="0.6s"
                    alt="table"
                  />
                </ReactWOW>
                <ReactWOW delay="0.6s" animation="zoomIn">
                  <img
                    src={require("../../static/images/services-right-image/tissue.png")}
                    className="wow zoomIn"
                    data-wow-delay="0.6s"
                    alt="tissue"
                  />
                </ReactWOW>
                <ReactWOW delay="0.6s" animation="zoomIn">
                  <img
                    src={require("../../static/images/services-right-image/water-bottle.png")}
                    className="wow zoomIn"
                    data-wow-delay="0.6s"
                    alt="water-bottle"
                  />
                </ReactWOW>
                <ReactWOW delay="0.6s" animation="fadeInLeft">
                  <img
                    src={require("../../static/images/services-right-image/wifi.png")}
                    className="wow fadeInLeft"
                    data-wow-delay="0.6s"
                    alt="wifi"
                  />
                </ReactWOW>
                <img
                  src={require("../../static/images/services-right-image/cercle-shape.png")}
                  className="bg-image rotateme"
                  alt="shape"
                />
                <ReactWOW delay="0.6s" animation="fadeInUp">
                  <img
                    src={require("../../static/images/services-right-image/service-right-main-pic.png")}
                    className="wow fadeInUp"
                    data-wow-delay="0.6s"
                    alt="main-pic"
                  />
                </ReactWOW>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ServicesArea;
