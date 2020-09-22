import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import * as Icon from "react-feather";
import "../../../../node_modules/react-modal-video/css/modal-video.min.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  require("../../../../static/images/home/rapid1.png"),
  require("../../../../static/images/home/rapid2.png"),
  require("../../../../static/images/home/rapid3.png"),
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
                  src={require("../../../../static/images/home/rapid1.png")}
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
                  src={require("../../../../static/images/home/rapid2.png")}
                  alt="work"
                />

                <Icon.Plus />
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="project-details-desc">
                <h3>Rapid Solution</h3>

                <p>
                  Founded in 2010, Rapid Solution is headquartered in Lahore
                  with an active presence in Karachi and Islamabad. Hashcrafts
                  provides innovatives products and high value-added services
                  including Print Solutions, Hardware Solutions, Accessories
                  Parts, Repairs and Services Contracts with focus on
                  understanding the unique needs of each customer and creating
                  solutions to match their requirment in a professional and
                  efficient manner with in the costumer’s budget and a determind
                  time frame. Hashcrafts has now decided to go Online with
                  Doorstep Repair Facility named as Rapid Solution. We tend to
                  use our experience to provide better services to our customers
                  with professionalism.
                </p>

                <p>
                  We always Demonstrate the core values of professionalism
                  leading to long lasting Business relationships wih Customers.
                  Doorstep Repair Service Saving customers' time and energy, We
                  put in ours to ensure your Laptop's fixation at Doorstep and
                  at earliest. Cost Effective Solutions We also sale parts and
                  accessories taking into concern our customers that are looking
                  for Cost Effective Solutions.As we Believe in long lasting
                  Business Relationships, we focus on maintaining customers'
                  trust throughout. Experience For the services we provide, we
                  bring in our 6+ years experience into work to ensure Quality.
                  Innovation Generating new ideas and implementing them, we
                  regularly bring in up innovations within our services.
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
