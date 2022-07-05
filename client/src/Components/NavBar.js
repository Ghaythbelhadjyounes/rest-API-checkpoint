import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function NavBar() {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Mern App</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="/"> Home</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="/add">Add</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;
