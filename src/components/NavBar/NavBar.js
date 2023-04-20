import CartWidget from "../CartWidget/CartWidget";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Arte y Mecha</Navbar.Brand>
        <img src="/public/img/Arte.png" alt="logo" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Velas aromáticas</Nav.Link>
            <Nav.Link href="#pricing">Difusores</Nav.Link>
            <Nav.Link href="#pricing">Inciensos</Nav.Link>
          </Nav>
          <Nav>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
