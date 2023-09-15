import "./App.css";

import { Routes, Route } from "react-router-dom";
import ScreenSizeProvider from "./screenSizeContext/ScreenSizeProvider";
import Navigationbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs";
import Ethos from "./pages/Ethos";
import Approach from "./pages/Approach";
import Nutrition from "./pages/Nutrition";
import Parents from "./pages/Parents";
import Environment from "./pages/Environment";
import Fees from "./pages/Fees";
import bg from "./assets/background.svg";

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <ScreenSizeProvider>
      <div className="d-flex flex-column min-vh-100" style={backgroundStyle}>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/about-us" element={<AboutUs />} />
          <Route path="/about/our-ethos" element={<Ethos />} />
          <Route path="/about/our-approach" element={<Approach />} />
          <Route path="/about/our-environment" element={<Environment />} />
          <Route path="/parent-information/nutrition" element={<Nutrition />} />
          <Route
            path="/parent-information/parents-as-partners"
            element={<Parents />}
          />
          <Route
            path="/parent-information/fees-and-sessions"
            element={<Fees />}
          />
        </Routes>
        <Footer />
      </div>
    </ScreenSizeProvider>
  );
}

export default App;
