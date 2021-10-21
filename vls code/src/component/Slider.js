import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderScreen = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Container>
      <Wrapper>
        <MySlider {...settings}>
          <MyStyled>
            <SliderImg src={"./assets/images/slider-badag.jpg"} />
          </MyStyled>
          <MyStyled>
            <SliderImg src={"./assets/images/slider-badging.jpg"} />
          </MyStyled>
          <MyStyled>
            <SliderImg src={"./assets/images/slider-scale.jpg"} />
          </MyStyled>
          <MyStyled>
            <SliderImg src={"./assets/images/slider-scales.jpg"} />
          </MyStyled>
        </MySlider>
      </Wrapper>
    </Container>
  );
};

export default SliderScreen;

const MySlider = styled(Slider)`
  margin-top: 20px;

  .slick-list {
    overflow: initial;
  }
  button {
    z-index: 1;
  }

  li button {
    :before {
      font-size: 10px;
      margin: 20px 0;
      color: rgba(150, 158, 171, 0.4);
    }
  }

  li.slick-active button:before {
    color: whitesmoke;
  }
`;

const SliderImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const MyStyled = styled.div`
  width: 100%;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  color: black;
  border: 2px solid black;
  transition: all 350ms;

  :hover {
    border: 2px solid white;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 400px;
  padding-top: 80px;
`;
const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;
