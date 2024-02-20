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
import { apiKey } from '../../providers/ServerUrl';
import { servicechannelid } from '../../providers/ServerUrl';



export const LiveStream = () => {


    /********************************************
              GET THE FILE URLS
    *********************************************/
 
    /**********************************************
       GET THE SERMONS FROM THE API
     **********************************************/

    const [sermons, setSermons] = useState([]);


    const fetchSermonData = () => {
        return axios.get('https://www.googleapis.com/youtube/v3/search?key=' 
        + apiKey + '&channelId=' + servicechannelid + '&part=snippet,id&maxResults=50&order=date')
            .then((response) => setSermons(response.data['items']));

    };

    useEffect(() => {
        fetchSermonData();

        console.log(sermons);
    }, [])

    const OpenVideo = () =>  {

    }



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
                                <Link to="#" className='text-white' id="currentlink">Live Service</Link>
                            </p>
                            <h4>Live Service</h4>
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
                            <iframe style={{ width: '100%', height: '500px', margin: 'auto' }}
                                    src="https://www.youtube.com/embed/live_stream?channel=UC_8_w-pM9yJXpqjMJguouLw"
                                    frameborder="0"
                                    allow="accelerometer; 
                                    autoplay; 
                                    clipboard-write; 
                                    encrypted-media; 
                                    gyroscope; 
                                    picture-in-picture; 
                                    web-share" allowfullscreen>
                               </iframe>
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
              <h4 id="bluecolor" class='text-center'>Archived Messages</h4>
            </Col>
            <Col sm={4}><hr style={{ borderTop: '1px solid #848484' }}></hr></Col>
            <br></br><br></br><br></br>

            <Col sm={12}>
                    {/*<SearchFormGroup />*/}

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
                                    src={"https://www.youtube.com/embed/" + sermonData.id.videoId}
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
                                  <h6 id="bluecolor" className="text-center">{sermonData.snippet.title }</h6>
                                  <p id="bluecolor" className="text-center" style={{ fontSize: '13px' }}>

                                    <FontAwesomeIcon icon={faClock} />
                                    &nbsp;<span style={{ color: '#000', fontWeight: '600' }}>{sermonData.snippet.publishedAt}</span> &nbsp;

                                  </p>
                                </div>
                              </div>
                            </Col>
                            <Col md={4}>
                              <div className='valign'>
                                <p>
                                  <ButtonGroup className="me-2" aria-label="First group">
                                    <Link to={"https://www.youtube.com/embed/" + sermonData.id.videoId} className='btn btn-danger' id="vidbtn" reloadDocument >
                                      <FontAwesomeIcon icon={faVideoCamera} />
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


            </Col>
          </Row>
        </Container>

            <br></br><br></br>



        </div >
    )
}
