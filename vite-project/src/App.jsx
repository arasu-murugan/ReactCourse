import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UseEffect from './components/classComponent/functionalComponent/UseEffect';
import About from './components/classComponent/functionalComponent/About';
import ClassComp from './components/classComponent/ClassComp';
import Contact from './components/classComponent/functionalComponent/Contact';
import Gallery from './components/classComponent/functionalComponent/Gallery';
import NavBar from './components/classComponent/functionalComponent/NavBar';
import UseRef from './components/classComponent/functionalComponent/UseRef';
import UseMemo from './components/classComponent/functionalComponent/UseMemo';
import Login from './components/classComponent/functionalComponent/Login';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar /> {/* Persistent navigation bar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/use-effect" element={<UseEffect />} />
        <Route path="/class-comp" element={<ClassComp />} />
        <Route path="/use-ref" element={<UseRef />} />
        <Route path="/use-memo" element={<UseMemo />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/about" element={<About college="Kongu Engineering College" />} />
      </Routes>
    </Router>
  );
}

export default App;
