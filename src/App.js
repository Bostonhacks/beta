import React, { Component } from "react";
import { Flex, Box } from "grid-styled";
import {
  AttendBox,
  SponsorBox,
  EventSchedule,
  FAQSection,
  TracksAndWorkshops
} from "./components";
import { Header } from "./components/Header/Header";
import HeroText from "./components/HeroText";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="headerbar Flair" style={{ height: "100vh" }}>
            <HeroText
              title="Boston"
              titleBold="Hacks"
              date="November 10th - November 11th"
              location="Boston University"
            />
          </div>
          <Flex flexWrap={"wrap"}>
            <Box width={[0, 0, 1 / 3]} />
            <Box width={[1, 1 / 2, 1 / 3]}>
              <AttendBox />
            </Box>
            <Box width={[1, 1 / 2, 1 / 3]}>
              <SponsorBox />
            </Box>
          </Flex>
        </div>
        <div>
          <h2>
            <Header contentProp="Event Schedule" colorProp="#EF833F" />
          </h2>
          <EventSchedule />
        </div>

        <div>
          <TracksAndWorkshops />
        </div>

        <div>
          <h2>
            <Header
              contentProp="Frequently Asked Questions"
              colorProp="#3CBFCE"
            />
          </h2>
          <FAQSection />
        </div>

        <div>
          <h2>
            <Header
              contentProp="The Footer"
              colorProp="#FFFFFF"
              backgroundProp="#3dbecd"
            />
          </h2>
        </div>
      </div>
    );
  }
}

export default App;
