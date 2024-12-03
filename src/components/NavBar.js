import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar style={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)", // For Safari support
        background: scrolled ? "rgba(0, 0, 0, 0.7)" : "transparent",
        transition: "all 0.3s ease-in-out",
      }} expand="lg" className={`navbar-custom ${scrolled ? "scrolled" : ""}`}>
        <Container>
          {/* Logo */}
          <Navbar.Brand href="/" className="navbar-logo">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>

          {/* Mobile Toggle */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Navbar Links */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navbar-nav-center">
              <Nav.Link
                href="#home"
                className={`navbar-link ${activeLink === 'home' ? 'active' : ''}`}
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={`navbar-link ${activeLink === 'skills' ? 'active' : ''}`}
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={`navbar-link ${activeLink === 'projects' ? 'active' : ''}`}
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
            </Nav>

            {/* Social Icons and Connect Button */}
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="LinkedIn" aria-label="LinkedIn" /></a>
                <a href="#"><img src={navIcon2} alt="GitHub" aria-label="GitHub" /></a>
                <a href="#"><img src={navIcon3} alt="Twitter" aria-label="Twitter" /></a>
              </div>
              <HashLink to="#connect">
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <style jsx>{`
        .navbar-custom {
          transition: all 0.3s ease-in-out;
          background: transparent;
        }
        .navbar-custom.scrolled {
          background: rgba(0, 0, 0, 0.8);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .navbar-link {
          color: #fff;
          margin: 0 15px;
          transition: color 0.3s ease-in-out;
        }
        .navbar-link.active,
        .navbar-link:hover {
          color: rgba(170, 54, 124, 0.5);
          font-weight: bold;
        }
        .navbar-nav-center {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
        @media (max-width: 768px) {
          .navbar-nav-center {
            flex-direction: column;
            align-items: center;
          }
          .navbar-link {
            margin: 5px 0;
          }
          .social-icon {
            margin-top: 15px;
          }
          .navbar-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 20px;
          }
          .vvd {
            width: 80%;
            text-align: center;
          }
        }
      `}</style> */}
    </Router>
  );
};
