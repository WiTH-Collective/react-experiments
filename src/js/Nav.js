import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logos/rrd-logo-01.svg";

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="container">
          <div className="logo-container">
            <Link className="logo" to="/">
              <img src={Logo} alt="Red Rock Deli" />
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link className="logo" to="/secter-suppers">
                  SECRET SUPPERS
                </Link>
              </li>
              <li>
                <Link className="logo" to="/our-range">
                  OUR RANGE
                </Link>
              </li>
              <li>
                <Link className="logo" to="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
