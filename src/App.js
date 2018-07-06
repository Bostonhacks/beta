import React, { Component } from "react";
import { Flex, Box } from "grid-styled";
import { AttendBox, SponsorBox } from "./components";
import { Header } from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ height: "100vh" }}>
          <h2 style={{ position: "fixed" }}> Site Header goes here!</h2>
          <div>
            <h1>BostonHacks!</h1>
            <h2>
              <Header
                contentProp="November 10th-November 11th"
                colorProp="#FFFFFF"
                backgroundProp="#3dbecd"
              />
            </h2>
            <h2>
              <Header
                contentProp="Boston University"
                colorProp="#FFFFFF"
                backgroundProp="#3dbecd"
              />
            </h2>
          </div>
          <Flex>
            <Box width={1 / 3} />
            <Box width={1 / 3}>
              <AttendBox />
            </Box>
            <Box width={1 / 3}>
              <SponsorBox />
            </Box>
          </Flex>
        </div>

        <div>
          <h2>
            <Header contentProp="Event Schedule" colorProp="#EF833F" />
          </h2>
          <p>Schedule stuff here!</p>
        </div>

        <div>
          <h2>
            <Header
              contentProp="Tracks and Workshops"
              colorProp="#B7D98B"
              backgroundProp="#3dbecd"
            />
          </h2>
          <p>Tracks and workshop stuff here!</p>
        </div>

        <div>
          <h2>
            <Header
              contentProp="Frequently Asked Questions"
              colorProp="#3CBFCE"
            />
          </h2>
          <p>FAQ stuff here!</p>
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
