import React, { useEffect, useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav, Modal, Button, Form, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux';
import { register, signin, signout } from '../actions/userAction';
import { Link, Redirect,useHistory } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import Signin from './Signin';
import { withRouter } from 'react-router';


const CdNav = (history) => {

    let history1=useHistory();
   
   
    const getclr=(curr)=>{
        if(history.location.pathname === curr){          
            return "#43abfb"  
                    
        }
    }


    const onTop = () => {
        if (history.location.pathname == '/') {
            window.scrollTo(0, 5350);
        } else {
            //  let history = useHistory
            history1.push('/')
        }
    }



    return (
        <Navbar expand="lg" className="nav2">
            <Container>
                <LinkContainer to="/"><img className="logo" src="../assets/img/main-logo-black.png" alt="ai brilliance logo" /></LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav no" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto cdnav2">
                        <LinkContainer style={{backgroundColor:getclr('/')}} to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                        <LinkContainer style={{color: getclr('/fullcourse')}} to="/fullcourse"><Nav.Link>Bootcamp</Nav.Link></LinkContainer>
                        <LinkContainer   to="#web" onClick={onTop}><Nav.Link>Events</Nav.Link></LinkContainer>
                        <LinkContainer   to="/aboutus"><Nav.Link>About Us</Nav.Link></LinkContainer>
                        <LinkContainer  style={{color: getclr('/faq')}} to="/faq"><Nav.Link>FAQ</Nav.Link></LinkContainer>
                        <Signin/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >

    );
}

export default withRouter(CdNav);