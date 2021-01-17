import React, { useState } from "react";
import RightBar from "../components/RightBar";

import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);
  const toogle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <Navbar toogle={toogle} />
      <RightBar isOpen={isOpen} toogle={toogle} />
      {children}
    </>
  );
};

export default Layout;
