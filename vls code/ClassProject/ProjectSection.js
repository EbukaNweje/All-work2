import React from "react";
import styled from "styled-components";
import data from "./myData.json";

const ProjectSection = () => {
  return (
    <Container id="profile">
      <Wrapper>
        {data.map((props) => (
          <Card key={props.id}>
            <Image src={props.img} />
            <Content>
              <Title>{props.title}</Title>
              <Desc>{props.desc}</Desc>
            </Content>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default ProjectSection;

const Card = styled.div`
  width: 300px;
  height: 500px;
  background-color: lightblue;
  border-radius: 10px;
  margin: 10px;
  border: 2px solid gray;
  transform: scale(1);
  transition: all 350ms;

  :hover {
    border: 2px solid black;
    transform: scale(1.01);
    box-shadow: rgb(0 0 0 / 49%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }
`;
const Content = styled.div`
  margin: 0 10px;
`;
const Image = styled.img`
  width: 100%;
  height: 300px;
  background-color: coral;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  margin-bottom: 10px;
`;
const Title = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  text-transform: uppercase;
  line-height: 1;
  margin-bottom: 10px;
`;
const Desc = styled.div``;

const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  height: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
