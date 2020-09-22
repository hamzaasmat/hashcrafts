import React from "react";
import * as Icon from "react-feather";
import ReactWOW from "react-wow";
import Link from "../common/ActiveLink";

class ServicesArea extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="services-area ptb-80">
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

                  <Link href="/digital-marketing">
                    <div className="col-lg-6 col-md-6">
                      <div className="box">
                        <Icon.Mail /> Digital Marketing
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
                <ReactWOW delay="0.4s" animation="fadeInUp">
                  <img
                    src={require("../../static/images/home/service-right.png")}
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
