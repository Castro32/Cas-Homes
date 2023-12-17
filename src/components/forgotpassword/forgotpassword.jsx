import React, {useState} from 'react'
import './forgotpassword.css'

const Forgotpassword =()=>{
    return(
        <div className="container">
            <div className="header">
                <div className="text">
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <img src='./mail_646135.png' alt='email'/>
                    <input type='email' placeholder='example@gmail.com'/>
                </div>
                <div className="inputs">
                    <img src='./password_159478.png' alt='password'/>
                    <input type='password' placeholder='Enter new password'/>
                </div>
                <div className="inputs">
                    <img src='./password_159478.png' alt='password'/>
                    <input type='password' placeholder='Confirm new password'/>
                </div>
            </div>
        </div>
    )
}
export default Forgotpassword