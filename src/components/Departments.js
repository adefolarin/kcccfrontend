import React from 'react'
import { Container, Col, Row, Card, ButtonToolbar, ButtonGroup, Image, Tab, Nav, InputGroup, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoCamera, faShareNodes, faDownload, faFileAudio, faUser, faLocation, faClock, faPerson, faArrowLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

export const Departments = () => {
    return (
        <div>
            <div>
                <br></br><br></br>
                <Container>
                    <Row>
                        <Col sm={4}><hr style={{ borderTop: '1px solid #848484' }}></hr></Col>
                        <Col sm={4}>
                            <h4 id="bluecolor" class='text-center'>Our Departments</h4>
                        </Col>
                        <Col sm={4}><hr style={{ borderTop: '1px solid #848484' }}></hr></Col>

                        <Col sm={12}>
                            <div>
                                <br></br>
                                <Row>
                                    <Col sm={4}>
                                        <Card id="deptcard">
                                            <Card.Title>
                                                <div className='text-center' id="bluecolor">
                                                    <button className='btn' style={{ backgroundColor: '#135592', color: '#fff', borderRadius: '50%', marginTop: '10px', marginBottom: '10px' }}><FontAwesomeIcon icon={faPerson} /></button>
                                                    <h5>Men's Departments</h5>
                                                </div>
                                            </Card.Title>
                                            <Card.Body>
                                                <div className='text-center' style={{ marginTop: '-20px' }}>
                                                    <p>
                                                        Lorem ipsum dolor sit amet. Qui quia exercitationem et dolorem quis et saepe impedit qui voluptas nulla. Ut laboriosam quos et porro necessitatibus sit sint optio quo porro error est quia reiciendis et iusto quia.
                                                    </p>
                                                    <Link to="" style={{ textDecoration: 'none', color: 'red' }}>
                                                        Learn More <FontAwesomeIcon icon={faAngleRight} />
                                                    </Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={4}>
                                        <Card id="deptcard">
                                            <Card.Title>
                                                <div className='text-center' id="bluecolor">
                                                    <button className='btn' style={{ backgroundColor: '#135592', color: '#fff', borderRadius: '50%', marginTop: '10px', marginBottom: '10px' }}><FontAwesomeIcon icon={faPerson} /></button>
                                                    <h5>Men's Departments</h5>
                                                </div>
                                            </Card.Title>
                                            <Card.Body>
                                                <div className='text-center' style={{ marginTop: '-20px' }}>
                                                    <p>
                                                        Lorem ipsum dolor sit amet. Qui quia exercitationem et dolorem quis et saepe impedit qui voluptas nulla. Ut laboriosam quos et porro necessitatibus sit sint optio quo porro error est quia reiciendis et iusto quia.
                                                    </p>
                                                    <Link to="" style={{ textDecoration: 'none', color: 'red' }}>
                                                        Learn More <FontAwesomeIcon icon={faAngleRight} />
                                                    </Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={4}>
                                        <Card id="deptcard">
                                            <Card.Title>
                                                <div className='text-center' id="bluecolor">
                                                    <button className='btn' style={{ backgroundColor: '#135592', color: '#fff', borderRadius: '50%', marginTop: '10px', marginBottom: '10px' }}><FontAwesomeIcon icon={faPerson} /></button>
                                                    <h5>Men's Departments</h5>
                                                </div>
                                            </Card.Title>
                                            <Card.Body>
                                                <div className='text-center' style={{ marginTop: '-20px' }}>
                                                    <p>
                                                        Lorem ipsum dolor sit amet. Qui quia exercitationem et dolorem quis et saepe impedit qui voluptas nulla. Ut laboriosam quos et porro necessitatibus sit sint optio quo porro error est quia reiciendis et iusto quia.
                                                    </p>
                                                    <Link to="" style={{ textDecoration: 'none', color: 'red' }}>
                                                        Learn More <FontAwesomeIcon icon={faAngleRight} />
                                                    </Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
