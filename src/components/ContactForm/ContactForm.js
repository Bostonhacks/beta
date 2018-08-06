import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

import zigzag from "./../../assets/ZigZags/Line_Green2.svg";

const ContactUs = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 40px;
  margin: 5px 0;
`;

const ContactBody = ContactUs.extend`
  font-size: 18px;
  margin-bottom: 25px;
`;

const FormTitle = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: ${props => props.color};
`;

const FormBody = styled.p`
  font-family: "Roboto Slab", serif;
  font-weight: 300;
  font-size: 12px;
`;

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

const ZigZag = styled.img`
  float: right;
  position: relative;
  top: 55%;
  z-index: -1;
`;

const Form = styled.div``;

export class ContactForm extends Component {
  render() {
    return (
      <Grid fluid style={{ padding: "0" }}>
        <Row>
          <Col mdOffset={2} md={8} xsOffset={1} xs={10}>
            <ContactUs> Contact Us </ContactUs>
            <Row>
              <Col md={9}>
                <ContactBody>
                  Reach us on Facebook at BostonHacks, Twitter @boston_hacks,
                  Instagram @bostonhacks, and by email at info@bostonhacks.io!
                </ContactBody>
              </Col>
            </Row>
            <Row>
              <Col md={5} xs={12}>
                <FormTitle color="#2FB5E3">
                  Have a Question or Suggestion?
                </FormTitle>
                <FormBody>
                  Send us any questions, comments, concerns, or suggestions
                  here!
                </FormBody>
                <Form>
                  <FormInput>
                    <label htmlFor="full_name"> Full Name* </label>
                    <input type="text" name="full_name" id="full_name" />
                  </FormInput>
                  <FormInput>
                    <label htmlFor="email"> Email* </label>
                    <input type="email" name="email" id="email" />
                  </FormInput>
                  <FormInput>
                    <label htmlFor="subject"> Subject </label>
                    <input type="text" name="subject" id="subject" />
                  </FormInput>
                  <FormInput height="150px">
                    <label htmlFor="message"> Message* </label>
                    <textarea type="text" name="message" id="message" />
                  </FormInput>
                </Form>
              </Col>
              <Col mdOffset={2} md={5} xs={12}>
                <FormTitle color="#F05352">Interested in Sponsoring?</FormTitle>
                <FormBody>
                  We’d love to have you on board. Contact us here!
                </FormBody>
                <Form>
                  <FormInput>
                    <label htmlFor="full_name"> Full Name* </label>
                    <input type="text" name="full_name" id="full_name" />
                  </FormInput>
                  <FormInput>
                    <label htmlFor="email"> Email* </label>
                    <input type="email" name="email" id="email" />
                  </FormInput>
                  <FormInput>
                    <label htmlFor="subject"> Subject </label>
                    <input type="text" name="subject" id="subject" />
                  </FormInput>
                  <FormInput height="150px">
                    <label htmlFor="message"> Message* </label>
                    <textarea type="text" name="message" id="message" />
                  </FormInput>
                </Form>
              </Col>
            </Row>
          </Col>
          <Col md={2} xs={1}>
            <ZigZag src={zigzag} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default ContactForm;
