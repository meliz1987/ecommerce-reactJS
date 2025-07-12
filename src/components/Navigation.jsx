import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";
import "../styles/nav.css";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { useAuthContext } from "../contexts/AuthContext";
import { NavDropdown } from "react-bootstrap";
import { FaShoppingCart, FaUser, FaTools, FaSignInAlt,FaSignOutAlt } from "react-icons/fa";

function Navigation() {
  const { productsCart } = useContext(CartContext);
  const { user, isAdmin, logout } = useAuthContext();

  return (
    <div>
      <Navbar expand="lg" className="mb-3 shadow-sm navbar">
        <Container>
          {/* <Navbar.Brand as={Link} to="/">Pinicrochet</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/productos">
                Productos
              </Nav.Link>
              <Nav.Link as={Link} to="/nosotros">
                Nosotros
              </Nav.Link>
              <Nav.Link as={Link} to="/contacto">
                Contacto
              </Nav.Link>
            </Nav>

            <Nav className="ms-auto align-items-center">
              <Nav.Link as={Link} to="/miCarrito">
                <FaShoppingCart className="me-1" />
                Carrito{" "}
                {productsCart.length > 0 && (
                  <Badge bg="secondary">{productsCart.length}</Badge>
                )}
              </Nav.Link>

              {user && isAdmin && (
                <NavDropdown
                  title={
                    <>
                      <FaTools className="me-1" /> Admin
                    </>
                  }
                  id="admin-nav-dropdown"
                >
                  <NavDropdown.Item as={Link} to="/admin">
                    Panel
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/admin/agregarProductos">
                    Agregar Productos
                  </NavDropdown.Item>
                </NavDropdown>
              )}

              {user && !isAdmin && (
                <Nav.Link as={Link} to="/perfil">
                  <FaUser className="me-1" />
                  Mi perfil
                </Nav.Link>
              )}

              {user ? (
                <>
                  <span className="navbar-text mx-2">
                    {typeof user === "string" ? user : user.email}
                  </span>

                  <Nav.Link onClick={logout} className="text-white">
                    Cerrar sesión{" "}
                    <FaSignOutAlt className="ms-1 text-white animate-icon" />
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link as={Link} to="/login" className="text-white">
                  <FaSignInAlt className="me-1 animate-icon" /> Ingresar
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Header />
    </div>
  );
}

export default Navigation;
