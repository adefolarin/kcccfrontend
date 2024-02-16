import { React, useEffect, useState } from 'react'
import { Container, Col, Row, Card, ButtonToolbar, ButtonGroup, Image, Tab, Nav, InputGroup, Form, Button } from 'react-bootstrap';
import { Link, useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoCamera, faShareNodes, faDownload, faFileAudio, faUser, faLocation, faClock, faPerson, faArrowLeft, faAngleRight, faShare } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios';
import { serverurl } from '../../providers/ServerUrl';
import { SearchFormGroup } from '../../components/Forms/SearchFormGroup';



export const Sermon = () => {


    /********************************************
              GET THE FILE URLS
    *********************************************/
 
    /**********************************************
       GET THE SERMONS FROM THE API
     **********************************************/

    const [sermons, setSermons] = useState([]);


    const fetchSermonData = () => {
        return axios.get(serverurl + "/api/sermonall")
            .then((response) => setSermons(response.data['sermons']));
    };

    useEffect(() => {
        fetchSermonData();
    }, [])



    return (
        <div>

            <div>
                <br></br><br></br>
                <div style={{ position: 'relative' }}>
                    <Image fluid src="images/img3.jpg" alt="Card image" id="bannerimg" />
                    <div id="banneroverlay">
                        <div id="bannerid" className='text-center'>
                            <p id="navhistory">
                                <Link to="#" id="homelink">Home &nbsp; &#60; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                                <Link to="#" className='text-white' id="currentlink">Sermons</Link>
                            </p>
                            <h4>Sermons</h4>
                        </div>
                    </div>
                </div>
            </div>
            <br></br><br></br>
            <div>
                <Container>
                    <Row>
                        <Col md={12}>
                            <Card id="deptcard" className="eventdetailimg">
                                <Card.Img id="" variant="top" src="images/sermonbanner.png" thumbnail />
                            </Card>
                        </Col>
                    </Row>


                    <br></br><br></br>
                    <Row>

                    </Row>
                </Container>
            </div>

            <br></br><br></br>
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
                  <Nav.Item className='tabitems' style={{ display:'none' }}>
                    <Nav.Link eventKey="archived" className='tablink' style={{ color: '#fff' }}>ARCHIVED MESSAGES</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content style={{ marginTop: '20px' }}>
                  <Tab.Pane eventKey="sermon">
                    <SearchFormGroup />

                    <Container>

                    {
              
                       sermons && sermons.length > 0 && sermons.map((sermonData) => {
                      return <Row>
                        <div
                          style={{ borderRadius: '0px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', padding: '20px' }}>
                          <Row>
                            <Col md={4}>
                              <div className=''>
                                <iframe style={{ width: '100%', height: '150px', margin: 'auto' }}  
                                src={sermonData.sermons_file}
                                frameborder="0" 
                                allow="accelerometer; 
                                autoplay; 
                                clipboard-write; 
                                encrypted-media; 
                                gyroscope; 
                                picture-in-picture; 
                                web-share" allowfullscreen>
                                </iframe>
                              </div>
                            </Col>
                            <Col md={4}>
                              <div className='valign'>
                                <div>
                                  <h6 id="bluecolor" className="text-center">{sermonData.sermons_title}</h6>
                                  <p id="bluecolor" className="text-center" style={{ fontSize: '13px' }}>
                                    <FontAwesomeIcon icon={faUser} />
                                    &nbsp;<span style={{ color: '#000', fontWeight: '600' }}>{sermonData.sermons_preacher}</span> &nbsp;


                                    <FontAwesomeIcon icon={faClock} />
                                    &nbsp;<span style={{ color: '#000', fontWeight: '600' }}>{sermonData.sermons_date}</span> &nbsp;

                                    <br></br>
                                    <FontAwesomeIcon icon={faLocation} />
                                    &nbsp;<span style={{ color: '#000', fontWeight: '600' }}>{sermonData.sermons_location}</span>

                                  </p>
                                </div>
                              </div>
                            </Col>
                            <Col md={4}>
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
                       })
                     }
                    </Container>


                  </Tab.Pane>

                  <Tab.Pane eventKey="podcast">
                    {/*<Podcasts podcasts={podcasts}/>*/}
                  </Tab.Pane>
                  <Tab.Pane eventKey="archived">ARCHIVED MESSAGES</Tab.Pane>
                </Tab.Content>
              </Tab.Container>

            </Col>
          </Row>
        </Container>

            <br></br><br></br>



        </div >
    )
}
