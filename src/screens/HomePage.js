import React from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/data";
import Services from "../components/Services";
import Testimonials from "../components/Testiomnials";
import Layout from "../layout/Layout";
const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </Layout>
  );
};

export default HomePage;
