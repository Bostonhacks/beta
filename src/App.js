import React, { Component } from "react";

import {
  AttendAndSponsorBoxes,
  EventSchedule,
  Navbar,
  FAQSection,
  Header,
  HeroText,
  TracksAndWorkshops
} from "./components";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Navbar />
          <div className="Flair">
            <div className="headerbar">
              <HeroText
                title="Boston"
                titleBold="Hacks"
                date="November 10th - November 11th"
                location="Boston University"
              />
            </div>
          </div>

          <AttendAndSponsorBoxes />

          <EventSchedule />

          <TracksAndWorkshops />

          <FAQSection />

          <Header
            contentProp="The Footer"
            colorProp="#FFFFFF"
            backgroundProp="#3dbecd"
          />
        </div>
      </div>
    );
  }
}

export default App;
