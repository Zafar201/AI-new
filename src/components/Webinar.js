import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { webinarCourse } from '../actions/webinarAction'
import LoadingBox from './LoadingBox'
import MessageBox from './MessageBox'
import ZoomPage from './ZoomPage'



function Webinar() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const webinarList = useSelector(state => state.webinarList)
    const { loading: webinarLoading, error: webinarError, webinar } = webinarList

    console.log(webinar)

    const dispatch = useDispatch()

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



    const [items, setItems] = useState([])

    useEffect(() => {
        dispatch(webinarCourse())
        console.log(webinar, 'webinar');
    }, [])

    useEffect(() => {
        if (!webinarLoading) {
            if (!webinarError) {
                if (webinar?.results?.data) {
                    setItems(webinar?.results?.data)
                }
            }
        }
    }, [webinar])



    const filterItem = (categItem) => {
        const updatedItems = webinar.results.data.filter((curElem) => {
            return curElem.status == categItem


        })
        setItems(updatedItems)

    }



    const btnPast = () => {
        const upcoming = document.getElementById("upc")
        upcoming.classList.remove("course-cat-active1")
    }

    const activeBtn = (e) => {
        var elems = document.querySelector(".course-cat-active1");
        if (elems !== null) {
            elems.classList.remove("course-cat-active1");
        }
        e.target.classList.add("course-cat-active1")
    }

    return (
        <div id='web'>
            <section className="sec10">
                <Container>
                    <Row><h2 className="sec10-h2">Webinars</h2></Row>
                    <Row className="justify-content-md-center">
                        <Col className="all-course-cat mb-5">
                            <div className="course-cat" onClick={(e) => { setItems(webinar.results.data); activeBtn(e); btnPast(); }} ><h5 className="course-cat-active1">All</h5></div>
                            <div className="course-cat" onClick={(e) => { filterItem('Upcoming'); activeBtn(e) }} ><h5 id="upc" className="">Upcoming</h5></div>
                            <div className="course-cat" onClick={(e) => { filterItem('Past'); activeBtn(e); btnPast(); }}><h5 className=''>Past</h5></div>
                        </Col>
                    </Row>


                    <Modal className="sec-10-modal" show={show} onHide={handleClose}>

                        <Modal.Body>
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    <div className='zoom-sec1'>
                                        <h2>Industrial Applications -1</h2>
                                    </div>
                                </Modal.Title>
                            </Modal.Header>
                            <ZoomPage />
                        </Modal.Body>

                    </Modal>
                    <Row className="web1-row">
                        {
                            webinarLoading ? (<LoadingBox></LoadingBox>) :
                                webinarError ? (<MessageBox>{webinarError}</MessageBox>) :
                                    items ? (
                                        webinar.map((elem) => {
                                            const { id, date, imageUrl, name, webinar_link,youtube_link, status, time,title } = elem;
                                            return (

                                                <>

                                                    <Col className="web1-col mt-4" md={4} >
                                                        <a href={youtube_link} target="_blank">
                                                        <button className="webinar-btn" variant="light" >
                                                            <div className="web1-main">
                                                                <img className="web1-img" src={"https://media-exp1.licdn.com/dms/image/C561BAQEcTVj7Om80pQ/company-background_10000/0/1605548292715?e=2159024400&v=beta&t=mnQVMZnkrk9aedSZa9CI9OM3zb9kkzskWzO_OrwBME8"} />
                                                                <h4 className="web-name">{title}</h4>
                                                                <div className="web1-content">
                                                                    <br />
                                                                    <h6>{date}</h6>
                                                                </div>
                                                            </div>
                                                        </button>
                                                        </a>
                                                    </Col>

                                                </>
                                            )
                                        })) : <MessageBox>No Webinar Are Found</MessageBox>}
                    </Row>

                </Container>
            </section>
        </div >
    )
}

export default Webinar
