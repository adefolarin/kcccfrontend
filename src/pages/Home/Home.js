// VideoBackground.js
import React from 'react';
import { Container, Col, Row, Card, ButtonToolbar, ButtonGroup, Image, Tab, Nav, InputGroup, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoCamera, faShareNodes, faDownload, faFileAudio, faUser, faLocation, faClock, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { SearchFormGroup } from '../../components/Forms/SearchFormGroup';


import './Home.css'

export const Home = () => {
  return (
    <div>
      <div expand="lg">
        {/* ***** Main Banner Area Start ***** */}
        <section className="section main-banner" id="top" data-section="section1" expand="lg">
          <video autoPlay muted loop id="bg-video">
            <source src="videos/aam.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay header-text">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="caption">
                    <h2>WELCOME TO KCCC</h2>
                    <h6>KINGDOM CONNECTION CHRISTIAN CENTER</h6>
                    <p>Lorem ipsum dolor sit amet. Qui quia exercitationem et dolorem quis et saepe impedit qui voluptas nulla. Ut laboriosam quos et porro necessitatibus sit sint optio quo porro error est quia reiciendis et iusto quia.</p>
                    <div className="main-button-red">
                      <div className="scroll-to-section">
                        <ButtonToolbar aria-label="Toolbar with button groups">
                          <ButtonGroup className="me-2" aria-label="First group">
                            <Link to="#contact" className='btn btn-danger' id="bannerbtn">Welcome Message</Link>
                          </ButtonGroup>
                          <ButtonGroup className="me-2" aria-label="Second group">
                            <Link to="#contact" className='btn btn-danger' id="bannerbtn">Join Us Now!</Link>
                          </ButtonGroup>
                        </ButtonToolbar>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Main Banner Area End ***** */}

      </div>


      <div>
        <Container style={{ position: 'relative' }}>
          <Row>
            <Col sm={12} md={5}>
              <Card style={{ width: '100%' }} className='text-center' id="homecard">
                <Card.Body>
                  <Card.Title>
                    <h5 id="bluecolor">YEAR IN REVIEW</h5>
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Link to="#" class="btn btn-danger" variant="danger" id="btn">Learn More</Link>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={12} md={7}>
              <Card style={{ width: '100%' }} className='text-center' id="homecard2">
                <Card.Body>
                  <Card.Title>
                    <h5 id="bluecolor">UPCOMING EVENT</h5>
                  </Card.Title>
                  <Card.Text>
                    <h6>Wednesday Night Bible Study</h6>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Link to="#" class="btn btn-danger" variant="danger" id="btn">Join Event</Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="sectionmargin">
        <Container>
          <Row>
            <Col sm={6}>
              <Image src="images/img1.jpg" thumbnail fluid style={{ width: '100%' }} />
            </Col>


            <Col sm={6}>
              <Row>
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
                <Col sm={6}>
                  <h5 id="bluecolor">Our Vision</h5>
                  <p>
                    Lorem ipsum dolor sit amet. Qui quia exercitationem et dolorem quis et saepe impedit qui voluptas nulla. Ut laboriosam quos et porro necessitatibus sit sint optio quo porro error est quia reiciendis et iusto quia.
                  </p>
                </Col>
                <Col sm={6}>
                  <h5 id="bluecolor">Our Mission</h5>
                  <p>
                    Lorem ipsum dolor sit amet. Qui quia exercitationem et dolorem quis et saepe impedit qui voluptas nulla. Ut laboriosam quos et porro necessitatibus sit sint optio quo porro error est quia reiciendis et iusto quia.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <Link to="/about" className='btn btn-danger' id='btn'>Read More</Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>


      <div id="sectionmargin">
        <Container>
          <Row>
            <Col sm={4}><hr style={{ borderTop: '1px solid #848484' }}></hr></Col>
            <Col sm={4}>
              <h4 id="bluecolor" class='text-center'>Watch & Listen</h4>
            </Col>
            <Col sm={4}><hr style={{ borderTop: '1px solid #848484' }}></hr></Col>
            <br></br><br></br><br></br>

            <Col sm={12}>
              <Tab.Container id="mytabs" defaultActiveKey="sermon" className="mytabs">
                <Nav fill variant="tabs">
                  <Nav.Item className='tabitems'>
                    <Nav.Link eventKey="sermon" className='tablink' style={{ color: '#fff' }}>SERMONS</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className='tabitems'>
                    <Nav.Link eventKey="podcast" className='tablink' style={{ color: '#fff' }}>PODCASTS</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className='tabitems'>
                    <Nav.Link eventKey="archived" className='tablink' style={{ color: '#fff' }}>ARCHIVED MESSAGES</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content style={{ marginTop: '20px' }}>
                  <Tab.Pane eventKey="sermon">
                    <SearchFormGroup />

                    <Container>
                      <Row>
                        <div
                          style={{ borderRadius: '0px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', padding: '20px' }}>
                          <Row>
                            <Col sm={4}>
                              <div className=''>
                                <video controls style={{ width: '100%', height: '200px', margin: 'auto' }}>
                                  <source src="videos/course.mp4" type="video/mp4" />
                                </video>
                              </div>
                            </Col>
                            <Col sm={4}>
                              <div className='valign'>
                                <div>
                                  <h6 id="bluecolor" className="text-center">Tranforming Lives Through The Word of God</h6>
                                  <p id="bluecolor" className="text-center" style={{ fontSize: '12px' }}>
                                    <FontAwesomeIcon icon={faUser} />
                                    &nbsp;<span style={{ color: '#000', fontWeight: '600' }}>Bishop Ade Ajala</span> &nbsp;


                                    <FontAwesomeIcon icon={faClock} />
                                    &nbsp;<span style={{ color: '#000', fontWeight: '600' }}>October 8, 2023</span> &nbsp;


                                    <FontAwesomeIcon icon={faLocation} />
                                    &nbsp;<span style={{ color: '#000', fontWeight: '600' }}>Aurora, Denver</span>

                                  </p>
                                </div>
                              </div>
                            </Col>
                            <Col sm={4}>
                              <div className='valign'>
                                <p>
                                  <ButtonGroup className="me-2" aria-label="First group">
                                    <Link to="#" className='btn btn-danger' id="vidbtn">
                                      <FontAwesomeIcon icon={faVideoCamera} />
                                    </Link>
                                  </ButtonGroup>
                                  <ButtonGroup className="me-2" aria-label="Second group">
                                    <Link to="#" className='btn btn-danger' id="vidbtn">
                                      <FontAwesomeIcon icon={faFileAudio} />
                                    </Link>
                                  </ButtonGroup>
                                  <ButtonGroup className="me-2" aria-label="Second group">
                                    <Link to="#" className='btn btn-danger' id="vidbtn">
                                      <FontAwesomeIcon icon={faDownload} />
                                    </Link>
                                  </ButtonGroup>
                                  <ButtonGroup className="me-2" aria-label="Second group">
                                    <Link to="#" className='btn btn-danger' id="vidbtn">
                                      <FontAwesomeIcon icon={faShareNodes} />
                                    </Link>
                                  </ButtonGroup>

                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Row>
                    </Container>


                  </Tab.Pane>

                  <Tab.Pane eventKey="podcast">PODCASTS</Tab.Pane>
                  <Tab.Pane eventKey="archived">ARCHIVES MESSAGES</Tab.Pane>
                </Tab.Content>
              </Tab.Container>
              
              <br></br><br></br>
              <Row>
                <Col sm={4}><hr style={{ borderTop: '1px solid #848484' }}></hr></Col>
                <Col sm={4}>
                  <p class="text-center">
                     <Link to="/sermons" class='text-center' id='bannerbtn' className='btn btn-danger'>More Sermons</Link>
                  </p>
                </Col>
                <Col sm={4}><hr style={{ borderTop: '1px solid #848484' }}></hr></Col>
              </Row>

            </Col>
          </Row>
        </Container>
      </div>


    </div>
  );
};
