import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

class MyNavBar extends React.Component {
  render() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://img.freepik.com/vettori-premium/libri-volanti-e-cartoni-accatastati_18591-47926.jpg?ga=GA1.1.1037142912.1719244743&semt=ais_user"
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">Book Space </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Browse</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">{this.props.Fantasy}Fantasy</NavDropdown.Item>
                <NavDropdown.Item href="#">{this.props.Hystory}Hystory</NavDropdown.Item>
                <NavDropdown.Item href="#">{this.props.Horror}Horror</NavDropdown.Item>
                <NavDropdown.Item href="#">{this.props.Romance}Romance</NavDropdown.Item>
                <NavDropdown.Item href="#">{this.props.Scifi}Scifi</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default MyNavBar;
