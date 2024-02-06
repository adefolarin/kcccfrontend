import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Button } from 'react-bootstrap';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBible } from '@fortawesome/free-solid-svg-icons';
import { SocialMedia } from '../../components/SocialMedia';
import { Card } from 'react-bootstrap';


export const About = () => {
  return (
    <div>

      <div>
        <br></br><br></br>
        <div style={{ position: 'relative' }}>
          <Image fluid src="images/img3.jpg" alt="Card image" id="bannerimg" />
          <div id="banneroverlay">
            <div id="bannerid" className='text-center'>
              <p id="navhistory">
                <Link to="" id="homelink">Home &nbsp; &#60; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                <Link to="" className='text-white' id="currentlink">About Us</Link>
              </p>
              <h4>About Us</h4>

            </div>
          </div>
        </div>
      </div>
      <br></br><br></br>
      <div>
        <Container>
          <Row>
            <div
              style={{ borderRadius: '0px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', padding: '20px' }}>
              <Row>
                <Col md={12} id="aboutvidcol">
                  <div className='' id="video">
                    <video controls style={{ width: '100%', height: '100%', margin: 'auto' }}>
                      <source src="videos/course.mp4" type="video/mp4" />
                    </video>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </div>

      <br></br><br></br>
      <div>
        <Container>
          <Row>
            <Col md={12}>
              <div id="welcome">
                <h4 id="bluecolor">WELCOME MESSAGE</h4>
                <p>
                  Lorem ipsum dolor sit amet. Qui quia exercitationem et dolorem quis et saepe impedit qui voluptas nulla. Ut laboriosam quos et porro necessitatibus sit sint optio quo porro error est quia reiciendis et iusto quia.
                </p>

                <p>
                  Lorem ipsum dolor sit amet. Qui quia exercitationem et dolorem quis et saepe impedit qui voluptas nulla. Ut laboriosam quos et porro necessitatibus sit sint optio quo porro error est quia reiciendis et iusto quia.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/*  About  */}
      <div id="sectionmargin" className='homeabout'>
        <Container>
          <Row>
            <Col md={5}>
              <Image src="images/about.png" thumbnail fluid id="homeaboutimg" />
            </Col>
            <Col md={7}>
              <Row>
                <div style={{ marginTop: '20px' }}></div>
                <Col sm={12}>
                  <h5 id="bluecolor" className='aboutkccc'>About KCCC</h5>
                  <h6>The Wealthy Place Where Champions Are Raised</h6>
                  <p>
                    Lorem ipsum dolor sit amet. Qui quia exercitationem et dolorem quis et saepe impedit qui voluptas nulla. Ut laboriosam quos et porro necessitatibus sit sint optio quo porro error est quia reiciendis et iusto quia.
                  </p>
                </Col>
              </Row>
              <Row>
                <div style={{ marginTop: '20px' }}></div>
                <Col sm={12}>
                  <h5 id="bluecolor">
                    <Button style={{ borderRadius: '50px', backgroundColor: 'red', border: 'none' }}>
                      <FontAwesomeIcon icon={faHeart} style={{ color: '#fff', fontSize: '14px' }} />

                    </Button> &nbsp; &nbsp; Our Vision
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet. Qui quia exercitationem et dolorem quis et saepe impedit qui voluptas nulla. Ut laboriosam quos et porro necessitatibus sit sint optio quo porro error est quia reiciendis et iusto quia.
                  </p>
                </Col>
                <Col sm={12}>
                  <div id="homeourmission">
                    <h5 id="bluecolor">
                      <Button style={{ borderRadius: '50px', backgroundColor: 'red', border: 'none' }}>
                        <FontAwesomeIcon icon={faBible} style={{ color: '#fff', fontSize: '14px' }} />

                      </Button> &nbsp; &nbsp; Our Mission
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet. Qui quia exercitationem et dolorem quis et saepe impedit qui voluptas nulla. Ut laboriosam quos et porro necessitatibus sit sint optio quo porro error est quia reiciendis et iusto quia.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      <br></br>
      <div>
        <SocialMedia />
      </div>

      <br></br>
      <div>
        <Container>
          <Row>
            <Col md={4}><hr style={{ borderTop: '1px solid #848484' }}></hr></Col>
            <Col md={4}>
              <h4 id="bluecolor" class='text-center'>
                <span style={{ color: 'red' }}>MEET THE</span> <br></br>CHURCH PASTORS
              </h4>
            </Col>
            <Col md={4}><hr style={{ borderTop: '1px solid #848484' }}></hr></Col>
            <br></br><br></br><br></br><br></br>
            <Col md={4} id="pastorcol">
              <Card id="pastorcard">
                <Card.Img variant="top" src="images/pastor1.jpeg" id="pastorimg" />
                <Card.Body className='text-center'>

                  <Card.Text>
                    <p>Pastor</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} id="pastorcol">
              <Card id="pastorcard">
                <Card.Img variant="top" src="images/pastor2.jpeg" id="pastorimg" />
                <Card.Body className='text-center'>

                  <Card.Text>
                    <p>Pastor</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} id="pastorcol">
              <Card id="pastorcard">
                <Card.Img variant="top" src="images/pastor1.jpeg" id="pastorimg" />
                <Card.Body className='text-center'>

                  <Card.Text>
                    <p>Pastor</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        </Container>
      </div>
      <br></br><br></br>

    </div>
  )
}
