import { BrowserRouter, Routes, Route } from "react-router-dom";

import Analytics from "./components/Analytics";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Aircraft from "./pages/Aircraft";
import Development from "./pages/Development";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Join from "./pages/Join";

function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aircraft" element={<Aircraft />} />
        <Route path="/development" element={<Development />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/join" element={<Join />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;