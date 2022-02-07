import React, { useState } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import HireStudent from './HireStudent';

function HireSection() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Modal className="sec-10-modal sec-10-modal2" show={show} onHide={handleClose}>

                <Modal.Body>
                   
                    <HireStudent state={handleClose} />
                </Modal.Body>

            </Modal>
            <section style={{ paddingBottom: "35px" }}>
                <Container className="sec8">
                    <Row><p className="sec8-p">Student graduates of Dr. Rai are working for </p></Row>
                    <Container>
                        <Row className="sec8-logo">
                            <Col>
                                <img src="../assets/img/brand1.png" />
                            </Col>
                            <Col>
                                <img src="../assets/img/brand2.png" />
                            </Col>
                            <Col>
                                <img src="../assets/img/brand3.png" />
                            </Col>
                        </Row>
                        <Row className="sec8-logo sec8-logo2">
                            <Col>
                                <img src="../assets/img/brand4.png" />
                            </Col>
                            <Col>
                                <img src="../assets/img/brand5.png" />
                            </Col>
                            <Col>
                                <img src="../assets/img/brand6.png" />
                            </Col>
                        </Row>
                        <Row className='stdntgrdt-btm'style={{ backgroundImage: "url(" + "../assets/img/hire.png" + ")" ,}}>
                            <Col md={4} xs={12}>

                            </Col>
                            
                            <Col className="hire-center" md={4} xs={12}>
                                <h3>Get free access to the best talent, No placement fees involved. </h3>
                                <p>"We are proud of our product"</p>
                            </Col>
                            <Col className='stdntgrdt-pding' md={4} xs={12}>
                               <Button className="btn-blue sec5-btn" onClick={handleShow}><span className='sec4-btn-tiltle'>Hire Our Student</span><img className='sec4-img' src='../assets/img/icons8-right-arrow-48.png'></img></Button>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </section>

        </div>
    )
}

export default HireSection
