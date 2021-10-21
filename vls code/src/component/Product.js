import React from "react";
import styled from "styled-components";
import disney from "./assets/videos/disney.mp4";
import marvel from "./assets/videos/marvel.mp4";
import national from "./assets/videos/national.mp4";
import pixar from "./assets/videos/pixar.mp4";
import star from "./assets/videos/star-wars.mp4";

const Product = () => {
  return (
    <Container>
      <Wrapper>
        <img src={"./assets/images/viewers-disney.png"} />
        <video
          src={disney}
          type="video/mp4"
          autoPlay={true}
          loop
          muted
          playsInline
        />
      </Wrapper>
      <Wrapper>
        <img src={"./assets/images/viewers-national.png"} />
        <video
          src={national}
          type="video/mp4"
          autoPlay={true}
          loop
          muted
          playsInline
        />
      </Wrapper>
      <Wrapper>
        <img src={"./assets/images/viewers-marvel.png"} />
        <video
          src={marvel}
          type="video/mp4"
          autoPlay={true}
          loop
          muted
          playsInline
        />
      </Wrapper>
      <Wrapper>
        <img src={"./assets/images/viewers-pixar.png"} />
        <video
          src={pixar}
          type="video/mp4"
          autoPlay={true}
          loop
          muted
          playsInline
        />
      </Wrapper>
      <Wrapper>
        <img src={"./assets/images/viewers-starwars.png"} />
        <video
          src={star}
          type="video/mp4"
          autoPlay={true}
          loop
          muted
          playsInline
        />
      </Wrapper>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 20px;
  padding: 20px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 5px;
  border: 4px solid gray;
  color: black;
  transition: all 350ms;
  transform: scale(1);
  box-shadow: rgb(0 0 0 / 49%) 0px 26px 30px -10px;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    z-index: 100;
    border-radius: 5px;
  }

  video {
    position: absolute;
    left: 0;
    z-index: -100;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: all 350ms;
    border-radius: 3px;
  }

  :hover {
    transform: scale(1.03);
    border: 4px solid white;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    video {
      opacity: 1;
    }
  }
`;
