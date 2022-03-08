import React from "react";
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesH1,
  ServicesCard,
  ServicesIcon,
  BtnWrap,
} from "./ServicesElements";
import img1 from "../../images/oeuvre5.jpeg";
import img2 from "../../images/oeuvre4.jpeg";
import img3 from "../../images/oeuvre6.jpeg";
import { Button } from "../ButtonElement";
import Bounce from "react-reveal/Slide";
const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>My Works</ServicesH1>
      <ServicesWrapper>
        <Bounce bottom cascade>
          <ServicesCard>
            <ServicesIcon src={img1} />
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={img3} />
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={img2} />
          </ServicesCard>
        </Bounce>
      </ServicesWrapper>
      <BtnWrap>
        <Button
          to="/galerie"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          primary={1}
          dark={1}
          dark2={0}
        >
          Go to The Galerie
        </Button>
      </BtnWrap>
    </ServicesContainer>
  );
};

export default Services;
