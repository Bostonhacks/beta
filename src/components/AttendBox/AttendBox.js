import React, { Component, Fragment } from "react";
import Header from "../Header";
import styled from "styled-components";

const Button = styled.input`
  background-color: #2fb5e3;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 16px;
  color: white;
  padding: 0.7em 1.4em 0.7em 1.4em;
  border-radius: 14px;
  border-style: none;
  vertical-align: center;
  cursor: pointer;

  transition-duration: 0.3s;
  outline: 0;
`;

class AttendBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      showInvalidEmailText: false
    };
  }

  handleChange = e => {
    this.setState({ userEmail: e.target.value });
  };

  handleSubmit = e => {
    // TODO: MAKE IT MORE REACT/CLEAR FORM
  };

  render() {
    return (
      <Fragment>
        <Header contentProp="Attend" colorProp="#2fb5e3" />
        <p>
          Thanks for the interest! Leave your email address below or follow us
          on social media to get notified when there is more information and
          registration opens!
        </p>
        <div>
          <form
            action="https://bostonhacks.us18.list-manage.com/subscribe/post?u=f6d6fee90aa63339dffc8ccca&amp;id=8873714a91"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <div id="mc_embed_signup_scroll form-group">
              <input
                type="email"
                name="EMAIL"
                value={this.state.userEmail}
                onChange={this.handleChange}
                className="email form-control"
                id="mce-EMAIL"
                placeholder="hacker@anyschool.edu"
                required
              />
              <br />
              <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_13cd178ce59e4de2a1ecb4265_1954f2ac95"
                  tabIndex="-1"
                  value=""
                />
              </div>
              <div className="clear">
                <Button
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button btn btn-outline-danger"
                />
              </div>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}
export default AttendBox;
