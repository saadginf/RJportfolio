import React from "react";
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesH1,
  FrAutor,
  FrTestimonial,
  LinkTo,
} from "./TestElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Slide from "react-reveal/Slide";
const Testimonials = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Témoignages</ServicesH1>
      <Slide left cascade>
        <ServicesWrapper>
          <FrTestimonial>
            <p>
              <FontAwesomeIcon icon={faQuoteLeft} size="3x" color="#319bb5" />{" "}
              {"    "}Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book...{" "}
              <LinkTo to="/">Lire la suite</LinkTo>
            </p>
            <FrAutor>Hespress</FrAutor>
          </FrTestimonial>
          <FrTestimonial>
            <p>
              <FontAwesomeIcon icon={faQuoteLeft} size="3x" color="#319bb5" />{" "}
              {"    "}Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book...{" "}
              <LinkTo to="/">Lire la suite</LinkTo>
            </p>
            <FrAutor>Hespress</FrAutor>
          </FrTestimonial>{" "}
        </ServicesWrapper>
      </Slide>
    </ServicesContainer>
  );
};

export default Testimonials;
