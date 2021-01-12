import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { animateScroll } from "react-scroll";
import {
  NavContainer,
  Navlinks,
  MobileIcon,
  NavA,
  NavItem,
  Navlogo,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";
import logo from "../../images/logo2.PNG";
const Navbar = ({ toogle }) => {
  const [scroll, setscroll] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setscroll(true);
    } else {
      setscroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  const toogleHome = () => {
    animateScroll.scrollToTop();
  };
  return (
    <>
      <NavContainer scroll={scroll}>
        <Navlogo to="/" onClick={toogleHome}>
          Rj
        </Navlogo>
        <NavBtn>
          <FontAwesomeIcon icon={faFacebook} size="2x" color="white" />
          <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
          <FontAwesomeIcon icon={faTwitter} size="2x" color="white" />
        </NavBtn>
        <MobileIcon>
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            color="white"
            onClick={toogle}
          />
        </MobileIcon>

        <Navlinks>
          <NavItem>
            <NavA
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              A Propos
            </NavA>
          </NavItem>{" "}
          <NavItem>
            <NavA
              to="discover"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Oeuvres
            </NavA>
          </NavItem>
          <NavItem>
            {" "}
            <NavA
              to="services"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Témoignages
            </NavA>
          </NavItem>
          <NavItem>
            {" "}
            <NavA
              to="signup"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Contact
            </NavA>
          </NavItem>
        </Navlinks>
      </NavContainer>
    </>
  );
};

export default Navbar;
