import React, { useState } from "react";
import styled from "styled-components";

const ContactComponent = () => {
  const [text, setText] = useState("");
  const [mail, setMail] = useState("@gmail.com");

  return (
    <Container id="contact">
      <Wrapper> Subscribe to Our NewsLetter</Wrapper>

      <InputWrapper>
        <Input placeholder="Email" />
        <Button>Submit</Button>
      </InputWrapper>
    </Container>
  );
};

export default ContactComponent;

const Container = styled.div`
  width: 100%;
  min-height: 50vh;
  height: 100%;
  background-color: blue;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: Poppins;
`;

const Wrapper = styled.div`
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  flex: 1;
  outline: none;
  border: 0;
  border-radius: 30px;
  padding-left: 20px;
  font-size: 20px;
`;

const Button = styled.button`
  outline: none;
  border: 0;
  border-radius: 30px;
  background-color: transparent;
  margin-right: 20px;
`;

const InputWrapper = styled.div`
  width: 600px;
  height: 60px;
  background-color: white;
  color: black;
  border-radius: 30px;
  display: flex;
  align-items: center;
`;
