import React from "react";
import styled from "styled-components";
import logo from "./7.png";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import FaceIcon from "@mui/icons-material/Face";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

const ClassProject = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={logo} />
        <Navigation>
          <Nav>
            <HomeIcon />
            <span>Home</span>
          </Nav>
          <Nav>
            <FaceIcon />
            <span>Profile</span>
          </Nav>
          <Nav>
            <HomeRepairServiceIcon />
            <span>Services</span>
          </Nav>
          <Nav>
            <SettingsIcon />
            <span>Settings</span>
          </Nav>
        </Navigation>

        <MyButton>Log In</MyButton>
      </Wrapper>
    </Container>
  );
};

export default ClassProject;

const MyButton = styled.button`
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

const Nav = styled.div`
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
`;
const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: #02152b;
  color: white;
  font-family: Poppins;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
`;
