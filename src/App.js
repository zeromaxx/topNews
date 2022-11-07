import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useGlobalContext } from "./context";
import "./index.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HealthNews from "./HealthNews";
import SearchNews from "./SearchNews";
import TechNews from "./TechNews";
import ScrollTop from "./ScrolltoTop";
import {BiMenu} from "react-icons/bi";

function App() {
  const { toggleNav } = useGlobalContext();
  
    return (
      <Router>
        <BiMenu onClick={() => toggleNav()} className="burger-menu" />
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home />}></Route>
          <Route path="/health" element={<HealthNews />}></Route>
          <Route path="/search" element={<SearchNews />}></Route>
          <Route path="/travel" element={<TechNews />}></Route>
        </Routes>
        <ScrollTop />
        <Footer />
      </Router>
    );
}

export default App;
