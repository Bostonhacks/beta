import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const InvalidEmailText = () => {
  return (
    <p style={{ color: "red" }}>
      Oh no! We couldn&#39;t recognize that email. Typo?
    </p>
  );
};

const FormInput = styled.div`
  margin: 20px 0;
  label {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 13px;
    display: block;
    margin-bottom: 5px;
  }
  input,
  textarea {
    box-sizing: border-box;
    width: 100%;
    background-color: #f2f2f2;
  }
  textarea {
    border-style: double;
    border-width: 2px;
    min-height: 150px;
    resize: none;
  }
`;

export class ContactFormBody extends Component {
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

  handleClick = e => {
    e.preventDefault();

    let isValidEmail = this.state.userEmail.match(
      /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
    );

    if (isValidEmail) {
      // TODO: SUBMIT THE FORM
      this.setState({ userEmail: "", showInvalidEmailText: false });
    } else {
      this.setState({ showInvalidEmailText: true });
    }
  };

  render() {
    return (
      <div>
        <FormInput>
          <label htmlFor="full_name"> Full Name* </label>
          <input type="text" name="full_name" id="full_name" />
        </FormInput>
        <FormInput>
          <label htmlFor="email"> Email* </label>
          <input
            type="email"
            name="email"
            id="email"
            value={this.state.userEmail}
            onChange={this.handleChange}
          />
        </FormInput>
        <FormInput>
          <label htmlFor="subject"> Subject </label>
          <input type="text" name="subject" id="subject" />
        </FormInput>
        <FormInput height="150px">
          <label htmlFor="message"> Message* </label>
          <textarea type="text" name="message" id="message" />
        </FormInput>
        <button
          style={{ backgroundColor: this.props.color }}
          onClick={this.handleClick}
        >
          Contact Us
        </button>
        {this.state.showInvalidEmailText ? <InvalidEmailText /> : null}
      </div>
    );
  }
}

ContactFormBody.propTypes = {
  color: PropTypes.string
};

export default ContactFormBody;
