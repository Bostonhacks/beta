import React, { Component, Fragment } from "react";
import styled from "styled-components";

// const SubscribeButton = styled.button`
//   background-color: #2fb5e3;
//   box-sizing: border-box;
// `;

const SubButton = styled.button`
  background-color: #2fb5e3;
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
          Thank you for your interest! Unfortunately registration is closed.
          Keep an eye out for information on next years event!
        </Text>
        <a href="https://bostonhacks.us18.list-manage.com/subscribe/post?u=f6d6fee90aa63339dffc8ccca&amp;id=8873714a91">
          <SubButton>Subscribe for Updates!</SubButton>
        </a>
      </Fragment>
    );
  }
}
export default AttendBox;
