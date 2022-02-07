import React from 'react'

export default function CourseComponent(props) {
    return (
        <div>
            <div className="ai-right-panel ms-5">
                <div className="ai-breadcrumb d-flex align-items-center">
                    <p className="m-0">Home</p>
                    <i className="fas fa-chevron-right m-0 px-1"></i>
                    <p className="m-0">{props?.courseDetails?.slug}</p>
                </div>

                <div className="ai-right-panel-content mt-3">
                    <h5>{props?.courseDetails?.title}</h5>
                    <div className="d-flex justify-content-between ai-estimated">
                        {/* <p>Estimated time to complete : 20m</p> */}
                    </div>
                    <div className="card">
                        <div className="card-body ai-content-img">
                            <img className="img-fluid"
                                src={props?.courseDetails?.thumbnailUrl}></img>
                        </div>
                    </div>


                    <ul className="nav nav-tabs mt-4 " id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">About</button>
                        </li>
                        {/* <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab " data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Transit</button>
                        </li> */}
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Quiz</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active pt-3" id="home" role="tabpanel" aria-labelledby="home-tab">
                            {props?.courseDetails?.description}
                        </div>
                        <div className="tab-pane fade pt-3" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                        <div className="tab-pane fade pt-3" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <div className="card ai-quiz-card">
                                <div className="card-body">
                                    <h6 className="fw-bold">Question 1</h6>
                                    <p>Like most large organizations, the City of Ridgeville uses SQL (Structured Query Language) to access its data. Usually, analysts perform explorations of data by:</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" for="flexRadioDefault1">
                                                    SQL
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                                <label className="form-check-label" for="flexRadioDefault2">
                                                    PHP
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                                <label className="form-check-label" for="flexRadioDefault2">
                                                    JAVA
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                                <label className="form-check-label" for="flexRadioDefault2">
                                                    Script
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-primary mt-3">Submit your answer</button>
                                </div>
                            </div>
                            <div className="card ai-quiz-card mt-4">
                                <div className="card-body">
                                    <h6 className="fw-bold">Question 2</h6>
                                    <p>Like most large organizations, the City of Ridgeville uses SQL (Structured Query Language) to access its data. Usually, analysts perform explorations of data by:</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" for="flexRadioDefault1">
                                                    SQL
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                                <label className="form-check-label" for="flexRadioDefault2">
                                                    PHP
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                                <label className="form-check-label" for="flexRadioDefault2">
                                                    JAVA
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                                <label className="form-check-label" for="flexRadioDefault2">
                                                    Script
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-primary mt-3">Submit your answer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
