import React, { useState } from 'react'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { hireStudent } from '../actions/generalAction'

function HireStudent(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone_number, setphone_number] = useState('')
    const [query, setQuery] = useState('')
    
    const hireStudentReducers = useSelector(state => state.hireStudentReducers)
    const { loading, error, hireQurey, success } = hireStudentReducers
    const dispatch =useDispatch()
    
   const submitHandler=(e)=>{
       e.preventDefault()
       dispatch(hireStudent(name,email,query,phone_number))
       setName('')
       alert("Thank you for submitting your details ")

        setEmail('')
        setQuery('')
        setphone_number('')
        
   }

    return (
        <div className='hire-main'>
            <Row className='hirestudent'>
               <Col md={7} className='hirestudent-first'>
                  <Container className='hirestudent-cntnr'>
                      <h1 >Hire our students !</h1>
                      <div className='hirestudent-div'>
                          <Container className='div-conatiner'>
                            <p>Why Our Students ?</p>
                            <p1>Our students are formally trained by working on hand-on real-life projects and have balanced knowledge in data science, machine learning, and coding!</p1>
                         </Container>                        
                      </div>
                  </Container>
                  <hr/>
                  <Container className='hirestudent-cntnr2'>
                      <h1>Frequently Asked Questions</h1>
                      <Link to='/faq'>   <p>How does our placement process work?</p> </Link>
                      <hr/>
                      <Link to='/faq'>  <p className="mt-3">Is there any placement cost?</p> </Link>
                  </Container>
               </Col>
               <Col MD={5} className='hirestudent-second' style={{ backgroundImage: "url(" + "../assets/img/contactus.png" + ")" }}>
               <a className="fa fa-times close" onClick={()=>props.state()}></a> 
                 <Container>
                     <p>Enter the following details to learn about hiring a student from AIBrilliance.</p>
            <Modal.Body>
                    <Form className='hire' onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="formGroupName">
                            <Form.Control id="name" placeholder="Enter Your Name *" value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Control type="email" id="email" required placeholder="Work Email *"  value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupNumber">
                            <Form.Control id="number" placeholder="Phone Number *"  value={phone_number} onChange={(e) => setphone_number(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupQuery">
                            <Form.Control type="query" id="query" required placeholder="Your organization needs ? *"   value={query} onChange={(e) => setQuery(e.target.value)}  />
                        </Form.Group>
                       
                        <Button className="signin-btn mt-4" type="submit">
                            Submit Details
                        </Button>
                        
                    </Form>

                </Modal.Body>
                 </Container>
               </Col>
            </Row>
        </div>
    )
}

export default HireStudent
