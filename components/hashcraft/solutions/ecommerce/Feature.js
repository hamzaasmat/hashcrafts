import React, { Component } from "react";
import Link from "next/link";
import * as Icon from "react-feather";

class Services extends Component {
  render() {
    return (
      <section className="iot-services-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>Core Modules</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="single-repair-services">
                <div className="icon">
                  <Icon.Monitor />
                </div>

                <h3>Front Shop & Dashboard</h3>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="single-repair-services">
                <div className="icon">
                  <i>
                    <Icon.Smile />
                  </i>
                </div>

                <h3>User Friendly</h3>
                <br />
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="single-repair-services">
                <div className="icon">
                  <i>
                    <Icon.Edit />
                  </i>
                </div>

                <h3>User Generated Reviews</h3>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="single-repair-services">
                <div className="icon">
                  <i>
                    <Icon.List />
                  </i>
                </div>

                <h3>Wish List</h3>
                <br />
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="single-repair-services">
                <div className="icon">
                  <i>
                    <Icon.Search />
                  </i>
                </div>

                <h3>Related Items</h3>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="single-repair-services">
                <div className="icon">
                  <i>
                    <Icon.Award />
                  </i>
                </div>

                <h3>Fully Secured</h3>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="single-repair-services">
                <div className="icon">
                  <i>
                    <Icon.CreditCard />
                  </i>
                </div>

                <h3>Online Payment</h3>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="single-repair-services">
                <div className="icon">
                  <i>
                    <Icon.Settings />
                  </i>
                </div>

                <h3>Fully Customizable</h3>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="single-repair-services">
                <div className="icon">
                  <i>
                    <Icon.Truck />
                  </i>
                </div>

                <h3>Order & Shipping Management </h3>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="single-repair-services">
                <div className="icon">
                  <i>
                    <Icon.MoreHorizontal />
                  </i>
                </div>

                <h3>& Many More</h3>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
