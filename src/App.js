import * as React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header.js";
import About from "./pages/About.js";
import Interests from "./pages/Interests.js";

const App = () => {
  return (
    <div>
      <Header />
      <div class="grid grid-cols-5 gap-">
        <div class="">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/interests">Interests</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/interests" element={<Interests />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
