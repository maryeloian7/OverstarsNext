import React from "react";
import OurProjects from "./components/OurProjects";
import AboutUs from "./components/AboutUs";
import Career from "./components/Career";
import MainBlock from "./components/MainBlock";

const MainPage = () => {
  return (
    <>
      <MainBlock />
      <OurProjects />
      <AboutUs />
      <Career />
    </>
  );
};

export default MainPage;
