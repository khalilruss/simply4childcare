import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Ethos from "./pages/Ethos/Ethos";
import Approach from "./pages/Approach";
import Nutrition from "./pages/Nutrition";
import Navigationbar from "./components/Navbar";
import Footer from "./components/Footer";
import bg from "./assests/test.jpg";

function App() {
  return (
    <Router>
      <div
        className="d-flex flex-column min-vh-100"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us/our-ethos" element={<Ethos />} />
          <Route path="/about-us/our-approach" element={<Approach />} />
          <Route path="/nutrition" element={<Nutrition />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
