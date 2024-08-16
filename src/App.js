import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header"
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-[url('./assets/ahus_cropped.jpg')] w-screen h-screen">
      <Header />
      <Router>
        <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
