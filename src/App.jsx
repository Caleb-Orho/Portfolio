import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./assets/Components/Home"
import Project from "./assets/Components/Project"
import Header from "./assets/Components/Header"
import About from "./assets/Components/About"
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Header" element={<Header />} />
      <Route exact path="/Project" element={<Project />} />
      <Route exact path="/About" element={<About />} />
    </Routes>
  );
};

export default App;
