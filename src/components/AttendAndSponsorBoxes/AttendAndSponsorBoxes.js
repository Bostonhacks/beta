import React, { Component } from "react";
import AttendBox from "../AttendBox";
import SponsorBox from "../SponsorBox";
import { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

const AttArea = styled.div`
  max-width: 400px;
  margin: auto;
  padding-right: 15%;
  @media (max-width: 767px) {
    padding-right: 0;
    padding-bottom: 10%;
  }

  @media (max-width: 500px) {
    margin: 0 15% 0 15%;
  }
`;

const SponsorArea = styled.div`
  max-width: 400px;
  margin: auto;
  @media (max-width: 500px) {
    margin: 0 15% 0 15%;
  }
`;

class AttendAndSponsorBoxes extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col md={2} />
          <Col md={5}>
            <AttArea>
              <AttendBox />
            </AttArea>
          </Col>
          <Col md={4}>
            <SponsorArea>
              <SponsorBox />
            </SponsorArea>
          </Col>
          <Col md={1} />
        </Row>
      </React.Fragment>
    );
  }
}

export default AttendAndSponsorBoxes;
