// VideoBackground.js
import React from 'react';
import { Container, Col, Row, ButtonGroup, Image, InputGroup, Form, Button  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapLocationDot, faMousePointer } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

import './Footer.css'

export const Footer = () => {
  return (
   <div style={{ marginTop:'20px' }}>
 
    <div style={{ backgroundColor:'#135592', paddingTop:'50px', paddingBottom:'50px'}} id="footer">
    <Container>
      <Row>
        <Col sm={12} md={4}>
        <div id="footercol1">
        <Image src="images/logo.png"  width="150" height="50" fluid />
          <br></br><br></br>
          <div>
              <p>
                Lorem ipsum dolor sit amet. Qui quia exercitationem et dolorem quis et saepe impedit qui voluptas nulla. Ut laboriosam quos et porro necessitatibus sit sint optio quo porro error est quia reiciendis et iusto quia.
              </p>
          </div>

          <div>
             <div>
                <p>
                  <FontAwesomeIcon icon={faMapLocationDot} />
                  &nbsp; 1391, Oswego Street, Aurora CO 80010
                </p>
              </div>
             <div>
                <p>
                <FontAwesomeIcon icon={faPhone} />&nbsp; +1-720-859-1737
                </p>
             </div>
             <div>
                <p>
                <FontAwesomeIcon icon={faEnvelope} />&nbsp; info @kccconline.org
                </p>
              </div>
          </div>

            <div>
               <p>
                      <ButtonGroup className="me-2" aria-label="First group">
                      <Link to="#" className='btn btn-danger' id="footerbtn">
                        <FontAwesomeIcon icon={faFacebook} />
                      </Link>
                      </ButtonGroup>
                      <ButtonGroup className="me-2" aria-label="Second group">
                      <Link to="#" className='btn btn-danger' id="footerbtn">
                        <FontAwesomeIcon icon={faInstagram} />
                      </Link>
                      </ButtonGroup>
                      <ButtonGroup className="me-2" aria-label="Second group">
                      <Link to="#" className='btn btn-danger' id="footerbtn">
                        <FontAwesomeIcon icon={faTwitter} />
                      </Link>
                      </ButtonGroup>
                      <ButtonGroup className="me-2" aria-label="Second group">
                      <Link to="#" className='btn btn-danger' id="footerbtn">
                        <FontAwesomeIcon icon={faYoutube} />
                      </Link>
                      </ButtonGroup>
              
                  </p>
            </div>
          </div>
        </Col>

        <Col sm={12} md={4}>
           <div id="quicklinks">
              <h5 className='text-center'>QUICK LINKS</h5>
           </div>
           <br></br>
           <div className='' id="footerlinks">
              <Row>
                 <Col sm={6}>
                    <p><Link to="#" id="link">Live Service</Link></p>
                    <p><Link to="#" id="link">Our Events</Link></p>
                    <p><Link to="#" id="link">E Store</Link></p>
                    <p><Link to="#" id="link">Departments</Link></p>
                    <p><Link to="#" id="link">Year In Review</Link></p>
                    <p><Link to="#" id="link">Give</Link></p>
                 </Col>
                 <Col sm={6}>
                   <p><Link to="#" id="link">Welcome Message</Link></p>
                   <p><Link to="#" id="link">Our Mission</Link></p>
                   <p><Link to="#" id="link">Food Bank</Link></p>
                   <p><Link to="#" id="link">Sermons</Link></p>
                   <p><Link to="#" id="link">Podcasts</Link></p>
                   <p><Link to="#" id="link">Donate</Link></p>
                 </Col>
              </Row>
           </div>
        </Col>

        <Col sm={12} md={4}>
           <div id="letterid">
              <h5 className='text-center'>NEWS LETTER</h5>
              <br></br>
              <p>
                Sign up to newsletter to stay updated on all news and events at KCCC. Email updates on new publications, announcements and lots more. We promise we won't spam your box.
              </p>
              <br></br>
              <p>
                <InputGroup size='lg'>
                <Form.Control
                  placeholder="Email Address"
                  aria-label="Email Address"
                  style={{ borderRadius:'0', fontSize:'14px' }} />
                <Button class="btn btn-danger" style={{ backgroundColor:'red', color:'#fff', borderRadius:'0', border:'none' }}>
                   <FontAwesomeIcon icon={faMousePointer} />
                </Button>
                </InputGroup>
               </p>
           </div>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
            <p className='text-center' style={{ fontSize:'13px' }}>
               Copyright  &copy; KCCC 2024. All Right Reserved.
            </p>
        </Col>
      </Row>

    </Container>
  </div>


  </div>
  );
};
