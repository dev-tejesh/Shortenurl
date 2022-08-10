import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./myStyles.css";
function BasicExample() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="text-warning fw-bold">
          Shorten-Url
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-fill w-100 ">
            <Nav.Link href="#home" className="text-primary">
              Signup free
            </Nav.Link>
            <Nav.Link href="#link" className="text-primary">
              Login
            </Nav.Link>

            <button type="button" class="btn btn-primary">
              Get a Quote
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
