import React from "react";
import styled from "styled-components";
import logo from "./7.png";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import FaceIcon from "@mui/icons-material/Face";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

import { animateScroll as Scroll, Link } from "react-scroll";

const ClassProject = ({ bg }) => {
  return (
    <Container bg={bg}>
      <Wrapper>
        <Logo
          src={logo}
          onClick={() => {
            Scroll.scrollToTop();
          }}
        />
        <Navigation>
          <Nav to="home" duration={1000} smooth={true} offset={-110}>
            <HomeIcon />
            <span>Home</span>
          </Nav>
          <Nav to="profile" duration={1000} smooth={true} offset={-110}>
            <FaceIcon />
            <span>Profile</span>
          </Nav>
          <Nav to="video" duration={1000} smooth={true} offset={-110}>
            <HomeRepairServiceIcon />
            <span>Services</span>
          </Nav>
          <Nav to="contact" duration={1000} smooth={true} offset={-110}>
            <SettingsIcon />
            <span>Settings</span>
          </Nav>
        </Navigation>

        <MyButton
          onClick={() => {
            Scroll.scrollToBottom();
          }}
        >
          Goto Last
        </MyButton>
      </Wrapper>
    </Container>
  );
};

export default ClassProject;

const MyButton = styled.button`
  cursor: pointer;
  width: 120px;
  height: 50px;
  outline: none;
  border: 3px solid #02152b;
  border-radius: 5px;
  background-color: white;
  color: #02152b;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;
  transform: scale(1);
  margin-right: 30px;

  :hover {
    transform: scale(1.05);
    border: 3px solid white;
    background-color: transparent;
    color: white;
  }
`;

const Nav = styled(Link)`
  color: #fff;
  margin: 0 5px;
  display: flex;
  align-items: center;
  width: 100px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 350ms;
  transform: scale(1);
  padding-right: 5px;

  .MuiSvgIcon-root {
    margin-right: 10px;
    font-size: 25px;
  }

  span {
    text-transform: uppercase;
    font-weight: bold;
    position: relative;

    :after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 3px;
      background-color: #02152b;
      transform: scale(0);
      transform-origin: center;
      transition: all 350ms;
      opacity: 0;
    }
  }

  :hover {
    color: #02152b;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.7);
    transform: scale(1.09);

    .MuiSvgIcon-root {
      color: #02152b;
    }

    span {
      color: #02152b;

      :after {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`;
const Navigation = styled.div`
  display: flex;
  flex: 1;
`;

const Logo = styled.img`
  width: 180px;
  height: 80px;
  object-fit: contain;
  margin: 0 30px;
  cursor: pointer;
`;
const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${({ bg }) => (bg ? "#02152b" : "transparent")};
  color: white;
  font-family: Poppins;
  position: fixed;
  z-index: 10;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
`;
