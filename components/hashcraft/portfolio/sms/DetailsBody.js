import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import * as Icon from "react-feather";
import "../../../../node_modules/react-modal-video/css/modal-video.min.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  require("../../../../static/images/home/school1.png"),
  require("../../../../static/images/home/school3.png"),
  require("../../../../static/images/home/school4.png"),
  require("../../../../static/images/home/school5.png"),
  require("../../../../static/images/home/school2.png"),
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
                  src={require("../../../../static/images/home/school1.png")}
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
                  src={require("../../../../static/images/home/school3.png")}
                  alt="work"
                />

                <Icon.Plus />
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="project-details-desc">
                <h3>School Management System</h3>

                <p>
                  Our School Management System is uses for manage education
                  based organization like school, collage, Universities etc. It
                  is a powerful user-friendly System designed as per user's
                  perspective with multiple MIS reports & multiple login. The
                  number of schools is multiplying faster. Parents have become
                  more attentive about their child, their activities & progress
                  in the school. With our School Management System, parents will
                  receive complete information of their child their Attendance,
                  Daily Time table, Progress reports (current as well as
                  previous) from the comfort of their home.SMS & eMail facility
                  ensures the parents to remain updated with school activities.
                  Our school system can process-centric & continues its
                  functioning with a lesser number of staff. Now no tension
                  about employee job changing & finding data. Everything is now
                  electronically preserved.
                </p>

                <p>
                  Our School Management system is known for its spotless
                  structure and design and for its resourceful competence. Our
                  School Management Software, specifically designed and
                  developed to simplify the process of educational institutions
                  meets with all the technological and administrative
                  requirements of schools. The many tools enable proper workflow
                  in different departments leaving no room for errors with a
                  view to encourage and make positive difference in students.
                  This complete school management system automates and
                  administers different academic and non-academic tasks in
                  school making them easy, fast, efficient and accurate, aiding
                  multiple departments, prospective students, faculties, staff
                  and others. This school automation system has been created to
                  help every institution manage all their data in a seamless and
                  systematic manner. The product ensures to provide quality and
                  result oriented solutions to all your worries.
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
