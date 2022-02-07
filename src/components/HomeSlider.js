import { useState, useRef, useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import FontAwesome from "react-fontawesome"
function HomeSlider() {

    var bg1 = "../assets/img/homeslider1.jpg"
    var bg2 = "../assets/img/women-empower.png"
    var bg3 = "../assets/img/homeslider3.jpg"
    const [programList, setProgramList] = useState([{ img: `${bg1}`, id: 1, title1: "Corporate Training & Talent Partner Program", para2: "", para1: "The number of women in the data science field, especially minority women, is low compared to men. Let’s reverse that trend! AIBrilliance offers tuition discounts for women pursuing our programs. Are you interested in applying? Please get in touch!" }, { img: `${bg2}`, id: 2, title1: "Empowering Women in Data Science", para2: "Also act as a talent partner to find you the right data science and machine learning scientists who graduate from our programs, suited to your requirements", para1: "High quality corporate data science and machine learning programs for upskilling the workforce are hard to find! We can deliver both in-person and online specialized courses to upskill corporate teams at specialized corporate rates. " }, { img: `${bg3}`, id: 3, title1: "Corporate Training & Talent Partner Program", para1: "The number of women in the data science field, especially minority women, is low compared to men. Let’s reverse that trend! AIBrilliance offers tuition discounts for women pursuing our programs. Are you interested in applying? Please get in touch!" }])
    const [displaying, setDisplaying] = useState({ img: `${bg1}`, id: 1, title1: "Corporate Training & Talent Partner Program", para2: "", para1: "The number of women in the data science field, especially minority women, is low compared to men. Let’s reverse that trend! AIBrilliance offers tuition discounts for women pursuing our programs. Are you interested in applying? Please get in touch!" })
    const buttonRef = useRef("accept-button");

    const [timeup, setTimeup] = useState(1)

    function sliderTime() {
        setTimeout(function () {
            setTimeup(timeup + 1)
        }, 10000);
    }

    useEffect(() => {

        programList.forEach((element, i) => {

            setTimeout(
                function () {
                    setDisplaying(element)
                }
                , i * 3000);
        });
        sliderTime()
    }, [timeup]);

    return (



        <div className="pg-container fluid" style={{ backgroundImage: `url(${displaying.img})`, backgroundPosition: "center center", backgroundSize: "cover" }}>
            <div className="pg-toBeDisplayed" >
                <ul style={{ display: "flex", justifyContent: "space-around" }}>
                    {
                        programList.map((itm) => {
                            return (
                                <div className="pg-contents">
                                    {itm.id !== displaying.id ? <li >
                                        <img src={itm.img} onClick={() => setDisplaying(itm)} alt="" style={{}} />
                                    </li> : null}

                                </div>
                            )
                        })}
                </ul>
            </div>
            <div className="content">
                <h1>{displaying.title1}</h1>
                <br />
                <p>{displaying.para1}</p>
                <p>{displaying.para2}</p>
                <div className="slider-input-div">
                    <h6 className="home-slider-h6">Want to know more ?</h6>
                    <Row>
                        <Col sm={12} className="slider-col">
                            <input type="email" className="home-slider-input" placeholder="enter your email id @ this space" /><FontAwesome
                                size="2x"
                                name="arrow-circle-right"
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', marginLeft: '1rem', color: '#589af1' }}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="slidernav">
                <nav className="controls">
                    {programList.map((itm) => {
                        return (

                            <button className="buttonslider" type="button" ref={buttonRef} style={itm.id === displaying.id ? { backgroundColor: "chocolate" } : { backgroundColor: "#333" }} onClick={() => setDisplaying(itm)}></button>
                        )
                    })}
                </nav></div>

        </div>
    )
}

export default HomeSlider;
