import React, { useState } from "react";

import Navbar from "./Navbar";
import SideBarV1 from "./SideBar";

const Layout = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);
  const toogle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <Navbar toogle={toogle} />
      <SideBarV1 isOpen={isOpen} toogle={toogle} />
      {children}
    </>
  );
};

export default Layout;
