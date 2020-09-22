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
        <PageTitle title='Dedicated Team' />

        <section className="services-details-area ptb-80">
          <div className="container">
            <div className="row ">
              <div className="col-lg-6 services-details">
                <div className="services-details-desc">
                <h3>
                    Software experts who work exactly where, when, and how you
                    need them most
                  </h3>
                  <p>
                    For those of our customers desiring complete control of
                    every aspect of the development process, <b>Hashcrafts</b>{" "}
                    offers the Dedicated Software Development Team service.
                  </p>

                  <p>
                    Instead of hiring a recruiting agency and spending extra
                    time and money, cut out the middle man and get immediate
                    access to expert developers with Hashcrafts.
                  </p>
                  <p>
                    We use a rigorous hiring and training system to ensure that
                    our engineers are some of the best in the industry. Every
                    Hashcrafts engineer has expertise with at least two
                    different technology stacks and versatile development
                    experience to meet your unique business needs.We offers
                    fair, transparent pricing at every stage of your project.
                    And if your business needs change, our Dedicated Development
                    teams are trained to adjust their performance.
                  </p>
                  <p>
                    we've cultivated a unique company culture that's focused on
                    customers. All of our employees share common passion for
                    helping your business thrive by delivering high-quality
                    software. When you hire a Hashcrafts team, you're gaining a
                    true technology partner.
                  </p>
                  <a className="btn btn-primary" href="#proposal">
                    Request a proposal
                  </a>
                </div>
              </div>

              <div className="col-lg-6 services-details-image">
                <img
                  src={require("../static/images/home/dedicatedteam.jpg")}
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
