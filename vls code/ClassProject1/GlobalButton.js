import React from "react";
import styled from "styled-components";

const GlobalButton = ({ bg, bg1, bc, bc1, cl, cl1, text }) => {
  return (
    <Container bg={bg} bg1={bg1} bc={bc} bc1={bc1} cl={cl} cl1={cl1}>
      <Wrapper>{text}</Wrapper>
    </Container>
  );
};

export default GlobalButton;

const Container = styled.div`
  margin: 0 10px;
  background-color: ${({ bg }) => (bg ? "whitesmoke" : "red")};
  color: ${({ cl }) => (cl ? "red" : "whitesmoke")};
  border: 3px solid;
  border-color: ${({ bc }) => (bc ? "whitesmoke" : "red")};
  width: 160px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transform: scale(1);
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: scale(1.03);
    background-color: ${({ bg1 }) => (bg1 ? "whitesmoke" : "red")};
    color: ${({ cl1 }) => (cl1 ? "red" : "whitesmoke")};
    border-color: ${({ bc1 }) => (bc1 ? "red" : "whitesmoke")};
  }
`;
const Wrapper = styled.div``;
