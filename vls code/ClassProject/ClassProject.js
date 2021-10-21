import React from "react";
import styled from "styled-components";
import HeaderBar from "./HeaderBar";
import Profile from "./Profile";

const ClassProject = () => {
  return (
    <Container>
      <Wrapper>
        <HeaderBar />
        <Profile />
      </Wrapper>
    </Container>
  );
};

export default ClassProject;

const Container = styled.div``;
const Wrapper = styled.div``;
