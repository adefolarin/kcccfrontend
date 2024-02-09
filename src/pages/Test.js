import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Image } from 'react-bootstrap';
import { serverurl } from '../providers/ServerUrl';


export const Test = () => {

    const [nextevent, setNextEvent] = useState([]);
    const [events, setEvents] = useState([]);

    const eventfileurl = serverurl + "/admin/img/events/";
    const videofileurl = serverurl + "/storage/admin/videos/banners/";

    const fetchNextEventData = () => {
        return axios.get(serverurl + "/api/nextevent" )
            .then((response) => setNextEvent(response.data));
    };

    const fetchEventsData = () => {
        return axios.get(serverurl+"/api/event")
            .then((response) => setEvents(response.data));
    };

    useEffect(() => {
        //fetchNextEventData();
        fetchEventsData();
        fetchNextEventData();
        
    }, [])


  


    return (
        <div>

         <div>
           {
           }
        </div>

        </div>
    )
}

