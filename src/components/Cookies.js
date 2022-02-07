import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Cookies() {
    return (
          
               
                 <div className="wrapper">
                   <img src="../assets/img/cokies.png" alt=""/>
                    <div className="content">
                        <header>We Store Cookies on your Computer !</header>
                        <p className='cookies-p'>These cookies are used to collect information about how you interact with our website, which allows us to improve user experience. </p> 

                        <p className='cookies-p'> Please refer to our <span className='cookies-span'>Privacy Policy</span>  to learn more.</p>
                        <div className="buttons">
                            <button className="item">I understand</button>
                            {/* <a href="#" className="item">Learn more</a> */}
                        </div>
                    </div> 
            </div> 
               
              
              
      
          

            )
}

            export default Cookies
