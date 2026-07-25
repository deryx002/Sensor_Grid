import { Link } from "react-router-dom";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Brand */}

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Sensor<span>Grid</span>
          </Link>

          <p>
            Building modern web applications, IoT solutions,
            embedded systems, and creative digital experiences
            that help businesses innovate and grow.
          </p>
        </div>

        {/* Company */}

        <div className="footer-column">
          <h3>Company</h3>

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/services">Services</Link>

          <Link to="/contact">Contact</Link>
        </div>

        {/* Services */}

        <div className="footer-column">
          <h3>Services</h3>

          <span>Web Development</span>

          <span>IoT Solutions</span>

          <span>Creative Designing</span>
        </div>

        {/* Contact */}

        <div className="footer-column">
          <h3>Contact</h3>

          <div className="footer-contact">
            <Mail size={18} />

            <span>sensorgrid123@.com</span>
          </div>

          <div className="footer-contact">
            <Phone size={18} />

            <span>+91 86680 79413</span>
          </div>

          <div className="footer-contact">
            <MapPin size={18} />

            <span>Gobi, Tamil Nadu, India</span>
          </div>

          <div className="footer-socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>
          © {year} SensorGrid. All rights reserved. | Developed and Maintained by{" "}
          <a href="https://wa.me/qr/U7B27OMVP72PO1" className="developer-link">
            Dharun
          </a>
        </p>

        <div className="footer-bottom-links">
          <Link to="/privacy-policy">
            Privacy Policy
          </Link>

          <Link to="/terms">
            Terms & Conditions
          </Link>

          <Link to="/admin/login">
            Admin Login
          </Link>
        </div>
      </div>

      <button
        className="scroll-top-btn"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;