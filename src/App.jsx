import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import "bootstrap/js/src/collapse";
// import "bootstrap/js/src/dropdown";
import { Routes, Route, Navigate  } from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Services from './Components/Services'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import "./App.css";

const App = () => {
  return (
    <>
		<Navbar />
		<Routes>
		<Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Catch-all route for redirects */}
        <Route path="*" element={<Navigate to="/" />} />
		</Routes>
    <Footer />
    </>
  )
}

export default App
