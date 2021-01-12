import React from "react";
import "./HeroSection.css";
import rj from "../images/rj.jpeg";
import oeuvre1 from "../images/oeuvre1.jpeg";
import oeuvre2 from "../images/oeuvre2.jpeg";
import oeuvre3 from "../images/oeuvre3.jpeg";
import Carousel from "react-bootstrap/Carousel";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
const HeroSection = () => {
  return (
    <div className="herosection">
      <Slide top>
        <h1>Rajae Veladoveli</h1>
      </Slide>
      <div className="heroimages">
        <Fade right>
          <div className="imgperso">
            <img src={rj} alt="rj" />
          </div>
        </Fade>

        <div className="oeuvre">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={oeuvre3} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={oeuvre1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={oeuvre2} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <Fade top>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </Fade>
    </div>
  );
};

export default HeroSection;
