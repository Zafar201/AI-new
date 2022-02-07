import "./coursePhaseTwo.css";
import React, { useState, useEffect } from "react";
import PdfViewer from "./phaseTwo/components/pdfViewer";
import VideoPlayer from "./phaseTwo/components/videoPlayer";
import CourseComponent from "./phaseTwo/components/courseComponent";
import Project from "./phaseTwo/components/project";
import MiniProject from "./phaseTwo/components/miniProject";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { listCourse, getCourseById } from "../actions/courseActions";
import { useDispatch } from "react-redux";

import { 
  MdOutlineArticle as ArticleOutlinedIcon,
  MdCalendarToday as CalendarTodayOutlinedIcon,
  MdOutlineBackupTable as BackupTableOutlinedIcon,
  MdOutlineForum as ForumOutlinedIcon,
  MdOutlinePeopleAlt as PeopleAltOutlinedIcon,
  MdOutlineDriveFileRenameOutline as DriveFileRenameOutlineOutlinedIcon
} from 'react-icons/md';

import Signin from "../components/Signin";
import ModuleListing from "./CourseEnroll/ModuleListing";
import ZoomPage from "./ZoomPage";

var FontAwesome = require("react-fontawesome");

function App() {
  const [sidebarBool, setSidebarBool] = useState(false);
  const [viewId, setViewId] = useState(1);

  const [currentItem, setCurrentItem] = useState();

  const courseList = useSelector((state) => state.courseList);
  const { loading, error, course } = courseList;

  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (params?.courseId) {
      dispatch(getCourseById(params?.courseId));
    }
  }, []);

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "350px";
    // document.getElementById("mySidenav").style.padding = "20px";

    document.getElementById("main").style.marginLeft = "350px";
    document.getElementById("ai-container").style.paddingLeft = "0";
    document.getElementById("ai-container").style.paddingRight = "0";
    setSidebarBool(true);
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("mySidenav").style.padding = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("ai-container").style.paddingLeft = "10vw";
    document.getElementById("ai-container").style.paddingRight = "13vw";

    setSidebarBool(false);
  };

  const showRightPanel = (activeContainer) => {
    console.log({activeContainer});
    switch (activeContainer) {
      case 1:
        return <CourseComponent courseDetails={course}></CourseComponent>;
        break;
      case 2:
        return <VideoPlayer courseDetails={currentItem}></VideoPlayer>;
        break;
      case 3:
        return <PdfViewer courseDetails={currentItem}></PdfViewer>;
        break;
      case 4:
        return <Project courseDetails={currentItem}></Project>;
        break;
      case 5:
        return <MiniProject courseDetails={currentItem}></MiniProject>;
      case 6:
        return <ZoomPage courseDetails={currentItem}></ZoomPage>;
      default:
        return "";
    }
  };

  const sectionTypeFunction = (type, sectionDetails) => {
    setCurrentItem(sectionDetails);
    console.log({sectionDetails});
    if (type?.toUpperCase() === "VIDEO") {
      setViewId(2);
    } else if (type?.toUpperCase() === "PDF") {
      setViewId(3);
    } else if (type?.toUpperCase() === "PROJECT") {
      setViewId(4);
    } else if (type?.toUpperCase() === "MINIPROJECT") {
      setViewId(5);
    } else if (type?.toUpperCase() === "LIVE") {
      setViewId(6);
    }
  };

  return (
    <div className="App">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light ai-navbar my-0"
        style={{ position: "fixed", width: "100%" }}
      >
        <div className="container-fluid px-4">
          <a className="navbar-brand" href="/">
            AI Brillance
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="ai-navbar-nav navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end">
              <li className="nav-item mx-3">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href={`/bootcamp/${params?.courseId}`}
                >
                  Bootcamp
                </a>
              </li>

              <li className="nav-item mx-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/aboutus"
                >
                  About Us
                </a>
              </li>
              {/* <li className="nav-item mx-3 mb-2 mb-md-0">
                <a className="nav-link ai-noti-btn px-3 p-2" href="#"><i className="fas fa-bell"></i></a>
              </li> */}
              <li className="nav-item dropdown mx-3">
                <Signin />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1 p-0">
            <div className="ai-sidebar d-flex align-items-center justify-content-center">
              <ul className="ai-sidebar-ui p-0">
                <li className="mb-40">
                  <ArticleOutlinedIcon size={25} color={"white" } />
                </li>
                <li  className="mb-40">
                  <BackupTableOutlinedIcon size={25} color={"gray" } />
                </li>
                <li  className="mb-40">
                  <ForumOutlinedIcon size={25} color={"gray" } />
                </li>
                <li  className="mb-40">
                  <DriveFileRenameOutlineOutlinedIcon size={25} color={"gray" } />
                </li>
                <li  className="mb-40">
                  <PeopleAltOutlinedIcon size={25} color={"gray" } />
                </li>
                <li  className="mb-40">
                  <CalendarTodayOutlinedIcon size={25} color={"gray" } />
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-md-11 ai-panel-bg p-0"
            style={{ marginTop: "12vh" }}
          >
            <div id="mySidenav" className="sidenav">
              <div className="ai-sidebar-container p-4">
                <h5>Content Navigator</h5>

                <div>
                
                  <ModuleListing data={course?.modules} sectionTypeFunction={sectionTypeFunction}/>
                </div>

                {/* {course?.modules.map((item, index) => (

                  <Accordion defaultActiveKey="0"
                    className="ai-sidebar-card" >
                    <Accordion.Item eventKey="0" >
                      <Accordion.Header className='ai-card'> Module {index + 1} </Accordion.Header>
                      <Accordion.Body className="ai-card-body" >
                        {item?.sections.map((section, Sindex) => (
                          <Row className="acc-body-row" key={section?.sectionId}>
                            <Col > < FontAwesome className="cd3-acc-icon"
                              name="play-circle"
                              style={
                                { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#898989' }
                              }
                            />&nbsp;&nbsp;&nbsp;&nbsp;{index}.{Sindex} {section?.sectionTitle}</Col >
                          </Row>
                        ))}
                      </Accordion.Body >
                    </Accordion.Item>
                  </Accordion >
                ))} */}
                {course?.modules?.map((item, index) =>
                  item?.addToTask && item?.addToTask ? (
                    <div id="accordionExample">
                      <div
                        className="ai-sidebar-card mt-4 ai-cursor"
                        key={index}
                      >
                        <div
                          className="card ai-card"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${index}`}
                          aria-expanded="true"
                          aria-controls={`collapse${index}`}
                        >
                          <div className="card-body ai-card-body">
                            <h5>Module {index + 1}</h5>
                            {/* <h5>Exploratory Data Analysis 1</h5> */}
                          </div>
                        </div>
                        <div
                          id={`collapse${index}`}
                          className="accordion-collapse collapse "
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {item?.sections.map((sec, Sindex) =>
                              item?.addToTask && item?.addToTask ? (
                                <div
                                  className="ai-accordion-item d-flex align-items-center mt-3"
                                  onClick={() =>
                                    sectionTypeFunction(sec.sectionType, sec)
                                  }
                                >
                                  <i className="far fa-play-circle"></i>
                                  <p className="m-0 px-2">
                                    {sec.sectionTitle || sec.sectionType}
                                  </p>
                                </div>
                              ) : (
                                ""
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )
                )}
              </div>
            </div>
            <div id="main">
              <div className="ai-panel-nav position-absolute">
                <i
                  className="fas fa-arrow-alt-circle-left ai-cursor"
                  onClick={closeNav}
                  style={{ display: sidebarBool ? "block" : "none" }}
                ></i>
                <i
                  className="fas fa-arrow-alt-circle-right ai-cursor"
                  onClick={openNav}
                  style={{ display: !sidebarBool ? "block" : "none" }}
                ></i>
              </div>
              <div style={{position:'absolute',right:'2%',background:'#43abfb',height:45,borderRadius:10,padding:10,color:'white',cursor:'pointer'}}>Mark as Completed</div>

              <div id="ai-container">{showRightPanel(viewId)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
