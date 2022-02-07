import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { listCourse } from '../actions/courseActions';
import { listCategory } from '../actions/categoryAction'
import { categoryCourse } from '../actions/generalAction';
import LoadingBox from './LoadingBox'
import MessageBox from './MessageBox'

import course from "../dummyJSON/course.json";


export default function CourseDiv() {

    const categoryList = useSelector((state) => state.category);
    const { loading: loading1, error: error1, category } = categoryList;

    // const { loading : loading1, error : error1, categoryList} = courseCategories;

    const userSignin = useSelector((state) => state.userSignin);


    const courseList = useSelector((state) => state.courseList);
    var { loading, error, courses } = courseList;

    const [courseListA, setCourseListA] = useState(courses)


    const courseCategories = useSelector((state) => state.courseCategory);
    const { loading: loading2, error: error2, courseCategory } = courseCategories;

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listCourse())
        dispatch(categoryCourse())
        dispatch(listCategory())


        // filterItem()

    }, [dispatch])

    const [cat, setCat] = useState(5)



    const activeBtn = (e, category) => {

        // let cocourseListurs = courseList.courses.filter(e => e.domain === category)

        // listBootcamps(cocourseListurs)

        var elems = document.querySelector(".course-cat-active");
        if (elems !== null) {
            elems.classList.remove("course-cat-active");
        }
        e.target.parentNode.classList.add("course-cat-active")
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


    const listBootcamps = (courses) => {
        let newArray = []

        courses.slice(0, 4).map(elem => {
            const { id, title, thumbnailUrl, courseType } = elem;
            newArray.push(

                <Col md="3" key={id} className="all-course-card">
                    <Link to={{ pathname: `/bootcamp/${id}`, state: { cid: id }, }}> <div className="course-card" style={{ backgroundImage: "url(" + thumbnailUrl + ")" }}>
                        <div className="free-course">{courseTypeFun(courseType, id)}</div>
                        <div className="course-detail">
                            <h5>{truncate(title, 45)}</h5>
                            {/* <h5>{truncate(name,30)} :&nbsp;<span>{truncate(sub_name,30)}</span></h5> */}
                            {/* <p><b>{truncate(name, 30)} :</b>{truncate(sub_name, 30)}</p>
                                <div className="user-credit">
                                    <img src="../assets/img/course-user.svg" alt="course users" /><span className="uc-no">25</span>
                                    <img src="../assets/img/course-credit.svg" alt="course credits" /><span className="uc-no">{course_code}</span>
                                </div>
                                <Row className="prof-details">
                                    <Col className="col-pd-0 mw-mc">
                                        <img src={author_image} className="prof-pic" alt="prof-pic" />
                                    </Col>
                                    <Col className="col-pd-0">
                                        <Row>
                                            <Col md="12" className="col-pd-0 prof-name">{author_name}</Col>
                                            <Col className="col-pd-0 prof-dsgn">{author_position}</Col>
                                        </Row>
                                    </Col>
                                </Row> */}
                        </div>
                    </div>
                    </Link>
                </Col>

            )
        })


        return newArray

    }

    return (
        <section className="sec2">
            <div className="container">
                <Row>
                    <Col md={3}><h2 className="sec2-h2">Our Bootcamp and Training Courses</h2></Col>
                    <Col md={9} id="all-c-cat" className="all-course-cat">
                        {loading1 ? <LoadingBox></LoadingBox> :
                            error1 ? <MessageBox>error</MessageBox>
                                :
                                (
                                    <>
                                        {
                                            category ? (
                                                null
                                                // <div className="course-cat course-cat-active" onClick={(e) => { setCat(category[0].id); activeBtn(e) }} ><h5>{category[0].label}</h5></div>
                                            ) : null
                                        }
                                        {
                                            category && category.slice(0, 3).map((cate) => {
                                                return (<div className="course-cat" onClick={(e) => { setCat(cate.id); activeBtn(e, cate.value) }} ><h5>{cate.label}</h5></div>)
                                            })}
                                    </>
                                )}
                    </Col>
                </Row>

                <Row>
                    {loading ? <LoadingBox></LoadingBox> :
                        error ? <MessageBox>{error}</MessageBox>
                            :
                            (
                                <>{listBootcamps(courses)}</>
                            )}
                </Row>
                <Row>
                    <Col md={12} className="all-course-cat ">
                        <LinkContainer to="/fullcourse"><div className="course-cat view-all"><h5>View All Courses &nbsp;<FontAwesome
                            className="long-arrow-fw"
                            name="arrow-right"
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        /></h5></div></LinkContainer>
                    </Col>
                </Row>
            </div>
        </section>

        //     <section className="sec2">
        //     <div className="container">
        //         <Row>
        //             <Col md={3}><h2 className="sec2-h2">Our Bootcamp and Training Courses</h2></Col>
        //             <Col md={9} className="all-course-cat">
        //                 <div className="course-cat  course-cat-active" onClick={(e) => { filterItem(1); activeBtn(e) }} ><h5>Data Science & ML</h5></div>
        //                 <div className="course-cat" onClick={(e) => { filterItem(2); activeBtn(e) }} ><h5>Deep Learnings</h5></div>
        //                 <div className="course-cat" onClick={(e) => { filterItem(3); activeBtn(e) }}><h5>Artificial Intelligence</h5></div>
        //             </Col>
        //         </Row>
        //         <Row>




        //                                 <Col md="3"  className="all-course-card">
        //                                     <div className="course-card" style={{ backgroundImage: "url(" + "../assets/img/course2.jpg" + ")" }}>
        //                                         <div className="free-course">free</div>
        //                                         <div className="course-detail">
        //                                             <h5> Information Visualization : </h5><span>Using Python:</span>

        //                                             <div className="user-credit">
        //                                                 <img src="../assets/img/course-user.svg" alt="course users" /><span className="uc-no">25</span>
        //                                                 <img src="../assets/img/course-credit.svg" alt="course credits" /><span className="uc-no">150</span>
        //                                             </div>
        //                                             <Row className="prof-details">
        //                                                 <Col className="col-pd-0 mw-mc">
        //                                                     <img src="../assets/img/Rectangle-WS.png" className="prof-pic" alt="prof-pic" />
        //                                                 </Col>
        //                                                 <Col className="col-pd-0">
        //                                                     <Row>
        //                                                         <Col md="12" className="col-pd-0 prof-name">Rahul Rai</Col>
        //                                                         <Col className="col-pd-0 prof-dsgn">CEO,AIBrilliance</Col>
        //                                                     </Row>
        //                                                 </Col>
        //                                             </Row>
        //                                         </div>
        //                                     </div>
        //                                 </Col>

        //                                 <Col md="3"  className="all-course-card">
        //                                     <div className="course-card" style={{ backgroundImage: "url(" + "../assets/img/course2.jpg" + ")" }}>
        //                                         <div className="free-course">free</div>
        //                                         <div className="course-detail">
        //                                             <h5> Data Science : </h5><span>Using Python:</span>

        //                                             <div className="user-credit">
        //                                                 <img src="../assets/img/course-user.svg" alt="course users" /><span className="uc-no">25</span>
        //                                                 <img src="../assets/img/course-credit.svg" alt="course credits" /><span className="uc-no">150</span>
        //                                             </div>
        //                                             <Row className="prof-details">
        //                                                 <Col className="col-pd-0 mw-mc">
        //                                                     <img src="../assets/img/Rectangle-WS.png" className="prof-pic" alt="prof-pic" />
        //                                                 </Col>
        //                                                 <Col className="col-pd-0">
        //                                                     <Row>
        //                                                         <Col md="12" className="col-pd-0 prof-name">Rahul Rai</Col>
        //                                                         <Col className="col-pd-0 prof-dsgn">CEO,AIBrilliance</Col>
        //                                                     </Row>
        //                                                 </Col>
        //                                             </Row>
        //                                         </div>
        //                                     </div>
        //                                 </Col>

        //                                 <Col md="3"  className="all-course-card">
        //                                     <div className="course-card" style={{ backgroundImage: "url(" + "../assets/img/course2.jpg" + ")" }}>
        //                                         <div className="free-course">Paid</div>
        //                                         <div className="course-detail">
        //                                             <h5> AI & ML : </h5><span>Using Python:</span>

        //                                             <div className="user-credit">
        //                                                 <img src="../assets/img/course-user.svg" alt="course users" /><span className="uc-no">25</span>
        //                                                 <img src="../assets/img/course-credit.svg" alt="course credits" /><span className="uc-no">150</span>
        //                                             </div>
        //                                             <Row className="prof-details">
        //                                                 <Col className="col-pd-0 mw-mc">
        //                                                     <img src="../assets/img/Rectangle-WS.png" className="prof-pic" alt="prof-pic" />
        //                                                 </Col>
        //                                                 <Col className="col-pd-0">
        //                                                     <Row>
        //                                                         <Col md="12" className="col-pd-0 prof-name">Rahul Rai</Col>
        //                                                         <Col className="col-pd-0 prof-dsgn">CEO,AIBrilliance</Col>
        //                                                     </Row>
        //                                                 </Col>
        //                                             </Row>
        //                                         </div>
        //                                     </div>
        //                                 </Col>

        //                                 <Col md="3"  className="all-course-card">
        //                                     <div className="course-card" style={{ backgroundImage: "url(" + "../assets/img/course2.jpg" + ")" }}>
        //                                         <div className="free-course">free</div>
        //                                         <div className="course-detail">
        //                                             <h5> AI & ML : </h5><span>Using Python:</span>

        //                                             <div className="user-credit">
        //                                                 <img src="../assets/img/course-user.svg" alt="course users" /><span className="uc-no">25</span>
        //                                                 <img src="../assets/img/course-credit.svg" alt="course credits" /><span className="uc-no">150</span>
        //                                             </div>
        //                                             <Row className="prof-details">
        //                                                 <Col className="col-pd-0 mw-mc">
        //                                                     <img src="../assets/img/Rectangle-WS.png" className="prof-pic" alt="prof-pic" />
        //                                                 </Col>
        //                                                 <Col className="col-pd-0">
        //                                                     <Row>
        //                                                         <Col md="12" className="col-pd-0 prof-name">Rahul Rai</Col>
        //                                                         <Col className="col-pd-0 prof-dsgn">CEO,AIBrilliance</Col>
        //                                                     </Row>
        //                                                 </Col>
        //                                             </Row>
        //                                         </div>
        //                                     </div>
        //                                 </Col>





        //         </Row>
        //         <Row>
        //             <Col md={12} className="all-course-cat ">
        //                 <LinkContainer to="/fullcourse"><div className="course-cat view-all"><h5>View All Courses &nbsp;<FontAwesome
        //                     className="long-arrow-fw"
        //                     name="arrow-right"
        //                     style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        //                 /></h5></div></LinkContainer>
        //             </Col>
        //         </Row>
        //     </div>
        // </section>
    )
}
