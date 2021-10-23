import React from 'react';
import './AssignmentContent.css'


const AssignmentContent = () => {
    return (
        <div> 
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 text-start"> 
                            <h2>Projects Assignment 1</h2>
                            <div className="menu">
                                <hr />
                                <a href="#"> <span>Due</span> No Due Date </a>  
                                <a href="#"> <span>Points</span> 20</a> 
                                <a href="#"> <span>Submitted</span>a    Website url</a> 
                                <hr />
                            </div>
                            <div className="url-link my-4">
                                <a href="#">https://ineuron.ai/home</a>
                            </div>
                            <div className="info-assignmnet">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Website URL</button>
                                </li>
                            </ul>  
                            <div class="tab-content border py-5 px-3 ">
                                <p>copy and paste the link to the website you'd like to submit for this assignment</p>
                                <div className='d-flex w-75 align-items-center'>
                                    <span className='me-3'>Website url :</span>
                                    <div>
                                         <input type="url" className='form-control' />
                                    </div> 
                                </div>
                                <div className="comment w-50 my-3">
                                    <textarea className='form-control' placeholder='comment'></textarea>
                                </div>
                                <div className="submit">
                                    <input className='btn btn-danger me-3' type="submit" value='cancel' />
                                    <input className='btn btn-primary' type="submit" value='Submit Assignment' />
                                </div>
                            </div>  
                            </div>
                        </div>
                        <div className="col-md-3 col-md-3">
                            <div className="submision-content text-start">
                                <h4>Submission</h4>
                                <hr />
                                <h6><i class="fas fa-check me-3"></i>Submitted</h6>
                                <div className="time">
                                    <p>July 2: 2020 at 1:30 pm</p>
                                </div>
                                <div className="link">
                                    <a href="#">Submissoin Details</a> <br />
                                    <a href="#">View The Original Page</a>
                                </div>
                                <div className="grade my-3">
                                    <h6>Grade 20 <span>(20 points possible)</span></h6>
                                    <h6>Graded Anonymously: no</h6>
                                </div>
                                <div className="comment my-3">
                                    <h6>Comments:</h6>
                                    <p>No Comments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentContent;