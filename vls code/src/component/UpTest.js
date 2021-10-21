import React from "react";
import styled from "styled-components";

const UpTest = () => {
  return (
    <Container>
      <Wrapper>
        <Display />
        <Div>
          <InputImage type="file" id="picture" />
          <Label htmlFor="picture">Upload Image</Label>
        </Div>
      </Wrapper>
    </Container>
  );
};

export default UpTest;

const Label = styled.label`
  width: 200px;
  height: 40px;
  background-color: red;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;
const Wrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`;
const Display = styled.img`
  background-color: white;
  width: 300px;
  height: 300px;
`;
const InputImage = styled.input`
  width: 300px;
  height: 40px;
  display: none;
`;
