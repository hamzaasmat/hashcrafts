import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import OwlCarousel from "react-owl-carousel3";

const slideOptions = {
  items: 4,
  loop: true,
  nav: false,
  autoplay: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 3,
    },
    1500: {
      items: 4,
    },
  },
};

class RecentWork extends React.Component {
  render() {
    return (
      <section className="works-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>Our Recent Works</h2>
            <div className="bar"></div>
            <p>
              Some highlights of our favorite projects we've done for forward
              thinking clients.
            </p>
          </div>
        </div>

        <div className="row m-0">
          <OwlCarousel
            className="works-slides owl-carousel owl-theme"
            {...slideOptions}
          >
            <div className="item">
              <div className="col-lg-12">
                <div className="single-works">
                  <img
                    src={require("../../static/images/works-image/works-image1.jpg")}
                    alt="image"
                  />

                  <Link href="#">
                    <a className="icon">
                      <Icon.Settings />
                    </a>
                  </Link>

                  <div className="works-content">
                    <h3>
                      <Link href="#">
                        <a>Incredible infrastructure</a>
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                      incididunt ut labore dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="col-lg-12">
                <div className="single-works">
                  <img
                    src={require("../../static/images/works-image/works-image2.jpg")}
                    alt="image"
                  />

                  <Link href="#">
                    <a className="icon">
                      <Icon.Settings />
                    </a>
                  </Link>

                  <div className="works-content">
                    <h3>
                      <Link href="#">
                        <a>Incredible infrastructure</a>
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                      incididunt ut labore dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="col-lg-12">
                <div className="single-works">
                  <img
                    src={require("../../static/images/works-image/works-image3.jpg")}
                    alt="image"
                  />

                  <Link href="#">
                    <a className="icon">
                      <Icon.Settings />
                    </a>
                  </Link>

                  <div className="works-content">
                    <h3>
                      <Link href="#">
                        <a>Incredible infrastructure</a>
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                      incididunt ut labore dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="col-lg-12">
                <div className="single-works">
                  <img
                    src={require("../../static/images/works-image/works-image4.jpg")}
                    alt="image"
                  />

                  <Link href="#">
                    <a className="icon">
                      <Icon.Settings />
                    </a>
                  </Link>

                  <div className="works-content">
                    <h3>
                      <Link href="#">
                        <a>Incredible infrastructure</a>
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                      incididunt ut labore dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="col-lg-12">
                <div className="single-works">
                  <img
                    src={require("../../static/images/works-image/works-image5.jpg")}
                    alt="image"
                  />

                  <Link href="#">
                    <a className="icon">
                      <Icon.Settings />
                    </a>
                  </Link>

                  <div className="works-content">
                    <h3>
                      <Link href="#">
                        <a>Incredible infrastructure</a>
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                      incididunt ut labore dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
    );
  }
}

export default RecentWork;
