import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "./components/Analytics";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Aircraft from "./pages/Aircraft";
import Development from "./pages/Development";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Join from "./pages/Join";
import Insights from "./pages/Insights";
import WhyModularArchitecture from "./pages/Why-Modular-Architecture";

function App() {
  return (
    <BrowserRouter>
      <GoogleAnalytics />
      <Analytics />
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aircraft" element={<Aircraft />} />
        <Route path="/development" element={<Development />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/join" element={<Join />} />
        <Route path="/insights" element={<Insights />} />
        <Route 
          path="/insights/modular-aircraft-architecture"
          element={<WhyModularArchitecture />}
        />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;