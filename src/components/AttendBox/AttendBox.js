import React, { Component, Fragment } from "react";
import styled from "styled-components";

const SubscribeButton = styled.button`
  background-color: #2fb5e3;
  box-sizing: border-box;
`;

const Text = styled.div`
  font-family: "Roboto slab", sans-serif;
  font-weight: 300;
  font-size: 1.375em;
  padding-top: 5%;
  padding-bottom: 8%;

  @media (max-width: 850px) {
    font-size: 1.125em;
  }

  @media (max-width: 500px) {
    font-size: 1.06em;
  }
`;

const Title = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 2em;
  font-weight: 500;
  margin: 0;
  color: #2fb5e3;
  @media (max-width: 500px) {
    font-size: 1.56em;
  }
`;

class AttendBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      showInvalidEmailText: false
    };
  }

  render() {
    return (
      <Fragment>
        <Title>Register</Title>
        <Text>
          Join us for this year&apos;s BostonHacks!
          <br />
          Registration will close on October 15th, 11:59pm EST!
        </Text>
        <a href="">
          <SubscribeButton className="button btn btn-outline-danger">
            Register
          </SubscribeButton>
        </a>
      </Fragment>
    );
  }
}
export default AttendBox;
