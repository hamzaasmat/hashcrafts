import React, { Component } from "react";
import Header from "../components/hashcraft/Header";
import Footer from "../components/hashcraft/Footer";
import FaqContent from "../components/hashcraft/ContentBody";
import WhyChoose from "../components/hashcraft/WhyChoose";
import PageTitle from "../components/hashcraft/PageTitle";

class ServiceDetails extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <PageTitle title='Digital Marketing' />

        <section className="services-details-area ptb-80">
          <div className="container">
            <div className="row ">
              <div className="col-lg-6 services-details">
                <div className="services-details-desc">
                  <h3>Unique and creative design tailored to each client</h3>
                  <p>
                    At <b>Hashcrafts</b>, we provide our clients with written
                    and visual content using methods that are proven. The right
                    content can help you to become authoritative, visible and
                    engaging in a way you couldn’t otherwise imagine. Customers
                    want to transact with a brand where they can be part of a
                    conversation online; powerful content can facilitate
                    meaningful engagement.
                  </p>

                  <p>
                    When it comes to choosing a vendor to help with your digital
                    marketing plans, you should rely on a company that provides
                    quality content and helps you make an informed decision.
                    <b>Hashcrafts</b> has a team of skilled writers, designers,
                    developers and marketers who can build a meaningful content
                    marketing plan and can help you become a trusted source for
                    your target audience. Some of the key reasons we are
                    different from others in the market is our lifecycle and
                    workflow.
                  </p>
                  <p>
                    Through our digital services we can begin by focussing the
                    digital changes that directly influence a client’s business
                    strategy and where we can easily deliver return on
                    investment, where we then expand into larger scale digital
                    initiatives from discovery, to launch and beyond.
                  </p>

                  <a className="btn btn-primary" href="#proposal">
                    Request a proposal
                  </a>
                </div>
              </div>

              <div className="col-lg-6 services-details-image">
                <img
                  src={require("../static/images/home/digitalmarketing.jpg")}
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
