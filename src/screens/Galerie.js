import React from "react";
import Imagepart2 from "../components/ImagesSection/Imagepart2";

import ImageSection from "../components/ImagesSection/Imagepart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Galerie = () => {
  return (
    <>
      <div className="home-link">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} size="2x" color="white" />
        </Link>
      </div>
      <ImageSection />
      <Imagepart2 />
    </>
  );
};

export default Galerie;
