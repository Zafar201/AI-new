import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { Row, Col } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import CdNav from './CdNav'

import { useDispatch, useSelector } from 'react-redux';
import { listCourse } from '../actions/courseActions';
import LoadingBox from './LoadingBox'
import MessageBox from './MessageBox'
import Footer from './Footer';
import { taskList } from '../actions/generalAction';

// import course from "../dummyJSON/course.json";

export default function FullCourse() {

    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const courseList = useSelector((state) => state.courseList);
    const { loading, error, courses } = courseList;
    const userSignin = useSelector((state) => state.userSignin);

    console.log(courses)

    const task = useSelector((state) => state.task);
    const { loading: taskLoading, error: taskError, taskQuery } = task;

    const [taskFilter, setTaskFilter] = useState([])

    const sidebarfun = () => {
        let c = courses.filter(e => e.filters)
        setTaskFilter(c)
        if (sidebarIsOpen) {
            setSidebarIsOpen(false)
        } else {
            setSidebarIsOpen(true)
        }
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listCourse())
        dispatch(taskList())
    }, [dispatch])

    useEffect(() => {

    }, [])

    const [items, setItems] = useState([])
    const [price, setPrice] = useState("All")

    useEffect(() => {
        if (!loading) {
            if (!error) {
                setItems(courses)
            }
        }

    }, [courses, loading, error])




    const { pathname } = useLocation();



    const filterItem = (categItem) => {
        const updatedItems = courses.results.data.filter((curElem) => {
            return curElem.course_type == categItem

        })
        setItems(updatedItems)

    }

    const filterItem1 = (categItem) => {
        if (categItem == "ALL") {
            const updatedItems = courses
            setItems(updatedItems)
            console.log(updatedItems)

        }
        if (categItem == "FREE") {
            const updatedItems = courses.filter((curElem) => {
                return curElem.courseType == "FREE"
            })
            setItems(updatedItems)
            console.log(updatedItems)

        }
        if (categItem == "PAID") {
            const updatedItems = courses.filter((curElem) => {
                return curElem.courseType == "PAID"
            })
            setItems(updatedItems)
            console.log(updatedItems)

        }


    }

    function listCoursesDiv(courses) {
        let result = []

    }

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "...." : str
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const activeBtn = (e) => {

        var elems = document.querySelector(".course-cat-active");
        if (elems !== null) {
            elems.classList.remove("course-cat-active");
        }
        var elems1 = document.querySelector(".af-active");
        if (elems1 !== null) {
            elems1.classList.remove("af-active");
        }
        e.target.parentNode.classList.add("course-cat-active")
    }

    const afActive = (e) => {
        var elems = document.querySelector(".af-active");
        if (elems !== null) {
            elems.classList.remove("af-active");
        }
        e.target.classList.add("af-active")
    }
    const courseTypeFun = (type, id) => {
        // console.log(id, userSignin)
        let user = userSignin?.studentInfo?.purchasedCourses.filter(e => e === id)
        console.log(user)
        if (type.toUpperCase() === "FREE") {
            if (user?.length) {
                return "ENROLLED"
            } else {
                return "FREE"
            }
        } else if (type.toUpperCase() === "PAID") {
            if (user?.length) {
                return "ENROLLED"
            } else {
                return "PAID"
            }

        }
    }


console.log({items})
    return (
        <div className="fc-main">
            <div>
                <CdNav />
            </div>
            <div className="fc-container">
                <div className="container fullcourse-padding">
                    <Row className="fc-btns-grp">
                        <Col className="fc-discover">
                            <h4>Discover</h4>
                        </Col>
                        <Col className="all-course-cat">
                            <div className="course-cat course-cat-active" onClick={(e) => { filterItem1('ALL'); setItems(courses); activeBtn(e); setPrice("ALL") }} ><h5>All</h5></div>
                            <div className="course-cat" onClick={(e) => { filterItem1('FREE'); activeBtn(e); setPrice("FREE") }} ><h5>Free</h5></div>
                            <div className="course-cat" onClick={(e) => { filterItem1('PAID'); activeBtn(e); setPrice("PAID") }}><h5>Paid</h5></div>
                        </Col>
                        <Col className="all-course-cat all-crse-end">
                            <div className="course-cat1" onClick={sidebarfun} ><h5 >Advanced Filters &nbsp;<FontAwesome
                                className="adv-fil"
                                name={!sidebarIsOpen ? "sort-down" : "sort-up"}
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            /></h5></div>
                        </Col>
                    </Row>
                    {sidebarIsOpen ? (
                        <Row className='advancedfilter'>
                            <Col className="all-course-cat">
                                {taskFilter ? (
                                    taskFilter.map(el => {
                                        return (
                                            <div className="course-cat" onClick={(e) => { afActive(e); filterItem1(el?.id); }}  ><h5>{el}</h5></div>
                                        )
                                    })
                                ) : null}
                            </Col>

                        </Row>
                    ) : ""}

                    <Row style={{ minHeight: "300px" }}>
                        {loading ? <LoadingBox></LoadingBox> :
                            error ? <MessageBox>{error}</MessageBox> :
                                (
                                    <>
                                        {items ? (
                                            items.map((elem) => {
                                                const { id, title, thumbnailUrl,courseType,slug,author,sellingPrice } = elem;
                                                return (

                                                    <Col md="3" sm='6' key={id} className="all-course-card ">
                                                        <Link to={{ pathname: `/bootcamp/${id}`, state: { cid: id }, }}>    
                                                        <div className="course-card" style={{ backgroundImage: "url(" + thumbnailUrl + ")" }}>
                                                            {courseType==='FREE'
                                                            ?<div className="free-course">{courseType}</div>
                                                            :<div className="paid-course">$ {sellingPrice}</div> }
                                                            
                                                            <div className="course-detail">
                                                                {/* <h5>{truncate(title, 45)}</h5> */}
                                                                {/* <p><b>{truncate(name, 30)} :</b>{truncate(sub_name, 30)}</p> */}
                                                                <h5>{truncate(slug,30)} : <span>{truncate(slug,30)}</span></h5>
                                                            <div className="user-credit">
                                                                <img src="../assets/img/course-user.svg" alt="course users" /><span className="uc-no mt-5">25</span>
                                                                <img src="../assets/img/course-credit.svg" alt="course credits" /><span className="uc-no mt-5">150</span>
                                                            </div>
                                            
                                                            </div>
                                                            <Row style={{position:'absolute',bottom:15}} className="prof-details">
                                                                <Col className="col-pd-0 mw-mc">
                                                                    <img style={{borderRadius:10,width:35,height:35,background:'#d8526b'}} src={'../assets/img/rahul-pink.png'} className="prof-pic" alt="prof-pic" />
                                                                </Col>
                                                                <Col className="col-pd-0">
                                                                    <Row>
                                                                        <Col style={{color:'white',fontWeight:'bold'}} md="12" className="col-pd-0 prof-name">{author}</Col>
                                                                        <Col className="col-pd-0 prof-dsgn">CEO,AIBrilliance</Col>
                                                                    </Row>

                                                                </Col>
                                                            </Row> 
                                                        </div>
                                                        </Link>
                                                    </Col>
                                                )
                                            })) : <MessageBox>No Courses Are Found</MessageBox>}
                                    </>
                                )}
                    </Row>
                </div>
                <Footer />
            </div>
        </div>
    )
}
