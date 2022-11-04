import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css";
function NavScrollExample() {
  return (
    <Navbar sticky="top">
      <Container fluid>
        <Navbar.Brand href="#">BLOG</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
             className="justify-content-center"
             style={{ maxHeight: '100px', flex: 1 }}
            navbarScroll
          >
            <Nav.Link href="#action1">HOME</Nav.Link>
            <Nav.Link href="#action2">ABOUT</Nav.Link>
              <Nav.Link href="#action3">CONTACT</Nav.Link>
              <Nav.Link href="#action4">
                WRITE
              </Nav.Link>
              <NavDropdown.Divider />
              <Nav.Link href="#action5">
                LOGOUT
              </Nav.Link>
            
          </Nav>
          <Form className="d-flex"> 
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;