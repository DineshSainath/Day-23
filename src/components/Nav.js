import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Button, Container } from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const MyNavbar = () => {
  const [cartItems, setCartItems] = useState(0);

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className="nav-title">
          Start Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#" active>
              Home
            </Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <NavDropdown title="Shop" id="navbarDropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Button className="cartButton " variant="outline-dark">
            <ShoppingCartIcon className="cartIcon" fontSize="small" /> Cart
            <span className="cartItems">
              <strong>{cartItems}</strong>
            </span>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
