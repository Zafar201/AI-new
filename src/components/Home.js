
import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Button, Form } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap'
import Footer from './Footer';
import HomeSlider from './HomeSlider';
import Navbar1 from './Navbar';
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { help, helpList, listBootcamp, sliderEmail } from '../actions/generalAction';
import { webinarCourse } from '../actions/webinarAction';
import CourseDiv from './CourseDiv';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ModalVideo from 'react-modal-video'
import AiSlider from './AiSlider';
import Webinar from './Webinar';
import MediaGallery from './MediaGallery';
import HireSection from './HireSection';
import HireStudent from './HireStudent';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import { useLocation } from 'react-router-dom';










var FontAwesome = require('react-fontawesome')





const Home = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [query, setQuery] = useState('')
    const [email1, setEmail1] = useState('')

    

    const [isOpen, setOpen] = useState(false);
    const [isOpen1, setOpen1] = useState(false);
    const [isOpen2, setOpen2] = useState(false);

    const [isOpen3, setOpen3] = useState(false);
    const [isOpen4, setOpen4] = useState(false);
    const [isOpen5, setOpen5] = useState(false);


    const [isOpen10, setOpen10] = useState(false);
    const [isOpen11, setOpen11] = useState(false);
    const [isOpen12, setOpen12] = useState(false);
    const [isOpen13, setOpen13] = useState(false);
    const [isOpen14, setOpen14] = useState(false);
    const [isOpen15, setOpen15] = useState(false);


    const location = useLocation()

    

    useEffect(()=> {
        if (location.hash ==="#web") {
            window.scrollTo(0, 5200);
        } else {
        window.scrollTo({top:0,left:0, behavior: "smooth"})
        }
}, [location])


    const bootcampList = useSelector(state => state.bootcampList)
    const { loading: bootcampLoading, error: bootcampError, bootcamps } = bootcampList
    

    // const webinarList = useSelector(state => state.webinarList)
    // const { loading: webinarLoading, error: webinarError, webinar } = webinarList

    const help = useSelector(state => state.help)
    const { loading: loadingHelp, error: errorHelp, helpQuery } = help


    const dispatch = useDispatch()

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "...." : str
    }

    useEffect(() => {
        dispatch(listBootcamp())
        // dispatch(webinarCourse())

    }, [dispatch])



    const userSignin = useSelector(state => state.userSignin)
    const { loading, error, userInfo } = userSignin


    // How we work

    var hww1 = "Select from the available courses from a list of free or paid courses. For paid courses, enroll in a batch to start learning in synchronous mode."
    var hww12 = "Free courses are offered in asynchronous mode (material posted online)."

    var hww2 = "Paid courses are offered in synchronous online learning format in small batch sizes (5-25  students). Live course instruction"
    var hww22 = "by the coach occurring at a set time. Students are required to log in and participate in class at a specific time each week."
  
    var hww3 = "Live Python-based coding lectures taught by coding enablers (Teaching Assistants). In addition, set weekly office hours"
    var hww33 = "(different from live lectures) to ask coding and mini-project, related questions."
  
    var hww4 = " Complete a set of Python-based mini projects related to instruction material and a major project "
    var hww44 = "related to your choice of domain."
  
    var hww5 = "Earn a course specialization certificate that can be shared on social media platforms. Once a certificate is issued, we also  "
    var hww55 = "provide a personalized referral for job-related referral inquiries."

    const [hwwContent, setHwwContent] = useState(`${hww1}`)
    const [hwwContent1, setHwwContent1] = useState(`${hww12}`)
    const contentHandler = (e, a) => {
        setHwwContent(e);
        setHwwContent1(a);
    }

    const helpHandler = (e) => {
        e.preventDefault()
        dispatch(helpList(name, email, query,"help"))
        setName('')
        setQuery('')
        setEmail('')
    }

    const knowMoreSubmit=(e)=>{
        e.preventDefault()
        dispatch(helpList('',email1,'','assist'))
        setEmail1('')
    }

    var hwwImg1 = "../assets/img/hww-clr (1).png"
    var hwwImg12 = "../assets/img/hww-clr2 (1).png"

    var hwwImg2 = "../assets/img/hww-clr (2).png"
    var hwwImg22 = "../assets/img/hww-clr2 (2).png"

    var hwwImg3 = "../assets/img/hww-clr (3).png"
    var hwwImg32 = "../assets/img/hww-clr2 (3).png"

    var hwwImg4 = "../assets/img/hww-clr (4).png"
    var hwwImg42 = "../assets/img/hww-clr2 (4).png"

    var hwwImg5 = "../assets/img/hww-clr (5).png"
    var hwwImg52 = "../assets/img/hww-clr2 (5).png"

    const [hwwImgState, setHwwImg] = useState(hwwImg1)
    const [hwwImgState2, setHwwImg2] = useState(hwwImg2)
    const [hwwImgState3, setHwwImg3] = useState(hwwImg3)
    const [hwwImgState4, setHwwImg4] = useState(hwwImg4)
    const [hwwImgState5, setHwwImg5] = useState(hwwImg5)

    const imgHandler = () => {
        setHwwImg(hwwImg12)
        contentHandler(hww1, hww12);
        imgHandlerout2()
        imgHandlerout3()
        imgHandlerout4()
        imgHandlerout5()
    }
    const imgHandlerout = () => {
        setHwwImg(hwwImg1)
    }

    const imgHandler2 = () => {
        setHwwImg2(hwwImg22)
        contentHandler(hww2, hww22);
        imgHandlerout()
        imgHandlerout3()
        imgHandlerout4()
        imgHandlerout5()
    }
    const imgHandlerout2 = () => {
        setHwwImg2(hwwImg2)
    }

    const imgHandler3 = () => {
        setHwwImg3(hwwImg32)
        contentHandler(hww3, hww33);
        imgHandlerout2()
        imgHandlerout()
        imgHandlerout4()
        imgHandlerout5()
    }
    const imgHandlerout3 = () => {
        setHwwImg3(hwwImg3)
    }

    const imgHandler4 = () => {
        setHwwImg4(hwwImg42)
        contentHandler(hww4, hww44);
        imgHandlerout2()
        imgHandlerout3()
        imgHandlerout()
        imgHandlerout5()
    }
    const imgHandlerout4 = () => {
        setHwwImg4(hwwImg4)
    }

    const imgHandler5 = () => {
        setHwwImg5(hwwImg52)
        contentHandler(hww5, hww55);
        imgHandlerout2()
        imgHandlerout3()
        imgHandlerout4()
        imgHandlerout()
    }
    const imgHandlerout5 = () => {
        setHwwImg5(hwwImg5)
    }


    
    const bnrAuto = () => {
        setTimeout(() => {
            imgHandler()
            imgHandlerout5()
        }, 5000);
        setTimeout(() => {
            imgHandler2()
            imgHandlerout()
        }, 10000);
        setTimeout(() => {
            imgHandler3()
            imgHandlerout2()
        }, 15000);
        setTimeout(() => {
            imgHandler4()
            imgHandlerout3()
        }, 20000);
        setTimeout(() => {
            imgHandler5()
            imgHandlerout4()
        }, 25000);
    }

    useEffect(() => {
        const interval = setInterval(function(){
            setTimeout(() => {
                imgHandler()
                imgHandlerout5()
            }, 5000);
            setTimeout(() => {
                imgHandler2()
                imgHandlerout()
            }, 10000);
            setTimeout(() => {
                imgHandler3()
                imgHandlerout2()
            }, 15000);
            setTimeout(() => {
                imgHandler4()
                imgHandlerout3()
            }, 20000);
            setTimeout(() => {
                imgHandler5()
                imgHandlerout4()
            }, 25000);
        },26000)
        bnrAuto()
    }, [])

    const clrIntr = () => {
        
    }

    // useEffect(() => {
    //     const interval = setInterval(function(){
    //         setTimeout(() => {
    //             bnrFun()
    //         }, 3000);
    //         setTimeout(() => {
    //             bnrFun2()
    //         }, 8000);
    //         setTimeout(() => {
    //             bnrFun3()
    //         }, 13000);
    //     },14000)
    //     bnrAuto()
    // }, [])


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrow: false,
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
        <>
            <div className="main">
                <Banner />
                {/* <Row className="ai-op1">
                    <img src="../assets/img/ai-op.svg" alt="ai brilliance" />
                </Row> */}

                <CourseDiv />

                <section>
                    <Container className="sec3">

                        {/* <Row>
                            <Col className="sec3-heading">
                                <h2>Upcoming Bootcamp</h2>
                            </Col>
                        </Row> */}
                        <Row className="upcoming-bc-grp">
                            {bootcampLoading ? <LoadingBox></LoadingBox> :
                                bootcampError ? <MessageBox varinat='danger'>{bootcampError}</MessageBox>
                                    :
                                    <>
                                        {bootcamps?.results?.data? (
                                        bootcamps?.results?.data.slice(0, 2).map(data => {
                                            return (

                                                // <Col key={data.id} md={6} sm={12}>
                                                //     <div className="upcoming-bc" style={{ backgroundImage: "url(" + data.image + ")" }}>
                                                //         <div className="ub-bg-overlay">
                                                //             <Row className="ub-details">
                                                //                 <Col lg={8} md={8}>
                                                //                     <h4>{data.name}: </h4><h6>{truncate(data.sub_name, 60)}</h6>
                                                //                 </Col>
                                                //                 <Col className="txt-r8">
                                                //                     <Row className="ub-price">{data.price > 0 ? ("$" + data.price) : ("Free")}</Row>
                                                //                     {/* <Row className="ub-date">{data.date}</Row> */}
                                                //                 </Col>
                                                //             </Row>
                                                //         </div>
                                                //     </div>
                                                // </Col>
                                                <div></div>
                                            )
                                        })):(
                                        // <MessageBox>No Bootcamp Are Found</MessageBox>
                                        <div></div>
                                        )}

                                    </>
                            }

                        </Row>
                    </Container>
                </section>

                <section>
                    {/* {sidebarIsOpen && <HireStudent state={setSidebarIsOpen}/> }P */}

                </section>
                <section className="sec4">
                    <Container>
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen15} videoId="7fvlCJqwNek" onClose={() => setOpen15(false)} />
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen10} videoId="oZANGdv59n0" onClose={() => setOpen10(false)} />
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen11} videoId="OwSec2a857w" onClose={() => setOpen11(false)} />
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen13} videoId="n4Za3pWxAns" onClose={() => setOpen13(false)} />
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen14} videoId="zPq8466o7gI" onClose={() => setOpen14(false)} />
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen12} videoId="Ar6Fhff7NUk" onClose={() => setOpen12(false)} />
                        <Row>
                            <Col md="3" className="make-us-diff">
                                <h3 className='sec4-h3'>What makes us Different</h3>
                             <Link to='/aboutus'><Button  className="btn-blue"><span className='sec4-btn-tiltle'>Read About Us</span><img className='sec4-img' src='../assets/img/icons8-right-arrow-48.png'></img></Button></Link>   
                            </Col>
                            <Col md="9">
                                <Slider {...settings}>
                                    <Col md="3">
                                        <div className="sec4-div">
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
                                        </div>
                                    </Col>
                                    <Col md="3">
                                        <div className="sec4-div">
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
                                        </div>
                                    </Col>
                                    <Col md="3">
                                        <div className="sec4-div">
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
                                        </div>
                                    </Col>
                                    
                                    <Col md="3">
                                        <div className="sec4-div">
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
                                        </div>
                                    </Col>
                                    <Col md="3">
                                        <div className="sec4-div">
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
                                        </div>
                                    </Col>
                                    <Col md="3">
                                        <div className="sec4-div">
                                            <Row><img className="icon" src="../assets/img/sec4-img-icon4.png" alt="Redefining Learning With Light-board" /></Row>
                                            <Row><h5>Certificate and <br />Reference Guarantee </h5></Row>
                                            <Row className="sec4-grp">
                                                <Col md={5} xs={5} className="sec4-r8">
                                                    {/* <p>See How <br />Lightboard <br />Works</p> */}
                                                    <p>Watch <br />Video</p>
                                                    <img className="sec4-img1" src="../assets/img/right-up-arrow.svg" alt="right-up-arrow" />
                                                </Col>
                                                <Col md={7} xs={7}>
                                                    <img className="sec4-img2" src="../assets/img/hww-cert.gif" onClick={() => setOpen14(true)} alt="sec4-img2" />
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                    
                                </Slider>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section>
                    <img className="sec5-shade-1" src="../assets/img/triangle.png" />

                    <Container className="sec5">

                        <Row>
                            <Col md={4}>
                                <Row md={12}>
                                    <h3 className='sec5-h3'>The Coach & <br />Coding Enablers</h3>
                                </Row>
                                <Row md={12}>
                                    <p className='sec5-par mt-1'>The online education platform that empowers learning in every student and prepare them for data science, machine learning, and AI job market.</p>
                                </Row>
                                {/* <Row>
                                    <img className="py-img" src="../assets/img/Icon-simple-python.svg" />
                                </Row> */}
                            </Col>
                            <Col md={{ span: 3, offset: 2 }} className="sec5-div2">
                                <h6 className="sec5-coach">COACH</h6>
                                <img src="../assets/img/brain-ai.svg" />
                                <p className='sec5-par'><span className='sec5-span'> The Coach </span> teaches you what you need to learn. He will also guide you to the right career path.</p>
                            </Col>
                            <Col md={3} className='z-index'>
                                <img className="r-p-img" src="../assets/img/rahul-pink.png" alt="rahul rai" />
                                <LinkContainer to="/learnmore"><Button className="btn-blue sec5-btn"><span className='sec4-btn-tiltle'>Learn More</span> <img className='sec4-img' src='../assets/img/icons8-right-arrow-48.png'></img></Button></LinkContainer>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3} className="sec5-div3">
                                <p className='sec5-par'><strong style={{ fontSize: "1.2rem" }}>Coding Enablers</strong> will be your teaching assistants, who will help you through the matrix onto the coding world.</p>
                                <img className='coding-enblr-img' src="../assets/img/coding-enbler.png" />
                            </Col>
                            <Col md={{ offset: 3 }}>
                                <img className="py-img" src="../assets/img/Icon-simple-python.svg" />
                            </Col>
                            <Col className='sec5-coch-img' md={{ span: 5 }} sm={10}><img src="../assets/img/theCoach4.png" width="100%" /></Col>
                        </Row>
                        <div className="tick-div">
                            <Row>
                                <Col className="tick-line" md={{ span: 9, offset: 1 }}>
                                    <hr />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="sec5-tick-all" md={{ span: 1, offset: 1 }}>
                                    <img src="../assets/img/tick.png" />
                                </Col>
                                <Col className="sec5-tick-all" md={{ span: 1, offset: 2 }}>
                                    <img src="../assets/img/tick.png" />
                                </Col>
                                <Col className="sec5-tick sec5-tick-all" md={{ span: 1, offset: 1 }}>
                                    <img src="../assets/img/tick.png" />
                                </Col>
                                <Col className="sec5-tick sec5-tick-all" md={{ span: 1, offset: 1 }}>
                                    <img src="../assets/img/tick.png" />
                                </Col>

                            </Row>
                        </div>
                        <Row className="sec5-div4">
                            <Col xs={6} sm={3} className="div4-col">
                                <h6>Environment <br />Setup</h6>
                            </Col>
                            <Col xs={6} sm={3}>
                                <h6>Coding <br />Tutorials</h6>
                            </Col>
                            <Col xs={6} sm={3}>
                                <h6>2 hr weekly <br />Coding support</h6>
                            </Col>
                            <Col xs={6} sm={3}>
                                <h6>Domain Specific <br />Capstone Project</h6>
                            </Col>
                            <Col>
                                <img className='circle' src="../assets/img/Ellipse 49.png" />
                                <img className='circlee' src="../assets/img/Ellipse49.png" />
                                {/* <div className='circle' ></div>  */}
                            </Col>
                        </Row>
                        <Row className="sec5-coding">
                            CODING ENABLERS

                        </Row>

                    </Container>
                    <div className="sec5-cir"></div>
                </section>
                <section className="sec6">
                    <Container>
                        <Row>
                            <h2>How We Work ?</h2>
                        </Row>
                        <Row className="sec6-hover-img">
                            <Col><img onMouseOver={()=>{imgHandler();clrIntr()}} onMouseOut={imgHandlerout} className="hww-img" src={hwwImgState} /></Col>
                            <Col><img onMouseOver={imgHandler2} onMouseOut={imgHandlerout2} className="hww-img" src={hwwImgState2} /></Col>
                            <Col><img onMouseOver={imgHandler3} onMouseOut={imgHandlerout3} className="hww-img" src={hwwImgState3} /></Col>
                            <Col><img onMouseOver={imgHandler4} onMouseOut={imgHandlerout4} className="hww-img" src={hwwImgState4} /></Col>
                            <Col><img onMouseOver={imgHandler5} onMouseOut={imgHandlerout5} className="hww-img" src={hwwImgState5} /></Col>
                        </Row>
                        <Row><p className="hww-p">{hwwContent} <br />{hwwContent1}</p></Row>
                        {/* <Row><p className="hww-p"></p></Row> */}
                    </Container>

                    <hr className="hww-hr" />
                </section>
                <section className="sec7">
                    <Container>
                        <Row className='sec7-flex'>
                            <Col md={4} className="std-feedback">
                                <Row><h4>Student <br />Feedbacks.</h4></Row>
                                {/* <Row><p>Our Students are proudly rendering <br />their service in the following companies</p></Row> */}
                                <br />
                                <Row className="sec5-btn-row"><Col>
                                    {userInfo ?
                                        <>
                                            <LinkContainer to="/fullcourse"><Button className="btn-blue sec5-btn"><span className='sec4-btn-tiltle'>Join the Gang</span><img className='sec4-img' src='../assets/img/icons8-right-arrow-48.png'></img></Button></LinkContainer>
                                        </>
                                        :
                                        <LinkContainer to="/fullcourse"><Button className="btn-blue sec5-btn"><span className='sec4-btn-tiltle'>Join the Gang</span><img className='sec4-img' src='../assets/img/icons8-right-arrow-48.png'></img></Button></LinkContainer>
                                    }

                                </Col></Row>
                            </Col>
                            <Col md={{ offset: 1 }} >
                                <Row className="review-row">
                                    <div className="review-1">
                                        <p className="review-p">I am finishing up my first semester as a graduate student, and so far your course has been by far my favorite class I've ever enrolled in. <br /> <br /> The research you showcased in our latest lecture was in line with the kind of work I hope to achieve during my time in academia</p>
                                        <Row className="prof-details">
                                            <Col className="col-pd-0 mw-mc">
                                                <img src="../assets/img/testi-1.png" className="prof-pic" alt="prof-pic" />
                                            </Col>
                                            <Col className="col-pd-0">
                                                <Row>
                                                    <Col md="12" className="col-pd-0 prof-name">Alex </Col>
                                                    <Col className="col-pd-0 prof-dsgn">Krolicki</Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen5} videoId="AbEBC3XZ6zs" onClose={() => setOpen5(false)} />
                                    <div className="review-0 review-vid" onClick={() => setOpen5(true)} style={{ backgroundImage: "url(" + "../assets/img/chandan.png" + ")", backgroundColor: "none", height: "15rem" }}>
                                        <Row className="prof-details">
                                            <Col className="col-pd-0 mw-mc">
                                                <img src="../assets/img/chandan.png" className="prof-pic" alt="prof-pic" />
                                            </Col>
                                            <Col className="col-pd-0">
                                                <Row>
                                                    <Col md="12" className="col-pd-0 prof-name">Chandan</Col>
                                                    <Col className="col-pd-0 prof-dsgn">Kumar</Col>
                                                </Row>

                                            </Col>

                                        </Row>

                                    </div>



                                </Row>

                                {/* <div className="rev-last">
                                 </div> */}


                            </Col>

                            <Col>
                                <div className="rev-half">
                                </div>
                                <div className="review-2">
                                    <p className="review-p">Dr. Rai is an excellent teacher. He has teaching abilities, skills to convey complex concepts easily,</p>
                                    <Row className="prof-details">
                                        <Col className="col-pd-0 mw-mc">
                                            <img src="../assets/img/testi-2.png" className="prof-pic" alt="prof-pic" />
                                        </Col>
                                        <Col className="col-pd-0">
                                            <Row>
                                                <Col md="12" className="col-pd-0 prof-name">Vinayak </Col>
                                                <Col className="col-pd-0 prof-dsgn">Khade</Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen4} videoId="RkrLAtu28M8" onClose={() => setOpen4(false)} />
                                <div className="review-0 review-vid" onClick={() => setOpen4(true)} style={{ backgroundImage: "url(" + "../assets/img/ok.png" + ")", backgroundColor: "none" }}>
                                    <Row className="prof-details">
                                        <Col className="col-pd-0 mw-mc">
                                            <img src="../assets/img/alexander.png" className="prof-pic" alt="prof-pic" />
                                        </Col>
                                        <Col className="col-pd-0">
                                            <Row>
                                                <Col md="12" className="col-pd-0 prof-name">Alexandar</Col>
                                                <Col className="col-pd-0 prof-dsgn">Krolicki</Col>
                                            </Row>
                                        </Col>
                                    </Row>

                                </div>
                                <div className="review-2">
                                    <p className="review-p">I very much enjoyed the deep learning course that you taught. Thank you for the knowledge </p>
                                    <Row className="prof-details">
                                        <Col className="col-pd-0 mw-mc">
                                            <img src="../assets/img/testi-2.png" className="prof-pic" alt="prof-pic" />
                                        </Col>
                                        <Col className="col-pd-0">
                                            <Row>
                                                <Col md="12" className="col-pd-0 prof-name">Nitin </Col>
                                                <Col className="col-pd-0 prof-dsgn">Madhok</Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen3} videoId="2mhv9gTzLf8" onClose={() => setOpen3(false)} />
                                <div className="review-0 review-vid" onClick={() => setOpen3(true)} style={{ backgroundImage: "url(" + "../assets/img/okkk.png" + ")", backgroundColor: "none" }}>
                                    <Row className="prof-details">
                                        <Col className="col-pd-0 mw-mc">
                                            <img src="../assets/img/ryan.png" className="prof-pic" alt="prof-pic" />
                                        </Col>
                                        <Col className="col-pd-0">
                                            <Row>
                                                <Col md="12" className="col-pd-0 prof-name">Ryan</Col>
                                                <Col className="col-pd-0 prof-dsgn">Nguyen</Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>

                                <ModalVideo channel='youtube' autoplay isOpen={isOpen2} videoId="5PQQf2bGhFM" onClose={() => setOpen2(false)} />
                                <div className="review-0 review-vid" onClick={() => setOpen2(true)} style={{ backgroundImage: "url(" + "../assets/img/testimonial-5.png" + ")", backgroundColor: "none" }}>
                                    <Row className="prof-details">
                                        <Col className="col-pd-0 mw-mc">
                                            <img src="../assets/img/darshil.png" className="prof-pic" alt="prof-pic" />
                                        </Col>
                                        <Col className="col-pd-0">
                                            <Row>
                                                <Col md="12" className="col-pd-0 prof-name">Darshil</Col>
                                                <Col className="col-pd-0 prof-dsgn">Patel</Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                                {/* <div className="review-2">
                                    <p className="review-p">Dr. Rai is an excellent teacher. His teaching abilities, skills to convey complex concepts easily, and the organized method for providing empty slides at the beginning of the class to take down notes during the course is extremely helpful  </p>
                                    <Row className="prof-details">
                                        <Col className="col-pd-0 mw-mc">
                                            <img src="../assets/img/Rectangle-WS.png" className="prof-pic" alt="prof-pic" />
                                        </Col>
                                        <Col className="col-pd-0">
                                            <Row>
                                                <Col md="12" className="col-pd-0 prof-name">Vinayak Khade</Col>
                                                <Col className="col-pd-0 prof-dsgn">Student</Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div> */}
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen1} videoId="d-1kORu7fwo" onClose={() => setOpen1(false)} />
                                <div className="review-0 review-vid" onClick={() => setOpen1(true)} style={{ backgroundImage: "url(" + "../assets/img/okk.png" + ")", backgroundColor: "none" }}>
                                    <Row className="prof-details">
                                        <Col className="col-pd-0 mw-mc">
                                            <img src="../assets/img/dustin.png" className="prof-pic" alt="prof-pic" />
                                        </Col>
                                        <Col className="col-pd-0">
                                            <Row>
                                                <Col md="12" className="col-pd-0 prof-name"> Dustin</Col>
                                                <Col className="col-pd-0 prof-dsgn">Bielecki</Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </section>

                <HireSection />


                <section className="sec9">
                    <AiSlider id='aislider'/>
                </section>
                <div className="se-div">
                    <Container className="se-con">
                        <Row className="slider-email">
                                <Col md={6} sm={6} lg={4}>
                                    <Row>
                                        <h6 className="home-slider-h6">Want to know more?</h6>
                                    </Row>
                                    <Row>
                                        <Col sm={12} className="slider-col">
                                            <Form onSubmit={knowMoreSubmit}>
                                            <input type="email" className="home-slider-input1" placeholder="enter your email id @ this space"  value={email1} onChange={(e) => setEmail1(e.target.value)}/><button type='submit'><FontAwesome
                                                size="2x"
                                                name="arrow-circle-right"
                                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', marginLeft: '1rem', color: '#589af1' }}
                                            /></button>
                                            </Form>
                                        </Col>
                                    </Row>
                                </Col>
                        </Row>
                    </Container>
                </div>

                {/* <button onClick={()=>setPp(1)}>adddd</button>
                <button onClick={()=>setPp(2)}>adddd</button>
                <button onClick={()=>setPp(3)}>adddd</button>
                <button onClick={()=>setPp(0)}>adddd</button> */}

                <div id="web">
                <Webinar />
                </div>

                {/* <MediaGallery /> */}
                <section className="sec12">
                    <Container className="sec12-container">
                        <Row>
                            <Col md={{ span: 3, offset: 1 }} className="sec12-help"><h3>How Can We <br />Help You ?<img style={{ height: "60px" }} src='../assets/img/420.png' />  </h3>  </Col>
                            <Col md={{ offset: 1 }}>
                                <form onSubmit={helpHandler}>
                                    <Row>
                                        <Col><p className="sec12-p">Your Name is <input type="text" id='name' placeholder="enter name" value={name} onChange={(e) => setName(e.target.value)} /> and</p></Col>
                                    </Row>
                                    <Row>
                                        <Col><p className="sec12-p">you would like to be reached at <input type="email" id='email' placeholder="enter email id" value={email} onChange={(e) => setEmail(e.target.value)} /></p></Col>
                                    </Row>
                                    <Row>
                                        <Col className="sec12-p-div"><p className="sec12-p">I have a query on <input type="text" id='query' placeholder="enter your query" value={query} onChange={(e) => setQuery(e.target.value)} />
                                            <button type="submit"><FontAwesome
                                                className="lp-form-arrow"
                                                name="arrow-circle-right"
                                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', marginLeft: '1rem', color: '#589af1' }}
                                            /></button></p>
                                        </Col>
                                    </Row>
                                </form>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <Link to='/faq'><section className='home-faq'>
                    <Container>
                        <Row>
                            <Col className='home-faq-left'>
                                <h1> &gt;  Which courses are a good fit for me?</h1>
                                <h1> &gt;  Who are our programs for?</h1>
                                <h1> &gt;  What if I need additional time to complete a given course?</h1>
                                <h1> &gt;  What will I have access to after I log in as a free user?</h1>
                                <h1> &gt;  Will I receive a certificate after the completion of a course?</h1>
                                <Link to='/faq'>  <h>See More....</h>     </Link>
                            </Col>
                            <Col className='faq-right d-none d-sm-block'>
                                <Row>
                                    <Col className='faq-img-1'>
                                        <img src="../assets/img/FAQ.png" alt="" />
                                    </Col>
                                    <Col className='faq-img-2'>
                                        <img src="../assets/img/youngwomen.png" alt="" />
                                    </Col>
                                </Row>


                            </Col>
                        </Row>
                    </Container>
                </section></Link>
                <Footer />
            </div>
        </>
    );
}

export default Home;