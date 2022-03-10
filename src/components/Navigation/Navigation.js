import "./Navigation.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  return (
    <Navbar class="border-bottom" fixed="top" bg="light" variant="light">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#landing">BM</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
