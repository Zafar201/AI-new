import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import { LinkContainer } from 'react-router-bootstrap'

function ZoomPage(props) {
    const [joinMeeting, setJoinMeeting] = useState(false)
    console.log(props.webId,"kk");
    return (
        <div>
            <Container>
                {/* <Row className='zoom-sec1 mb-3'>
                    <h2>Industrial Applications -1</h2>
                </Row> */}
                <Row className='zoom-sec1-p mt-5'>
                    <p>Webinar 4.0 of Data Science, ML & AI:  Applications and <br />Opportunities Series</p>
                </Row>
            </Container>

            <Container className="mt-5">
                <Row className='zoom-sec2'>
                    <Col md={6} xs={4}>
                        <p style={{ fontWeight: "900", fontSize: "large" }}>Zoom Meeting Details</p>
                    </Col>
                    <Col md={3} xs={4}>
                        {/* <button className="btn-blue sec5-btn" ><span className='sec4-btn-tiltle'>Learn More</span> </button>                    */}
                        <button onClick={() => setJoinMeeting(true)} className='zoom-sec2-btn zoom-sec2-btn-active' > <span className='zoom-sec2-btn-p'>Join via Zoom App</span></button>
                    </Col>
                    <Col md={3} xs={4}>
                        <button className='zoom-sec2-btn' style={{ border: "1px solid #6e9efb" }}> <span className='zoom-sec2-btn-p' style={{ color: "#6e9efb" }}>Join via Web Browser </span></button>
                    </Col>
                </Row>
                <hr />

            </Container>

            <Container>
                <Row>
                    <Col md={6} className="zoom-para-div">
                        <p className='zoom-para'>Meeting ID</p>
                    </Col>
                    <Col md={6} className="zoom-para-div">
                        <p className="zoom-p-r8">23432454543</p>
                    </Col>
                </Row>
                <hr />

            </Container>

            <Container>
                <Row>
                    <Col md={6} className="zoom-para-div">
                        <p className='zoom-para'>Meeting Status</p>
                    </Col>
                    <Col md={3} className="zoom-para-div">
                        <p className="zoom-p-r8">Meeting yet to start</p><p2 style={{ fontSize: "9px", fontWeight: "500" }}>Refresh is needed to change status</p2>

                    </Col>
                    <Col md={3} className="zoom-para-div zoom-rf">
                        <p>Refresh</p>
                        <img src="../assets/img/refresh_black.svg" />
                    </Col>
                </Row>
                <hr />

            </Container>

            <Container>
                <Row>
                    <Col md={6} className="zoom-para-div">
                        <p className='zoom-para'>Start Time</p>
                    </Col>
                    <Col md={6} className="zoom-para-div">
                        <p className="zoom-p-r8">06:30 AM, 23rd Jun 2021,Tuesday</p>
                    </Col>
                </Row>
                <hr />

            </Container>

            <Container>
                <Row>
                    <Col md={6} className="zoom-para-div">
                        <p className='zoom-para'>Timezone</p>
                    </Col>
                    <Col md={6} className="zoom-para-div">
                        <p className="zoom-p-r8">Eastern Standard Time (+9:30)</p>
                    </Col>
                </Row>
                <hr />

            </Container>

            <Container>
                <Row>
                    <Col md={6} className="zoom-para-div">
                        <p className='zoom-para'>Duration</p>
                    </Col>
                    <Col md={6} className="zoom-para-div">
                        <p className="zoom-p-r8">60 Mins</p>
                    </Col>
                </Row>
                <hr />

            </Container>


            <Container>
                <Row className='zoom-bottom'>
                    <Col md={4}>
                        <img className='zoom-bottom-image' src='../assets/img/zoom-prof1.png' />
                        <h2 className='zoom-bottom-h2 mt-3'>Abhi Seth, Ph.D</h2>
                        <p className='zoom-bottom-p'>Staff AI Research Scientist, <br />at LG Electronics AI Lab <br /><span className='zoom-bottom-span'>Phoenix , AZ, USA</span> </p>


                    </Col>

                    <Col md={4}>
                        <img className='zoom-bottom-image' src='https://cdn.shopify.com/s/files/1/0172/0329/8404/products/SPLOV-Vintage-Steampunk-Flip-Up-Men-Sunglasses-Women-Retro-Round-Metal-Frame-Sun-Glasses-Hinge-Design.jpg_640x640_44142928-e19d-4c28-9b91-5218d86ead7f.jpg' />
                        <h2 className='zoom-bottom-h2  mt-3'>Jinmiao Huang</h2>
                        <p className='zoom-bottom-p'>Staff AI Research Scientist, <br />at LG Electronics AI Lab <br /><span className='zoom-bottom-span'>Phoenix , AZ, USA</span> </p>
                    </Col>

                    <Col md={4}>
                        <img className='zoom-bottom-image' src='../assets/img/zoom-prof1.png' />
                        <h2 className='zoom-bottom-h2 mt-3'>Dr. Rahul Rai</h2>
                        <p className='zoom-bottom-p'>Dean’s Distinguished Professor, <br />at Clemson University <br /><span className='zoom-bottom-span'>Phoenix , AZ, USA</span> </p>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default ZoomPage
