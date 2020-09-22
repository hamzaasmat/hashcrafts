import React, { Component } from "react";
import Header from "../components/hashcraft/Header";
import PageTitle from "../components/hashcraft/PageTitle";
import Footer from "../components/hashcraft/Footer";
import FaqContent from "../components/hashcraft/ContentBody";
import WhyChoose from "../components/hashcraft/WhyChoose";

class ServiceDetails extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <PageTitle title='UI/UX Design'/>

        <section className="services-details-area ptb-80">
          <div className="container">
            <div className="row ">
              <div className="col-lg-6 services-details">
                <div className="services-details-desc">
                <h3>
                    Innovative & User Centered, Delightful Customer Experiences.
                  </h3>
                  <p>
                    Our UX Designers and Software Architects will create an
                    interactive prototype for the software using Axure RP (Rapid
                    Prototyping).
                  </p>

                  <p>
                    We can help your product speak for itself. Check out our
                    projects portfolio, client pages and their websites. You
                    need designs that your customers will love and a compelling
                    digital media presence that will cause your competition step
                    up their game. The right experience cultivates customer
                    loyalty and builds brand value.
                  </p>
                  <p>
                    A decade in design has allowed our team to perfect the
                    process of delivering UI andUX services.We follow
                    established design standards, workflows, and guidelines —
                    you get the product you need, delivered by expert designers
                    within the set timeframe.
                  </p>

                  <a className="btn btn-primary" href="#proposal">
                    Request a proposal
                  </a>
                </div>
              </div>

              <div className="col-lg-6 services-details-image">
                <img
                  src={require("../static/images/home/uiux.png")}
                  className="wow fadeInUp"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </section>
        <WhyChoose />
        <FaqContent />
        <Footer />
      </React.Fragment>
    );
  }
}

export default ServiceDetails;
