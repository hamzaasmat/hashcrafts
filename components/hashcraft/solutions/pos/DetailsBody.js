import React, { Component } from "react";
import * as Icon from "react-feather";
import "../../../../node_modules/react-modal-video/css/modal-video.min.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  require("../../../../static/images/home/poslogin.png"),
  require("../../../../static/images/home/posdashboard.png"),
  require("../../../../static/images/home/payment.png"),
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
                  src={require("../../../../static/images/home/poslogin.png")}
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
                  src={require("../../../../static/images/home/posdashboard.png")}
                  alt="work"
                />

                <Icon.Plus />
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="project-details-desc">
                <h3>Point Of Sale</h3>

                <p>
                  <b>
                    Guaranteed to save you time, increase the accuracy of your
                    inventory, and help you make informed decisions for your
                    business.
                  </b> 
                  Our POS is an iPad and Android POS system for retail
                  businesses, restaurants, bars, franchises and quick-serve
                  businesses. The POS software offers a touch screen interface,
                  when used on an iPad or Android tablet device, which allows
                  users to add and remove orders from wish lists. Users can also
                  scan barcodes using barcode scanner hardware in order to add
                  items to the shopping cart and facilitate inventory
                  management. Other inventory management and inventory tracking
                  tools within the POS software include SKU management, re-order
                  management, and the ability to add a new inventory item
                  manually. Our POS software offers a built-in register to keep
                  track of checks and payments.
                </p>
                <p>
                  Users can maintain multiple payment registers and split, merge
                  or transfer payments between different accounts. Businesses
                  can accept all payment types including cash, credit card, gift
                  cards, and more using the point of sale system and payment
                  processing can be carried out online or offline. Other POS
                  features include cash drawer management, pricing at the time
                  of purchase, and connection with POS hardware such as a
                  receipt printer or card reader. Our POS also offers employee
                  management tools including the ability to track employee
                  working hours, calculate payroll and clock in and out. Our POS
                  integrates with multiple marketing tools and lets users create
                  reports and analyze business data to find trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
