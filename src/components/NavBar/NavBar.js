import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavbarBrand } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <NavbarBrand>
          <Link className="nav-link" to="/">
            Arte y Mecha
          </Link>
        </NavbarBrand>
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
          <Link to={"/cart"}>
            <CartWidget />
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
