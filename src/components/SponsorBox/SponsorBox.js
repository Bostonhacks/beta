import React, { Component, Fragment } from "react";
import Header from "../Header";

import sponsor from "./../../documents/BostonHacks_Sponsorship_V3.pdf";

class SponsorBox extends Component {
  render() {
    return (
      <Fragment>
        <Header contentProp="Sponsor" colorProp="#f05352" />
        <p>We would love to have you on board. Contact us here!</p>
        <button style={{ backgroundColor: "#f05352" }}>
          <a href={sponsor}>Learn more</a>
        </button>
      </Fragment>
    );
  }
}

export default SponsorBox;
