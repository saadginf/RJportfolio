import React from "react";
import {
  CloseIcon,
  SideBarContainer,
  SidBarWrapper,
  SideBarLink,
  SideBarBtnLink,
  SideBarBtnWrap,
} from "./SideBarElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const SideBarV1 = ({ isOpen, toogle }) => {
  return (
    <SideBarContainer isOpen={isOpen}>
      <CloseIcon>
        <FontAwesomeIcon
          icon={faTimes}
          size="sm"
          color="white"
          onClick={toogle}
        />
      </CloseIcon>

      <SidBarWrapper>
        <SideBarLink to="about" onClick={toogle}>
          About Me
        </SideBarLink>
        <SideBarLink onClick={toogle}>Discover</SideBarLink>
        <SideBarLink to="services" onClick={toogle}>
          My Works
        </SideBarLink>
        <SideBarLink to="testi" onClick={toogle}>
          Témoignages
        </SideBarLink>
      </SidBarWrapper>
      <SideBarBtnWrap>
        <SideBarBtnLink to="/galerie">Galerie</SideBarBtnLink>
      </SideBarBtnWrap>
    </SideBarContainer>
  );
};

export default SideBarV1;
