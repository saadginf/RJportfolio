import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEnvelope,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";

import { animateScroll } from "react-scroll";
import {
  NavContainer,
  Navlinks,
  MobileIcon,
  NavA,
  NavItem,
  Navlogo,
  NavBtn,
} from "./NavBarElements";

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
          AmigoMineral
        </Navlogo>

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
              to="services"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              My Works
            </NavA>
          </NavItem>
          <NavItem>
            {" "}
            <NavA
              to="testi"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Témoignages
            </NavA>
          </NavItem>
        </Navlinks>
        <NavBtn>
          <FontAwesomeIcon icon={faPhoneSquareAlt} size="2x" color="white" />
          <span style={{ marginLeft: 5 }}> +212 661 239 957</span>
          <FontAwesomeIcon icon={faEnvelope} size="2x" color="white" />
          <span style={{ marginLeft: 5 }}>ayach.selenites@gmail.com</span>
        </NavBtn>
      </NavContainer>
    </>
  );
};

export default Navbar;
