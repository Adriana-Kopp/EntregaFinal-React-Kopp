import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Arte y Mecha</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/category/Velas aromáticas">
              Velas aromáticas
            </Link>
            <Link className="nav-link" to="/category/Difusores">
              Difusores
            </Link>
            <Link className="nav-link" to="/category/Piedras Energéticas">
              Piedras Energéticas
            </Link>
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
