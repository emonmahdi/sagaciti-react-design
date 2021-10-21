import React from 'react';
import './SignIn.css'


const SignIn = () => {
    return (
        <div>
             <div className='mt-5'>
                 <form className='w-50 signForm p-5 border mx-auto '>
                     <h3 className='fw-bold mb-5'>Sign In</h3>
                     <label className='fw-bold mb-2' htmlFor="">Email: </label>
                     <br />
                     <input type="text" className='form-control' placeholder='Email' />
                     <br />
                     <label className='fw-bold mb-2' htmlFor="">Password: </label>
                     <br />
                     <input type="password" className='form-control' placeholder='password' />
                     <br />
                     <div className='d-flex justify-content-between align-items-center'>
                        <div className='text-start'>
                            <input className='me-2' type="checkbox" />Remember Me
                        </div> 
                        <div>
                            <a href="#">Forgot Password</a>
                        </div>
                     </div>
                     <div className="signbtn">
                         <button className='btn btn-primary w-100 my-4'>Sign In</button>
                     </div>
                    <p>Or</p>
                    <div>
                        <button className='btn btn-warning w-100 my-4'> <i class="fab fa-google me-2 text-primary"></i> Login With Google</button>
                    </div>
                 </form>
             </div>
        </div>
    );
};

export default SignIn;