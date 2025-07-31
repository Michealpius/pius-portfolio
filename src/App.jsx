import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen transition-colors duration-300 bg-gradient-to-br from-slate-50 to-sky-100 dark:from-slate-900 dark:to-gray-800 text-gray-800 dark:text-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}