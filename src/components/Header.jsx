import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/AgriFarm360 Logo.png";

export default function Header({ onEnquireClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo + Site Name */}
        <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="AgriFarm360 Logo" className="h-12 w-12 mr-3" />
          <span className="font-bold text-xl text-green-800">AgriFarm360</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-green-600 font-semibold">
            Home
          </Link>
          <Link to="/farm" className="hover:text-green-600 font-semibold">
            Our Farm
          </Link>
          <Link to="/join-us" className="hover:text-green-600 font-semibold">
            Join Us
          </Link>
          <Link to="/contact" className="hover:text-green-600 font-semibold">
            Contact
          </Link>
          <button
            onClick={onEnquireClick}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
          >
            Enquire Now
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Link
            to="/"
            className="block px-6 py-3 hover:bg-green-50"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/farm"
            className="block px-6 py-3 hover:bg-green-50"
            onClick={() => setMenuOpen(false)}
          >
            Our Farm
          </Link>
          <Link
            to="/join-us"
            className="block px-6 py-3 hover:bg-green-50"
            onClick={() => setMenuOpen(false)}
          >
            Join Us
          </Link>
          <Link
            to="/contact"
            className="block px-6 py-3 hover:bg-green-50"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <button
            onClick={() => {
              setMenuOpen(false);
              onEnquireClick();
            }}
            className="w-full text-left px-6 py-3 bg-yellow-500 text-white hover:bg-yellow-600 transition"
          >
            Enquire Now
          </button>
        </div>
      )}
    </header>
  );
}
