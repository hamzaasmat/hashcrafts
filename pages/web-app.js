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
        <PageTitle title='Web App Development'/>

        <section className="services-details-area ptb-80">
          <div className="container">
            <div className="row ">
              <div className="col-lg-6 services-details">
                <div className="services-details-desc">
                <h3>Productive & Engaging Web Solutions For Your Business</h3>
                  <p>
                    We empower our clients with adaptive web applications built
                    using React, PostgreSQL, Python, MongoDB, Angular, Node.js
                    to simplify complex business workflows.
                  </p>

                  <p>
                    We strive for efficiency in custom web applications by
                    subjecting them to accepted design standards and testing.
                    The agile practices followed by us ensure that the projects
                    are delivered within the stipulated time and budget.
                  </p>
                  <p>
                    Customized web applications fosters growth in valuation and
                    intellectual property in the long run. Businesses can better
                    streamline their daily operations and processes to fulfill
                    key challenges and achieve targeted goals.
                  </p>
                  <p>
                    We have carved out a niche in web application development,
                    alongside valued consulting and analysis solutions, to serve
                    growing businesses and industry leaders
                  </p>
                  <a className="btn btn-primary" href="#proposal">
                    Request a proposal
                  </a>
                </div>
              </div>

              <div className="col-lg-6 services-details-image">
                <img
                  src={require("../static/images/home/webapp.jpg")}
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
