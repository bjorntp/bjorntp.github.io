import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from './pages/About';

const App = () => (
  <div className="bg-[url(./assets/ahus_cropped.jpg)] bg-fixed bg-no-repeat bg-center w-screen font-Robot bg-cover min-h-screen">
    <Router>
      <Routes>
        <Route index element={<About />} />
        <Route path="*" element={<About />} />
      </Routes>
    </Router>
  </div>
)
export default App;
