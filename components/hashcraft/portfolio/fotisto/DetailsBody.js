import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import * as Icon from "react-feather";
import "../../../../node_modules/react-modal-video/css/modal-video.min.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  require("../../../../static/images/home/fotisto1.png"),
  require("../../../../static/images/home/fotisto2.png"),
  require("../../../../static/images/home/fotisto4.png"),
  require("../../../../static/images/home/fotisto3.png"),
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
                  src={require("../../../../static/images/home/fotisto1.png")}
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
                  src={require("../../../../static/images/home/fotisto2.png")}
                  alt="work"
                />

                <Icon.Plus />
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="project-details-desc">
                <h3>Fotisto</h3>

                <p>
                  At Fotisto, we are committed to provide businesses with
                  exclusive brand support, and a variety of features in their
                  content creation process. Simply hire us and get ready for
                  stress-free content production today!.Fotisto is a marketplace
                  that uses AI and Cloud-based tools to bridge clients with
                  photographers & videographers. We have an eye for detail and can
                  capture special moments the way you imagined. Be it fashion,
                  wedding, or 360° shoots, we do it all .Initiate the process of
                  an exquisite content creation personalized for your brand by
                  selecting from the list of genres from our content types
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
