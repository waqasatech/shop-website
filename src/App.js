import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Shirts from "./components/Shirts";
import Shoes from "./components/Shoes";
import Pants from "./components/Pants";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shirts" element={<Shirts />} />
        <Route path="/pants" element={<Pants />} />
        <Route path="/shoes" element={<Shoes />} />
      </Routes>
    </Router>
  );
}

export default App;
