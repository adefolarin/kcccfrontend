import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './NavBar.css';

export function NavBar() {
  return (
    <div className="navbar-area" style={{ backgroundColor:'rgba(250,250,250,0.15)' }}>
    <Navbar collapseOnSelect expand="lg" style={{ padding:'20px' }} id='navbar' fixed='top'>
      <Container className='navbarContainer'>
        <Navbar.Brand href="#home" id='navLink'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  style={{ backgroundColor:'#fff' }} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" id='navLink'>Features</Nav.Link>
            <Nav.Link href="#pricing" id='navLink'>Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="navLink">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" id='navLink'>More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" id='navLink'>
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

