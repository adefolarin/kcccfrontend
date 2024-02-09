import { React, useEffect, useState } from 'react'
import { Card, Image } from 'react-bootstrap';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Container, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import { serverurl } from '../providers/ServerUrl';
import './EventDetail.css';

export const EventDetails = () => {

    const search = useLocation().search;
    const eventid = new URLSearchParams(search).get('eventid');

    const eventfileurls = serverurl + "/admin/img/events/";
    const eventgalleryfileurls = serverurl + "/admin/img/eventgalleries/";

    const [eventdetail, setEventDetail] = useState([]);

    const [eventgallery, setEventGallery] = useState([]);

    const fetchEventDetailData = () => {
        return axios.get(serverurl + "/api/event/" + eventid)
            .then((response) => setEventDetail(response.data['eventone']));
    };

    const fetchEventGalleryData = () => {
        return axios.get(serverurl + "/api/event/" + eventid)
            .then((response) => setEventGallery(response.data['eventgallery']));
    };

    useEffect(() => {
        fetchEventDetailData();
        fetchEventGalleryData();
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
                                <Link to="#" className='text-white' id="currentlink">Event Details</Link>
                            </p>
                            <h4>Event Details {eventdetail.events_title}</h4>

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
                                <Card.Img id="eventimg" variant="top" src={eventfileurls + eventdetail.events_file} thumbnail />
                            </Card>
                        </Col>
                    </Row>


                    <br></br><br></br>
                    <Row>

                    </Row>
                </Container>
            </div>

            <br></br>
            <div>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div id="eventdesc">
                                <h4 id="bluecolor">Event Description</h4>
                                <p>
                                    {eventdetail.events_desc}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <br></br>
            <div>
                <Container>
                    <Row>
                        <Col md={6}>
                            <div id="eventgallery">
                                <h4 id="bluecolor">Event Gallery</h4>
                                <p>
                                    Explore the gallery from previous events
                                </p>
                                <Row>
                                {
                                    eventgallery && eventgallery.length > 0 && eventgallery.map((eventGalleryData, index) => {
                                        return <>
                                            <Col md={6}>
                                        
                                                <Card id="deptcard" className="eventgallerylimg">
                                                    <Card.Img id="eventgalleryimg" variant="top" src={eventgalleryfileurls + eventGalleryData.eventgalleries_file} thumbnail />
                                                </Card>
                                            </Col>
                                        </>
                                    })
                                }
                                </Row>

                            </div>
                        </Col>

                        <Col md={6}></Col>
                    </Row>
                </Container>
            </div>

        </div >
    )
}
