import React from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">React App, using react-bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contacts">Contacts</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link> */}
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
              <Link className="nav-link" to="/contacts">
                Contacts
              </Link>
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
