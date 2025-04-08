import { useState, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import ThemeToggle from "./ThemeToggle";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { getContent } from "../data/getContent";
import "../css/global.css";

const NavbarComponent = () => {
  const { language, setLanguage } = useLanguage();
  const { navElements, navSecondaryElements } = getContent(language);
  const [expanded, setExpanded] = useState(false);
  const { darkMode } = useTheme();
  const collapseRef = useRef();

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    const isMobile = window.innerWidth < 768;

    closeNavbar();

    setTimeout(() => {
      if (element) {
        const yOffset = isMobile ? -50 : -90;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 350);
  };

  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded((prev) => !prev)}
      className={`bg-body-tertiary sticky-top ${darkMode ? "navbar-dark" : ""}`}
    >
      <Container>
        <Navbar.Brand onClick={() => scrollTo("header")}>
          <img
            height="auto"
            width="30"
            src={
              darkMode
                ? "/assets/icons/logo-da.png"
                : "/assets/icons/logo-li.png"
            }
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" ref={collapseRef}>
          <Nav className="me-auto">
            {navElements.map((item) => (
              <Nav.Link
                key={item.key}
                className="navbar-link"
                onClick={() => scrollTo(item.key)}
              >
                {item.value.charAt(0).toUpperCase() + item.value.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="ms-auto d-flex align-items-center">
            <NavDropdown
              title={navSecondaryElements.language}
              id="language-dropdown"
            >
              <NavDropdown.Item
                active={language === "en"}
                onClick={() => {
                  setLanguage("en");
                  closeNavbar();
                }}
              >
                English
              </NavDropdown.Item>
              <NavDropdown.Item
                active={language === "es"}
                onClick={() => {
                  setLanguage("es");
                  closeNavbar();
                }}
              >
                Español
              </NavDropdown.Item>
              <NavDropdown.Item
                active={language === "de"}
                onClick={() => {
                  setLanguage("de");
                  closeNavbar();
                }}
              >
                Deutsch
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="themeButton" onClick={closeNavbar}>
              <ThemeToggle />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
