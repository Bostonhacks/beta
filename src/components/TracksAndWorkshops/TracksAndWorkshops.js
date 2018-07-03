import React, { Component } from "react";
import { Flex, Box } from "grid-styled";
import styled from "styled-components";
// import PropTypes from "prop-types";
// import Header from "./../Header";

// import Wave2 from "./assets/Wave 2.jpg";

// const Content = styled.div`
//     border: 1px solid #000;
//     background-image: url(${img});
//     width: 2000px;
//     height: 2000px;
// `;

// const Div = styled.div`
//   height: 100%;
//   width: 100%;
//   font-family: .SFNSDisplay;
// `;

// background-image: ${Wave2};

const Taw = styled.div`
  height: 100%;
  width: 100%;
  font-family: .SFNSDisplay;
`;

export class TracksAndWorkshops extends Component {
  render() {
    return (
      <Taw>
        <Flex>
          <Box width={1 / 12} px={2} />
          <Box width={1 / 2} px={2}>
            grid here
          </Box>
          <Box width={1 / 2} px={2}>
            <h3 style={{ color: "#B7D98B" }} align="right">
              Tracks and Workshops
            </h3>
            <p align="right">
              Tracks are optional specialized topics or technologies you can aim
              your project at. We&apos;ll have sponsors, workshops, and mentors
              to help you with your track-based project (as well as specialized
              prizes). Tracks are optional, make a hack you&apos;re interested
              in! Check back soon to see what our tracks will be this year!
            </p>
          </Box>
          <Box width={1 / 12} px={2} />
        </Flex>
        <Flex>
          <Box width={1 / 12} px={2} />
          <Box width={1 / 4} px={2}>
            <h3 style={{ color: "#B7D98B" }}> Last year&apos;s tracks:</h3>
          </Box>
          <Box width={1 / 4} px={2} />
          <Box width={1 / 4} px={2} />
          <Box width={1 / 4} px={2}>
            circle img
          </Box>
          <Box width={1 / 12} px={2} />
        </Flex>
        <Flex>
          <Box width={1 / 12} px={2} />
          <Box width={1 / 4} px={2}>
            Stuff...
          </Box>
          <Box width={1 / 4} px={2}>
            Stuff...
          </Box>
          <Box width={1 / 4} px={2}>
            Stuff...
          </Box>
          <Box width={1 / 4} px={2}>
            Nothing
          </Box>
          <Box width={1 / 12} px={2} />
        </Flex>
        <Flex>
          <Box width={1 / 24} px={2} />
          <Box width={1 / 3} px={2}>
            Triangle here...
          </Box>
          <Box width={1 / 3} px={2} />
          <Box width={1 / 3} px={2}>
            another grid
          </Box>
          <Box width={1 / 24} px={2} />
        </Flex>
      </Taw>
    );
  }
}

// Header.propTypes = {
//   contentProp: PropTypes.string,
//   colorProp: PropTypes.string,
//   backgroundProp: PropTypes.string
// };

// Header.defaultProps = {
//   contentProp: "A header should go here",
//   colorProp: "#dc4b6a",
//   backgroundProp: "#3dbecd"
// };

export default TracksAndWorkshops;
