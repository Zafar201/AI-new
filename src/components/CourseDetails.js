import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from "react-router-dom";
import { Col, Row, Accordion, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ChatApp from '../chat/ChatApp'
import CdNav from './CdNav'
import { useSelector } from 'react-redux';
import { listCourse, getCourseById, codingEnables } from '../actions/courseActions';
import { useDispatch } from 'react-redux';
// import Calender from './Calender';
import Signin from './Signin';

import course from "../dummyJSON/course.json";

var FontAwesome = require('react-fontawesome')

export default function CourseDetails(props) {
    const courseList = useSelector((state) => state.courseList);
    const { loading, error, course } = courseList;
    const userSignin = useSelector((state) => state.userSignin);
    const { studentInfo } = userSignin;
    const location = useLocation()
    const cid = location.state?.cid

    const [courseByIdItems, setCourseByIdItems] = useState();

    const params = useParams()

    // const currentItem = courses.filter(e => e.id === params?.id)
    console.log(userSignin?.studentInfo?.purchasedCourses.filter(e => e === params?.id))


    useEffect(() => {
        if (params?.id) {
            dispatch(getCourseById(params?.id))
            dispatch(codingEnables(params?.id))
            
        }
    }, []);


    // const course=courses.results.data.find(x=>x._id === props.match.params.id)
    const dispatch = useDispatch()
    const { pathname } = useLocation();

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //     dispatch(listCourse())
    // }, [pathname, dispatch]);


    const [sc, setSc] = useState([])
    const [obj, setObj] = useState([])

    // useEffect(() => {
    //     if (!loading) {
    //         if (!error) {
    //             // const IC = courses.results.data.filter(elm => {
    //             //     return elm.id == cid
    //             // })
    //             // setSc(IC[0])
    //             // setObj(IC[0].course_topics)
    //             // console.log(IC[0].course_topics,"kk");
    //         }
    //     }

    // }, [courses])


    useEffect(() => {
        const sections = document.querySelectorAll(".section");
        const navLi = document.querySelectorAll(".sb-items .sb-item .col");
        document.addEventListener("scroll", () => {
            let current = "";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                    current = section.getAttribute("id");
                }
            });

            navLi.forEach((li) => {
                li.classList.remove("sb-active");
                if (li.classList.contains(current + "-div")) {
                    li.classList.add("sb-active");
                }
            });
        });
    }, [])


    console.log({course})

    return (
        <div>
            <CdNav />
            <div>
                <Row className="main-cd" >
                    <Col md={1}
                        xs={0}
                        className="side-bar" >
                        <div className="sb-items" >

                            <Row className="sb-item" >
                                <a href="#cd1" >
                                    < Col className="sb-active cd1-div" >
                                        <img className="sb-item"
                                            src="../assets/img/sidebar-img-1.png" style={{ width: "25px" }} />
                                    </Col>
                                </a >
                            </Row>
                            <Row className="sb-item" >
                                <a href="#cd3" >
                                    < Col className="cd3-div" >
                                        <img className="sb-item"
                                            src="../assets/img/sidebar-img-2.png" style={{ width: "25px" }} />
                                    </Col>
                                </a >
                            </Row>
                            <Row className="sb-item" >
                                <a href="#cd4" >
                                    < Col className="cd4-div" >
                                        <img className="sb-item"
                                            src="../assets/img/sidebar-img-3.png" style={{ width: "25px" }} />
                                    </Col>
                                </a >
                            </Row>
                            <Row className="sb-item" >
                                <a href="#cd5" >
                                    < Col className="cd5-div" >
                                        <img className="sb-item"
                                            src="../assets/img/sidebar-img-4.png" style={{ width: "25px" }} />
                                    </Col>
                                </a >
                            </Row>
                            {/* <Row className="sb-item" >
                                <a href="#cd6" >
                                    < Col className="cd6-div" >
                                        <img className="sb-item"
                                            src="../assets/img/sidebar-img-5.png" style={{width:"25px"}} />
                                    </Col>
                                </a >
                            </Row> */}
                        </div >
                    </Col>
                    <Col className="right-div"  >
                        <Row className="cd1 section"
                            id="cd1"
                            style={
                                // { backgroundImage: "url(" + course?.overviewImageUrl + ")" }
                                { backgroundImage: "url(https://cdn.zeplin.io/61efad88ede0f947d4cfcdd3/assets/F3304CA0-BC84-441C-9C85-30C326F89498.png)" }
                            } >
                            <Col md={12}
                                className="cd1-breadcrumbs" >
                                <h6 > Bootcamp &gt; {course?.title}  </h6>

                            </Col>
                            <Col className="cd1-play-btn" >
                                <Row >
                                    <Col>
                                        <img src="../assets/img/Play@2x.png" />
                                    </Col>

                                </Row >
                                <Col >
                                    <h6 className="cd1-header-h6" > Course <br /> Preview </h6>
                                </Col >
                            </Col>
                        </Row >
                        <Row className="cd1-detail-row" >
                            <Col md={{ span: 3, offset: 7 }} xs={{ span: 5, offset: 5 }} className="cd1-detail-bar" >
                                {/* <img src={course?.thumbnailUrl} /> */}
                                <div style={{justifyContent:'center'}}>
                                    {/* <div className="courseListgrid"> Live Class</div> */}
                                    <div style={{display:'flex',justifyContent:'center'}}>
                                      <img style={{width:'40%',height:'40%'}} src="../assets/img/listGrid1.png" />
                                      <img style={{width:'40%',height:'40%'}} src="../assets/img/listGrid4.png" />
                                    </div>
                                    <div style={{display:'flex',justifyContent:'center'}}>
                                      <img style={{width:'40%',height:'40%'}} src="../assets/img/listGrid3.png" />
                                      <img style={{width:'40%',height:'40%'}} src="../assets/img/listGrid2.png" />
                                    </div>
                                </div>
                                <Row className="cd1-dtl-grp mt-4">
                                    <Col md={6} xs={12}> < p className="cd1-detail-bar-pargra cd1-p-left" > Discounted Price</p></Col >
                                    <Col md={6} xs={12}> < p className="cd1-detail-bar-pargra cd1-p-r8" > Slots left </p></Col >
                                </Row>
                                <Row className="cd1-dtl-grp">
                                    <Col className="price" >
                                        <h2 className='cd1-detail-free mt-3' > {course?.courseType}</h2>
                                        <p className='cd1-detail-bar-h2 cd1-detail-old'> {course?.discountPrice} </p>
                                    </Col >
                                    <Col > < h3 className='cd1-detail-bar-h2 cd1-p-r8 mt-3 mb-0'> 8 / 25 </h3></Col >
                                </Row>
                                <Row >
                                    <Col md={12} className="registerForMore" >
                                        {userSignin?.studentInfo?.purchasedCourses.filter(e => e === params?.id).length > 0 ?
                                            <Link to={{ pathname: `/course/${params?.id}`, state: { cid2: cid }, }}> <Button className='cd1-detail-row-btn' >   Go to Course  </Button> </Link> :
                                            course?.courseType?.toUpperCase() === "FREE" ? <Link to={{ pathname: `/course/${params?.id}`, state: { cid2: cid }, }}> <Button className='cd1-detail-row-btn' >   Go to Course  </Button> </Link> : <Link to={{ pathname: "/payment", state: { cid2: params?.id }, }}> <Button className='cd1-detail-row-btn' >  Payment  </Button> </Link>
                                        }
                                    </Col >
                                </Row>
                                <Row >
                                    <Col >
                                        {/* <p className='cd1-detail-row-par' > Batch Starting on <h6 className="">{course?.batchDates[0]?.substring(0,10)}</h6></p> */}
                                    </Col >
                                </Row>
                            </Col >
                        </Row>
                        <Row className="mt-4 mb-4 mbl-cd1">
                            <Col xs={5} className="mbl-cd1-img">
                                <img src="../assets/img/cd-details-img.jpg" />
                            </Col>

                            <Col xs={6}>
                                <Row>
                                    {/* <Col>
                                        <Row>
                                            <p>Discounted Price</p>
                                        </Row>
                                        <Row>
                                            <Col><h2 className='cd1-detail-free' > Free </h2> <p className='cd1-detail-bar-h2 cd1-detail-old'> $1200 </p></Col>
                                        </Row>
                                    </Col> */}

                                    {/* <Col >
                                        <Row>
                                            <p className="cd1-p-r8">Slots left</p>
                                        </Row>
                                        <Row>
                                            <p className="cd1-p-r8">8/25</p>
                                        </Row>
                                    </Col> */}
                                </Row>
                                <Row>
                                    <Button className='cd1-detail-row-btn' > Register For More Information</Button>
                                    <Signin />
                                </Row>
                                {/* <Row>
                                    <p className='cd1-detail-row-par' > Batch Starting on <h6 className="">15th Jun 21</h6></p>
                                </Row> */}
                            </Col>
                            <Col md={{ offset: 1 }} xs={0}>
                            </Col>

                        </Row>
                        <Row className="cd2"
                            id="cd2" >
                            <Col md={4}
                                className="cd2-details" >
                                <h1 className="cd2-heading" > {course?.title} </h1> <p className="cd2-dtl-p"> {course?.description} </p>
                                <Row className="cd2-prof-details" >
                                    {/* <Col className="col-pd-0 mw-mc" >
                                        <img src="../assets/img/Rectangle-WS.png"
                                            className="prof-pic"
                                            alt="prof-pic" />
                                    </Col> */}
                                    <Col className="col-pd-0" >
                                        <Row className="" >
                                            <Col md="12" className="col-pd-0 cd2-prof-dsgn" > Author </Col>
                                            <Col className="col-pd-0 cd2-prof-name" > {course?.author}</Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Row className="cd2-mouse" >
                                <p className="cd2-more-details" > More Details
                                    <div>
                                        < img src="../assets/img/mouseBlack.png" style={{ paddingBottom: '5px' }} />
                                    </div>
                                </p>
                            </Row >

                        </Row>
                        <ul>
                            {
                                obj ? (
                                    Object.entries(obj).map(([key, value], index) => (
                                        <Accordion defaultActiveKey={index}
                                            className="cd3-course-acc" >
                                            <Accordion.Item eventKey={index} key={index} >
                                                <Accordion.Header > {value.ModuleName} </Accordion.Header>
                                                <Accordion.Body className="acc-body" >
                                                    <Row className="acc-body-row" >
                                                        <Col > < FontAwesome className="cd3-acc-icon"
                                                            name="play-circle"
                                                            style={
                                                                { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#898989' }
                                                            }
                                                        />&nbsp;&nbsp;&nbsp;&nbsp;0.1 Introduction</Col >
                                                    </Row>
                                                </Accordion.Body >
                                            </Accordion.Item>
                                        </Accordion >
                                    ))
                                ) : null

                            }
                        </ul>
                        <Row className="cd3 section" id="cd3" >
                            <Col md={7} >
                                <Accordion >
                                    <Accordion.Item className="main-acc-item" >
                                        <Accordion.Header className="acc-header" > What will you learn ? < br /> < p className="acc-h-p" style={{fontWeight:'500'}} > {course?.modules?.length} Modules • 4 Mini Project • 1 Major Project • 36h 15m total length </p></Accordion.Header >

                                    </Accordion.Item>
                                </Accordion >

                                {course?.modules.map((item, index) => (

                                    item?.sections && item?.sections ? <Accordion defaultActiveKey="0"
                                        className="" >
                                        <Accordion.Item eventKey="0" >
                                            <Accordion.Header > Module {index + 1}  <h7 style={{position:'absolute',right:50}}>{index+1}h 30m</h7></Accordion.Header>
                                            <Accordion.Body className="acc-body" >
                                                {item?.sections.map((section, Sindex) => (
                                                    section ?
                                                        <Row className="acc-body-row" key={section?.sectionId}>
                                                            <Col > < FontAwesome className="cd3-acc-icon"
                                                                name="play-circle"
                                                                style={
                                                                    { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#898989' }
                                                                }
                                                            />&nbsp;&nbsp;&nbsp;&nbsp;{index}.{Sindex} {section?.sectionTitle}</Col > <div style={{textAlign:'end',marginTop:'-25px'}}> 05 :25 m</div>
                                                        </Row> : ""
                                                ))}
                                            </Accordion.Body >
                                        </Accordion.Item>
                                    </Accordion > : ""
                                ))}

                                {/* {
                                    obj ? (
                                        Object.entries(obj).map(([key, value], index) => (
                                            <Accordion defaultActiveKey={index}
                                                className="cd3-course-acc" key={index} >
                                                <Accordion.Item eventKey={index} >
                                                    <Accordion.Header > {value.ModuleName} </Accordion.Header> */}
                                {/* <Accordion.Body className="acc-body" >
                                                        <Row className="acc-body-row" >
                                                            <Col > < FontAwesome className="cd3-acc-icon"
                                                                name="play-circle"
                                                                style={
                                                                    { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#898989' }
                                                                }
                                                            />&nbsp;&nbsp;&nbsp;&nbsp;0.1 Introduction</Col >
                                                        </Row>
                                                    </Accordion.Body > */}
                                {/* </Accordion.Item>
                                            </Accordion >
                                        ))
                                    ) : null

                                } */}
                            </Col>
                            <Col md={{ span: 3, offset: 1 }} >
                                <div className="cd3-certi" >
                                    <Row >
                                        < h5 > Shareable Certificate </h5>
                                    </Row >
                                    <Row >
                                        < p > Earn a Certificate upon completion </p>
                                    </Row >
                                    <Row >
                                        < img src="../assets/img/cert-cd3.png" />
                                    </Row>
                                </div >
                                <div className="cd3-tags" >
                                    <Row >
                                        < h5 > You’ ll Learn </h5>
                                    </Row >
                                    <Row >
                                        < p > By the end of this course </p>
                                    </Row >
                                    <Row >
                                        {course?.concepts.map((item, index) => (
                                            <Col className="cd3-tags-col" >
                                                < p className="cd3-tags-p" > {item?.title} </p>
                                            </Col >
                                        ))}


                                    </Row>
                                </div >
                            </Col>
                        </Row>
                        <Row className="cd4 section" id="cd4" >
                            <Col md={8} className="cd4-1" >
                                <Row >
                                    <h2 className="cd4-h2" > Meet your The Coach & <br />Coding Enablers </h2>
                                </Row >
                                <div className="d-flex">
                                     <Row className="cd4-coach-det" style={{ marginRight: "2rem" }} >
                                        <Col className='coach-padding' >
                                            <img src="../assets/img/couch2.png" width="350" />
                                            <div style={{ padding: "1rem" }}>
                                                <h4 className="cd4-coach-name" > Dr Rahul Rai </h4>
                                                <h4 className="cd4-coach-name1" > AI Coach </h4>
                                                <div className="cd4-dtls-bottom" >
                                                    <h6 > About Me </h6>
                                                    <p> Dean’ s Distinguished Professor at Clemson University, USA and An expert in AI and Analytics and have led several prestigious research initiatives and innovations in intelligent manufacturing, ML and AI</p>
                                                </div >
                                            </div>
                                        </Col>
                                    </Row >
                                    <Row className="cd4-coach-det" >
                                        <Col className='coach-padding'>
                                            <img src="../assets/img/couch1.png" width="350" />
                                            <div style={{ padding: "1rem" }}>
                                                <h4 className="cd4-coach-name" > Shubhendu Singh </h4>
                                                <h4 className="cd4-coach-name1" > Coding Enabler </h4>
                                                <div className="cd4-dtls-bottom" >
                                                    <h6 > About Me </h6>
                                                    <p> Expert in deep learning methods and have extensively used machine learning in several engineering applications over the last four years. Passionate about programming and sharing knowledge with others. </p>
                                                </div >
                                            </div>
                                        </Col>
                                    </Row >
                                </div>
                                {/* <Row className="all-task-master" >
                                    <Col className="cd4-task-master" >
                                        <img src="../assets/img/coach-dp.png" />
                                        <h5 > Bruce Stewart </h5>
                                        <h6 > Task Master </h6>
                                        <p > Dean’ s Distinguished Professor at Clemson University, USA </p>
                                    </Col >
                                    <Col className="cd4-task-master" >
                                        <img src="../assets/img/coach-dp.png" />
                                        <h5 > Bruce Stewart </h5> <h6 > Task Master </h6> <p > Dean’ s Distinguished Professor at Clemson University, USA </p> </Col > <Col className="cd4-task-master" >
                                        <img src="../assets/img/coach-dp.png" />
                                        <h5 > Bruce Stewart </h5> <h6 > Task Master </h6> <p > Dean’ s Distinguished Professor at Clemson University, USA </p>
                                    </Col >
                                    <Col className="cd4-task-master" >
                                        <img src="../assets/img/coach-dp.png" />
                                        <h5 > Bruce Stewart </h5> <h6 > Task Master </h6> <p > Dean’ s Distinguished Professor at Clemson University, USA </p>
                                    </Col >
                                </Row> */}


                            </Col>
                            {/* <Col md={{ span: 5, offset: 1 }} >
                                < ChatApp />
                            </Col > */}
                        </Row>
                        <Row className="cd5 section" id="cd5" >
                            <Col md={5} >
                                <Row >
                                    <h2 className="cd5-header" > Scoring and Certificate </h2>
                                </Row >
                                <Row >
                                    <Col md={1} className="cd5-tick">
                                        <FontAwesome className="header1-play-circle"
                                            name="check-circle"
                                            size="3x"
                                            style={
                                                { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#43abfb' }
                                            }
                                        /> <div className="verticalLine" > </div>
                                    </Col >
                                    <Col className="cd5-det" >
                                        <h5 className='cd5-h5'> No. of Modules </h5> <p > 4 Modules and 18 lessons </p> </Col >

                                </Row>
                                <Row >
                                    <Col md={1} className="cd5-tick">
                                        <FontAwesome className="header1-play-circle"
                                            name="check-circle"
                                            size="3x"
                                            style={
                                                { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#43abfb' }
                                            } /> <div className="verticalLine" > </div>
                                    </Col >
                                    <Col className="cd5-det" >
                                        <h5 className='cd5-h5'> Quiz </h5> <p >Multiple Choice questions </p>
                                    </Col >

                                </Row>
                                <Row >
                                    <Col md={1} className="cd5-tick">
                                        <FontAwesome className="header1-play-circle"
                                            name="check-circle"
                                            size="3x"
                                            style={
                                                { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#43abfb' }
                                            } /> <div className="verticalLine" > </div> </Col > <Col className="cd5-det" >
                                        <h5 className='cd5-h5'> Mini Project </h5> <p > Each Module will have a Mini Project </p> </Col >

                                </Row>
                                <Row >
                                    <Col md={1} className="cd5-tick">
                                        <FontAwesome className="header1-play-circle"
                                            name="check-circle"
                                            size="3x"
                                            style={
                                                { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#43abfb' }
                                            }
                                        />
                                        <div className="verticalLine1" >
                                        </div>
                                    </Col >
                                    <Col className="cd5-det" >
                                        <h5 className='cd5-h5'> Major Project </h5>
                                        <p > Talk to your coach on what industry <br />you prefer for your career </p>
                                        <Row >
                                            <div className="cd5-get-eva">
                                                <img className="cd5-baby" src="../assets/img/cd-baby.png" alt="" />
                                                <div className="get-eva-det" >
                                                    <h6> Get Evaluated! </h6>
                                                    <p> Complete mini projects and major projects and submit them for assessment </p>
                                                </div >
                                            </div>
                                        </Row >
                                    </Col>


                                </Row>
                                <Row >
                                    <Col md={1} className="cd5-tick">
                                        <FontAwesome className="header1-play-circle"
                                            name="check-circle"
                                            size="3x"
                                            style={
                                                { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#43abfb' }
                                            }
                                        />
                                    </Col >
                                    <Col className="cd5-det" >
                                        <h5 className='cd5-h5' > Certificate and Recommendation</h5>
                                        <p > Receive an industry recognized certificate and personal recommendation from our coach </p>
                                    </Col >

                                </Row>
                            </Col >
                            <Col md={7}
                                className="cd5-cert-img" >
                                <img src="../assets/img/v12.png" />
                            </Col>
                        </Row>
                        {/* <Row className="cd6 section" id="cd6" >
                            <Col md={8}>
                                <Calender />
                            </Col>
                        </Row> */}
                    </Col >
                </Row>
            </div >

        </div>
    )
}