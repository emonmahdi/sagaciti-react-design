import React from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
             <div className='mt-5'>
                 <form className='w-50 signForm p-5 border mx-auto '>
                     <h3 className='fw-bold mb-5'>Sign Up</h3>
                     <div className='row mb-3 box'>
                        <div className="col-lg-6 box">
                            <label className='fw-bold mb-2'>First Name </label>
                            <input type="text" className='form-control' placeholder='First' />
                        </div>
                        <div className="col-lg-6 box">
                            <label className='fw-bold mb-2'>Last Name </label>
                            <input type="text" className='form-control' placeholder='Last Name' />
                        </div>
                     </div>
                     <div className='row mb-3 box'>
                        <div className="col-lg-6 box">
                            <label className='fw-bold mb-2' htmlFor="">Email </label>
                            <input type="email" className='form-control' placeholder='Email' />
                        </div>
                        <div className="col-lg-6 box">
                            <label className='fw-bold mb-2' htmlFor="">Mobile Number </label>
                            <input type="text" className='form-control' placeholder='Mobile Number' />
                        </div>
                     </div>
                     <div className='row mb-3 box'>
                        <div className="col-lg-6 box">
                            <label className='fw-bold mb-2' htmlFor="">Password</label>
                             <br />
                             <input type="password" className='form-control' placeholder='password' />
                        </div> 
                        <div className="col-lg-6 box">
                            <label className='fw-bold mb-2' htmlFor="">Confirm Password</label>
                             <br />
                             <input type="password" className='form-control' placeholder='password' />
                        </div>
                     </div> 
                     <br /> 
                     <div className='text-start'>
                        <input className='me-2' type="checkbox" />Remember Me
                    </div> 
                     <div className="signbtn">
                         <button className='btn btn-primary w-100 my-4'>Sign Up</button>
                     </div> 
                     <p> <i className='fas fa-user me-2'></i> Already Have An Account? <Link to='/signin'>  Go For Login </Link></p>
                 </form>
             </div>
        </div>
    );
};

export default SignUp;