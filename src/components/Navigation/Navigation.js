import "./Navigation.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Fade from 'react-reveal/Fade'

function Navigation() {
  return (
    <div className='navdiv'>
      <Navbar className='nav shadow-sm' fixed="top" variant='dark'>
        <Container>
          <Nav className="ms-auto">
            <Fade top>
              <Nav.Link href="#about">About</Nav.Link>
            </Fade>
            <Fade top delay={100}>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Fade>
            <Fade top delay={200}>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Fade>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
