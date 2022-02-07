import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Footer from './Footer';
import Navbar1 from './Navbar';
import { motion } from "framer-motion"

import ModalVideo from 'react-modal-video'

function AboutUs() {
    const { pathname } = useLocation();

    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);



    
    const [isOpen10, setOpen10] = useState(false);
    const [isOpen11, setOpen11] = useState(false);
    const [isOpen12, setOpen12] = useState(false);
    const [isOpen13, setOpen13] = useState(false);
    const [isOpen14, setOpen14] = useState(false);
    const [isOpen15, setOpen15] = useState(false);



    return (
        <div>
            <Navbar1 />

            <section className="header2 about-us-header" style={{ backgroundImage: "url(" + "../assets/img/aboutus.png" + ")" }} >
                <div className="header1-container">
                    <Container>
                        <Row className='about-us'>
                            <Col md={5}>
                                <h1>We are <span style={{ color: "#43abfb" }}> on a Mission </span>to Empower Your Learning</h1>
                            </Col>
                            
                            <Col md={{ offset: 1, span: 6 }}>
                                <img src="../assets/img/mg (4).png" alt="" />
                            </Col>

                        </Row>
                    </Container>
                </div>
            </section>

            <section className=''>
                <div className='about-us-2'>
                    <Container>
                        <Row>
                            <Col className='about-us-2-blue' md={{ span: 5 }}>
                                <h2>Mission</h2>
                                <p>AIBrilliance’s mission is to deliver high-quality data science, machine learning, and AI education content at affordable prices to empower learners worldwide to upskill themselves.</p>
                            </Col>
                            <Col md={{ offset: 1, span: 4 }}>
                                <img src="../assets/img/mg (3).png" alt="" />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>


            <section className='about-us-3' onMouseEnter={() => { setAnimate(true) }} onMouseLeave={() => { setAnimate(false) }} >
                <Container >
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen15} videoId="7fvlCJqwNek" onClose={() => setOpen15(false)} />
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen10} videoId="oZANGdv59n0" onClose={() => setOpen10(false)} />
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen11} videoId="OwSec2a857w" onClose={() => setOpen11(false)} />
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen13} videoId="n4Za3pWxAns" onClose={() => setOpen13(false)} />
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen14} videoId="zPq8466o7gI" onClose={() => setOpen14(false)} />
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen12} videoId="Ar6Fhff7NUk" onClose={() => setOpen12(false)} />
                    <Row className='about-us-3-row'>
                        <Col md={3}>
                            <h1>What makes us Different</h1>
                        </Col>
                        <Col md={9} className='about-us-3-padding'>
                            <Row>
                                <Col xs={12} sm={6} md={4}>
                                    <motion.div className="sec4-div"
                                        animate={{
                                            x: animate ? 0 : -20,
                                            y: animate ? 0 : -130,
                                            rotate: animate ? 0 : 30,
                                            scale: animate ? 1 : 0.8

                                        }}
                                    >
                                        <Row><img className="icon" src="../assets/img/sec4-img-icon2.png" alt="Redefining Learning With Light-board" /></Row>
                                        <Row><h5>Small Group (5-25)
                                            <br />Focused Learning </h5></Row>
                                        <Row className="sec4-grp">
                                            <Col md={5} xs={5} className="sec4-r8">
                                            <p>Watch <br />Video</p>
                                                <img className="sec4-img1" src="../assets/img/right-up-arrow.svg" alt="right-up-arrow" />
                                            </Col>
                                            <Col md={7} xs={7}>
                                                    <img className="sec4-img2" onClick={() => setOpen15(true)} src="../assets/img/hww-small-group.gif" alt="sec4-img2" />
                                            </Col>
                                        </Row>
                                    </motion.div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <motion.div className="sec4-div"
                                        animate={{
                                            x: animate ? 0 : -35,
                                            y: animate ? 0 : -210,
                                            scale: animate ? 1 : 0.8
                                        }}
                                    >
                                        <Row><img className="icon" src="../assets/img/sec4-img-icon.svg" alt="Redefining Learning With Light-board" /></Row>
                                        <Row><h5>Redefining Learning
                                                <br />With Light board</h5></Row>
                                        <Row className="sec4-grp">
                                            <Col md={5} xs={5} className="sec4-r8">
                                            <p>Watch <br />Video</p>
                                                <img className="sec4-img1" src="../assets/img/right-up-arrow.svg" alt="right-up-arrow" />
                                            </Col>
                                            <Col md={7} xs={7}>
                                            <img className="sec4-img2"  src="../assets/img/hww-lightBoard.gif" onClick={() => setOpen10(true)} alt="sec4-img2"  />
                                            </Col>
                                        </Row>
                                    </motion.div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <motion.div className="sec4-div"
                                        animate={{
                                            x: animate ? 0 : 20,
                                            y: animate ? 0 : -130,
                                            rotate: animate ? 0 : 30,
                                            scale: animate ? 1 : 0.8
                                        }}
                                    >
                                        <Row><img className="icon" src="../assets/img/sec4-img-icon3.png" alt="Redefining Learning With Light-board" /></Row>
                                        <Row><h5>In-person Coding
                                                <br />Assistant Help</h5></Row>
                                        <Row className="sec4-grp">
                                            <Col md={5} xs={5} className="sec4-r8">
                                            <p>Watch <br />Video</p>
                                                <img className="sec4-img1" src="../assets/img/right-up-arrow.svg" alt="right-up-arrow" />
                                            </Col>
                                            <Col md={7} xs={7}>
                                            <img className="sec4-img2" src="../assets/img/hww-codingAssis.gif" onClick={() => setOpen11(true)} alt="sec4-img2" />
                                            </Col>
                                        </Row>
                                    </motion.div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} sm={6} md={4}>
                                    <motion.div className="sec4-div"
                                        animate={{
                                            x: animate ? 0 : -90,
                                            y: animate ? 0 : 150,
                                            rotate: animate ? 0 : -30,
                                            scale: animate ? 1 : 0.9
                                        }}
                                    >
                                        <Row><img className="icon" src="../assets/img/sec4-img-icon5.png" alt="Redefining Learning With Light-board" /></Row>
                                        <Row><h5>Pay-as-you-learn<br />No Bundle Fee Trap</h5></Row>
                                        <Row className="sec4-grp">
                                            <Col md={5} xs={5} className="sec4-r8">
                                            <p>Watch <br />Video</p>
                                                <img className="sec4-img1" src="../assets/img/right-up-arrow.svg" alt="right-up-arrow" />
                                            </Col>
                                            <Col md={7} xs={7}>
                                                <img className="sec4-img2" src="../assets/img/hww-pay-as-you.gif" onClick={() => setOpen12(true)} alt="sec4-img2" />
                                            </Col>
                                        </Row>
                                    </motion.div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <motion.div className="sec4-div"
                                        animate={{
                                            x: animate ? 0 : -30,
                                            y: animate ? 0 : 130,
                                            rotate: animate ? 0 : 30,
                                            scale: animate ? 1 : 0.9
                                        }}
                                    >
                                        <Row><img className="icon" src="../assets/img/sec4-img-icon.svg" alt="Redefining Learning With Light-board" /></Row>
                                        <Row><h5>Domain-specific
                                                <br />capstone project</h5></Row>
                                        <Row className="sec4-grp">
                                            <Col md={5} xs={5} className="sec4-r8">
                                            <p>Watch <br />Video</p>
                                                <img className="sec4-img1" src="../assets/img/right-up-arrow.svg" alt="right-up-arrow" />
                                            </Col>
                                            <Col md={7} xs={7}>
                                            <img className="sec4-img2" src="../assets/img/hww-domain-sp.gif" onClick={() => setOpen13(true)} alt="sec4-img2" />
                                            </Col>
                                        </Row>
                                    </motion.div>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <motion.div className="sec4-div"
                                        animate={{
                                            x: animate ? 0 : 150,
                                            y: animate ? 0 : 45,
                                            rotate: animate ? 0 : -15,
                                            scale: animate ? 1 : 0.9
                                        }}
                                    >
                                        <Row><img className="icon" src="../assets/img/sec4-img-icon4.png" alt="Redefining Learning With Light-board" /></Row>
                                        <Row><h5>Certificate and <br />Reference Guarantee </h5></Row>
                                        <Row className="sec4-grp">
                                            <Col md={5} xs={5} className="sec4-r8">
                                            <p>Watch <br />Video</p>
                                                <img className="sec4-img1" src="../assets/img/right-up-arrow.svg" alt="right-up-arrow" />
                                            </Col>
                                            <Col md={7} xs={7}>
                                                <img className="sec4-img2" src="../assets/img/hww-cert.gif" onClick={() => setOpen14(true)} alt="sec4-img2" />
                                            </Col>
                                        </Row>
                                    </motion.div>
                                </Col>
                            </Row>

                        </Col>

                    </Row>
                </Container>
            </section>


            <section className='about-us-4' style={{ backgroundImage: "url(" + "../assets/img/rahul-abt.png" + ")" }}>
                <Container>
                    <Row >
                        <Col className='about-us-4-h1' md={4} sm={6}>
                            <h1>Dr. Rahul Rai</h1>
                            <p>CEO and Founder of AIBrilliance</p>
                            <LinkContainer to="/learnmore"><Button className="btn-light sec5-btn"><span className='sec4-btn-tiltle1'>Learn More</span> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000" ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" style={{fill:"#43abfb"}}/></svg></Button></LinkContainer>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='about-us-5'>
                <Container>
                    <Row>
                        <Col md={{ span: 6 }}>
                            <h1> <span>500+</span>  <br /> Happy Students</h1>
                        </Col>
                        <Col md={{ span: 6 }}>
                            <h1><span>200+</span><br /> Hrs. of content </h1>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Footer />
        </div>
    )
}

export default AboutUs
