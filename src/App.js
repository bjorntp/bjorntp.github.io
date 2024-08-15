import React, { Fragment } from "react";
import './App.css';

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </main>
    </Router>
  );
}

export default App;
