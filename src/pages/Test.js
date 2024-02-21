import React from 'react';
import { useState } from 'react';
import { Form, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBible } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'react-bootstrap';
import DateTime from 'react-datetime';

export const Test = () => {

  const [datevalue, setDate] = useState();

  //const weekend = (datevalue) => new Date() <datevalue;

  

  return (
    <div>
      <div>
        <br></br><br></br>
        <div style={{ position: 'relative' }}>
          <Image fluid src="images/img3.jpg" alt="Card image" id="bannerimg" />
          <div id="banneroverlay">
            <div id="bannerid" className='text-center'>
              <p id="navhistory">
                <Link to="" id="homelink">Home &nbsp; &#60; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                <Link to="" className='text-white' id="currentlink">Testing Page</Link>
              </p>
              <h4>Testing Page</h4>

            </div>
          </div>
        </div>
      </div>
       <div style={{ marginTop:'100px' }} className='p-5'>
  
        <Form>
        <label for="mydate"></label>
        <Form.Control
          type='date' onChange={(e) => setDate(e.target.value)} id="mydate" name='mydate' placeholder='Date'/>

          </Form>
      </div>

      <p>{ datevalue }</p>
    </div>
  );
}