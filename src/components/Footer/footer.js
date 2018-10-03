import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import "./foot.css";

import circle1 from "../../assets/Circles/Circle_Green.svg";
import zig from "../../assets/ZigZags/Line_Orng2.svg";

// import logoFooter from "../../assets/Logos/Logo-Small_footer.svg";

import twilio from "../../assets/SponsorLogos/Twilio/twilioLogo.png";
import google from "../../assets/SponsorLogos/Google/googleLogo.png";
import giphy from "../../assets/SponsorLogos/Giphy/giphyEngineeringLogo.jpg";
import liberty from "../../assets/SponsorLogos/Liberty/libertyLogo.png";
import itg from "../../assets/SponsorLogos/ITG/itgLogo.png";
import spark from "../../assets/SponsorLogos/Spark/SparkLogo.png";
import raytheon from "../../assets/SponsorLogos/Raytheon/raytheonLogo.png";
import bucs from "../../assets/SponsorLogos/BUCS/BucsLogo.jpg";

const Text = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 2vw;
  color: #ffffff;
  display: flex;
  margin-bottom: 5%;
  @media (max-width: 500px) {
    font-size: 17px;
  }
  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

const Logo = styled.img`
  max-height: 8vh;
  max-width: 100%;
  object-fit: contain;
  transition-duration: 0.3s;

  @media (max-width: 768px) {
    padding-top: 4vh;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const LargeLogo = {
  maxHeight: "14vh",
  height: "14vh",
  maxWidth: "100%",
  verticalAlign: "baseline"
};

const centerTable = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  alignItems: "center"
};

const Cir = styled.img`
  float: left;
  margin-left: 20%;

  @media (max-width: 500px) {
    margin-left: -10%;
    height: 50px;
  }
`;

const Zag = styled.img`
  float: right;
  margin-right: 15%;
  margin-top: 5%;

  @media (max-width: 500px) {
    margin-right: 5%;
    margin-top: -10%;
    height: 50px;
  }
`;

export class Footer extends Component {
  render() {
    return (
      <div style={{ paddingTop: "12vw", width: "100%" }}>
        <Row style={{ marginBottom: "5vw", marginTop: "3vh" }}>
          <Col xs={6}>
            <Cir src={circle1} />
          </Col>
          <Col xs={6}>
            <Zag src={zig} />
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5vh"
          }}
        >
          <Text>Thank you to our sponsors!</Text>
        </Row>

        <Row style={centerTable}>
          <Col xs={12} md={4} style={centerTable}>
            <a
              href="https://www.twilio.com"
              style={{ verticalAlign: "baseline" }}
            >
              <Logo src={twilio} />
            </a>
          </Col>
          <Col xs={12} md={4} style={centerTable}>
            <a
              href="https://www.google.com"
              style={{ verticalAlign: "baseline" }}
            >
              <Logo src={google} />
            </a>
          </Col>
          <Col xs={12} md={4} style={centerTable}>
            <a
              href="https://engineering.giphy.com"
              style={{ verticalAlign: "baseline" }}
            >
              <Logo style={LargeLogo} src={giphy} />
            </a>
          </Col>

          <Col xs={12} md={4} style={centerTable}>
            <a href="https://www.itg.com" style={{ verticalAlign: "baseline" }}>
              <Logo style={LargeLogo} src={itg} />
            </a>
          </Col>
          <Col xs={12} md={4} style={centerTable}>
            <a
              href="http://www.bu.edu/spark/"
              style={{ verticalAlign: "baseline" }}
            >
              <Logo style={LargeLogo} src={spark} />
            </a>
          </Col>
          <Col xs={12} md={4} style={centerTable}>
            <a
              href="https://www.libertymutual.com"
              style={{ verticalAlign: "baseline" }}
            >
              <Logo style={LargeLogo} src={liberty} />
            </a>
          </Col>
          <Col xs={12} md={4} style={centerTable}>
            <a
              href="https://www.bu.edu/cs/"
              style={{ verticalAlign: "baseline" }}
            >
              <Logo style={LargeLogo} src={bucs} />
            </a>
          </Col>
          <Col xs={12} md={4} style={centerTable}>
            <a
              href="https://www.raytheon.com"
              style={{ verticalAlign: "baseline" }}
            >
              <Logo src={raytheon} />
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
