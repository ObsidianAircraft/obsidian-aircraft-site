import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "./components/GoogleAnalytics";
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
import WhatMosaicMeansForTheFutureOfUSAviation from "./pages/What-Mosaic-Means-For-The-Future-Of-US-Aviation";
import WhyUpgradeabilityMatters from "./pages/Why-Upgradeability-Matters";
import FixedVsRetractable from "./pages/Fixed-Vs-Retractable";
import Archive from "./pages/Archive";
import ScrollToHash from "./components/ScrollToHash";

function App() {
  return (
    <BrowserRouter>
      <GoogleAnalytics />
      <Analytics />
      <SpeedInsights />
      <ScrollToTop />
      <ScrollToHash />
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
        <Route
          path="insights/what-mosaic-means"
          element={<WhatMosaicMeansForTheFutureOfUSAviation />}
        />
        <Route
          path="insights/why-upgradeability-matters"
          element={<WhyUpgradeabilityMatters />}
        />
        <Route 
          path="insights/fixed-vs-retractable"
          element={<FixedVsRetractable />}
        />
        <Route
          path="insights/archive"
          element={<Archive />}
        />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;