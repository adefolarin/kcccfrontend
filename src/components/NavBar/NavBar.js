import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row, Col, Image, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import axios  from 'axios';
import { serverurl } from '../../providers/ServerUrl';

import './NavBar.css';

export function NavBar() {

  const [mynavbar, setMyNavBar] = useState(false);
  const [news, setNews] = useState([])


  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setMyNavBar(true);
    } else {
      setMyNavBar(false);
    }
  }


  window.addEventListener('scroll', changeBackground);

  const fetchNewsData = () => {
    return axios.get(serverurl+"/api/news")
        .then((response) => setNews(response.data['news']));
  };

  useEffect(() => {
    fetchNewsData();

 },[])

  return (

    <>
      <div className="sub-header" id="sub-header">
        <Container>
          <Row>
            <Col sm={8}>
              <Carousel>
              { news && news.length > 0 && news.map((newsData) => {
                return <Carousel.Item>
                  <p style={{ color: '#fff', margin: '0px' }} id="subheadernews">{ newsData.news_title }</p>
                </Carousel.Item>
               })
              }
              </Carousel>



            </Col>

            <Col sm={4}>
              <p style={{ margin: '0px' }} id="subheaderlink">
               <ButtonGroup className="me-2" aria-label="First group">
                  <Link to="/signup" className='btn btn-danger' id="subheaderbtn" reloadDocument>Sign UP</Link>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="First group">
                  <Link to="/news" className='btn btn-danger' id="subheaderbtn" reloadDocument>News</Link>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Second group">
                  <Link to="/resources" className='btn btn-danger' id="subheaderbtn" reloadDocument>Resources</Link>
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
              <Image fluid src={mynavbar ? "images/logoblack.png" : "images/logowhite.png"}
                width="220" height="120" id="logo"
                alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" id='mynavbartoggle' />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" id="me-auto">
                <Nav.Link href="/" className='navLink' id="navLink">Home</Nav.Link>
                <Nav.Link href="/about" className='navLink' id="navLink">About</Nav.Link>
                <Nav.Link href="/sermons" className='navLink' id="navLink">Sermons</Nav.Link>
                <Nav.Link href="/departments" className='navLink' id="navLink">Departments</Nav.Link>
                <Nav.Link href="/events" className='navLink' id="navLink">Events</Nav.Link>
                <Nav.Link href="/livestream" className='navLink' id="navLink">Livestream</Nav.Link>
                <Nav.Link href="/podcasts" className='navLink' id="navLink">Podcasts</Nav.Link>
                <Nav.Link href="/donation" className='navLink' id="navLink">Donation</Nav.Link>
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
               
                  <Nav.Link href="/give" className='btn btn-danger' style={{ borderRadius: '0', backgroundColor: 'red', fontWeight: '700', fontSize: '20px', color:'#fff' }} id="givenavlink">GIVE</Nav.Link>
              
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

