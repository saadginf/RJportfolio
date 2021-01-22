import React from "react";
import { Button } from "../ButtonElement";
import {
  BtnWrap,
  Column,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./InfoElements";
import Slide from "react-reveal/Slide";
const InfoSection = ({
  id,
  lightBg,
  lightText,
  lightTextDesc,
  topLine,
  hedline,
  description,
  buttonLable,
  imgStart,
  image,
  dark,
  primary,
  darkText,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper imgStart={imgStart}>
          <Column>
            <Slide right>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{hedline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="/galerie"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLable}
                  </Button>
                </BtnWrap>
              </TextWrapper>{" "}
            </Slide>
          </Column>

          <Slide left>
            <Column>
              <ImgWrap>
                <Img src={image} />
              </ImgWrap>
            </Column>
          </Slide>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
