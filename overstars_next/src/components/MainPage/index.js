import OurProjects from "./components/OurProjects";
import AboutUs from "./components/AboutUs";
import Career from "./components/Career";
import MainBlock from "./components/MainBlock";
import Loader from "../Loader";
import { useState, useEffect } from "react";

const MainPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <MainBlock />
          <OurProjects />
          <AboutUs />
          <Career />
        </div>
      )}
    </>
  );
};

export default MainPage;
