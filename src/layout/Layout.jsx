import React, { useState } from "react";

import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);
  const toogle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <Navbar toogle={toogle} />
      {children}
    </>
  );
};

export default Layout;
