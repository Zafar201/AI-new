import React, { useState } from 'react'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { contactList } from '../actions/generalAction'

function ContactUs(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone_number, setphone_number] = useState('')
    const [query, setQuery] = useState('')

    const contact = useSelector(state => state.contact)
    const { loading, error, contactQuery, success } = contact


    const dispatch = useDispatch()


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(contactList(name, email, query, phone_number))
        setName('')
        setQuery('')
        setEmail('')
        setphone_number('')
        alert("Thanks for Contacting US")
        // if(contactQuery.results.message === "Succesfully saved"){
        //     alert("Form saved") 
        // }


    }
    return (
        <div>
            <div className='hire-main'>
                <Row className='hirestudent'>
                    <Col md={6} className='hirestudent-first'>
                        <Container className='hirestudent-cntnr hs-contact'>
                            <div className="hs-contact-div">
                                <h1 >We’re here to help!</h1>
                                <p>Leave your query and we’ll reach out to you.</p>
                            </div>

                            <Modal.Body>
                                <Form className='hire' onSubmit={submitHandler} >
                                    <Form.Group className="mb-3" >
                                        <Form.Control id="name" placeholder="Enter Your Name *" value={name} onChange={(e) => setName(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupPassword">
                                        <Form.Control type="email" id="email" required placeholder="Email *" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Control id="number" placeholder="Phone Number *" value={phone_number} onChange={(e) => setphone_number(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                     <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"  type="query" id="query" required placeholder="Type Your Query ? " value={query} onChange={(e) => setQuery(e.target.value)} ></textarea>
                                        {/* <Form.Control  rows="3" cols="25"/> */}
                                    </Form.Group>

                                    <Button className="signin-btn mt-4" type="submit">
                                        Submit Details
                                    </Button>

                                </Form>

                            </Modal.Body>

                        </Container>


                    </Col>
                    <Col MD={5} className='Contactus-second' style={{ backgroundImage: "url(" + "../assets/img/contactus.png" + ")" }}>
                        <a className="fa fa-times close" onClick={() => props.state()} ></a>
                        <i ></i>
                        <Container style={{ paddingTop: "20px" }}>
                            <h1>Email</h1>
                            <p>rahul.rai@aibrilliance.com</p>
                        </Container>
                        <Container>
                            <h1>Contact</h1>
                            <p>+1512-921-9360</p>
                        </Container>
                        <Container>
                            <h1>Office Location</h1>
                            <p>Fremont  <br />
                                <span className='contact-span'>  39152 Guardino Dr, <br />
                                    Fremont, 94538, United States</span></p>
                            <p>CHARLOTTE  <br />
                                <span className='contact-span'>  601 Beauhaven Ln, <br />
                                    Waxhaw, 28173, United States</span></p>
                        </Container>
                        <Container>
                            <h1 className="cont-soc-h1">Follow us on </h1>
                            <div className='contactus-social'>
                            <a href="https://www.facebook.com/AIBrilliance" target="_blank"><img src="../assets/img/Facebook-1.png" alt="" /></a>
                            <a href="https://www.instagram.com/ai_brilliance/" target="_blank">  <img src="../assets/img/Instagram-1.png" alt="" /></a> 
                                <img src="../assets/img/tiktok-1.png" alt="" />
                            <a href="https://www.linkedin.com/company/aibrilliance/" target="_blank"><img src="../assets/img/linkdin-1.png" alt="" /></a> 
                            <a href="https://www.youtube.com/channel/UCNjLj-lSW11ORiFgbYdHUlQ" target="_blank"><img src="../assets/img/youtube-1.png" alt="" /></a> 
                                {/* <a href="https://www.facebook.com/AIBrilliance"><FontAwesome
                                    name="facebook-square"
                                    size="2x"
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "#fff" }} /></a> */}
                                {/* <a href="https://www.instagram.com/ai_brilliance/"><FontAwesome
                                    name="instagram"
                                    size="2x"
                                    href=''
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "#fff" }} /></a> */}
                                {/* <a href="https://twitter.com/?lang=en"><FontAwesome
                                    name="twitter"
                                    size="2x"
                                    href=''
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "#fff" }} /></a> */}
                                {/* <a href="https://www.linkedin.com/company/aibrilliance/"><FontAwesome
                                    name="linkedin"
                                    size="2x"
                                    href=''
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "#fff" }} /></a> */}
                                {/* <a href="https://www.youtube.com/channel/UCNjLj-lSW11ORiFgbYdHUlQ"><FontAwesome
                                    name="youtube"
                                    size="2x"
                                    href=''
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "#fff" }} /></a> */}

                            </div>
                        </Container>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ContactUs
