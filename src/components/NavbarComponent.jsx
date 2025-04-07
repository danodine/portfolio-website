import ThemeToggle from "./ThemeToggle";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/global.css";

const NavbarComponent = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const elements = ["about", "career", "education", "skills", "contact"];
  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container>
        <Navbar.Brand onClick={() => scrollTo("header")}>
          David Nodine
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {elements.map((item) => (
              <Nav.Link
                key={item}
                className="navbar-link"
                onClick={() => scrollTo(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link className="themeButton">
              <ThemeToggle />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
