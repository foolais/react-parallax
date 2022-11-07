import React from "react";
import { Parallax } from "react-parallax";
import styled from "styled-components";

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background-color: ${(props) =>
    props.BgColor === "Jakarta" ? "#a2bfdd" : "#FEAF35"};
  padding: 1em 3em;
  border: none;
  color: ${(props) => (props.Color === "Jakarta" ? "#0E0E0E" : "#212C34")};
  font-size: large;
  font-weight: 700;
  letter-spacing: 0.4em;
  border-radius: 0.5em;
  cursor: pointer;
  transition: 1s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.BgColor === "Jakarta" ? "#0e0e0e" : "#212c34"};
    color: ${(props) => (props.Color === "Jakarta" ? "#a2bfdd" : "#feaf35")};
  }
`;

const ParallaxImage = (props) => {
  const { images, text } = props;
  return (
    <Parallax
      className="image"
      bgImage={images}
      bgImageAlt="Jakarta"
      strength={800}
    >
      <Content>
        <Button BgColor={text} Color={text}>
          {text}
        </Button>
      </Content>
    </Parallax>
  );
};

export default ParallaxImage;
