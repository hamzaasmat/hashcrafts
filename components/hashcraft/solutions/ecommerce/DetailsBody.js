import React, { Component } from "react";
import * as Icon from "react-feather";
import "../../../../node_modules/react-modal-video/css/modal-video.min.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  require("../../../../static/images/home/dashboard.png"),
  require("../../../../static/images/home/bags.png"),
  require("../../../../static/images/home/furniture.png"),
  require("../../../../static/images/home/checkout.png"),
  require("../../../../static/images/home/checkout1.png"),
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
                  src={require("../../../../static/images/home/dashboard.png")}
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
                  src={require("../../../../static/images/home/bags.png")}
                  alt="work"
                />
                <Icon.Plus />
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="project-details-desc">
                <h3>E-commerce Solution</h3>
                <p>
                  Take your e-commerce efforts to the next level to be the best
                  in your niche or start your full-on digital transformation. We
                  can help you be the best online business in your category,
                  improve existing workflow, analyze visitors’ shopping patterns
                  and drive value for your business’s digital presence and your
                  customers. Your e-commerce presence can be the tip of the
                  spear for customers engaging with your product and your brand.
                  Tying together inventory management, shipping, billing and
                  product analytics can materially drive return on investment.
                  The e-commerce landscape is rapidly evolving and fiercely
                  competitive. Whether you are implementing a new platform,
                  updating existing infrastructure, leverage our experienced
                  team to help you filter out the noise. When you invest in a
                  robust commerce experience, it powers your sales team to be
                  more efficient and spend more time fostering customer
                  relationships. Our eCommerce solution gives your customers the
                  power to interact with your business how they want, when they
                  want, and at their moment of relevance.
                </p>
                <p>
                  Our super-fast E-commerce template was made to help anyone
                  start their very own online store at ease. Built with React,
                  NextJS, TypeScript, GraphQL, Type-GraphQL & Styled-Components,
                  our template promises to deliver an interface for your
                  business that is quick and easy to set up! For GraphQL we used
                  GraphQL and type-graphql, you can build your schema very
                  easily. GraphQL playground makes its own documentation, your
                  frontend team will love using it. We have added REST API
                  integration with SWR for the customers who had already a
                  REST-based backend for remote data fetching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
