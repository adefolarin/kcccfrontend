import { React, useEffect, useState } from 'react'
import { Card, Image, InputGroup } from 'react-bootstrap';
import { Link, useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { Container, Col, Row, Button, ButtonGroup, ButtonToolbar, Table, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoCamera, faShareNodes, faDownload, faFileAudio, faUser, faLocation, faClock, faPerson, faArrowLeft, faAngleRight, faBook, faMessage } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faMapLocationDot, faMapLocation, faAddressCard, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { serverurl } from '../../providers/ServerUrl';
//import ReactDOM from "react-dom";

import { useSignal } from '@preact/signals-react';

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


export const Donation = () => {


     /**********************************************
       GET GIVING CATEGORY DATA FROM THE API
     **********************************************/

     const [donationcategory, setDonationsCategory] = useState();


    const fetchDonationCategoryData = () => {
        return axios.get(serverurl + "/api/donationcategory")
            .then((response) => setDonationsCategory(response.data['donationcategories']));

    };

    useEffect(() => {
        fetchDonationCategoryData();
    }, [])


    /**********************************************
       POST CONTACT FORM DATA TO THE API
     **********************************************/
       const [show, setShow] = useState(false);
       const [success, setSuccess] = useState(false);
       const [errormessages, setErrorMessages] = useState('');
       const [orderid, setOrderId] = useState(false);
   
       const [donations_name, setDonationName] = useState();
       const [donations_email, setDonationEmail] = useState();
       const [donations_pnum, setDonationPnum] = useState();
       const [donations_type, setDonationCategory] = useState();
       const [donations_amount, setDonationAmount] = useState();

       const donationsstatus = "Paid";

       //const donations_amount  = useSignal();

       const handleInputChange = (e) => {
          setDonationAmount(e.target.value);
       }

      useEffect(() => {
        parseInt(localStorage.setItem('donations_amount', donations_amount));
        localStorage.setItem('donations_name', donations_name);
        localStorage.setItem('donations_email', donations_email);
        localStorage.setItem('donations_pnum', donations_pnum);
        localStorage.setItem('donations_type', donations_type);
      }, [donations_amount,donations_name,donations_email,donations_pnum,donations_type]);
      
        

       //const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
   
       const navigate = useNavigate();

       const OnCheckForEmptyValues = (data, actions) => {
           if(donations_name === null || donations_email === null || donations_pnum === null || donations_type === null  || donations_amount === null ) {
              setErrorMessages("All Field Are Required");

              return actions.reject();
           } else {
              return actions.resolve();
           }
       }

       const onCreateOrder = (data, actions) => {
        const donations_amount = parseInt(localStorage.getItem('donations_amount'));
        return actions.order.create({
            purchase_units: [{
              amount: {
                currency_code: 'USD',
                value: donations_amount,
              },
            }],
            // application_context: {
              // shipping_preference: "NO_SHIPPING", // default is "GET_FROM_FILE"
             //},
          });

          
       }

       /*const donations_name = "Sam Tomi";
       const donations_email = "sam@gmail.com";
       const donations_pnum = "0903030303";
       const donations_type = "Offering";
       const donations_amount = 350;
       const donations_reference = "34556";
       const donations_status =  "Paid";*/

       const onApproveOrder  = (data, actions) => {
           // Capture the funds from the transaction
           return actions.order.capture().then(function(details) {

            const donationsamount = parseInt(localStorage.getItem('donations_amount'));
            const donationsname = localStorage.getItem('donations_name');
            const donationsemail = localStorage.getItem('donations_email');
            const donationspnum = localStorage.getItem('donations_pnum');
            const donationstype = localStorage.getItem('donations_type');

            const { payer } = details; 
            // Show a success message to your buyer
           
            const donationsreference = details.id;                
            const item = { donationsname, donationsemail, donationspnum, donationstype, donationsamount, donationsreference, donationsstatus };
            
            axios.post(serverurl + "/api/donation", item).then(res => {               
                    setSuccess(true);
            });
                

            // OPTIONAL: Call your server to save the transaction
            /*return fetch(serverurl + "/api/donation", {
                method: "post",
                body: JSON.stringify({
                    donations_name: "Sam Tomi",
                    donations_email: "sam@gmail.com",
                    donations_pnum: "0903030303",
                    donations_type: "Offering",
                    donations_amount: 350,
                    donations_reference: "34556",
                    donations_status: "Paid",
                })
            });*/

          });
       }

       const onError = (error) => {
          setErrorMessages("All Fields Are Required and Must Be Valid");
       }

       const onCancel = () => {
        setErrorMessages("You cancelled the transaction");
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
                                <Link to="/" id="homelink" reloadDocument>Home &nbsp; &#60; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                                <Link to="/donation" reloadDocument className='text-white' id="currentlink">Donation</Link>
                            </p>
                            <h4>Donation</h4>
                        </div>
                    </div>
                </div>
            </div>

            <br></br><br></br>


            <div>
                <Container>
                    <Row>
                        <Col md={3}></Col>
                        <Col md={6}>
                            <Card id="deptcard">
                                <Card.Header style={{ backgroundColor: '#135592', color: '#fff', fontSize: '20px', textAlign: 'center' }}>
                                    Donation
                                </Card.Header>
                                <Card.Body>
                                    <Form>

                                    <InputGroup className="mb-3" controlId="">
                                            <Form.Control type="text" size="lg" placeholder="Full Name" style={{ fontSize: '16px', padding: '15px' }}
                                                value={donations_name} onChange={(e) => setDonationName(e.target.value)} required/>
                                        </InputGroup>

                                        <InputGroup className="mb-3" controlId="">      
                                            <Form.Control type="email" size="lg" placeholder="Email" style={{ fontSize: '16px', padding: '15px' }}
                                                value={donations_email} onChange={(e) => setDonationEmail(e.target.value)} required />
                                      
                                        </InputGroup>

                                        <InputGroup className="mb-3" controlId="">
                                            <Form.Control type="text" size="lg" placeholder="Pnone Number" style={{ fontSize: '16px', padding: '15px' }}
                                                value={donations_pnum} onChange={(e) => setDonationPnum(e.target.value)} required/>
                                        </InputGroup>

                                        
                                        <InputGroup>
                                        <Form.Select type="text" size="lg" style={{ fontSize: '16px', padding: '15px' }}
                                                value={donations_type} onChange={(e) => setDonationCategory(e.target.value)} required>
                                                <option value=''>Select Donation Category</option>
                                                {
                                                donationcategory && donationcategory.length > 0 && donationcategory.map((donationCatData, index) => {
                                                   return <>
                                                      <option value={donationCatData.donationcategories_name}>
                                                        {donationCatData.donationcategories_name}
                                                      </option>
                                                   </>
                                                })
                                               
                                                }
                                        </Form.Select>
                                        </InputGroup>
                                        <br></br>

                                        <InputGroup className="mb-3" controlId="">
                                            <Form.Control type="text" size="lg" placeholder="Enter Amount" style={{ fontSize: '16px', padding: '15px' }} name="donations_amount"
                                                value={donations_amount} 
                                                onChange={handleInputChange} required />
                                        </InputGroup>
                                      

                                    </Form>

                          

                                    <div>

                                    {
                                    success ? 
                                    (
                                      <div className='alert alert-success'>Payment made successfully</div>
                                    ) :
                                    errormessages === '' ?
                                    (
                                         ''
                                    ) :   <div className='alert alert-danger'>{errormessages}</div>
                                    }

                                    </div>

            
                                    {/*<PayPalButton
                                        createOrder={(data,actions) => createOrder(data, actions)}
                                        onApprove={(data,actions) => onApprove(data, actions)}
                                     />*/}

                                <PayPalScriptProvider 
                                options={{ clientId: "AcsILzIwRTitCuyvWbiloGt4jh1Li8s7s24KF5EEoOylTMA83IGvs4pXA0B5AdOlUJJhuE1jVOJJk9zH" }}><PayPalButtons
                                       onClick={OnCheckForEmptyValues}
                                       createOrder={onCreateOrder}
                                       onApprove={onApproveOrder}
                                       onError={onError}
                                       onCancel={onCancel}

                                       style={{
                                          tagline: false,
                                          color: 'blue',
                                          layout:'vertical',
                                          label: 'pay',
                                       }}
                                      
                                        
                                    /></PayPalScriptProvider>
                                    
                                       
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                </Container>
            </div>

 
            <br></br>



        </div >
    )
}
