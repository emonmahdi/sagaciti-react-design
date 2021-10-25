import React from 'react';
import { Link } from 'react-router-dom';
import courseImg from './course-img.jpg'
import './UserContent.css'

const UserContent = () => {
    return (
        <div className="col-lg-9 col-md-9  bg-light p-5 text-start ">
            <h4 className='mb-4'>My Courses</h4>
            <div className="row">
                <div className="col-lg-4">
                    <div className="single-card-course text-start"> 
                       <div className="course-img">
                            <img src={courseImg} className='img-fluid' alt="" />
                        </div>
                        <div className="all-item-card p-3">
                        <h4> 
                            <Link to='/coursedetails'>React JS</Link>
                        </h4>
                        
                        <div className="rating">
                            <i class="far fa-star text-warning me-1"></i>
                            <i class="far fa-star text-warning me-1"></i>
                            <i class="far fa-star text-warning me-1"></i>
                            <i class="far fa-star text-warning me-1"></i>
                            <i class="far fa-star text-warning me-3"></i>
                            <span>5.0</span>
                        </div>
                        <div className="process my-3">
                            <p>0.00% <span>Complete</span></p>
                            <hr className='hr' />
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserContent;