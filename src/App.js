import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header"
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-[url('./assets/ahus_cropped.jpg')] bg-fixed bg-no-repeat bg-center w-screen font-Robot bg-cover min-h-screen">
      <Router>
        <Routes>
          <Route index element={<About />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
