import React from 'react';
import './UserPanel.css'
import profileImg from '../img/profile.png'
import { Link } from 'react-router-dom';


const UserPanel = () => {
    return (
        <div className="col-lg-3 col-md-9 bg-dark p-5">
            <div className="user-profile text-light">
                <div className="img">
                    <img src={profileImg} className='img-fluid' alt="" />
                </div>
                <h4>Md Emon Mahdi </h4>
                <div className="dashboard-item">
                    <ul>
                        <li> 
                            <i className="fas fa-book-open"></i>  
                            <Link to='/mycourses'>My Courses</Link>
                            </li> 
                        <li> 
                            <i class="fas fa-baseball-ball"></i> 
                            <Link to='/assignmentcontent'>Assignment</Link>
                        </li>
                        <li>
                            <a href="#"><i class="fas fa-user"></i> My Profile</a> 
                        </li>
                        <li>
                            <a href="#"><i class="fas fa-bookmark"></i> Grades</a> 
                        </li>
                        <li>
                            <a href="#"><i class="fas fa-power-off"></i> Logout</a> 
                        </li>
                        <li> 
                             <Link to='/coursedetails'>Course Details</Link> 
                        </li>
                        <li> 
                             <Link to='/assignmentcontent'>Assignment</Link> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
                     
                    //  
                  
    );
};

export default UserPanel;