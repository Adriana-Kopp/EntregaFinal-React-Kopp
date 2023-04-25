import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Arte y Mecha</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink>
              <Link to="/category/Velas aromáticas">Velas aromáticas</Link>
            </NavLink>
            <NavLink>
              <Link to="/category/Difusores">Difusores</Link>
            </NavLink>
            <NavLink>
              <Link to="/category/Piedras Energéticas">
                Piedras Energéticas
              </Link>
            </NavLink>
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
