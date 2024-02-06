import React from 'react'
import { Container, Col, Row, Card, ButtonToolbar, ButtonGroup, Image, Tab, Nav, InputGroup, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoCamera, faShareNodes, faDownload, faFileAudio, faUser, faLocation, faClock, faPerson, faArrowLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

export const Event = () => {
    return (
        <div>
            <br></br><br></br>
            <Container>
                <Row>
                    <Col md={4}><hr style={{ borderTop: '1px solid #848484' }}></hr></Col>
                    <Col md={4}>
                        <h4 id="bluecolor" class='text-center'>Events</h4>
                    </Col>
                    <Col md={4}><hr style={{ borderTop: '1px solid #848484' }}></hr></Col>
                    <br></br><br></br><br></br>
                    <Col md={4}>
                        <Card id="deptcard">
                            <Card.Img variant="top" src="images/event1.jpeg" />
                            <Card.Body className='text-center'>
                                <Card.Title>
                                    <p className='homeminicalevent'>
                                        <ButtonGroup vertical>
                                            <Button style={{ backgroundColor: '#d8d8d8', color: '#135592', fontWeight: '800', border: 'none', height: '50px' }}>Dec 12</Button>
                                            <Button style={{ backgroundColor: '#135592', color: '#fff', fontWeight: '800', border: 'none', borderRadius: '3px', height: '' }}>8:00am</Button>
                                        </ButtonGroup>
                                    </p>
                                    <h6 id="bluecolor">Event Title</h6>
                                </Card.Title>
                                <Card.Text>
                                    <p><Button className="btn btn-danger btn-sm" style={{ backgroundColor: 'red', border: 'none', borderRadius: '0', fontWeight: '600' }}>Ongoing</Button></p>
                                </Card.Text>
                                <Link variant="danger" className='btn btn-danger btn-sm'
                                    style={{ textDecoration: 'none', color: '#135592', border: '1px solid red', borderRadius: '0', backgroundColor: 'transparent' }}>Event Details</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card id="deptcard">
                            <Card.Img variant="top" src="images/event2.jpeg" />
                            <Card.Body className='text-center'>
                                <Card.Title>
                                    <p className='homeminicalevent'>
                                        <ButtonGroup vertical>
                                            <Button style={{ backgroundColor: '#d8d8d8', color: '#135592', fontWeight: '800', border: 'none', height: '50px' }}>Dec 12</Button>
                                            <Button style={{ backgroundColor: '#135592', color: '#fff', fontWeight: '800', border: 'none', borderRadius: '3px', height: '' }}>8:00am</Button>
                                        </ButtonGroup>
                                    </p>
                                    <h6 id="bluecolor">Event Title</h6>
                                </Card.Title>
                                <Card.Text>
                                    <p><Button className="btn btn-danger btn-sm" style={{ backgroundColor: 'red', border: 'none', borderRadius: '0', fontWeight: '600' }}>Ongoing</Button></p>
                                </Card.Text>
                                <Link variant="danger" className='btn btn-danger btn-sm'
                                    style={{ textDecoration: 'none', color: '#135592', border: '1px solid red', borderRadius: '0', backgroundColor: 'transparent' }}>Event Details</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card id="deptcard">
                            <Card.Img variant="top" src="images/event3.jpeg" />
                            <Card.Body className='text-center'>
                                <Card.Title>
                                    <p className='homeminicalevent'>
                                        <ButtonGroup vertical>
                                            <Button style={{ backgroundColor: '#d8d8d8', color: '#135592', fontWeight: '800', border: 'none', height: '50px' }}>Dec 12</Button>
                                            <Button style={{ backgroundColor: '#135592', color: '#fff', fontWeight: '800', border: 'none', borderRadius: '3px', height: '' }}>8:00am</Button>
                                        </ButtonGroup>
                                    </p>
                                    <h6 id="bluecolor">Event Title</h6>
                                </Card.Title>
                                <Card.Text>
                                    <p><Button className="btn btn-danger btn-sm" style={{ backgroundColor: 'red', border: 'none', borderRadius: '0', fontWeight: '600' }}>Ongoing</Button></p>
                                </Card.Text>
                                <Link variant="danger" className='btn btn-danger btn-sm'
                                    style={{ textDecoration: 'none', color: '#135592', border: '1px solid red', borderRadius: '0', backgroundColor: 'transparent' }}>Event Details</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


                <br></br><br></br>
                <Row>
                    <Col md={4}><hr style={{ borderTop: '1px solid #848484' }}></hr></Col>
                    <Col md={4}>
                        <p class="text-center">
                            <Link to="/event" class='text-center' id='bannerbtn' className='btn btn-danger'>More Events</Link>
                        </p>
                    </Col>
                    <Col md={4}><hr style={{ borderTop: '1px solid #848484' }}></hr></Col>
                </Row>
            </Container>
        </div>
    )
}

