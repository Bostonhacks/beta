import React, { Component } from "react";
import { Helmet } from "react-helmet";

import {
  AttendAndSponsorBoxes,
  EventSchedule,
  Navbar,
  FAQSection,
  HeroText,
  TracksAndWorkshops,
  Footer,
  FooterBar
} from "./components";

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <link rel="canonical" href="https://bostonhacks.io/" />
          <meta itemProp="name" content="BostonHacks - November 10th & 11th" />
          <meta
            itemProp="description"
            content="BostonHacks is Boston University's premier hackathon hosting 500 student from all over the US and Canada."
          />
        </Helmet>

        <a name="top" />
        <div className="App">
          <Navbar />
          <div className="headerbar">
            <HeroText
              title="Boston"
              titleBold="Hacks"
              date="November 10th - November 11th"
              location="Boston University"
            />
          </div>

          <AttendAndSponsorBoxes />

          <EventSchedule />

          <TracksAndWorkshops />

          <FAQSection />

          <div className="footerFlair">
            <div className="footer">
              <Footer />
            </div>
          </div>

          <FooterBar />
        </div>
      </div>
    );
  }
}

export default App;
