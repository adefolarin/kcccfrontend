import React from 'react';
import { useState } from 'react';
import { Form, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBible } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'react-bootstrap';
import DateTime from 'react-datetime';
import { CDBAnimation, CDBContainer } from 'cdbreact';

export const Test = () => {

  const [datevalue, setDate] = useState();

  //const weekend = (datevalue) => new Date() <datevalue;

  

  return (
    <div>
      <div>
        <br></br><br></br>
        <CDBContainer>
         <CDBAnimation type="bounce" count={1}>
          <div style={{ marginTop:'50px' }}>
             <image fluid src="images/app.png" thumbnail style={{ width:'90%' }} />
           </div>
         </CDBAnimation>
         </CDBContainer>
      </div>
 
    </div>
  );
}