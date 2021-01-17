import React from "react";
import logo from "../images/logo2.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="contact">
        <h1>Contactez Moi</h1>
        <div className="social">
          <FontAwesomeIcon icon={faFacebook} size="4x" color="white" />
          <FontAwesomeIcon icon={faInstagram} size="4x" color="white" />
          <FontAwesomeIcon icon={faTwitter} size="4x" color="white" />
          <FontAwesomeIcon icon={faEnvelope} size="4x" color="white" />
        </div>
      </div>
      <div className="copyrights">
        <img src={logo} alt="logo" height="70px" />
        <p>IWoLvEs © 2021 All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
