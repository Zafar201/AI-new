import React, { useEffect, useState } from 'react'
import { Modal, Button, Form, Row, Col, DropdownButton, Dropdown } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux';
import { OtpVerify, register, signin, signout } from '../actions/userAction';
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import OtpInput from 'react-otp-input';

export default function Signin(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('')
    const [mobile, setMobile] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const [otpView, setOtpView] = useState(false)
    const [otp, setOtp] = useState(null)
    


    // const redirect = props.location.search ? props.location.search.split('=')[1]: '/';

    const userSignin = useSelector(state => state.userSignin)
    const { loading, error, userInfo } = userSignin

    const userRegister = useSelector(state => state.userRegister)
    const { loading: registerLoading, error: registerError, userCreatedInfo } = userRegister

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(signin(email, password))
    }

    const submitCreateHandler = (e) => {

       
        e.preventDefault()

        if(username===""||password===""||mobile===""){

        } else {
            console.log({pass:password.length})
            if (password!==confirmPassword &&password.length<8){
                setPasswordError(true)
            } else {
                setPasswordError(false)
                dispatch(register(username, password, email,mobile))
    
                setOtpView(true)
                // handleClose1()
                // handleShow()
            }
        }
        
        
    }

    const otpVerify = () => {
        dispatch(OtpVerify(865424))
    }

    const signoutHandler = () => {
        dispatch(signout())
    }



    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [signInName, setSignInName] = useState("Sign In")

    useEffect(() => {
        
        if(props.btnName){
            setSignInName(props.btnName)
        }

    }, [])


    useEffect(() => {
        if (userInfo) {
            handleClose()
        }
    }, [userInfo])




    return (
        <div>
            {userInfo ?
                (
                    <>
                        <DropdownButton id="dropdown-basic-button" className="cdnav-signed-btn" title={userInfo.name}>
                            <Dropdown.Item onClick={signoutHandler}>Sign Out</Dropdown.Item>
                        </DropdownButton>
                    </>
                )
                :
                (
                    <Button className="signin-nav" onClick={handleShow}>
                        {signInName}
                    </Button>
                )
            }
            <Modal className="si-m" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4 className="wel-back">Welcome Back!</h4><p className="new-to">New to AI Brilliance ? <a className="creat-ac-link" onClick={() => { handleShow1(); handleClose(); }}>Create an account</a></p></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control id="email" placeholder="Enter email or phone number" onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Control type="password" id="password" required placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <p className="new-to"><a className="frg-pass" onClick={() => { handleShow2(); handleClose(); }}>Forgot Password ?</a></p>
                        <Button className="signin-btn" type="submit">
                            Sign In
                        </Button>
                        {loading && <LoadingBox></LoadingBox>}
                        {error && <MessageBox varinat='danger'>{error}</MessageBox>}
                    </Form>

                </Modal.Body>
                {/* <Modal.Footer>
                    <Row className="mdl-footer-row1">
                        <Col className="mdl-footer-1"></Col>
                        <Col md={6}><p className="mdl-footer-p">or continue with</p></Col>
                        <Col className="mdl-footer-1"></Col>
                    </Row>
                    <Row className="mdl-social-grp">
                        <Col md={4} xs={4}><img className="mdl-footer-social" src="../assets/img/Google-logo.png" alt="google logo" /></Col>
                        <Col md={4} xs={4}><img className="mdl-footer-social2" src="../assets/img/facebook.png" alt="google logo" /></Col>
                        <Col md={4} xs={4}><img className="mdl-footer-social2" src="../assets/img/ig.png" alt="google logo" /></Col>
                    </Row>
                </Modal.Footer> */}
            </Modal>



            <Modal className="si-m" show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4 className="wel-back">Create an account</h4><p className="new-to">Create Brilliant Learning Pathways</p></Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {otpView

                    ?   <Form onSubmit={submitCreateHandler}>
                            <Form.Group className="mb-3" controlId="formGroupName">
                                <Form.Control type="name" id='name' placeholder="FullName" onChange={(e) => setUsername(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Control type="email" id='email' placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Control type="phone" id='mobile' placeholder="Mobile Number" onChange={(e) => setMobile(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Control type="password" id='password' placeholder="Create Password" onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Control type="password" id='confirmpassword' placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                            </Form.Group>
                            <p className="new-to">Password must be at least 8 characters long. </p>
                            {passwordError && <MessageBox varinat='danger'>Password mismatch</MessageBox>}
                            <Button className="signin-btn" type='submit'>
                                Create Account
                            </Button>
                        </Form>
                    : <Form onSubmit={otpVerify}>
                            <OtpInput
                                // value={otp}
                                onChange={(e)=>setOtp(e)}
                                numInputs={6}
                                separator={<span>&nbsp;&nbsp;&nbsp;</span>}
                                inputStyle={{borderRadius:'10px',width:'32px',height:'40px',color:'red'}}
                                containerStyle={{marginBottom:'25px',color:'red'}}
                            />
                            <Button className="signin-btn" type='submit'>
                                Verify OTP
                            </Button>
                        </Form>
                    }

                    {registerLoading && <LoadingBox></LoadingBox>}
                    {registerError && <MessageBox variant='danger'>{registerError}</MessageBox>}

                </Modal.Body>
                {/* <Modal.Footer>
                    <Row className="mdl-footer-row1">
                        <Col className="mdl-footer-1"></Col>
                        <Col md={6}><p className="mdl-footer-p">or continue with</p></Col>
                        <Col className="mdl-footer-1"></Col>
                    </Row>
                    <Row className="mdl-social-grp">
                        <Col md={4} xs={4}><img className="mdl-footer-social" src="../assets/img/Google-logo.png" alt="google logo" /></Col>
                        <Col md={4} xs={4}><img className="mdl-footer-social2" src="../assets/img/facebook.png" alt="google logo" /></Col>
                        <Col md={4} xs={4}><img className="mdl-footer-social2" src="../assets/img/ig.png" alt="google logo" /></Col>
                    </Row>
                    <Row>
                        <p className="recaptcha1">By signing up you agree to AIBrilliance Terms of Service and Privacy Policy. This page is protected by reCAPTCHA and is subject to Google’s Terms of Service and Privacy Policy.</p>
                    </Row>
                </Modal.Footer> */}
            </Modal>



            <Modal className="si-m" show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4 className="wel-back">Forgot Password</h4><p className="new-to">Enter the email or phone number used to
                            create the account.</p></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control type="email" placeholder="Enter email or phone number" />
                        </Form.Group>
                    </Form>
                    <Button className="signin-btn" onClick={() => { handleShow3(); handleClose2(); }} >
                        Reset Now
                    </Button>
                </Modal.Body>

            </Modal>


            <Modal className="si-m" show={show3} onHide={handleClose3}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4 className="wel-back">Reset Password</h4><p className="new-to">Enter the OTP received on email or phone number</p></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            <Col className="otp-input otp-input-left">
                                <Form.Control className="otp-input-inside" />
                            </Col>
                            <Col className="otp-input">
                                <Form.Control />
                            </Col>
                            <Col className="otp-input">
                                <Form.Control />
                            </Col>
                            <Col className="otp-input">
                                <Form.Control />
                            </Col>
                            <Col className="otp-input">
                                <Form.Control />
                            </Col>
                            <Col className="otp-input otp-input-right">
                                <Form.Control />
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control type="email" placeholder="New Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Control type="password" placeholder="Re-enter Password" />
                        </Form.Group>
                    </Form>
                    <Button className="signin-btn">
                        Submit
                    </Button>
                </Modal.Body>
            </Modal>
        </div>
    )
}
