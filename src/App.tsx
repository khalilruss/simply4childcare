import "./App.css";

import { Routes, Route } from "react-router-dom";
// import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navigationbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs";
import Ethos from "./pages/Ethos";
import Approach from "./pages/Approach";
import Nutrition from "./pages/Nutrition";
import Parents from "./pages/Parents";
import Environment from "./pages/Environment";
import bg from "./assets/coloured-balls.jpeg";

import Fees from "./pages/Fees";

function App() {
  const [backgroundSize, setBackgroundSize] = useState<number[]>([0, 0]);
  const { pathname } = useLocation();
  // const verticalContact = useMediaQuery({ query: "(max-width: 1200px)" });

  const calculateBackgroundSize = () => {
    return `${backgroundSize[0] + backgroundSize[0] / 8}px ${
      backgroundSize[1]
    }px`;
  };

  useEffect(() => {
    const handleResize = () => {
      const height = document.getElementById("content")?.clientHeight;
      const width = window.innerWidth;
      console.log(height);
      if (typeof height === "number") {
        setBackgroundSize([width, height]);
      }
    };

    const handleImageLoad = () => {
      handleResize();
    };

    const images = document.querySelectorAll("#content img");
    images.forEach((image) => {
      image.addEventListener("load", handleImageLoad);
    });

    // const handleInitialRender = () => {
    //   setTimeout(handleResize, 0); // Delay execution to allow content rendering
    // };
    // handleInitialRender();

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      images.forEach((image) => {
        image.removeEventListener("load", handleImageLoad);
      });
    };
  }, [pathname]);

  return (
    <div
      className="d-flex flex-column min-vh-100 "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: calculateBackgroundSize(),
      }}
      id="content"
    >
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/about-us" element={<AboutUs />} />
        <Route path="/about/our-ethos" element={<Ethos />} />
        <Route path="/about/our-approach" element={<Approach />} />
        <Route path="/about/our-environment" element={<Environment />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/parents-as-partners" element={<Parents />} />
        <Route path="/fees-and-sessions" element={<Fees />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
