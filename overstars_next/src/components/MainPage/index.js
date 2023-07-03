import OurProjects from "./components/OurProjects";
import AboutUs from "./components/AboutUs";
import Career from "./components/Career";
import MainBlock from "./components/MainBlock";
import Loader from "../Loader";

import { useState, useEffect } from "react";

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      <div style={{ display: isLoading ? "block" : "none" }}>
        <Loader />
      </div>
      <div style={{ display: isLoading ? "none" : "block" }}>
        <MainBlock />
      </div>
      <OurProjects />
      <AboutUs />
      <Career />
    </>
  );
};

export default MainPage;
