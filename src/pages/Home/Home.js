// VideoBackground.js
import React from 'react';
import { Container, Col, Row, Card, Button  } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                  <p>This is an edu meeting HTML CSS template provided by <Link rel="nofollow" to="https://templatemo.com/page/1" target="_blank">TemplateMo website</Link>. This is a Bootstrap v5.1.3 layout. The video background is taken from Pexels website, a group of young people by <Link rel="nofollow" onTouchEnd="https://www.pexels.com/@pressmaster" target="_blank">Pressmaster</Link>.</p>
                  <div className="main-button-red">
                    <div className="scroll-to-section"><Link to="#contact" className='btn btn-danger'>Join Us Now!</Link></div>
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
        <Col sm={5}>
        <Card style={{ width: '100%' }} className='text-center' id="card">
          <Card.Body>
            <Card.Title>YEAR IN REVIEW</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to="#" class="btn btn-danger" variant="danger" id="btn">Learn More</Link>
          </Card.Body>
        </Card>
        </Col>

        <Col sm={7}>
        <Card style={{ width: '100%' }} className='text-center' id="card">
          <Card.Body>
            <Card.Title>UPCOMING EVENT</Card.Title>
            <Card.Header className='text-primary'>Wednesday Night Bible Study</Card.Header>
            <Card.Text>
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
  </div>
  );
};
