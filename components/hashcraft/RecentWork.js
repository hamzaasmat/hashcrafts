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
                <Link href="/vonza">
                  <div className="single-works">
                    <img
                      src={require("../../static/images/home/vonza1.png")}
                      alt="image"
                    />

                    <div className="works-content">
                      <h3>Vonza</h3>
                      <p>
                        Lorem ipsum dolor amet, adipiscing, sed do eiusmod
                        tempor incididunt ut labore dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="item">
              <div className="col-lg-12">
                <Link href="/fotisto">
                  <div className="single-works">
                    <img
                      src={require("../../static/images/home/fotisto1.png")}
                      alt="image"
                    />

                    <div className="works-content">
                      <h3>Fotisto</h3>
                      <p>
                        Lorem ipsum dolor amet, adipiscing, sed do eiusmod
                        tempor incididunt ut labore dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="item">
              <div className="col-lg-12">
                <Link href="/swatrader">
                  <div className="single-works">
                    <img
                      src={require("../../static/images/home/furniture.png")}
                      alt="image"
                    />

                    <div className="works-content">
                      <h3>SWA Trader</h3>
                      <p>
                        Lorem ipsum dolor amet, adipiscing, sed do eiusmod
                        tempor incididunt ut labore dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="item">
              <div className="col-lg-12">
                <Link href="/rapidsolution">
                  <div className="single-works">
                    <img
                      src={require("../../static/images/home/rapid1.png")}
                      alt="image"
                    />

                    <div className="works-content">
                      <h3>Rapid Solution</h3>
                      <p>
                        Lorem ipsum dolor amet, adipiscing, sed do eiusmod
                        tempor incididunt ut labore dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
    );
  }
}

export default RecentWork;
