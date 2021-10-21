import React from "react";
import styled from "styled-components";
import GlobalButton from "./GlobalButton";
import img from "./peter.png";

const Profile = () => {
  return (
    <Container id="home">
      <Wrapper>
        <Image src={img} />
        <Content>
          <Title>
            Best WP Project Bidding Theme – Freelance Marketplace 2021
          </Title>
          <Desc>
            The most complete freelancer marketplace theme in the world. Build
            your freelancer website with the best template. Finest written code
            and awesome customer support!{" "}
          </Desc>

          <Buttons>
            <GlobalButton bg cl text="Button1" />
            <GlobalButton bg1 bc1 cl1 text="Button1" />
          </Buttons>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Profile;

const Content = styled.div`
  width: 400px;
  height: 600px;
  margin: 20px;
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  min-width: 300px;
  width: 500px;
  height: 600px;
  object-fit: contain;
  margin: 20px;
`;
const Title = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  margin: 20px;
  font-weight: bold;
`;

const Desc = styled.div`
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
  flex: 1;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  padding-top: 100px;
  width: 100%;
  min-height: 80vh;
  height: 100%;
  background-image: url("scaled.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  font-family: Poppins;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
