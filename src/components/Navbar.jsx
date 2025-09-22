// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/AgriFarm360 Logo.png"; // Adjust path if needed

// Nav links config
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Our Farm", path: "/farm" },
  { name: "Join Us", path: "/join-us" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Site Name */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="AgriFarm360 Logo" className="h-10 w-auto" />
          <h1 className="text-xl font-bold text-green-700">AgriFarm360</h1>
        </Link>

        {/* Hamburger button - mobile only */}
        <button
          className="md:hidden text-2xl text-green-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        {/* Navigation links */}
        <div className="hidden md:flex gap-6 items-center text-green-700 font-semibold">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="hover:text-green-900">
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-md">
          <div className="flex flex-col gap-4 text-green-700 font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-green-900"
                onClick={() => setMenuOpen(false)} // close menu on click
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
