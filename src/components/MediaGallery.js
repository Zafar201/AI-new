import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick';

import ModalVideo from 'react-modal-video';






export default function MediaGallery() {

    const [isOpen, setOpen] = useState(false)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="sec11">
            <Container>
                <Row><h2 className="sec11-h2">Media Gallery</h2></Row>
                <Row>
                    <Col className="sec11-details" md={6}>
                        <Row className="sec11-para">
                            <h2 style={{ fontWeight: "900" }}>Corporate Training & Talent Partner Program</h2>
                            <p style={{ color: "grey" }}>Duration - 120 mins</p>
                            <br />
                            <Col md={10}>
                                <p className="sec11-para-p">High quality corporate data science and machine learning programs for upskilling the workforce are hard to find! We can deliver both in-person and online specialized courses to upskill corporate teams at specialized corporate rates.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <img className="mg-main-img" src="../assets/img/mg (4).png" />
                        <img className="sec11-play-img" src="../assets/img/play-btn1.png" />
                    </Col>
                </Row>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="TQ76JqaNbAM" onClose={() => setOpen(false)} />
                <Row >
                    <Slider {...settings}>
                        
                        <Col md={4} >
                        
                            <div className="mg-btm-div" onClick={() => setOpen(true)}>
                                <div className="mg-play-img">
                                    <img src="../assets/img/play-btn1.png" />
                                </div>
                                <img src="../assets/img/mg (1).png" />

                                <div className="mg-content">
                                    <Row>
                                        <Col lg={10}>
                                            <h5>Applications and Opportunities Webinar 1: MEDLEY</h5>
                                        </Col>
                                    </Row>
                                    <p>Duration - 58 mins</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="mg-btm-div">
                                <div className="mg-play-img">
                                    <img src="../assets/img/play-btn1.png" />
                                </div>
                                <img src="../assets/img/mg (2).png" />
                                <div className="mg-content">
                                    <Row>
                                        <Col md={10}>
                                            <h5>Empowering Women in Data Science</h5>
                                        </Col>
                                    </Row>
                                    <p>Duration - 120 mins</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="mg-btm-div">
                                <div className="mg-play-img">
                                    <img src="../assets/img/play-btn1.png" />
                                </div>
                                <img src="../assets/img/mg (3).png" />
                                <div className="mg-content">
                                    <Row>
                                        <Col md={10}>
                                            <h5>Empowering Women in Data Science</h5>
                                        </Col>
                                    </Row>
                                    <p>Duration - 120 mins</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="mg-btm-div">
                                <div className="mg-play-img">
                                    <img src="../assets/img/play-btn1.png" />
                                </div>
                                <img src="../assets/img/mg (3).png" />
                                <div className="mg-content">
                                    <Row>
                                        <Col lg={10}>
                                            <h5>Empowering Women in Data Science</h5>
                                        </Col>
                                    </Row>
                                    <p>Duration - 120 mins</p>
                                </div>
                            </div>
                        </Col>
                    </Slider>
                </Row>
            </Container>
        </section>
    )
}
