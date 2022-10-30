import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HealthNews from "./HealthNews";
import SearchNews from "./SearchNews";
import ScrollTop from "./ScrolltoTop";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/health" element={<HealthNews />}></Route>
        <Route path="/search" element={<SearchNews />}></Route>
      </Routes>
      <ScrollTop />
      <Footer />
    </Router>
  );
}

export default App;
