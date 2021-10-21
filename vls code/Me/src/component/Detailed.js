import React from "react";
import styled from "styled-components";
import GlobalButton from "./GlobalButton";
import icon from "./assets/images/play-icon-black.png";
import icon2 from "./assets/images/play-icon-white.png";
import GlobalBut from "./GlobalBut";
import imgProps from "./assets/images/group-icon.png";
import imgProps2 from "./assets/images/series-icon.svg";
import { useParams } from "react-router-dom";
import data from "./data.json";

const img =
  "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B409C2A425D58C32D822EB633C7CAE3DC910DC2FC62D2B1807A0BB092C531E9A/scale?width=1440&aspectRatio=1.78&format=jpeg";

const imgCard =
  "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2041CE26663867FC4EF20377B8625BD629E619452E23BCDB1AB259DD475C2EA1/scale?width=1440&aspectRatio=1.78";

const Detailed = () => {
  const { id } = useParams();

  // console.log("my ID: ", data[id - 1]);
  const myValue = data[id - 1];

  console.log(myValue);
  return (
    <Container>
      <OverLay />
      <Background src={myValue.backgroundImg} />
      <Wrapper>
        <ImgCard src={myValue.titleImg} />
        <Buttons>
          <GlobalButton bg2 bg bg1 icon={icon} title="Play" />
          <GlobalButton clr icon={icon2} title="Trailer" />
          <GlobalBut img={imgProps} />
          <GlobalBut img={imgProps2} />
        </Buttons>
        <Rating>{myValue.subTitle}</Rating>
        <Desc>{myValue.description}</Desc>
      </Wrapper>
    </Container>
  );
};

export default Detailed;

const Desc = styled.div`
  margin: 30px 70px;
  min-width: 400px;
  max-width: 900px;
  font-family: poppins;
`;

const Rating = styled.div`
  margin: 30px 70px;
  font-family: Poppins;
  color: lightgray;
`;
const Group = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: whitesmoke;
`;

const Buttons = styled.div`
  display: flex;
  margin-left: 50px;
  align-items: center;
`;

const ImgCard = styled.img`
  width: 400px;
  height: 300px;
  margin: 70px 0px 0px 70px;
  object-fit: contain;
`;
const Background = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  z-index: -1;
`;
const OverLay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;
