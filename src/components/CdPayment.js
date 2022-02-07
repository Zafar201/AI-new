import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useLocation, useParams } from "react-router-dom";
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import CdNav from './CdNav'
import { useSelector } from 'react-redux';
import { getCourseById } from '../actions/courseActions';
import { useDispatch } from 'react-redux';
import LoadingBox from './LoadingBox';
import { paymentAction } from '../actions/generalAction';
import MessageBox from './MessageBox';
import { withRouter } from 'react-router';
import Signin from './Signin';
import { applyCouponCode } from '../actions/couponAction';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });



const CdPayment = (props) => {
    const courseStore = useSelector((state) => state.courseList);
    const { loading, error, course } = courseStore;

    const paymentReducers = useSelector(state => state.paymentReducers);
    const { loading: loadingPayment, error: errorPayment, paymentStatus } = paymentReducers;

    const userSignin = useSelector(state => state.userSignin);
    const { loading: userLoading, error: userError, userInfo, studentInfo } = userSignin;

    const [sdkReady, setSdkReady] = useState(false)
    const [couponCode, setCouponCode] = useState('');
    const [priceDetails, setPriceDetails] = useState({});
    const location = useLocation();
    const cid = location.state?.cid2
    const { courseId } = useParams()

    const [currentId, setCurrentId] = useState(course?.batchDates[0])

    console.log(course)

    const [sc, setSc] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        if (courseId) {
            dispatch(getCourseById(cid))
        }
    }, []);

    useEffect(() => {
        if (course?.discountedPrice) {
            setPriceDetails({
                preDiscount: course.discountedPrice,
                postDiscount: course.discountedPrice,
                discount: 0,
                couponLabel: '',
                status: '',
            })
        }
    }, [course?.discountedPrice]);

    // useEffect(()=>{
    // const addPayPalScript = async()=>{
    //     // const {data} =await axios.get('http://192.241.138.220/app/api/payment')
    //     const script =document.createElement('script')
    //     script.type="text/javascript";
    //     script.src=`https://www.paypal.com/sdk/js?client-id=AcUwPjlypysekqGEczayaPd25tP_unAwzLznYt6vJe1EAAAqkhPRrnZpb4a4o3g8IxOomuOOOxJWo6TW`
    //     script.async =true;
    //     script.onload=()=>{
    //         setSdkReady(true)
    //     }
    //     // document.body.appendChild(script)
    // }
    //  if(!window.paypal){
    //      addPayPalScript()
    //  }else{
    //      setSdkReady(true)
    //  }
    //  },[])


    const successPaymentHandler = () => {

    }

    const payment = () => {
        dispatch(paymentAction(sc.id, sc.name, sc.price))


        //  history.push('/')   
    }
    if (paymentStatus) {
        // history.push(paymentStatus.payment_redirect_page)
        window.location.href = paymentStatus.payment_redirect_page


    }


    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: priceDetails.postDiscount,
                    },
                },
            ],
        });
    };

    const onApprove = (data, actions) => {
        return actions.order.capture();
        if (data) {
            // make postAPI call here
        }
    };

    const handleCouponCodeChange = (e) => {
        setCouponCode(e.target.value);
    };

    const handleCouponApply = () => {
        if (couponCode) {
            dispatch(applyCouponCode({ label: couponCode, amount: course.discountedPrice, studentId: studentInfo.id }))
                .then(data => {
                    if (data) {
                        setPriceDetails(data)
                    }
                })
                .catch(console.error)
        }
    };

    const covertDateformat = (dateString) => {

        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        let date = new Date(dateString)

        let day = date.getDay()
        let month = monthNames[date.getMonth()]
        let year = date.getFullYear()

        return day + " " + month + " " + year

    }


    return (
        <div>
            <CdNav />
            <section className="cdp-sec1">
                <Container className="cd-payment">
                    <Row>
                        <Col md={7} className="cdp-col1">
                            <Row >
                                <Col md={12} className="cd1-breadcrumbs" >
                                    <h6 > Bootcamp &gt; {course.title} &gt; Course Details </h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} className="cdp-os">
                                    <h5>Order summary</h5>
                                </Col>
                            </Row>
                            <Row className="Course-Name mt-4">
                                <Col md={6}>
                                    <h4>Course Name</h4>
                                </Col>
                                <Col md={6}>
                                    <h4 className="cdp-price">Price</h4>
                                </Col>
                            </Row>
                            <hr className="cdp-hr" />
                            <Row>
                                <Col md={6} className="cdp-cn">
                                    <h4>{course.domain}:</h4>
                                    <h5>{course.title}</h5>
                                    <p className="mt-4 mb-1 cdp-modules"><strong>{course?.modules?.length}</strong> Modules </p>
                                    {/* • <strong>4</strong> Mini Project</p>
                                    <p className="cdp-modules"><strong>1</strong> Major Project • <strong>36h 15m</strong> total length</p> */}
                                </Col>
                                <Col md={6} className="cdp-price">
                                    <h5>{course.sellingPrice}.<span className="dbl-zero">00</span></h5>
                                </Col>
                            </Row>
                            <Row>
                                {course?.batchDates.map((item, index) => (
                                    <Col md={6} className={currentId === item ? "cdp-radio cdp-active" : "cdp-radio"}>
                                        <div className="form-check">
                                            <input className="form-check-input cdp-radio-btn" onClick={() => setCurrentId(item)} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label cdp-batch" for="flexRadioDefault1">
                                                Batch {index + 1} - {covertDateformat(item)}
                                            </label><br />
                                            {/* <label className="form-check-label cdp-slot" for="flexRadioDefault1">
                                                Slots available 12/25
                                            </label> */}
                                        </div>
                                    </Col>))}
                                {/* <Col md={6} className="cdp-radio">
                                    <div className="form-check">
                                        <input className="form-check-input cdp-radio-btn" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label cdp-batch" for="flexRadioDefault1">
                                            Batch 02 - 12<span className="dbl-zero">th</span> Sep 2021
                                        </label><br />
                                        <label className="form-check-label cdp-slot" for="flexRadioDefault1">
                                            Slots available 12/25
                                        </label>
                                    </div>
                                </Col> */}
                            </Row>
                        </Col>
                        <Col md={{ span: 4, offset: 1 }} className="cdp-col2">
                            <Row className="cdp-col2-box">
                                <Col md={12} className="col-coupon">
                                    <h6>Have a Coupon ?</h6>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col md={8} className="cpn-input">
                                    <Form.Control type="text" placeholder="Enter the valid coupon" onChange={handleCouponCodeChange} />
                                </Col>
                                <Col md={4}>
                                    <Button className="cpn-apply-btn" onClick={handleCouponApply}>Apply</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="cdp-col2-hr mt-2">
                                    <hr />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <h6 className="cdp-box-name">Price</h6>
                                </Col>
                                <Col md={6}>
                                    <h6 className="cdp-box-price">${priceDetails?.preDiscount}
                                        {/* <span className="dbl-zero">00</span> */}
                                    </h6>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <h6 className="cdp-box-name">Coupon</h6>
                                </Col>
                                <Col md={6}>
                                    <h6 className="cdp-box-price cdp-green-price">-${priceDetails?.discount}
                                        {/* <span className="dbl-zero">00</span> */}
                                    </h6>
                                </Col>
                            </Row>
                            {/* <Row>
                                <Col md={6}>
                                    <h6 className="cdp-box-name">Subtotal</h6>
                                </Col>
                                <Col md={6}>
                                    <h6 className="cdp-box-price">$10.<span className="dbl-zero">95</span></h6>
                                </Col>
                            </Row> */}
                            <Row>
                                <Col className="cdp-col2-hr">
                                    <hr />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <h5 className="cdp-box-total">Total (including tax)</h5>
                                </Col>
                                <Col md={6}>
                                    <h6 className="cdp-box-price">${priceDetails?.postDiscount}
                                        {/* <span className="dbl-zero">95</span> */}
                                    </h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="cdp-col2-hr">
                                    {/* {!sdkReady? <LoadingBox></LoadingBox>: */}
                                    {userInfo ? (
                                        <PayPalButton
                                            createOrder={(data, actions) => createOrder(data, actions)}
                                            onApprove={(data, actions) => onApprove(data, actions)}
                                        />
                                    ) :
                                        (
                                            //    <button className='paypal'>Sign in to purchase</button>
                                            <Signin className='paypal' />
                                        )}


                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
export default withRouter(CdPayment) 