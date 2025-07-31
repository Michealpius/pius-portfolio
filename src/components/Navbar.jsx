import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <h1 className="font-bold text-xl">Pius Michael</h1>
      <ul className="flex space-x-4">
        <li><Link to="/" className={location.pathname === '/' ? 'font-semibold' : ''}>Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
          <button onClick={() => setDark(!dark)} className="ml-4 px-2 py-1 rounded bg-blue-500 text-white text-sm">
            {dark ? 'Light' : 'Dark'}
          </button>
        </li>
      </ul>
    </nav>
  );
}