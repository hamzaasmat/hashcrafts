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
                  <Icon.Power />
                </div>

                <h3>Login & Register</h3>
                <br />
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="single-repair-services">
                <div className="icon">
                  <Icon.DollarSign />
                </div>

                <h3>Billing & Order Processing</h3>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="single-repair-services">
                <div className="icon">
                  <i>
                    <Icon.Trello />
                  </i>
                </div>

                <h3>Sales Monitoring & Reporting</h3>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="single-repair-services">
                <div className="icon">
                  <i>
                    <Icon.Database />
                  </i>
                </div>

                <h3>Inventory & Stock Management</h3>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="single-repair-services">
                <div className="icon">
                  <i>
                    <Icon.Repeat />
                  </i>
                </div>

                <h3>Returns Management</h3>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="single-repair-services">
                <div className="icon">
                  <i>
                    <Icon.User />
                  </i>
                </div>

                <h3>Customer Relations</h3>
                <br/>
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
                <br/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
