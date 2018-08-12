import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../../assets/Logos/Logo-Small_header.svg";
import FacebookLogo from "../../assets/Logos/fb.svg";
import TwitterLogo from "../../assets/Logos/Twitter.svg";
import HamburgerImg from "../../assets/Logos/hamburger.svg";

const Container = styled.div`
  background-color: #5b5480;
  color: white;
  position: fixed;
  width: 100vw;
  z-index: 999999;
`;

const Wrapper = styled.div`
  @media (max-width: 700px) {
    display: none;
  }

  display: flex;

  div {
    display: flex;
    align-items: center;
  }

  div.left {
    a.mainLogo {
      margin: 10px 60px 10px 60px;
    }
  }

  div.right {
    margin-right: 60px;
    display: flex;
    align-items: center;
    a {
      color: white;
      text-decoration: none;
      margin: 0 10px 0 10px;
    }
  }
`;

const WrapperMobile = styled.div`
  @media (min-width: 700px) {
    display: none;
  }

  display: flex;

  div {
    display: flex;
    align-items: center;
  }

  div.left {
    a.mainLogo {
      margin: 10px 30px 10px 30px;
    }
  }

  div.right {
    a.hamburgerLink {
      padding: 0 30px 0 30px;
    }
  }
`;

const MobileMenu = styled.div`
  // display: flex;
  display: none;

  text-align: center;
  a {
    width: 100%;
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

// const LinkContainer = styled.ul`
//   display: flex;
//   list-style-type: none;
//   justify-content: space-around;
//   align-items: center;
//   margin: 0;
//   padding: 0;
//   flex: 1;
//   li {
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex: 1;
//     a {
//       padding-top: 20px;
//       padding-bottom: 20px;
//       padding-left: 10px;
//       padding-right: 10px;
//     }
//   }
//
//   a {
//     text-transform: uppercase;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     text-decoration: none;
//     color: white;
//     height: 100%;
//     width: 100%;
//   }
//
//   li.active {
//     a {
//       color: #928aa7;
//     }
//     border-bottom: 5px solid #928aa7;
//   }
// `;

class Navbar extends Component {
  toggleMobileMenu = function() {
    var menuOpen = document.getElementById("mobileMenu").style.display;
    if (menuOpen === "block") {
      document.getElementById("mobileMenu").style.display = "none";
    } else {
      document.getElementById("mobileMenu").style.display = "block";
    }
  };

  render() {
    return (
      <Container>
        <WrapperMobile>
          <div className="left">
            <a className="mainLogo" href="/">
              <img src={Logo} />
            </a>
          </div>
          <Spacer />
          <div className="right">
            <a className="hamburgerLink" onClick={this.toggleMobileMenu}>
              <img src={HamburgerImg} />
            </a>
          </div>
        </WrapperMobile>

        <Wrapper>
          <div className="left">
            <a className="mainLogo" href="/">
              <img src={Logo} />
            </a>
          </div>

          <Spacer />

          <div className="right">
            <a href="https://www.facebook.com/bostonhacks/">
              <img src={FacebookLogo} />
            </a>
            <a href="https://twitter.com/boston_hacks">
              <img src={TwitterLogo} />
            </a>
            <a href="https://museum.bostonhacks.io/">History</a>
          </div>
        </Wrapper>

        <MobileMenu id="mobileMenu">
          <br />
          <a href="https://www.facebook.com/bostonhacks"> Our Facebook </a>
          <br />
          <br />
          <a href="https://twitter.com/boston_hacks"> Our Twitter </a>
          <br />
          <br />
          <a href="https://museum.bostonhacks.io/"> Our History </a>
          <br />
          &nbsp;
        </MobileMenu>
      </Container>
    );
  }
}

export default Navbar;
