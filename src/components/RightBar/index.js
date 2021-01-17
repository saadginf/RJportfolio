import React from "react";
import {
  RightBarContainer,
  CloseIcon,
  LinksContainer,
  ScrollLinks,
  ScrollLink,
  BtnWrapper,
} from "./RightBarElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ButtonElement";

const RightBar = ({ isOpen, toogle }) => {
  return (
    <RightBarContainer isOpen={isOpen}>
      <CloseIcon onClick={toogle}>
        <FontAwesomeIcon icon={faTimes} size="sm" color="white" />
      </CloseIcon>
      <LinksContainer>
        <ScrollLinks>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toogle}
          >
            About me
          </ScrollLink>
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toogle}
          >
            Works
          </ScrollLink>
          <ScrollLink
            to="testi"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toogle}
          >
            Testimonials
          </ScrollLink>
        </ScrollLinks>
        <BtnWrapper>
          <Button>Galerie</Button>
        </BtnWrapper>
      </LinksContainer>
    </RightBarContainer>
  );
};

export default RightBar;
