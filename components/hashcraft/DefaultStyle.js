import React from "react";
import { withRouter } from "next/router";
import Link from "../common/ActiveLink";
import * as Icon from "react-feather";

class DefaultStyle extends React.Component {
  state = {
    collapsed: true,
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    let { pathname } = this.props.router;
    let layOutCls = "";
    if (pathname == "/home-three") {
      layOutCls = "p-relative";
    }
    return (
      <header id="header">
        <div id="navbar" className={`startp-nav ${layOutCls}`}>
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/">
                <a
                  className="navbar-brand"
                  onClick={() => window.location.refresh()}
                >
                  <img
                    src={require("../../static/images/logop.png")}
                    alt="logo"
                  />
                </a>
              </Link>

              <button
                onClick={this.toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav nav ml-auto">
                  <li className="nav-item">
                    <Link activeClassName="active" href="/about">
                      <a className="nav-link">COMPANY</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link activeClassName="active" href="/services">
                      <a href="#" className="nav-link">
                        SERVICES <Icon.ChevronDown />
                      </a>
                    </Link>
                    <ul className="dropdown_menu">
                      <li className="nav-item">
                        <Link activeClassName="active" href="/ui-ux">
                          <a className="nav-link">UI/UX Design</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link activeClassName="active" href="/web-app">
                          <a className="nav-link">Web Development</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link activeClassName="active" href="/mobile-app">
                          <a className="nav-link">Mobile App Development</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link activeClassName="active" href="/ecommerce">
                          <a className="nav-link">E-commerce Development</a>
                        </Link>
                      </li>
                      
                      <li className="nav-item">
                        <Link activeClassName="active" href="/digital-marketing">
                          <a className="nav-link">Digital Marketing</a>
                        </Link>
                      </li>
                      
                      <li className="nav-item">
                        <Link activeClassName="active" href="/dedicated-team">
                          <a className="nav-link">Dedicated Team</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="/solution" className="nav-link">
                      SOLUTIONS <Icon.ChevronDown />
                    </a>
                    <ul className="dropdown_menu">
                      <li className="nav-item">
                        <Link activeClassName="active" href="/sms">
                          <a className="nav-link">School Information System</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link activeClassName="active" href="/pos">
                          <a className="nav-link">Point of Sale</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link activeClassName="active" href="/e-commerce">
                          <a className="nav-link">E Commerce</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link activeClassName="active" href="/portfolio">
                      <a className="nav-link">PORTFOLIO</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link activeClassName="active" href="/contact">
                      <a className="nav-link">CONTACT</a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="others-option">
                <Link href="/contact#quotes">
                  <a className="btn btn-primary">
                    Request&nbsp; a &nbsp;quotes
                  </a>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(DefaultStyle);
