import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-area bg-f7fafd">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="#">
                    <a>
                      <img
                        src={require("../../static/images/logo.png")}
                        alt="logo"
                      />
                    </a>
                  </Link>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget pl-5">
                <h3>Company</h3>
                <ul className="list">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a>Services</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/solution">
                      <a>Solution</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio">
                      <a>Portfolio</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Services</h3>
                <ul className="list">
                  <li>
                    <Link href="/ui-ux">
                      <a>UI/UX Design</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/web-app">
                      <a>Web Development</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/mobile-app">
                      <a>Mobile App Development</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecommerce">
                      <a>E-commerce Development</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/digital-marketing">
                      <a>Digital Marketing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/dedicated-team">
                      <a>Dedicated Team</a>
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Address</h3>

                <ul className="footer-contact-info">
                  <li>
                    <Icon.MapPin />
                    IT Tower Gulberg, Lahore
                  </li>
                  <li>
                    <Icon.Mail />
                    {/* <Link href="#"> */}
                      <a>info@hashcrafts.com</a>
                    {/* </Link> */}
                  </li>
                  <li>
                    <Icon.PhoneCall />
                    {/* <Link href="#"> */}
                      <a>+923248402906</a>
                      <br/>
                      <a>+923224991944</a>
                    {/* </Link> */}
                  </li>
                </ul>
                <ul className="social-links">
                  <li>
                    <Link href="#">
                      <a className="facebook">
                        <Icon.Facebook />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="twitter">
                        <Icon.Twitter />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="instagram">
                        <Icon.Instagram />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="linkedin">
                        <Icon.Linkedin />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="copyright-area">
                <p>&copy; Copyright 2020 hashcrafts. All rights reserved</p>
              </div>
            </div>
          </div>
        </div>

        <img
          src={require("../../static/images/map.png")}
          className="map"
          alt="map"
        />
      </footer>
    );
  }
}
