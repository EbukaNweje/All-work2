import React from "react";
import styled from "styled-components";
import vid from "./Vision.mp4";

const VideoComponent = () => {
  return (
    <Container id="video">
      <Wrapper>
        <Video src={vid} controls loops muted />
      </Wrapper>
    </Container>
  );
};

export default VideoComponent;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: gray;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const Video = styled.video`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  object-fit: cover;
`;
