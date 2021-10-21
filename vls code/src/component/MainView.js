import React from "react";
import styled from "styled-components";
import img from "./assets/images/avatar.jpg";
import data from "./data.json";

const MainView = () => {
  return (
    <Container>
      <span> Movie Collections </span>
      <Wrapper>
        {data.map((props) => (
          <Main>
            <div> {props.title}</div>
            <BG />
            <Image src={props.cardImg} />
          </Main>
        ))}
      </Wrapper>
    </Container>
  );
};

export default MainView;

const Title = styled.div`
  position: absolute;
  bottom: 10px;
  left: 20px;
  font-size: 20px;
  font-weight: 500;
  opacity: 0;

  :hover {
    position: absolute;
    opacity: 1;
    left: 20px;
    font-size: 20px;
    font-weight: 500;
  }
`;

const BG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 350ms;
  border-radius: 5px;
  z-index: -100;

  :hover {
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 1;
    border-radius: 5px;
    z-index: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

const Main = styled.div`
  width: 100%;
  height: 300px;
  border: 2px solid gray;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px;
  transition: all 500ms;
  transform: scale(1);
  position: relative;

  div {
    position: absolute;
    bottom: 10px;
    left: 0px;
    font-size: 20px;
    font-weight: 500;
    z-index: 10;
    color: white;
    opacity: 0;
    transition: all 550ms;
    padding-left: 10px;
  }

  :hover {
    cursor: pointer;
    border: 2px solid white;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform: scale(1.01);

    div {
      opacity: 1;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  span {
    font-weight: bold;
    font-family: Poppins;
    font-size: 30px;
    letter-spacing: 1px;
    padding-left: 50px;
    padding-top: 80px;
    margin-bottom: 20px;
  }
`;
const Wrapper = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 20px;
  padding: 10px;
`;
