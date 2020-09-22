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
        <PageTitle title="Mobile App Development" />

        <section className="services-details-area ptb-80">
          <div className="container">
            <div className="row ">
              <div className="col-lg-6 services-details">
                <div className="services-details-desc">
                  <h3>
                    Robust Mobile Applications For Improved Client And Workforce
                    Engagement
                  </h3>
                  <p>
                    We employ platform-specific SDKs for Android and iOS,
                    cross-platform approaches relying on HTML5, and conversion
                    tools, to develop cost-effective enterprise mobile
                    solutions.
                  </p>

                  <p>
                    Our iOS applications help you take informed decisions and
                    give you the flexibility to perform critical tasks with
                    ease. Our services extend across various domains and skill
                    sets to help you innovate business processes across
                    departments.
                  </p>
                  <p>
                    Our expert team can help deliver customized, secure, and
                    robust native Android applications including e-commerce,
                    augmented reality and integration applications that help you
                    meet your business objectives.
                  </p>
                  <p>
                    We have expertise in building mobile solutions that meet
                    your multiplatform requirements, ensuring a uniform
                    experience across numerous devices and platforms. Whether a
                    smartphone, tablet or laptop running on iOS, Android, or
                    Windows, our developers can build the right solutions.
                  </p>
                  <a className="btn btn-primary" href="#proposal">
                    Request a proposal
                  </a>
                </div>
              </div>

              <div className="col-lg-6 services-details-image">
                <img
                  src={require("../static/images/home/mobileapp.jpg")}
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
