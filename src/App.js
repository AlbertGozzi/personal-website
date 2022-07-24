import * as React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header.js";
import About from "./pages/About.js";
import Interests from "./pages/Interests.js";

const App = () => {
  return (
    <div>
      <Header />
      <div class="grid grid-cols-5 gap-2">
        <div class="hidden sm:block text-sm">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/interests">Interests</Link>
            </li>
          </ul>
        </div>
        <div class="col-span-5 sm:col-span-4">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/interests" element={<Interests />} />
          </Routes>
        </div>
      </div>
      <div class="sm:hidden mt-8 text-center space-x-3 max-w-full">
        <Link to="/about">About</Link>
        <span>⸱</span>
        <Link to="/interests">Interests</Link>
        <span>⸱</span>
      </div>
    </div>
  );
};

export default App;
