import React from "react";
import {
  Heading,
  Subtitle,
  TextWrapper,
  TopLine,
} from "../InfoSection/InfoElements";
import "./ImageSection.css";
import { SRLWrapper } from "simple-react-lightbox";
import oeuvre4 from "../../images/oeuvre4.jpeg";
import oeuvre5 from "../../images/oeuvre5.jpeg";
import oeuvre7 from "../../images/oeuvre7.jpeg";
const Imagepart2 = () => {
  return (
    <div>
      <div className="container-image-section">
        <h2>The Second One</h2>
        <div className="gallery-descriptif2">
          <div className="descriptif-part">
            <TextWrapper>
              <TopLine>Topline</TopLine>
              <Heading>Big Title</Heading>
              <Subtitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Subtitle>
            </TextWrapper>
          </div>
          <div className="gallery-part ">
            <SRLWrapper>
              <img src={oeuvre5} alt=".." className="portrait" />
              <img src={oeuvre4} alt=".." className="portrait" />
              <img src={oeuvre7} alt=".." className="paysage" />
            </SRLWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imagepart2;
