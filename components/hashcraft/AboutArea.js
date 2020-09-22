import React from "react";

export default function About() {
  return (
    <section className="about-area ptb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="about-image">
              <img
                src={require("../../static/images/home/aboutus.jpg")}
                alt="image"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <div className="section-title">
                <h2>About Us</h2>
                <div className="bar"></div>
                <p>
                  Basic service delivery isn't enough to differentiate any web
                  development firm in today's competitive marketplace.
                  Understanding not only our client's web needs but their
                  business needs has propelled <b>Hashcrafts</b> beyond customer
                  satisfaction to loyalty.
                </p>
              </div>

              <p>
                <b>Hashcrafts</b> have established a reputation for consistently
                delivering mission critical, technically challenging projects
                under tight time lines, while also providing exceptional
                customer service and support to our clients. This in turn has
                led to extremely positive long-term working relationships with
                both clients and solution partners alike.
              </p>

              <p>
                {" "}
                The natural benefit for clients is an efficient team that is
                driven by the market to produce quality. The best teams win and
                the proven engineering processes that have allowed our founders
                to exit multiple firms are built into our efforts.{" "}
              </p>

              <p>
                From business process inquiry to systems engineering, we provide
                services tailored to your specific needs to enable an enterprise
                where all the systems are integrated as work as a whole. We
                provide ERP, CRM and custom applications to not only increase
                the productivity of your team but also makes managing them a
                breeze.
              </p>
            </div>
          </div>
        </div>

        <div className="about-inner-area">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="about-text">
                <h3>Our Mission</h3>
                <p>
                  Whether it is a consumer-oriented app or a transformative
                  enterprise-class solution, the company leads the process from
                  ideation and concept to delivery, and provides ongoing support
                  through our framework. You’re investing more than money — it’s
                  also energy, intelligence, brand, and the expanding potential
                  of your business. Hashcrafts translates this investment into
                  meaningful impact for you and your audience.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 offset-lg-0 offset-md-3">
              <div className="about-text">
                <h3>Who we are</h3>
                <p>
                  We are <b>Hashcrafts</b>, one of the Pakistan’s leading
                  bespoke software development companies with topranked
                  professional employees. We design intelligent, cost-effective
                  and intuitive web applications, desktop applications and
                  mobile apps that help streamline processes for businesses as
                  well as create new revenue streams for start-ups and
                  established businesses alike
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
