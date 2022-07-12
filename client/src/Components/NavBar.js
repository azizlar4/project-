import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand
            href="/"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              alt=""
              src="https://imgur.com/FU2pXsi.png"
              width="60"
              height="90"
              className="d-inline-block align-top"
            />

            <h4 style={{ marginLeft: "15px", fontFamily: "-moz-initial" }}>
              Fine Wine
            </h4>
          </Navbar.Brand>
          <Form className="d-flex">
            <FormControl
            style={{width:"450px"}}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
