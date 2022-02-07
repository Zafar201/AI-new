import React, {useEffect} from 'react'
import { useLocation } from "react-router-dom";
import { Col,  Container,  Row } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import Footer from './Footer'
import Navbar1 from './Navbar'

export default function LearnMore() {

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="lm">
            <Navbar1 />
            <div className="lm-header" style={{ backgroundImage: "url(" + "../assets/img/lm-header.png" + ")" }}>
                <div className="lm-all-rows">
                    <Row className="justify-content-md-center">
                        <Col md={{ span: 4,  }} className='learnmore-first'>
                           
                           <Row  >
                        
                              <h2 >HELLO, </h2>
                               
                           </Row>
                           <Row>
                              <h1>I am Dr. Rahul Rai</h1>
                           </Row>
                           <Row>
                               <p>Dean’s Distinguished Professor at Clemson University</p> 
                           </Row>
                           <Row>
                               <p1>Greenville, South Carolina, United States</p1>
                           </Row>
                           <Row>
                               <Col className='social-media'>
                                 <a href="https://www.linkedin.com/in/rahul-rai-3790029/" target="_blank"><img src='../assets/img/linikedin.png' /></a> 
                                 <a href="https://hi-in.facebook.com/people/Rahul-Rai/100000560581614/" target="_blank">  <img src='../assets/img/facebook.png' /></a>
                                 <a href="https://www.clemson.edu/cecas/departments/automotive-engineering/people/rahul-rai.html" target="_blank"> <img src='../assets/img/clemson.jpg' /></a>
                               </Col>
                           </Row>
                         
                        </Col>
                        <Col md={{span:4}} className="lm-img-col" >
                            <img className="lm-header-img" src="../assets/img/learn-more.png" />
                        </Col>
                        

                    </Row>
                    {/* <Row className="justify-content-md-center">
                        <Col md={4} ><h1 className="lm-header-h1">Hello, I am Dr. Rahul Rai</h1></Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col className="lm-header-h5" md={5}><h5>Dean’s Distinguished Professor at Clemson University Greenville, South Carolina, United States</h5></Col>
                    </Row> */}
                </div>
            </div>
            <Row className="justify-content-md-center lm2">
                <Col md={8} className="lm2-col">
                    {/* <Row>
                        <Col><p className="lm2-p1">He directs the Geometric Reasoning and Artificial Intelligence Lab (GRAIL). He earned his doctoral degree in Mechanical Engineering from The University of Texas at Austin USA in 2006 in sequential sampling that is popularly known as “Active Learning” in the machine learning domain. </p></Col>
                    </Row> */}
                    <Row>
                        <Col><p className="lm2-p2">Data Science & Machine Learning | Artificial Intelligence | Diagnostics & Prognostics | Computer Vision & Autonomous Systems | Digital Manufacturing
                            & Design | Geometric & Shape Reasoning | AR/VR/XR | Applied Ontology</p></Col>
                    </Row>
                 
                </Col>

                <Row className='box-down'>
                    <Col md={{ span: 4, offset: 2 }}>
                          <img className='grail' src='../assets/img/grail.png' />
                    </Col>
                    <Col md={{ span: 4 }}>
                      <h1>I direct the Geometric Reasoning and Artificial Intelligence Lab (GRAIL)</h1>
                    </Col>
                </Row>
                <Row className='box-down-2'>
                   <Col md={{ span: 4, offset: 2 }}>
                      <h1>Earned my doctoral degree in Mechanical Engineering from The University of Texas at Austin USA in 2006 Sequential sampling that is popularly known as “Active Learning” in the machine learning domain. </h1>
                    </Col>
                    <Col md={{ span: 3, offset: 2 }}>
                    <img className='university' src='../assets/img/university.png' />
                    </Col>
                   
                </Row>
            </Row>
            <Row className="lm3-div">
                <Row className="lm3">
                    <Col md={1} xs={4} className="lm3-img">
                        <img src="../assets/img/courseraimg.webp" />
                    </Col>
                    <Col md={11} xs={8} className="lm3-content">
                        <Row>
                            <Col><h2>I have also curated and delivered two online courses at Coursera</h2></Col></Row>
                        <Row>
                            <Col>
                                <h4>21,500 + Students</h4>
                                <p className="lm3-course">Course:</p>
                                <h6>Intelligent Machining</h6>
                                <a href="https://www.coursera.org/lecture/intelligent-machining/introduction-to-intelligent-machining-4K8IX"><div className="icon-div">
                                    <FontAwesome
                                        className="play-circle"
                                        name="play-circle"
                                        size="2x"
                                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
                                    <h6>Course Preview</h6></div></a>
                            </Col>
                            <Col>
                                <h4>17,000 + Students</h4>
                                <p className="lm3-course">Course:</p>
                                <h6>Advanced Manufacturing Process Analysis</h6>
                                <a href="https://www.coursera.org/lecture/advanced-manufacturing-process-analysis/introduction-to-advanced-manufacturing-process-analysis-sbMHl"><div className="icon-div">
                                    <FontAwesome
                                        className="play-circle"
                                        name="play-circle"
                                        size="2x"
                                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
                                    <h6>Course Preview</h6></div></a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Row>
            <Footer/>
        </div >
    )
}
