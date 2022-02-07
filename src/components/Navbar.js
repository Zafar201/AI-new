import React, { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav, } from "react-bootstrap"
import Signin from './Signin';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom'




const Navbar1 = (history) => {
    let history1=useHistory();

   const redirect=()=>{
      history1.push('/')
   }

    const onTop = () => {
        if (history.location.pathname == '/') {
            window.scrollTo(0, 5350);
        } else {
            //  let history = useHistory
            history1.push('/')
        }
    }

    const getclr=(curr)=>{
        if(history.location.pathname === curr){
            
            return "#43abfb"
            
            
        }
    }
    const [logo, setLogo] = useState("../assets/img/main-logo.svg")

    const handleResize = () => {
        if (window.innerWidth < 1000) {
            setLogo("../assets/img/main-logo-black.png")
        } else {
            setLogo("../assets/img/main-logo.svg")
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })


    return (
        <Navbar expand="lg" className="nav1 ">
            <Container>
                <LinkContainer to="/"><img className="logo" src={logo} alt="ai brilliance logo" /></LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav ok" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto ">
                        {/* <LinkContainer style={{color: getclr('/')}} to=""><Nav.Link >Home</Nav.Link></LinkContainer> */}
                        <LinkContainer style={{color: getclr('/')}} onClick={redirect} to="#"><Nav.Link>Home</Nav.Link></LinkContainer>
                        <LinkContainer style={{color: getclr('/fullcourse')}} to="/fullcourse"><Nav.Link>Bootcamp</Nav.Link></LinkContainer>
                        <LinkContainer style={{color:"#fff"}} to="#web" onClick={onTop}><Nav.Link>Events</Nav.Link></LinkContainer>
                        <LinkContainer style={{color: getclr('/aboutus')}} to="/aboutus"><Nav.Link>About Us</Nav.Link></LinkContainer>
                        <LinkContainer style={{color: getclr('/faq')}} to="/faq"><Nav.Link>FAQ</Nav.Link></LinkContainer>
                        <Signin />
                    </Nav>
                </Navbar.Collapse>
            </Container>




        </Navbar>

    );
}

export default withRouter(Navbar1) ;