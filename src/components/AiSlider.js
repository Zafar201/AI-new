import React, { useState, Component } from 'react'
import Slider from "react-slick";
import { Col, Container, Row } from 'react-bootstrap';



export default class AiSlider extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 1,
            SN : 1
        };
    }
    

    
    componentWillReceiveProps(pP) {
        this.setState({SN:this.props.sn})
        this.slider.slickGoTo(this.state.SN)
    }


    render() {



        const settings = {

            customPaging: function (i) {

                return (
                    <a>
                        <img className="ai-photo-dot" src={`../assets/img/aislider${i + 1}.png`} />
                    </a>
                );
            },
            dots: true,
            dotsClass: "slick-dots slick-thumb",
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 7000,
            fade: true,
            adaptiveHeight: false,
            pauseOnHover: false,
            
            beforeChange: (current, next) => this.setState({ slideIndex: next })
        };

        // const Sgoto = () => {
        //     this.slider.slickGoTo(1)
        // }

        


        return (
            <div>
                {/* <input
                    onChange={e => this.slider.slickGoTo(e.target.value)}
                    value={this.state.slideIndex}
                    type="range"
                    min={0}
                    max={3}
                /> */}
                {/* <button onClick={()=>Sgoto()}>add</button>  */}

                <Slider ref={slider => (this.slider = slider)} {...settings}>
                    <div className="slider-all">
                        <div className="ai-slider-img" style={{ backgroundImage: `url("../assets/img/aislider1.png")`, backgroundSize: "cover" }}>
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
                                <Row className="slider-email">
                                    {/* <Col md={6} sm={6} lg={4}>
                                        <Row>
                                            <h6 className="home-slider-h6">Want to know more ?</h6>
                                        </Row>
                                        <Row>
                                            <Col sm={12} className="slider-col">
                                                <input type="email" className="home-slider-input1" placeholder="enter your email id @ this space" /><FontAwesome
                                                    size="2x"
                                                    name="arrow-circle-right"
                                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', marginLeft: '1rem', color: '#589af1' }}
                                                />
                                            </Col>
                                        </Row>
                                    </Col> */}
                                    <Col md={6}>
                                        <Row>
                                            <Col>
                                                <img />
                                            </Col>
                                            <Col>

                                            </Col>
                                            <Col>

                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
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
                                <Row className="slider-email">
                                    {/* <Col md={6} sm={6} lg={4}>
                                        <Row>
                                            <h6 className="home-slider-h6">Want to know more ?</h6>
                                        </Row>
                                        <Row>
                                            <Col sm={12} className="slider-col">
                                                <input type="email" className="home-slider-input1" placeholder="enter your email id @ this space" /><FontAwesome
                                                    size="2x"
                                                    name="arrow-circle-right"
                                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', marginLeft: '1rem', color: '#589af1' }}
                                                />
                                            </Col>
                                        </Row>
                                    </Col> */}
                                    <Col md={6}>
                                        <Row>
                                            <Col>
                                                <img />
                                            </Col>
                                            <Col>

                                            </Col>
                                            <Col>

                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
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

                                            <br /> <br />   A majority of our course enrollees avail corporate tuition reimbursement from their workplace. Are you interested in finding out how?</p>
                                    </Col>
                                </Row>
                                <Row className="slider-email">
                                    {/* <Col md={6} sm={6} lg={4}>
                                        <Row>
                                            <h6 className="home-slider-h6">Want to know more ?</h6>
                                        </Row>
                                        <Row>
                                            <Col sm={12} className="slider-col">
                                                <input type="email" className="home-slider-input1" placeholder="enter your email id @ this space" /><FontAwesome
                                                    size="2x"
                                                    name="arrow-circle-right"
                                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', marginLeft: '1rem', color: '#589af1' }}
                                                />
                                            </Col>
                                        </Row>
                                    </Col> */}
                                    <Col md={6}>
                                        <Row>
                                            <Col>
                                                <img />
                                            </Col>
                                            <Col>

                                            </Col>
                                            <Col>

                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
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
                                <Row className="slider-email">
                                    {/* <Col md={6} sm={6} lg={4}>
                                        <Row>
                                            <h6 className="home-slider-h6">Want to know more ?</h6>
                                        </Row>
                                        <Row>
                                            <Col sm={12} className="slider-col">
                                                <input type="email" className="home-slider-input1" placeholder="enter your email id @ this space" /><FontAwesome
                                                    size="2x"
                                                    name="arrow-circle-right"
                                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', marginLeft: '1rem', color: '#589af1' }}
                                                />
                                            </Col>
                                        </Row>
                                    </Col> */}
                                    <Col md={6}>
                                        <Row>
                                            <Col>
                                                <img />
                                            </Col>
                                            <Col>

                                            </Col>
                                            <Col>

                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>

                </Slider>
            </div>
        )
    }
}
