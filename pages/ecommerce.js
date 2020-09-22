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
        <PageTitle title="E-commerce Development" />

        <section className="services-details-area ptb-80">
          <div className="container">
            <div className="row ">
              <div className="col-lg-6 services-details">
                <div className="services-details-desc">
                  <h3>
                    Secure & scalable E-Commerce Solutions For Your Business
                  </h3>
                  <p>
                    Take your e-commerce efforts to the next level to be the
                    best in your niche or start your full-on digital
                    transformation. We can help you be the best online business
                    in your category, improve existing workflow, analyze
                    visitors’ shopping patterns and drive value for your
                    business’s digital presence and your customers.
                  </p>

                  <p>
                    Your e-commerce presence can be the tip of the spear for
                    customers engaging with your product and your brand. Tying
                    together inventory management, shipping, billing and product
                    analytics can materially drive return on investment.
                  </p>

                  <p>
                    The e-commerce landscape is rapidly evolving and fiercely
                    competitive. Whether you are implementing a new platform,
                    updating existing infrastructure, leverage our experienced
                    team to help you filter out the noise.
                  </p>
                  <p>
                    When you invest in a robust commerce experience, it powers
                    your sales team to be more efficient and spend more time
                    fostering customer relationships.
                  </p>
                  <p>
                    Our eCommerce solution gives your customers the power to
                    interact with your business how they want, when they want,
                    and at their moment of relevance.
                  </p>

                  <a className="btn btn-primary" href="#proposal">
                    Request a proposal
                  </a>
                </div>
              </div>

              <div className="col-lg-6 services-details-image">
                <img
                  src={require("../static/images/home/home.png")}
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
