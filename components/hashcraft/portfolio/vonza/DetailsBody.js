import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import * as Icon from "react-feather";
import "../../../../node_modules/react-modal-video/css/modal-video.min.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  require("../../../../static/images//home/vonza1.png"),
  require("../../../../static/images//home/vonza2.png"),
  require("../../../../static/images//home/vonza3.png"),
  require("../../../../static/images//home/vonza5.png"),
  require("../../../../static/images//home/vonza4.png"),
];

export default class DetailsBody extends Component {
  state = {
    isOpen: false,
    photoIndex: 0,
    isOpenImage: false,
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    const { photoIndex, isOpenImage } = this.state;
    return (
      <section className="project-details-area ptb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div
                className="project-details-image"
                onClick={() => this.setState({ isOpenImage: true })}
              >
                <img
                  src={require("../../../../static/images/home/vonza1.png")}
                  alt="work"
                />

                <Icon.Plus />
              </div>
            </div>

            {isOpenImage && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
                }
                onCloseRequest={() => this.setState({ isOpenImage: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex:
                      (photoIndex + images.length - 1) % images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                  })
                }
              />
            )}

            <div className="col-lg-6 col-md-6">
              <div
                className="project-details-image"
                onClick={() => this.setState({ isOpenImage: true })}
              >
                <img
                  src={require("../../../../static/images//home/vonza2.png")}
                  alt="work"
                />

                <Icon.Plus />
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="project-details-desc">
                <h3>Vonza</h3>

                <p>
                  Vonza is the ultimate platform to build online courses, sell
                  products, offer services, construct sales funnels, schedule
                  appointments, launch email marketing campaigns and develop
                  amazing websites.Vonza makes it seamless for entrepreneurs and
                  creatives to run a successful online business all in one
                  place, not all over the place! While saving them time, money
                  and tech frustrations.Before Vonza, when coaches and
                  entrepreneurs wanted to share their knowledge, sell a course
                  online or run their online business, they needed several
                  different platforms, multiple subscriptions, tools, apps, tech
                  people, plugins and a ton of duct-tape to run their online
                  business. Some platforms only provided online courses, some
                  coaching tools, some email marketing while others sales
                  funnels - running an online business was complicated and
                  seemed all over the place! Coaches and business owners were
                  wasting precious time, money and losing their sanity.
                </p>

                <p>
                  After Vonza, you don’t need annoying programmers and plugins.
                  You don’t need to remember 20 different passwords. You don’t
                  need to write any code. Your business doesn’t have to be all
                  over the place. You get to put all your focus on your
                  customers and in your business. To put the cherry on top, you
                  also get to save money, time and enjoy the freedom of
                  entrepreneurship. Within minutes, you will get a fully
                  functioning online website platform with the features and
                  tools you need to run a successful online business. One simple
                  login and the world is your audience. We welcome you to Vonza!
                </p>

                <div className="project-details-information">
                  <div className="single-info-box">
                    <h4>Happy Client</h4>
                    <p>John Doe</p>
                  </div>

                  <div className="single-info-box">
                    <h4>Category</h4>
                    <p>Portfolio, Personal</p>
                  </div>

                  <div className="single-info-box">
                    <h4>Date</h4>
                    <p>February 28, 2019</p>
                  </div>

                  <div className="single-info-box">
                    <h4>Share</h4>
                    <ul>
                      <li>
                        <a href="#">
                          <Icon.Facebook />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Icon.Twitter />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Icon.Instagram />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Icon.Linkedin />
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="single-info-box">
                    <a href="#" className="btn btn-primary">
                      Live Preview
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
