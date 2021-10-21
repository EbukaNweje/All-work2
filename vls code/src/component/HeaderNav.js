import React from "react";
import styled from "styled-components";
import logo from "../component/assets/images/logo.svg";
import img from "../component/assets/images/home-icon.svg";
import img1 from "../component/assets/images/movie-icon.svg";
import img2 from "../component/assets/images/series-icon.svg";
import img3 from "../component/assets/images/watchlist-icon.svg";
import img4 from "../component/assets/images/search-icon.svg";
import img5 from "../component/assets/images/original-icon.svg";
import avatar from "../component/assets/images/avatar.jpg";

const HeaderNav = () => {
  return (
    <Container>
      <Logo src={logo} />
      <Wrapper>
        <a>
          <img src={img} />
          <span>Home</span>
        </a>
        <a>
          <img src={img1} />
          <span>movie</span>
        </a>
        <a>
          <img src={img2} />
          <span>series</span>
        </a>
        <a>
          <img src={img5} />
          <span>favorite</span>
        </a>
        <a>
          <img src={img3} />
          <span>watchlist</span>
        </a>
        <a>
          <img src={img4} />
          <span>search</span>
        </a>
      </Wrapper>

      <Avatar>
        <AvatarPix src={avatar} />
        <span>Peter</span>
      </Avatar>
    </Container>
  );
};

export default HeaderNav;

const Avatar = styled.div`
  width: 70px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 20px;

  span {
    opacity: 0;
    transition: all 350ms;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
  }

  :hover {
    cursor: pointer;
    span {
      opacity: 1;
    }
  }
`;
const AvatarPix = styled.img`
  width: 50px;
  height: 50px;
  background-color: whitesmoke;
  border-radius: 50%;
  border: 3px solid whitesmoke;
  object-fit: cover;
`;
const Logo = styled.img`
  width: 120px;
  height: 50%;
  object-fit: contain;
  margin-left: 20px;
`;

const Container = styled.div`
  width: 100%;
  height: 90px;
  background-color: #090b13;
  display: flex;
  align-items: center;
`;
const Wrapper = styled.div`
  padding-left: 20px;
  width: 96%;
  height: 100%;
  display: flex;
  align-items: center;
  flex: 1;

  a {
    display: flex;
    align-items: center;
    margin: 0 20px;

    img {
      width: 25px;
      height: 25px;
      margin-right: 5px;
    }

    span {
      text-transform: uppercase;
      font-size: 12px;
      font-weight: bold;
      position: relative;
      opacity: 0.7;

      :after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: whitesmoke;
        left: 0;
        bottom: -2px;
        transform: scale(0);
        transform-origin: center left;
        transition: all 350ms;
        opacity: 0;
      }
    }

    :hover {
      cursor: pointer;

      span {
        opacity: 1;
        :after {
          opacity: 1;
          transform: scale(1.05);
        }
      }
    }
  }
`;
