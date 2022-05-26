import React from "react";
import { BrowserRouter, Route, Routes as Router } from "react-router-dom";

import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

const Routes = () => (
  <BrowserRouter basename="react-multiples">
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Router>
  </BrowserRouter>
);

export default Routes;
