import React, { Component } from "react";
import styled from "styled-components";

import grid1 from "./assets/Sq grid pink 1.jpg";
import circle1 from "./assets/thin circle pink 2.png";
import triangle1 from "./assets/orange triangle 1.jpg";
import wave2 from "./assets/Wave 2.jpg";

// import PropTypes from "prop-types";
// import Header from "./../Header";

// import { Row, Col } from "react-simple-flex-grid";
// import "react-simple-flex-grid/lib/main.css";

import { Grid, Row, Col } from "react-flexbox-grid";

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

const centeredImg = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "..",
  height: ".."
};

// import Background from '../images/background_image.png';

var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: "url(" + wave2 + ")"
};

// let imgUrl = "/Wave 2.jpg";
// let styleWave = {
//   background: "url(" + imgUrl + ") noRepeat center center fixed",
//   backgroundSize: "cover"
// };

export class TracksAndWorkshops extends Component {
  render() {
    return (
      <Taw>
        <div style={sectionStyle}>
          <Grid fluid>
            <Row>
              <Col className="hidden-xs" sm={6}>
                <div style={centeredImg}>
                  <img src={grid1} />
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <h3 style={{ color: "#B7D98B" }} align="right">
                  Tracks and Workshops
                </h3>
                <p align="right">
                  Tracks are optional specialized topics or technologies you can
                  aim your project at. We&apos;ll have sponsors, workshops, and
                  mentors to help you with your track-based project (as well as
                  specialized prizes). Tracks are optional, make a hack
                  you&apos;re interested in! Check back soon to see what our
                  tracks will be this year!
                </p>
              </Col>
            </Row>

            <Row>
              <Col smOffset={1} sm={5}>
                <h3 style={{ color: "#B7D98B" }}> Last year&apos;s tracks:</h3>
              </Col>
              <Col className="hidden-xs" sm={5}>
                <div style={centeredImg}>
                  <img src={circle1} />
                </div>
              </Col>
            </Row>

            <Row>
              <Col smOffset={1} sm={3} xs={12}>
                <h3 style={{ color: "#EEEEEE" }}> Web and Mobile</h3>
                <p>
                  Led by OpenWeb BU, hackers learned how to make a website or
                  mobile app from the ground up.
                </p>
              </Col>
              <Col sm={3} xs={12}>
                <h3 style={{ color: "#EEEEEE" }}> Machine Learning</h3>
                <p>
                  Led by BU’s Machine Intelligence Community, hackers learned
                  how to get into the basics of several ML frameworks, and moved
                  on to more advanced topics.
                </p>
              </Col>
              <Col sm={3} xs={12}>
                <h3 style={{ color: "#EEEEEE" }}> Virtual Reality</h3>
                <p>
                  Led by BU AR/VR, hackers got a jumpstart into creating in 3D.
                  Then they created hacks on the Oculus Rifts we made available
                  to them.
                </p>
              </Col>
            </Row>

            <Row>
              <Col className="hidden-xs" xs={3}>
                <div style={centeredImg}>
                  <img src={triangle1} />
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
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
