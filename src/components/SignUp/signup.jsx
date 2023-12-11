import React, { useState } from 'react'
import './signup.css'

import user_icon from '..'
const SignUp =()=>{

    const [action,setAction] = useState("SIgn Up");
    return(
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Log-In"? <div></div>:<div className="input">
                    <img src="public/profile_3135715.png" alt=""/>
                    <input type='text' placeholder='Name'/>
                </div>}
                
                <div className="input">
                    <img src='public/mail_646135.png' alt=''/>
                    <input type='email' placeholder='Email Id'/>
                </div>
                <div className="input">
                    <img src='public/password_159478.png' alt=''/>
                    <input type='password' placeholder='Password'/>
                </div>
            </div>
            {action ==="Sign-Up"?<div></div>:<div className="forgot-password">Forgot Password?<span>Click Here!</span></div>}
            
            <div className="submit-container">
                <div className={action==="Log-In"?"submit gray":"submit"} onClick={()=>{setAction("Sign-Up")}}>Sign-Up</div>
                <div className={action==="Sign-Up"?"submit gray":"submit"} onClick={()=>{setAction("Log-In")}}>Log-In</div>
            </div>
        </div>
    )
}
export default SignUp