import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css'
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import News from './News'
import HealthNews from "./HealthNews";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/health" element={<HealthNews />}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
