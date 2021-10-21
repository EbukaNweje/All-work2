import React from "react";
import styled from "styled-components";

const FooterComponent = () => {
  return (
    <Container>
      <Wrapper>
        <Navigation>
          <Nav>Home</Nav>
          <span>SuperSport.com</span>
          <span>SuperSport.com</span>
          <span>SuperSport.com</span>
          <span>SuperSport.com</span>
          <span>SuperSport.com</span>
          <span>SuperSport.com</span>
        </Navigation>
        <Navigation>
          <Nav>Home</Nav>
          <span>SuperSport.com</span>
          <span>SuperSport.com</span>
          <span>SuperSport.com</span>
          <span>SuperSport.com</span>
          <span>SuperSport.com</span>
          <span>SuperSport.com</span>
        </Navigation>
        <Navigation>
          <Nav>Home</Nav>
          <span>SuperSport.com</span>
          <span>SuperSport.com</span>
          <span>SuperSport.com</span>
          <span>SuperSport.com</span>
          <span>SuperSport.com</span>
          <span>SuperSport.com</span>
        </Navigation>
        <Navigation>
          <Nav>Home</Nav>
          <span>SuperSport.com</span>
          <span>SuperSport.com</span>
          <span>SuperSport.com</span>
          <span>SuperSport.com</span>
          <span>SuperSport.com</span>
          <span>SuperSport.com</span>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default FooterComponent;

const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  height: 100%;
  background-color: white;
  padding-top: 30px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Navigation = styled.div`
  width: 200px;
  margin: 0 30px;
  display: flex;
  flex-direction: column;
  border-left: 3px solid lightgray;
  padding-left: 30px;

  span {
    margin-bottom: 10px;
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
const Nav = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;
