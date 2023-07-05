import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Ethos from "./pages/Ethos/Ethos";
import Approach from "./pages/Approach";
import Nutrition from "./pages/Nutrition";
import Navigationbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-ethos" element={<Ethos />} />
          <Route path="/our-approach" element={<Approach />} />
          <Route path="/nutrition" element={<Nutrition />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
