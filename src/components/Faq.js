import React, { useEffect } from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { useLocation } from 'react-router';
import Footer from './Footer';
import Navbar1 from './Navbar';

function Faq() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div>
            <Navbar1 />

            <section className="header2" style={{ backgroundImage: "url(" + "../assets/img/aboutus.png" + ")" }} >
                <div className="header1-container">
                    <Container>
                        <Row>
                            <h2>FAQ</h2>
                            <h1>FAQ</h1>

                        </Row>

                    </Container>

                </div>

            </section>

            <section className='faq'>
                <Container>
                    <Row >
                        {/* <h1>This is the summary of the product, It will say something about the mission/purpose or goal of the project as well as have other content like this one</h1> */}
                    </Row>

                    <Row className='faq-left'>
                        <Col md={7}>
                            <h1>Course Related</h1>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Which courses are a good fit for me?</Accordion.Header>
                                    <Accordion.Body>
                                    	This is dependent on the learner’s current skill set. If you have any questions about a given course and its suitability for you, please reach out to us through email help@aibrilliance.com by attaching your CV.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Accordion className='padding-aqccordation' defaultActiveKey="">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>	What is the admission process for your courses? Which courses are a good fit for me?</Accordion.Header>
                                    <Accordion.Body>
                                    	Our courses are interest and upskilling interest-driven. We do not have any specific admission criteria. If you have any questions about a given course and its suitability for you, please reach out to us through email help@aibrilliance.com by attaching your CV.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Accordion defaultActiveKey="">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>	Who are our programs for?</Accordion.Header>
                                    <Accordion.Body>
                                      Our programs are for anyone interested in upskilling in the cutting-edge domain of data science, machine learning, and AI. Most of our students are college students, young working professionals who want to make a career switch in the data science and machine learning domain, and experienced mid-career managers who wish to update their knowledge base. 
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>


                            <Accordion defaultActiveKey="">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>	Do I need any particular laptop, computers, or software for attending online courses?</Accordion.Header>
                                    <Accordion.Body>
                                    	All you need are 1) desktop computer or laptop that has common internet browsers installed on them, 2) Decent internet connection that allows video streaming or video play, and 3) A microphone and headset combo that allows you to listen and speak during interactive sessions.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Accordion defaultActiveKey="">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>	What if I need additional time to complete a given course?</Accordion.Header>
                                    <Accordion.Body>
                                    	We have structured our program to provide a cushion for additional time to learn the concepts and achieve their learning goals by the end of the course. However, exceptions are always there. We will make accommodations on a need basis.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>


                            <Accordion defaultActiveKey="">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>	Can you offer courses in the in-person setting?</Accordion.Header>
                                    <Accordion.Body>
                                    	It depends! Currently, our paid courses are offered mainly in synchronous online mode. However, we can work with you to provide in-person courses too! Please contact us using the contact us form on our website.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Accordion defaultActiveKey="">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>	Do your courses have industry-related projects?</Accordion.Header>
                                    <Accordion.Body>
                                    	All the courses at AIBrilliance use hand-on mini-projects and capstone projects. The mini-projects and capstone projects use real situations and data that are encountered in the industry. The capstone project can be customized to fit the learner’s choice of a domain such as finance, tech, manufacturing, and logistics, etc.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>


                        </Col>

                        <Col md={{offset:1}}  className='faq-right'>
                        <h1>Categories</h1>
                        <Row className='categories'>
                             <Col >
                                <p3>Course Related</p3>
                             </Col>
                              <Col md={{span:1 ,offset:1}} className='nmbr'>
                                 04
                              </Col>
                           </Row>
                           <Row className='categories'>
                             <Col >
                                <p3>Registration Related</p3>
                             </Col>
                              <Col md={{span:1 ,offset:1}} className='nmbr'>
                                 02
                              </Col>
                           </Row>
                           <Row className='categories'>
                             <Col >
                                <p3>Course Related</p3>
                             </Col>
                              <Col md={{span:1 ,offset:1}} className='nmbr'>
                                 04
                              </Col>
                           </Row>
                           <Row className='categories'>
                             <Col >
                                <p3>Registration Related</p3>
                             </Col>
                              <Col md={{span:1 ,offset:1}} className='nmbr'>
                                 03
                              </Col>
                           </Row>
                        </Col>
                       
                    </Row>
                </Container>


                <Container>
                    <Row className='faq2-left'>
                        <Col md={7}>
                            <h1>Enrollment  Related</h1>
                            <Accordion defaultActiveKey="">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>	What will I have access to after I log in as a free user?</Accordion.Header>
                                    <Accordion.Body>
                                    	Post logging on to the website, you will have access to all the free courses and free content. The free courses are offered in asynchronous mode. You will have access to recorded videos, course pdf documents, and python notebooks related to the course. This is a great way to experience our platform.  However, premium features such as live lectures and help from coding assistants are only available in premium paid course mode. 
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Accordion className='padding-aqccordation' defaultActiveKey="">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>	What will I have access to after I make payments for a paid course?</Accordion.Header>
                                    <Accordion.Body>
                                    	Post logging on to the website, you will have access to course pdf documents and python notebooks related to the course. You will be able to access the zoom meeting links for live lectures and coding sessions. Additionally, you will be able to access zoom meeting links for weekly in-person coding assistant office hours for asking in-person questions.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Accordion defaultActiveKey="">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>	How long will it take to access a course I enroll in?</Accordion.Header>
                                    <Accordion.Body>
                                    Whether free or paid, you should have access to the course content instantly (5-10 minutes at most).
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>


                            <Accordion defaultActiveKey="">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>	Can I enroll in multiple courses simultaneously? </Accordion.Header>
                                    <Accordion.Body>
                                    	Yes, you can. However, we encourage you to enroll in different courses in a sequence that gives you a maximum learning experience. 
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            {/* <Accordion defaultActiveKey="">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>I am a high school student, can I join?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion> */}


                            {/* <Accordion defaultActiveKey="">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Can I take more than one course at a time?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion> */}


                        </Col>

                        <Col md={5}>

                        </Col>
                    </Row>
                </Container>


                <Container>

                    <Row className='faq2-left'>
                        <Col md={7}>
                            <h1>Miscellaneous  Related</h1>
                            <Accordion defaultActiveKey="">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Will I receive a certificate after the completion of a course?</Accordion.Header>
                                    <Accordion.Body>
                                    	Yow will receive a certificate after completion of a course at AIBrilliance (free and paid for both!). However, we do not provide a certificate for one-day introductory workshops.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Accordion className='padding-aqccordation' defaultActiveKey="">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>	Do you offer job-related assistance?</Accordion.Header>
                                    <Accordion.Body>
                                    	If you have completed our course, we will provide a personal reference to a company planning to hire you.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Accordion defaultActiveKey="">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>	Do you offer any fee discounts?</Accordion.Header>
                                    <Accordion.Body>
                                    	Yes, we have several categories of fee discounts for females, veterans, and employee education programs. Additionally, we allow you to transfer the workshop fee when you enroll for an entire course. Please contact us for more details.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>


                            <Accordion defaultActiveKey="">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>	Do you refund fees for an enrolled course? </Accordion.Header>
                                    <Accordion.Body>
                                    	We allow for fee refund only in extenuating circumstances! There will be fees applied even in extenuating circumstances case. 
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            {/* <Accordion defaultActiveKey="">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>I am a high school student, can I join?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion> */}


                            {/* <Accordion defaultActiveKey="">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Can I take more than one course at a time?</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion> */}


                        </Col>

                        <Col md={5}>

                        </Col>
                    </Row>
                </Container>


            </section>

            <Footer/>
        </div>
    )
}

export default Faq
