/*import React from 'react'
const Shop=()=>{
    return (
        <div>
            
        </div>
    )
}
export default */ 

import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup=()=>{
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>
                    SignUp
                </h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='Your Name'/>
                    <input type="email" placeholder='Email Address'/>
                    <input type="password" placeholder='Password' />
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Already Have An Account? <span> Login here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id=''/>
                    <p>By continuing I Agree to Terms&Conditions of privacy policy</p>
                </div>
            </div>
            
        </div>
    )
}
export default LoginSignup