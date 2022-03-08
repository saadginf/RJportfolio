import React from "react";
import logo from "../images/logo2.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import {
  faEnvelope,
  faMapMarked,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="contact">
        <h1>Contact Us</h1>
        <div className="social">
          <div>
            <FontAwesomeIcon icon={faMapMarked} size="3x" color="white" />
            <hr style={{ borderWidth: 2, borderColor: "white" }} />
            Mustafa, 54350 Midelt, Morocco
          </div>
          <div>
            <FontAwesomeIcon icon={faPhoneSquare} size="3x" color="white" />
            <hr style={{ borderWidth: 2, borderColor: "white" }} />
            +212 661 239 957
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} size="3x" color="white" />
            <hr style={{ borderWidth: 2, borderColor: "white" }} />
            ayach.selenites@gmail.com
          </div>
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
