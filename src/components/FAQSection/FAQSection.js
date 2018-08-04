import React, { Component } from "react";
import Header from "../Header";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

const FAQEntryTitle = styled.div`
  margin-bottom: 15px;
  font-family: "Roboto", sans-serif;
  font-size: 36px;
  font-weight: 400;
  color: #3cbfce;
`;

const FAQAnswer = styled.div`
  font-family: "Roboto Slab", serif;
  font-size: 27px;
  font-weight: 300;
`;

const FAQHeaderCopy = FAQAnswer.extend`
  font-size: 32px;
  font-weight: 400;
`;

const FAQInfo = [
  {
    title: "Where is it?",
    body:
      "George Sherman Union, 2nd Floor in Metcalf Hall at 775 Commonwealth Avenue, Boston, MA, 02215."
  },
  {
    title: "Who’s coming?",
    body:
      "We expect 400 to 450 hackers from all over North America to attend BostonHacks."
  },
  {},
  {},
  {
    title: "Who can attend?",
    body:
      "All students are welcome. Unfortunately, we will not be able to accommodate students under 18 this year (unless you are a BU student)."
  },
  {
    title: "Do I need experience?",
    body:
      "No experience necessary. We will have plenty of mentors and resources, along with several workshops targeted for beginners. Come learn and experience your first hackathon at BostonHacks!"
  },
  {
    title: "Are there any rules?",
    body:
      "We want to ensure a positive experience for all participants. We encourage you to read the Code of Conduct."
  },
  {
    title: "What should I bring?",
    body:
      "You should bring your laptop, phone, chargers, toiletries, and optionally a sleeping bag. All food and other accommodations will be taken care of."
  },
  {},
  {},
  {
    title: "Can we form teams?",
    body:
      "Of course you can! We encourage people to work in teams of up to 5 people. You may opt-in to team formation during registration which will match you with an ideal team. You can work alone, but it won’t be the same."
  },
  {
    title: "Does it cost anything?",
    body: "BostonHacks is 100% free. You don’t have to spend a dime!"
  },
  {},
  {},
  {
    title: "Will there be travel reimbursements?",
    body:
      "We’re handling travel reimbursements on a case-by-case basis. We’re also working on potentially providing busses to regions like New York and Canada."
  }
];

class FAQSection extends Component {
  render() {
    const rows = [];
    for (var i = 0; i < FAQInfo.length; i += 3) {
      var row = [];
      for (var j = 0; j < 3; j++) {
        if (FAQInfo[i + j].title) {
          row.push(
            <Box key={i + j} p={3} width={[1, 1 / 2, 1 / 3]}>
              <FAQEntryTitle> {FAQInfo[i + j].title} </FAQEntryTitle>
              <FAQAnswer> {FAQInfo[i + j].body} </FAQAnswer>
            </Box>
          );
        } else {
          row.push(<Box key={i + j} width={[0, 0, 1 / 3]} />);
        }
      }
      rows.push(
        <Flex flexWrap="wrap" justifyContent="space-between" key={i / 3}>
          {row}
        </Flex>
      );
    }
    return (
      <div>
        <Flex justifyContent="space-between">
          <Box width={[0, 1 / 3]} />
          <Box p={3} width={[1, 2 / 3]}>
            <Header
              contentProp={"Frequently Asked Questions"}
              colorProp={"#3cbfce"}
            />
            <FAQHeaderCopy>
              The event is still a ways away, so check back closer to the
              hackathon for more information.
            </FAQHeaderCopy>
          </Box>
        </Flex>
        <div>{rows}</div>
      </div>
    );
  }
}

export default FAQSection;
