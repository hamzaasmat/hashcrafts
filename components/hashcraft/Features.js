import React, { Component } from "react";
import * as Icons from "react-feather";

class Features extends Component {
  render() {
    return (
      <section className="hosting-features-area ptb-80 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Our Features</h2>
            <div className="bar"></div>
            <p>
              Sharing our expertise and passion to build solutions that empower
              your business
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-hosting-features">
                <div className="icon">
                  <Icons.Settings />
                </div>

                <h3>Incredible Infrastructure</h3>
                <p>
                  {" "}
                  Our team of experienced professionals and proven methodologies
                  to offer purpose fit infrastructure solutions and deliverables
                  to meet specific business needs.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-hosting-features">
                <div className="icon bg-c679e3">
                  <Icons.TrendingUp />
                </div>

                <h3>Software Consultancy</h3>
                <p>
                  Consulting with you for a period of time to understand your
                  business, reviewing your current technology and giving you
                  recommendation for improvement
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-hosting-features">
                <div className="icon">
                  <Icons.BarChart2 />
                </div>

                <h3>Business Analysis</h3>
                <p>
                  {" "}
                  We always talk to our customers to understand their needs. Our
                  team can analyze your project's functionality, business logics
                  & software architecture
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-hosting-features">
                <div className="icon bg-c679e3">
                  <Icons.Cpu />
                </div>

                <h3>Dependability</h3>
                <p>
                  We endeavor to always deliver what we promise you, to meet
                  every deadline, and to communicate proactively
                </p>
                <br />
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-hosting-features">
                <div className="icon">
                  <Icons.Activity />
                </div>

                <h3>Empathy</h3>
                <p>
                  We put ourselves in the customers’ shoes to visualize the
                  world from their perspective, this allows us to create a
                  product that meets their needs and expectations.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-hosting-features">
                <div className="icon bg-c679e3">
                  <Icons.Anchor />
                </div>

                <h3>Creativity</h3>
                <p>
                  We encourage out-of-the-box thinking. Our teammates
                  collaborate, throw ideas around, speak with one another, and
                  clients to get those creative juices flowing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
