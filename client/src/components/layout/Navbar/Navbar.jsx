import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
} from "lucide-react";

import "./Navbar.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () =>
      window.removeEventListener(
        "keydown",
        closeOnEscape
      );
  }, []);

  return (
    <>
      <header
        className={`navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="container navbar-container">
          {/* Logo */}

          <Link to="/" className="logo">
            Sensor<span>Grid</span>
          </Link>

          {/* Desktop Navigation */}

          <nav className="desktop-nav">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions */}

          <div className="navbar-actions">
            <button
              className="menu-btn"
              onClick={() =>
                setMenuOpen((prev) => !prev)
              }
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}

      <div
        className={`mobile-overlay ${
          menuOpen ? "show" : ""
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Drawer */}

      <aside
        className={`mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >
        <nav>
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Navbar;