// VideoBackground.js
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Col, Row, Card, ButtonToolbar, ButtonGroup, Image, Tab, Nav, InputGroup, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoCamera, faShareNodes, faDownload, faFileAudio, faUser, faLocation, faClock, faPerson, faArrowLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import { SearchFormGroup } from '../../components/Forms/SearchFormGroup';
import { Departments } from '../../components/Departments';
import { Event } from '../../components/Event';
import { EventCountDownTimer } from '../../components/EventCountDownTimer';
import { SocialMedia } from '../../components/SocialMedia';
import { NavLink } from 'react-bootstrap';
import axios  from 'axios';
import { serverurl } from '../../providers/ServerUrl';
import { Podcasts } from '../../components/Podcasts';


import './Home.css'

export const Home = () => {

  const eventfileurls = serverurl + "/admin/img/events/";
  const deptfileurls = serverurl + "/admin/img/departments/";
  const bannervideofileurl = serverurl + "/storage/admin/videos/banners/";

  const [banner, setBanner] = useState([]);
  const [events, setEvents] = useState([]);
  const [depts, setDepts] = useState([]);
  const [nextevent, setNextEvent] = useState([]);

  const fetchBannerData = () => {
    return axios.get(serverurl + "/api/banner")
    .then((response) => setBanner(response.data));
  };

  const fetchEventsData = () => {
    return axios.get(serverurl+"/api/event")
        .then((response) => setEvents(response.data['events']));
  };

  const fetchNextEventData = () => {
    return axios.get(serverurl + "/api/nextevent")
        .then((response) => setNextEvent(response.data['event']));
  };

  const fetchDeptsData = () => {
    return axios.get(serverurl+"/api/department")
        .then((response) => setDepts(response.data['departments']));
  };


  useEffect(() => {
     fetchBannerData();
     fetchEventsData();
     fetchNextEventData();
     fetchDeptsData();
  },[])

  const navigate = useNavigate();
  const goToAbout = () => {
    navigate('/about');
  }

  /**********************************************
   GET THE PODCAST FROM THE API
  **********************************************/

    const [podcasts, setPodcast] = useState([]);


    const fetchPodcastData = () => {
        return axios.get(serverurl + "/api/podcast")
            .then((response) => setPodcast(response.data['podcasts']));
    };

    useEffect(() => {
        fetchPodcastData();
    }, [])

  return (
    <div>

      {/* Banner */}
      <div expand="lg">
        {/* ***** Main Banner Area Start ***** */}
        <section className="section main-banner" id="top" data-section="section1" expand="lg">
          {
            banner && banner.length > 0 && banner.map((bannerData) => {
              return <>
              <video autoPlay muted loop id="bg-video">
                <source src={bannervideofileurl + bannerData.banner_file} type="video/mp4" />
              </video>
                </>
            })
          }

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
                        <p>

                          <ButtonGroup className="me-2" aria-label="First group">
                            <Link to="#contact" className='btn btn-danger' id="bannerbtn">Welcome Message</Link>
                          </ButtonGroup>
                          <ButtonGroup className="me-2" aria-label="Second group">
                            <Link to="#contact" className='btn btn-danger' id="bannerbtn">Join Us Now!</Link>
                          </ButtonGroup>

                        </p>
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


      {/* Year in Review and Event Clock */}
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
                    Lorem ipsum dolor sit amet. Qui quia exercitationem et dolorem quis et saepe impedit qui voluptas nulla. Ut laboriosam quos et porro necessitatibus sit sint optio quo porro error est quia reiciendis et iusto quia.
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
                  
                    
                    <h5> { nextevent.events_title } </h5>
                    <div>

                      <Row>
                        <Col md={3}>
                          <p className='minical'>
                            <ButtonGroup vertical>
                              <Button style={{ backgroundColor: '#d8d8d8', color: '#135592', fontWeight: '800', border: 'none',height:'50px' }}>{nextevent.events_startdatemonth}</Button>
                              <Button style={{ backgroundColor: '#135592', color: '#fff', fontWeight: '800', border: 'none', borderRadius: '5px', height: '' }}>{nextevent.events_starttime}</Button>
                            </ButtonGroup>
                          </p>
                        </Col>
                        <Col md={8}>
                          <EventCountDownTimer eventcountdown = {nextevent.events_countdown} />
                        </Col>
                      </Row>

                    </div>
                    
                  
                  
                  </Card.Text>
                  <Link to="#" class="btn btn-danger" variant="danger" id="btn">Join Event</Link>
                </Card.Body>
              </Card>
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
                <Col sm={6}>
                  <h5 id="bluecolor">Our Vision</h5>
                  <p>
                    Lorem ipsum dolor sit amet. Qui quia exercitationem et dolorem quis et saepe impedit qui voluptas nulla. Ut laboriosam quos et porro necessitatibus sit sint optio quo porro error est quia reiciendis et iusto quia.
                  </p>
                </Col>
                <Col sm={6}>
                  <div id="homeourmission">
                  <h5 id="bluecolor">Our Mission</h5>
                  <p>
                    Lorem ipsum dolor sit amet. Qui quia exercitationem et dolorem quis et saepe impedit qui voluptas nulla. Ut laboriosam quos et porro necessitatibus sit sint optio quo porro error est quia reiciendis et iusto quia.
                  </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <Link to='/about' reloadDocument className='btn btn-danger' id='btn'>Read More</Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      {/*  Watch and Listen */}
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
                            <Col md={4}>
                              <div className=''>
                                <video controls style={{ width: '100%', height: '200px', margin: 'auto' }}>
                                  <source src="videos/course.mp4" type="video/mp4" />
                                </video>
                              </div>
                            </Col>
                            <Col md={4}>
                              <div className='valign'>
                                <div>
                                  <h6 id="bluecolor" className="text-center">Tranforming Lives Through The Word of God</h6>
                                  <p id="bluecolor" className="text-center" style={{ fontSize: '13px' }}>
                                    <FontAwesomeIcon icon={faUser} />
                                    &nbsp;<span style={{ color: '#000', fontWeight: '600' }}>Bishop Ade Ajala</span> &nbsp;


                                    <FontAwesomeIcon icon={faClock} />
                                    &nbsp;<span style={{ color: '#000', fontWeight: '600' }}>October 8, 2023</span> &nbsp;

                                    <br></br>
                                    <FontAwesomeIcon icon={faLocation} />
                                    &nbsp;<span style={{ color: '#000', fontWeight: '600' }}>Aurora, Denver</span>

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
                    </Container>


                  </Tab.Pane>

                  <Tab.Pane eventKey="podcast">
                    {/*<Podcasts podcasts={podcasts}/>*/}
                  </Tab.Pane>
                  <Tab.Pane eventKey="archived">ARCHIVED MESSAGES</Tab.Pane>
                </Tab.Content>
              </Tab.Container>

              <br></br><br></br>
              <Row style={{ display:'none' }}>
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


      {/* Social Media */}
      <div>
        <SocialMedia />
      </div>


      {/* Sharing Our Faith */}
      <div>
        <br></br><br></br>
        <Container style={{ backgroundColor: '#E1EDF3', padding: '50px' }}>
          <Row>
            <Col md={8}>
              <Row>
                <Col md={4}>
                  <div style={{ width:'130px',margin:'auto'}}>
                    <Image fluid src="images/sharingfaith.jpeg" roundedCircle style={{ width:'100%' }} />
                  </div>
                </Col>
                <Col md={8}>
                  <div id="faithid">
                    <h5 id="bluecolor">Sharing Our Faith</h5>
                    <p>
                      Lorem ipsum dolor sit amet. Qui quia exercitationem et dolorem quis et saepe impedit qui voluptas nulla. Ut laboriosam quos et porro necessitatibus sit sint optio quo porro error est quia reiciendis et iusto quia.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={4}>
              <p style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                <div id="homegivebtnid">
                  <Link to="#" className='btn btn-danger' id="homegivebtn">
                    Give Now
                  </Link>
                </div>
              </p>
            </Col>
          </Row>
        </Container>
      </div>


      {/* Department */}
      <div>
        <Departments depts={depts} />
      </div>



      {/* Support Our Mission */}
      <div>
        <br></br><br></br>
        <Container>
          <div style={{ position: 'relative' }}>
            <Image fluid src="images/img3.jpg" alt="Card image" style={{ width: '100%', height: '270px' }} />
            <div id="overlay" style={{ position: 'absolute', width: '100%', height: '100%', top: '0', bottom: '0', right: '0', left: '0', backgroundColor: 'rgba(0,0,0,0.5)' }}>
              <div id="missionid" className='text-center'>
                <h4>Support Our Mission</h4>
                <p>
                  Lorem ipsum dolor sit amet. Qui quia exercitationem et dolorem quis et saepe impedit qui voluptas nulla. Ut laboriosam quos et porro necessitatibus sit sint optio quo porro error est quia reiciendis et iusto quia.
                </p>
                <p><Link to="" className='btn text-white' id="homegivebtn" >Donate Now</Link></p>
              </div>
            </div>
          </div>
        </Container>
      </div>



      {/* Event */}
      <div>
        <Event event = {events} eventfileurl={eventfileurls} />
      </div>



      {/*   E-STORE   */}
      <div>
        <br></br><br></br>
        <Container style={{ backgroundColor: '#A7C8DD' }} id="storecontainer">
          <Row>
            <Col md={7}>
              <div id="homestoreid">
                <h5 id="bluecolor">Visit Our E-Store</h5>
                <p>
                  Lorem ipsum dolor sit amet. Qui quia exercitationem et dolorem quis et saepe impedit qui voluptas nulla. Ut laboriosam quos et porro necessitatibus sit sint optio quo porro error est quia reiciendis et iusto quia.
                </p>
                <Link to="#" className='btn btn-danger' id="homegivebtn">
                  Explore Now
                </Link>
              </div>
            </Col>
            <Col md={5}>
              <div style={{ display: 'flex', justifyContent: 'end', justifyItems: 'end' }}>
                <Image className='float-end' fluid src="images/estore.png" style={{ width: '100%', objectFit: 'cover',height:'250px' }} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/*  FOOD BANK  */}
      <div>
        <br></br><br></br>
        <Container style={{ backgroundColor: '#E1EDF3' }} id="storecontainer">
          <Row>
            <Col md={5}>
              <div style={{ display: 'flex', justifyContent: 'start', justifyItems: 'start' }}>
                <Image className='float-start' fluid src="images/foodbank.jpeg" style={{ width: '100%', objectFit: 'cover', height:'250px'}} />
              </div>
            </Col>
            <Col md={7}>
              <div id="foodbankid">
                <h5 id="bluecolor">KCCC FOOD BANK</h5>
                <p>
                  Lorem ipsum dolor sit amet. Qui quia exercitationem et dolorem quis et saepe impedit qui voluptas nulla. Ut laboriosam quos et porro necessitatibus sit sint optio quo porro error est quia reiciendis et iusto quia.
                </p>
                <p className='text-right'>
                  <Link to="#" className='btn btn-danger' id="homegivebtn">
                    Learn More
                  </Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>


      {/*  APP DOWNLOAD    */}
      <div>
        <br></br><br></br>
        <Container style={{ backgroundColor: '#E1EDF3', padding: '50px' }}>
          <Row>
            <Col md={6}>
                <div id="appimg">
                  <Image fluid src="images/app.png" thumbnail style={{ width:'90%' }} />
                </div>
            </Col>
            <Col md={6}>
              <div id="downloaddiv">
              <h4 id="bluecolor" className='text-center'>DOWNLOAD THE <br></br> ADE AJALA MINISTRIES<br></br> MOBILE APP</h4>
            
                <div className='text-center'>
                  <ButtonGroup className="me-2" aria-label="First group">
                    <Link to="#" className='btn' id="downloadbtn">
                      <Image src="images/appstore.png" fluid width="286" height="130" />
                    </Link>
                    <Link to="#" className='btn' id="downloadbtn">
                      <Image src="images/playstore.png" fluid  width="286" height="130"/>
                    </Link>
                  </ButtonGroup>

                </div>
              </div>
              
            </Col>
          </Row>
        </Container>
      </div>


    </div>
  );
};
