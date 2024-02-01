import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row, Col, Image, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './NavBar.css';


export function NavBar() {

  const [mynavbar, setMyNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setMyNavBar(true);
    } else {
      setMyNavBar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (

    <>
      <div className="sub-header">
        <Container>
          <Row>
            <Col sm={8}>
              <p style={{ color: '#fff', margin: '0px' }} id="subheadernews">News content comes here</p>
            </Col>

            <Col sm={4}>
              <p style={{ margin: '0px' }} id="subheaderlink">
                <ButtonGroup className="me-2" aria-label="First group">
                  <Link to="/news" className='btn btn-danger' id="subheaderbtn">News</Link>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Second group">
                  <Link to="/resources" className='btn btn-danger' id="subheaderbtn">Resources</Link>
                </ButtonGroup>
              </p>
            </Col>
          </Row>
        </Container>
      </div>


      <div className="navbar-area">
        <Navbar collapseOnSelect expand="lg" style={{ padding: '20px' }}
          className={mynavbar ? 'mynavbar myactive' : 'mynavbar'} fixed='top'>
          <Container className='navbarContainer'>
            <Navbar.Brand href="/">
              <Image fluid src="images/logo.png"
                width="150" height="50"
                alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ backgroundColor: '#fff' }} />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/" className='navLink'>Home</Nav.Link>
                <Nav.Link href="/about" className='navLink'>About</Nav.Link>
                <Nav.Link href="/sermon" className='navLink'>Sermons</Nav.Link>
                <Nav.Link href="/derpmartment" className='navLink'>Departments</Nav.Link>
                <Nav.Link href="/events" className='navLink'>Events</Nav.Link>
                <Nav.Link href="/livestream" className='navLink'>Livestream</Nav.Link>
                <Nav.Link href="/podcast" className='navLink'>Podcasts</Nav.Link>
                <Nav.Link href="/donation" className='navLink'>Donation</Nav.Link>
                <NavDropdown title="Dropdown" className="navLink" style={{ display: 'none' }}>
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
                <Nav.Link>
                  <Link to="/give" className='btn btn-danger' style={{ borderRadius: '0', backgroundColor: 'red', fontWeight: '700', fontSize: '20px' }}>Give</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

