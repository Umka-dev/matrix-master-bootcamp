import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Countries from "./components/Countries";
import OneCountry from "./components/OneCountry";
import NotFound from "./components/NotFound";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Countries />}></Route>
          <Route path="/country/:countryName" element={<OneCountry />}></Route>

          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
