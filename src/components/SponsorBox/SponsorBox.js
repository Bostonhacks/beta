import React, { Component, Fragment } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";

class SponsorBox extends Component {
  render() {
    return (
      <Fragment>
        <Header contentProp="Sponsor" colorProp="#f05352" />
        <p>We would love to have you on board. Contact us here!</p>
        <button style={{ backgroundColor: "#f05352" }}>
          <Link to="/contact_page"> Contact Us </Link>
        </button>
      </Fragment>
    );
  }
}

export default SponsorBox;
