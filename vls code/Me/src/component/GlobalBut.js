import React from "react";
import styled from "styled-components";
import img from "./assets/images/group-icon.png";

const GlobalBut = ({ img, text, bg, bc, bg1, bc1, cl, cl1 }) => {
  return (
    <Container bg={bg} bg1={bg1} bc={bc} bc1={bc1} cl={cl} cl1={cl1}>
      <Wrapper>
        <Img src={img} />
      </Wrapper>
    </Container>
  );
};

export default GlobalBut;

const Img = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

const Container = styled.div`
  background-color: ${({ bg }) => (bg ? "white" : "black")};
  color: ${({ cl }) => (cl ? "black" : "white")};
  width: 65px;
  height: 65px;
  border-radius: 50%;
  border: 4px solid;
  border-color: ${({ bc }) => (bc ? " gray" : "white")};
  transition: all 350ms;
  transform: scale(1);
  margin: 0 10px;

  :hover {
    cursor: pointer;
    border-color: ${({ bc1 }) => (bc1 ? " white" : "gray")};
    color: ${({ cl1 }) => (cl1 ? "white" : "black")};
    background-color: ${({ bg1 }) => (bg1 ? "black" : "gray")};
    transform: scale(1.05);
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
