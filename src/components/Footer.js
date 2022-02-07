import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Modal, Form } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import { LinkContainer } from 'react-router-bootstrap'
import { Link, useLocation, useHistory } from 'react-router-dom'
import ContactUs from './ContactUs';
import HireStudent from './HireStudent';
import { withRouter } from 'react-router';
import Slider from "react-slick";

const Footer = (history) => {

    const getclr = (curr) => {
        if (history.location.pathname == curr) {
            return "500"
        }

    }
    const getSize = (curr) => {
        if (history.location.pathname == curr) {
            return "1rem"
        }

    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    const [show5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

    const [show6, setShow6] = useState(false);
    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);

    let history1 = useHistory();
    const onTop = () => {
        if (history.location.pathname == '/') {
            window.scrollTo(0, 0);
        } else {
            //  let history = useHistory
            history1.push('/')
        }
    }
    const onTop2 = () => {
        if (history.location.pathname == '/fullcourse') {
            window.scrollTo(0, 0);
        } else {

            history1.push('/fullcourse')
        }
    }
    const onTop4 = () => {
        if (history.location.pathname == '/aboutus') {
            window.scrollTo(0, 0);
        } else {

            history1.push('/aboutus')
        }
    }

    const onTop3 = () => {
        if (history.location.pathname == '/') {
            window.scrollTo(5600, 5600);
        }
        else{
            history1.push('/')
        }
    }
    // const onTop=()=>{
    //     window.scrollTo(0,0);
    // }
    const slideTop = () => {
        window.scrollTo(4900, 4900)
    }


    const settings = {
        slidesToShow: 1,
        adaptiveHeight: false,

    };
    return (
        <div >
            <div className="ft-div">

                <Modal className="sec-10-modal sec-10-modal2" show={show} onHide={handleClose}>

                    <Modal.Body>

                        <ContactUs state={handleClose} />
                    </Modal.Body>

                </Modal>

                <Modal className="sec-10-modal sec-10-modal2" show={show2} onHide={handleClose2}>

                    <Modal.Body>

                        <HireStudent state={handleClose2} />
                    </Modal.Body>

                </Modal>
                <Modal className="sec-10-modal sec-10-modal2" show={show3} onHide={handleClose3}>
                    <Modal.Body>
                        <button className="mdl-btn-close" onClick={handleClose3}>X</button>
                        <Slider {...settings}>
                            <div className="slider-all">
                                <div className="ai-slider-img" style={{ backgroundImage: `url("../assets/img/aislider2.png")`, backgroundSize: "cover" }}>
                                    {/* <img src="../assets/img/aislider1.png" /> */}
                                    <Container className="ai-slider-content">
                                        <Row>
                                            <Col lg={6} md={12}>
                                                <h2>Empowering Women in Data Science</h2>
                                            </Col>
                                        </Row>
                                        <Row className="ai-slider-p">
                                            <Col lg={6} md={12}>
                                                <p>The number of women in the data science field, especially minority women, is low compared to men. Let’s reverse that trend! AIBrilliance offers tuition discounts for women pursuing our programs. Are you interested in applying? Please get in touch!</p>
                                                <div className="empty-p"></div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </Slider>
                    </Modal.Body>
                </Modal>
                <Modal className="sec-10-modal sec-10-modal2" show={show4} onHide={handleClose4}>
                    <Modal.Body>
                    <button className="mdl-btn-close" onClick={handleClose4}>X</button>
                        <Slider {...settings}>
                            <div className="slider-all">
                                <div className="ai-slider-img" style={{ backgroundImage: `url("../assets/img/aislider4.png")`, backgroundSize: "cover" }}>
                                    {/* <img src="../assets/img/aislider1.png" /> */}
                                    <Container className="ai-slider-content">
                                        <Row>
                                            <Col lg={6} md={12}>
                                                <h2>Veterans GI Bill Benefit Program</h2>
                                            </Col>
                                        </Row>
                                        <Row className="ai-slider-p">
                                            <Col lg={6} md={12}>
                                                <p>GI Bill benefits helps veterans to pay for variety of training programs. Veterans can use their GI Bill Benefit to learn data science and machine learning courses on our platform. Are you interested in finding out how? Please get in touch!</p>
                                                <div className="empty-p"></div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </Slider>
                    </Modal.Body>
                </Modal>
                <Modal className="sec-10-modal sec-10-modal2" show={show5} onHide={handleClose5}>
                    <Modal.Body>
                    <button className="mdl-btn-close" onClick={handleClose5}>X</button>
                        <Slider {...settings}>
                            <div className="slider-all">
                                <div className="ai-slider-img" style={{ backgroundImage: `url("../assets/img/aislider3.png")`, backgroundSize: "cover" }}>
                                    {/* <img src="../assets/img/aislider1.png" /> */}
                                    <Container className="ai-slider-content">
                                        <Row>
                                            <Col lg={6} md={12}>
                                                <h2>Employer Tuition Assistance Program</h2>
                                            </Col>
                                        </Row>
                                        <Row className="ai-slider-p">
                                            <Col lg={6} md={12}>
                                                <p>If your employer supports your continuing education, then you can avail of our employer tuition assistance program. In this case, the company you work for could help pay part or all of the cost of your tuition related to different courses on our platform.
                                                    <br /> <br />
                                                    A majority of our course enrollees avail corporate tuition reimbursement from their workplace. Are you interested in finding out how?</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </Slider>
                    </Modal.Body>
                </Modal>
                <Modal className="sec-10-modal sec-10-modal2" show={show6} onHide={handleClose6}>
                    <Modal.Body>
                    <button className="mdl-btn-close" onClick={handleClose6}>X</button>
                        <Slider {...settings}>
                            <div className="slider-all">
                                <div className="ai-slider-img" style={{ backgroundImage: `url("../assets/img/aislider4.png")`, backgroundSize: "cover" }}>
                                    {/* <img src="../assets/img/aislider1.png" /> */}
                                    <Container className="ai-slider-content">
                                        <Row>
                                            <Col lg={6} md={12}>
                                                <h2>Corporate Training & <br />Talent Partner Program</h2>
                                            </Col>
                                        </Row>
                                        <Row className="ai-slider-p">
                                            <Col lg={6} md={12}>
                                                <p>High quality corporate data science and machine learning programs for upskilling the workforce are hard to find! We can deliver both in-person and online specialized courses to upskill corporate teams at specialized corporate rates.</p>
                                                <p>Also act as a talent partner to find you the right data science and machine learning scientists who graduate from our programs, suited to your requirements.</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </Slider>
                    </Modal.Body>
                </Modal>
                <Container className="ft-container">
                    <Row>
                        <Col md={3}>
                            <img className="logo ft-logo" src="../assets/img/main-logo.svg" alt="ai brilliance logo" />
                            <p className="ft-follow">Follow us on </p>
                            <div>
                                <a href="https://www.facebook.com/AIBrilliance" target="_blank"><FontAwesome
                                    name="facebook-square"
                                    size="2x"
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "#fff" }} /></a>
                                <a href="https://www.instagram.com/ai_brilliance/" target="_blank"><FontAwesome
                                    name="instagram"
                                    size="2x"
                                    href=''
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "#fff" }} /></a>
                                <a href="https://twitter.com/?lang=en" target="_blank"><FontAwesome
                                    name="twitter"
                                    size="2x"
                                    href=''
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "#fff" }} /></a>
                                <a href="https://www.linkedin.com/company/aibrilliance/" target="_blank"><FontAwesome
                                    name="linkedin"
                                    size="2x"
                                    href=''
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: "#fff" }} /></a>
                            </div>
                        </Col>
                        <Col className="ft-link" md={{ span: 2 }}>
                            <p className='footer-bold' style={{ fontWeight: getclr('/'), fontSize: getSize('/') }} onClick={onTop}>Home</p>
                            <p className='footer-bold' style={{ fontWeight: getclr('/fullcourse'), fontSize: getSize('/fullcourse') }} onClick={onTop2}> Bootcamps</p>
                            <Link to='#web' onClick={onTop3}>    <p className='footer-bold' >Events</p>  </Link>

                        </Col>
                        <Col className="ft-link" md={{ span: 2, }}>
                            <p className='footer-bold' style={{ fontWeight: getclr('/aboutus'), fontSize: getSize('/aboutus') }} onClick={onTop4}>    About Us  </p >
                            <p className='footer-bold' onClick={handleShow}>Contact Us</p>
                            <p className='footer-bold' onClick={handleShow2}>Hire Our Students</p>

                        </Col>
                        <Col className="ft-link" md={{ span: 2, }}>
                            <p className='footer-bold' onClick={slideTop}>Scholarships</p>
                            <p onClick={handleShow3}>Women in Data Science</p>
                            <p onClick={handleShow4}>Veterans GI Bill</p>
                            <p onClick={handleShow5}>Employer Tuition Assistance</p>
                            <p onClick={handleShow6}>Corporate Training Discount</p>
                        </Col>
                        <Col md={{ span: 2, offset: 1 }}>
                            <p>Our Office</p>
                            <p>FREMONT <br />39152 Guardino Dr, <br /> Fremont, 94538, United States</p>
                            <p>CHARLOTTE <br />601 Beauhaven Ln, <br /> Waxhaw, 28173, United States </p>
                        </Col>
                    </Row>
                    
                </Container>
            </div>
        </div>
    )
}

export default withRouter(Footer)