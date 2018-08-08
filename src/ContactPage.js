import React, { Component } from "react";
import { ContactForm, FooterBar } from "./components";

import headwave from "./assets/Waves/ConactHead.svg";
import footwave from "./assets/Waves/ContactFoot.svg";

class ContactPage extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={headwave} />
        </div>
        <div>
          <ContactForm />
        </div>
        <div>
          <img src={footwave} />
        </div>

        <div>
          <FooterBar />
        </div>
      </div>
    );
  }
}

export default ContactPage;
