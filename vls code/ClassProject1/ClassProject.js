import React, { useState } from "react";
import styled from "styled-components";
import HeaderBar from "./HeaderBar";
import Profile from "./Profile";
import ProjectSection from "./ProjectSection";
import VideoComponent from "./VideoComponent";
import ContactComponent from "./ContactComponent";
import FooterComponent from "./FooterComponent";

const ClassProject = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    // const check = window.scrollY;
    // console.log(check);

    if (window.scrollY >= 100) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  window.addEventListener("scroll", onToggle);

  return (
    <Container>
      <Wrapper>
        <HeaderBar bg={toggle ? "bg" : ""} />
        <Profile />
        <ProjectSection />
        <VideoComponent />
        <ContactComponent />
        <FooterComponent />
      </Wrapper>
    </Container>
  );
};

export default ClassProject;

const Container = styled.div``;
const Wrapper = styled.div``;
